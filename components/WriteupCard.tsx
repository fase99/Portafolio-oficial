import Link from "next/link";
import DifficultyBadge from "./DifficultyBadge";
import ScrambleText from "./ScrambleText";
import type { WriteupMeta } from "@/lib/writeup-types";

export default function WriteupCard({ writeup }: { writeup: WriteupMeta }) {
  return (
    <Link href={`/writeups/${writeup.slug}`} className="entry group h-full" data-accent="wu" data-scramble-scope>
      <div className="flex items-center justify-between gap-3">
        <span className="label-mono">
          {writeup.platform} · {writeup.os}
        </span>
        <DifficultyBadge difficulty={writeup.difficulty} />
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-tight">
          <ScrambleText text={writeup.title} />
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{writeup.summary}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {writeup.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      <span className="entry-cta text-sm">
        Leer writeup <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
