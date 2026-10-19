import Link from "next/link";
import DifficultyBadge from "./DifficultyBadge";
import type { WriteupMeta } from "@/lib/writeup-types";

export default function WriteupCard({ writeup }: { writeup: WriteupMeta }) {
  return (
    <Link href={`/writeups/${writeup.slug}`} className="lab-card group">
      <div className="flex items-center justify-between gap-3">
        <span className="label-mono">
          {writeup.platform} · {writeup.os} · {writeup.date}
        </span>
        <DifficultyBadge difficulty={writeup.difficulty} />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{writeup.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{writeup.summary}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {writeup.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      <span className="inline-flex items-center gap-2 font-mono text-sm text-accent">
        cat writeup.md <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
