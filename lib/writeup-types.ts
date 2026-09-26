/* Shared writeup types. Safe to import from client components (no fs). */

export type Difficulty = "Fácil" | "Medio" | "Difícil";

export type WriteupMeta = {
  slug: string;
  title: string;
  platform: string;
  os: string;
  difficulty: Difficulty;
  date: string;
  target: string;
  summary: string;
  tools: string[];
  techniques: string[];
  tags: string[];
  attackPath: string[];
};

export type TocItem = { id: string; text: string };

export type Writeup = WriteupMeta & { html: string; toc: TocItem[] };
