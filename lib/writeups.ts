import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { Difficulty, TocItem, Writeup, WriteupMeta } from "./writeup-types";

export type { Difficulty, TocItem, Writeup, WriteupMeta };

const WRITEUPS_DIR = path.join(process.cwd(), "content", "writeups");

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

function toMeta(slug: string, data: Record<string, unknown>): WriteupMeta {
  return {
    slug,
    title: String(data.title),
    platform: String(data.platform),
    os: String(data.os ?? ""),
    difficulty: data.difficulty as Difficulty,
    date: String(data.date),
    target: String(data.target ?? ""),
    summary: String(data.summary ?? ""),
    tools: (data.tools as string[]) ?? [],
    techniques: (data.techniques as string[]) ?? [],
    tags: (data.tags as string[]) ?? [],
    attackPath: (data.attackPath as string[]) ?? [],
  };
}

const SHELL_LANGS = new Set(["bash", "sh", "shell", "zsh"]);

/** Wraps every code block in a terminal window with a title bar. Runs after sanitizing. */
function wrapTerminals(html: string): string {
  return html
    .replace(/<pre><code(?: class="language-([\w-]+)")?>/g, (_m, lang?: string) => {
      const title = !lang || SHELL_LANGS.has(lang) ? "terminal" : lang;
      const cls = lang ? ` class="language-${lang}"` : "";
      return (
        `<div class="terminal"><div class="terminal-bar">` +
        `<span class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span>` +
        `<span class="terminal-title">${title}</span></div><pre><code${cls}>`
      );
    })
    .replace(/<\/code><\/pre>/g, "</code></pre></div>");
}

function slugs(): string[] {
  return fs
    .readdirSync(WRITEUPS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getWriteupSlugs(): string[] {
  return slugs();
}

export function getAllWriteups(): WriteupMeta[] {
  return slugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(WRITEUPS_DIR, `${slug}.md`), "utf8");
      return toMeta(slug, matter(raw).data);
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getWriteup(slug: string): Writeup | null {
  const file = path.join(WRITEUPS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));

  const toc: TocItem[] = [];
  const rendered = marked.parse(content, { mangle: false, headerIds: false }) as string;
  const withIds = rendered.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_match, level: string, inner: string) => {
      const text = stripTags(inner);
      const id = slugify(text);
      if (level === "2") toc.push({ id, text });
      return `<h${level} id="${id}">${inner}</h${level}>`;
    },
  );

  const clean = sanitizeHtml(withIds, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      h2: ["id"],
      h3: ["id"],
      code: ["class"],
      img: ["src", "alt", "title", "loading", "width", "height"],
    },
    allowedClasses: { code: ["language-*"] },
  });

  return { ...toMeta(slug, data), html: wrapTerminals(clean), toc };
}
