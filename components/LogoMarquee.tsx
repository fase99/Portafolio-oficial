import type { LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";

export type MarqueeItem = {
  name: string;
  /** Brand logo from simple-icons, or a lucide icon for tools without one. */
  icon: SimpleIcon | LucideIcon;
};

const MIN_ITEMS = 10;

// Brand colors that are too dark to read on the navy background fall back to the text color.
function brandColor(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.5 ? "var(--text)" : `#${hex}`;
}

function Logo({ icon }: { icon: MarqueeItem["icon"] }) {
  if ("path" in icon) {
    return (
      <svg viewBox="0 0 24 24" className="marquee-logo" style={{ color: brandColor(icon.hex) }} aria-hidden>
        <path d={icon.path} fill="currentColor" />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="marquee-logo" strokeWidth={1.6} aria-hidden />;
}

export default function LogoMarquee({
  items,
  accent = "proj",
  label,
}: {
  items: MarqueeItem[];
  accent?: "proj" | "wu";
  label: string;
}) {
  // Short lists are repeated so a single track is always wider than the viewport.
  const repeats = Math.ceil(MIN_ITEMS / items.length);
  const loop = Array.from({ length: repeats }, () => items).flat();

  const track = (hidden: boolean) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {loop.map((item, i) => (
        <li key={`${item.name}-${i}`} className="marquee-item" aria-hidden={i >= items.length || undefined}>
          <Logo icon={item.icon} />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      role="group"
      className="marquee"
      data-accent={accent}
      aria-label={label}
      style={{ "--duration": `${loop.length * 4}s` } as React.CSSProperties}
    >
      {track(false)}
      {track(true)}
    </div>
  );
}
