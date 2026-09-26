import DifficultyBadge from "./DifficultyBadge";
import type { WriteupMeta } from "@/lib/writeup-types";

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MachineHeader({ writeup }: { writeup: WriteupMeta }) {
  const facts: Array<[string, React.ReactNode]> = [
    ["Plataforma", writeup.platform],
    ["Sistema", writeup.os],
    ["Dificultad", <DifficultyBadge key="d" difficulty={writeup.difficulty} />],
    ["Fecha", writeup.date],
    ["IP objetivo", <span key="ip" className="font-mono">{writeup.target}</span>],
  ];

  return (
    <div className="surface overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-[var(--wu)] to-[var(--wu-2)]" />

      <div className="p-6 md:p-8">
        <p className="label-mono" style={{ color: "var(--wu)" }}>
          Writeup · {writeup.platform}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{writeup.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{writeup.summary}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="label-mono">{label}</dt>
              <dd className="mt-1 text-sm">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-5 border-t border-line pt-5 md:grid-cols-2">
          <div>
            <p className="label-mono mb-2">Herramientas</p>
            <ChipList items={writeup.tools} />
          </div>
          <div>
            <p className="label-mono mb-2">Técnicas</p>
            <ChipList items={writeup.techniques} />
          </div>
        </div>

        {writeup.attackPath.length > 0 && (
          <div className="mt-6 border-t border-line pt-5">
            <p className="label-mono mb-3">Ruta de ataque</p>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
              {writeup.attackPath.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-md border border-line-strong bg-surface-2 px-2.5 py-1">
                    <span className="mr-2 font-mono text-xs text-wu">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </span>
                  {i < writeup.attackPath.length - 1 && (
                    <span aria-hidden className="text-muted">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
