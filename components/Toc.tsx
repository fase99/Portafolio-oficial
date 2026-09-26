import type { TocItem } from "@/lib/writeup-types";

export default function Toc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Índice" className="sticky top-20">
      <p className="label-mono mb-3">Contenido</p>
      <ul className="space-y-1 border-l border-line text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="-ml-px block border-l border-transparent py-1 pl-4 text-muted transition-colors hover:border-wu hover:text-ink"
            >
              <span className="mr-2 font-mono text-xs opacity-60">{String(i + 1).padStart(2, "0")}</span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
