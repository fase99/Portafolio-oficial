"use client";

import { useMemo, useState } from "react";
import WriteupCard from "./WriteupCard";
import type { WriteupMeta } from "@/lib/writeup-types";

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="label-mono mr-1">{label}</span>
      {["Todos", ...options].map((option) => {
        const active = (option === "Todos" ? "" : option) === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option === "Todos" ? "" : option)}
            className={`chip cursor-pointer transition-colors ${
              active ? "!border-wu !bg-wu/10 !text-wu" : "hover:border-muted"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default function WriteupList({ writeups }: { writeups: WriteupMeta[] }) {
  const [platform, setPlatform] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const platforms = useMemo(() => [...new Set(writeups.map((w) => w.platform))], [writeups]);
  const difficulties = useMemo(() => [...new Set(writeups.map((w) => w.difficulty))], [writeups]);

  const visible = writeups.filter(
    (w) => (!platform || w.platform === platform) && (!difficulty || w.difficulty === difficulty),
  );

  return (
    <>
      <div className="mb-6 flex flex-col gap-3">
        <FilterGroup label="Plataforma" options={platforms} value={platform} onChange={setPlatform} />
        <FilterGroup label="Dificultad" options={difficulties} value={difficulty} onChange={setDifficulty} />
      </div>

      {visible.length === 0 ? (
        <p className="text-muted">No hay writeups con esos filtros.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {visible.map((writeup) => (
            <WriteupCard key={writeup.slug} writeup={writeup} />
          ))}
        </div>
      )}
    </>
  );
}
