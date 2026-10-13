"use client";

import { useEffect, useRef, useState } from "react";

type ScrambleTextProps = {
  text: string;
  /** Classes applied to the wrapper (layout). */
  className?: string;
  /** Classes applied to the visible text (needed for gradient text). */
  textClassName?: string;
  /** Duration of the hover emphasis in ms. */
  duration?: number;
};

/**
 * Text with a subtle hover emphasis that never replaces the rendered
 * characters, so the surrounding layout cannot shift or overlap.
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
  duration = 350,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scope = el.closest<HTMLElement>("[data-scramble-scope]") ?? el;

    const run = () => {
      setActive(true);
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setActive(false);
        timer.current = null;
      }, duration);
    };

    scope.addEventListener("mouseenter", run);
    scope.addEventListener("focusin", run);
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
      scope.removeEventListener("mouseenter", run);
      scope.removeEventListener("focusin", run);
    };
  }, [duration]);

  return (
    <span ref={ref} className={`relative inline-block max-w-full ${className}`}>
      <span
        className={`${textClassName} transition-[filter] duration-300 ${
          active ? "brightness-125" : ""
        }`}
      >
        {text}
      </span>
    </span>
  );
}
