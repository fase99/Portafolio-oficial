import type { LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";

export type Tech = {
  name: string;
  /** Brand logo from simple-icons, or a lucide icon for tools without one. */
  icon?: SimpleIcon | LucideIcon;
};

function Logo({ icon }: { icon: NonNullable<Tech["icon"]> }) {
  if ("path" in icon) {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden>
        <path d={icon.path} fill="currentColor" />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="tech-logo" strokeWidth={1.6} aria-hidden />;
}

/** Monochrome tech list; logos take the text color so they work in every theme. */
export default function TechList({ items, className = "" }: { items: Tech[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item.name} className="tech-item flex items-center gap-2 text-sm">
          {item.icon && <Logo icon={item.icon} />}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
