"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "0123456789abcdef#$%&@*+=<>/\\|?";
const STEP_MS = 45;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

type ScrambleTextProps = {
  text: string;
  /** Classes applied to the wrapper (layout). */
  className?: string;
  /** Classes applied to the visible text (needed for gradient text). */
  textClassName?: string;
  /** Total duration of the effect in ms. */
  duration?: number;
};

/**
 * Text that "decrypts" on hover: characters are replaced by random glyphs and
 * resolve from left to right until the real text is back.
 *
 * The effect is triggered by hovering (or focusing inside) the closest ancestor
 * marked with `data-scramble-scope`, or the text itself if there is none. That
 * lets a whole card trigger the title inside it.
 *
 * The real text always stays in the DOM (it only becomes transparent while the
 * effect runs), so layout does not jump and screen readers read the real text.
 */
export default function ScrambleText({
  text,
  className = "",
  textClassName = "",
  duration = 500,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [scrambled, setScrambled] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scope = el.closest<HTMLElement>("[data-scramble-scope]") ?? el;
    let frame = 0;
    let running = false;

    const run = () => {
      if (running) return;
      running = true;
      const start = performance.now();
      let last = 0;

      const tick = (now: number) => {
        const progress = (now - start) / duration;
        if (progress >= 1) {
          running = false;
          setScrambled(null);
          return;
        }
        if (now - last >= STEP_MS) {
          last = now;
          const revealed = Math.floor(progress * text.length);
          setScrambled(
            Array.from(text, (ch, i) => (ch === " " || i < revealed ? ch : randomGlyph())).join(""),
          );
        }
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    scope.addEventListener("mouseenter", run);
    scope.addEventListener("focusin", run);
    return () => {
      cancelAnimationFrame(frame);
      scope.removeEventListener("mouseenter", run);
      scope.removeEventListener("focusin", run);
    };
  }, [text, duration]);

  const active = scrambled !== null;

  return (
    <span ref={ref} className={`relative inline-block max-w-full ${className}`}>
      <span className={`${textClassName} ${active ? "opacity-0" : ""}`}>{text}</span>
      {active && (
        <span aria-hidden="true" className={`absolute inset-0 break-words ${textClassName}`}>
          {scrambled}
        </span>
      )}
    </span>
  );
}
