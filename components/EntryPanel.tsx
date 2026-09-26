import Link from "next/link";

type EntryPanelProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: "proj" | "wu";
  href: string;
  cta: string;
  chips: string[];
  children: React.ReactNode;
};

export default function EntryPanel({
  index,
  eyebrow,
  title,
  description,
  accent,
  href,
  cta,
  chips,
  children,
}: EntryPanelProps) {
  return (
    <Link href={href} className="entry group" data-accent={accent}>
      <div>
        <p className="label-mono">
          <span className="entry-num">{index}</span> — {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>

      <div className="flex flex-1 flex-col justify-center">{children}</div>

      <ul className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <li key={chip} className="chip">
            {chip}
          </li>
        ))}
      </ul>

      <span className="entry-cta text-sm">
        {cta} <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
