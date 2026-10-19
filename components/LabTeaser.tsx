import Link from "next/link";
import DifficultyBadge from "./DifficultyBadge";
import InterceptConsole from "./InterceptConsole";
import type { WriteupMeta } from "@/lib/writeup-types";

/** Dark "security lab" band on the home page: latest writeups plus a tiny decoding challenge. */
export default function LabTeaser({ writeups }: { writeups: WriteupMeta[] }) {
  return (
    <section className="lab border-y border-line py-20 md:py-28" aria-labelledby="lab-title">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="sh-eyebrow">
            <span className="sh-index">05</span>
            <span>Security Lab</span>
            <span className="sh-rule" aria-hidden />
          </p>
          <h2 id="lab-title" className="sh-title">
            Máquinas vulnerables y CTFs
          </h2>
          <p className="sh-desc">
            Resoluciones documentadas paso a paso: reconocimiento, enumeración, explotación y escalada de privilegios.
          </p>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            {writeups.slice(0, 3).map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/writeups/${w.slug}`}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
                >
                  <span className="min-w-0">
                    <span className="font-mono text-sm">
                      <span className="text-accent">$</span> ./{w.title.toLowerCase()}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">
                      {w.platform} · {w.os} · {w.techniques.slice(0, 2).join(", ")}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <DifficultyBadge difficulty={w.difficulty} />
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/writeups" className="link-arrow mt-8">
            Entrar al Security Lab <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex flex-col justify-center">
          <p className="label-mono mb-3">Mini reto · descifra el mensaje</p>
          <InterceptConsole />
        </div>
      </div>
    </section>
  );
}
