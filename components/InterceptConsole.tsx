"use client";

import { useId, useState, type FormEvent } from "react";

const ANSWER = "hola mundo";
const PAYLOAD = btoa(ANSWER);

type Status = "idle" | "wrong" | "solved";

/** Lowercase, trimmed, without accents and with collapsed spaces, so " Hola  Mundo " also counts. */
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

export default function InterceptConsole() {
  const inputId = useId();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const solved = status === "solved";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (solved) return;

    if (normalize(value) === ANSWER) {
      setStatus("solved");
      return;
    }
    setAttempts((n) => n + 1);
    // Re-trigger the shake animation even on consecutive wrong answers.
    setStatus("idle");
    requestAnimationFrame(() => setStatus("wrong"));
  }

  return (
    <div className="terminal !my-0" data-state={status === "idle" ? undefined : status}>
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-title">intercept · tcp/443</span>
      </div>

      <div className="space-y-4 p-4 font-mono text-[0.8rem] leading-relaxed md:p-5">
        <pre className="overflow-x-auto whitespace-pre-wrap break-all text-muted">
          <span className="text-proj">$</span> <span className="text-ink">tcpdump -A -i eth0 &apos;tcp port 443&apos;</span>
          {"\n"}POST /api/v1/mensaje HTTP/1.1
          {"\n"}X-Encoding: base64
          {"\n"}
          {"\n"}
          {`{ "payload": "`}
          <span className="text-wu">{PAYLOAD}</span>
          {`" }`}
        </pre>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 pt-4">
          <label htmlFor={inputId} className="shrink-0 text-proj">
            decode ›
          </label>
          <input
            id={inputId}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={solved}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="escribe el mensaje…"
            className="min-w-0 flex-1 bg-transparent text-ink placeholder:text-muted/60 focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={solved || value.trim() === ""}
            className="rounded-md border border-white/15 px-3 py-1 text-ink transition-colors hover:border-proj hover:text-proj disabled:cursor-not-allowed disabled:opacity-40"
          >
            Enviar
          </button>
        </form>

        <div aria-live="polite" className="min-h-[1.5rem]">
          {status === "wrong" && (
            <p className="text-[var(--diff-hard)]">✗ Texto incorrecto. Intenta de nuevo.</p>
          )}
          {solved && (
            <p className="text-[var(--diff-easy)]">
              ✓ Mensaje descifrado: <strong>&ldquo;{ANSWER}&rdquo;</strong>. ¡Buen ojo!
            </p>
          )}
        </div>

        {!solved && (
          <div className="text-muted">
            <button
              type="button"
              onClick={() => setShowHint((v) => !v)}
              aria-expanded={showHint}
              className="underline-offset-4 hover:text-ink hover:underline"
            >
              {showHint ? "Ocultar pista" : attempts >= 2 ? "¿Necesitas una pista?" : "Pista"}
            </button>
            {showHint && (
              <p className="mt-2 break-all text-[0.75rem]">
                echo &apos;{PAYLOAD}&apos; | base64 -d
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
