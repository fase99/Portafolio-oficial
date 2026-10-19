import Coverage from "./Coverage";
import StackChips from "./StackChips";
import type { Project } from "@/content/projects";

/** Detailed project row for the projects page; image side alternates. */
export default function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const { slug, title, kind, tagline, summary, image, covers, stack, links } = project;
  const flipped = index % 2 === 1;

  return (
    <article
      id={slug}
      className="group grid scroll-mt-24 items-center gap-8 border-t border-line py-14 md:grid-cols-2 md:gap-14"
    >
      <div className={`project-media aspect-[16/10] ${flipped ? "md:order-2" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`Captura de ${title}`} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="label-mono">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> · {kind}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed">{tagline}</p>
          {summary && <p className="mt-3 leading-relaxed text-muted">{summary}</p>}
        </div>

        <Coverage covers={covers} showLabels />

        <StackChips stack={stack} />

        <div className="flex flex-wrap gap-3">
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !text-sm">
              Ver sitio ↗{"︎"}
            </a>
          )}
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 !text-sm">
              Código en GitHub ↗{"︎"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
