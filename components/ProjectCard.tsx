import ScrambleText from "./ScrambleText";
import StackChips from "./StackChips";
import type { Project } from "@/content/projects";

const linkClass =
  "rounded-md border border-line-strong px-3 py-1.5 text-sm text-ink transition-colors hover:border-proj hover:text-proj";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, summary, image, stack, links } = project;

  return (
    <article className="entry !gap-0 !p-0 overflow-hidden" data-accent="proj" data-scramble-scope>
      <div className="aspect-video overflow-hidden border-b border-line bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`Captura de ${title}`} className="h-full w-full object-cover object-top" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            <ScrambleText text={title} />
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/90">{tagline}</p>
          {summary && <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>}
        </div>

        <div className="flex-1">
          <StackChips stack={stack} />
        </div>

        <div className="flex flex-wrap gap-2 border-t border-line pt-4">
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Código ↗{"\uFE0E"}
            </a>
          )}
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Demo ↗{"\uFE0E"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
