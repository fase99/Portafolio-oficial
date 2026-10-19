import Link from "next/link";
import Coverage from "./Coverage";
import type { Project } from "@/content/projects";

/** Compact project card for the home page. */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, kind, tagline, image, covers, slug } = project;

  return (
    <Link href={`/projects#${slug}`} className="group flex flex-col gap-5">
      <div className="project-media aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`Captura de ${title}`} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="label-mono">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> · {kind}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{tagline}</p>
        </div>
        <span
          aria-hidden
          className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong transition-all group-hover:-rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--accent-ink)]"
        >
          →
        </span>
      </div>

      <Coverage covers={covers} showLabels />
    </Link>
  );
}
