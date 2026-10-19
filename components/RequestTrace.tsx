"use client";

import { useEffect, useState } from "react";

/*
  Hero widget: a request travelling through every layer of an app.
  It auto-advances layer by layer; hovering or focusing pauses it and clicking a layer jumps to it.
*/

const layers = [
  {
    name: "Interfaz",
    tech: "React · Next.js · Angular · Tailwind",
    log: "→ GET /proyectos",
    note: "render",
  },
  {
    name: "API",
    tech: "Node.js · NestJS · Express · Flask",
    log: "→ GET /api/v1/projects",
    note: "auth ok",
  },
  {
    name: "Datos",
    tech: "MongoDB · PostgreSQL · Elasticsearch",
    log: "→ projects.find({ featured: true })",
    note: "4 docs",
  },
  {
    name: "Infra",
    tech: "Docker · Google Cloud · Pub/Sub",
    log: "✓ api-1 · gcp · healthy",
    note: "up",
  },
];

const RESPONSE = layers.length; // last step: the response comes back
const STEP_MS = 1500;

export default function RequestTrace() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) {
      setReduced(true);
      setStep(RESPONSE);
    }
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % (RESPONSE + 1)), STEP_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const done = step === RESPONSE;

  return (
    <div
      className="trace"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="trace-bar">
        <span className="flex items-center gap-2 font-mono text-[0.72rem] text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          trace · una petición, todas las capas
        </span>
        <span
          className={`font-mono text-[0.72rem] transition-colors ${done ? "text-[var(--diff-easy)]" : "text-muted"}`}
          aria-live="polite"
        >
          {done ? "200 OK · 38ms" : "pending…"}
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <div className="trace-shield relative p-1.5">
          <span className="trace-spine" aria-hidden />
          <ol>
            {layers.map((layer, i) => {
              const active = step === i || done;
              return (
                <li key={layer.name}>
                  <button
                    type="button"
                    className="trace-layer"
                    data-active={active}
                    aria-pressed={step === i}
                    onClick={() => setStep(i)}
                  >
                    <span className="trace-node">{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0">
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold tracking-tight">{layer.name}</span>
                        <span
                          className={`font-mono text-[0.68rem] transition-opacity ${
                            step >= i ? "text-accent opacity-100" : "opacity-0"
                          }`}
                        >
                          {layer.note}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate font-mono text-[0.72rem] text-muted">{layer.tech}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="px-3 pb-1.5 pt-1 text-right font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[var(--diff-easy)]">
            seguridad en cada capa
          </p>
        </div>

        <pre
          className="mt-3 overflow-hidden rounded-[10px] bg-[#0b0c0b] p-4 font-mono text-[0.72rem] leading-[1.8] text-[#c9d1cb]"
          aria-label="Registro de la petición"
        >
          {layers.map((layer, i) => (
            <span key={layer.name} className={`block truncate transition-opacity duration-300 ${step >= i ? "opacity-100" : "opacity-25"}`}>
              {layer.log}
            </span>
          ))}
          <span className={`block transition-opacity duration-300 ${done ? "text-[#5df093] opacity-100" : "opacity-25"}`}>
            ← 200 OK · application/json
          </span>
        </pre>
      </div>
    </div>
  );
}
