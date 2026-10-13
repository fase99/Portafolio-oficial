import ScrambleText from "./ScrambleText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Two-digit section number shown before the eyebrow. */
  index?: string;
  accent?: "proj" | "wu";
  as?: "h1" | "h2";
  size?: "lg" | "md";
  id?: string;
  description?: string;
  className?: string;
};

/** Section / page title: numbered eyebrow with a short accent rule, then the title. */
export default function SectionHeading({
  eyebrow,
  title,
  index,
  accent = "proj",
  as: Tag = "h2",
  size = "lg",
  id,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`sh ${className}`} data-accent={accent} data-size={size}>
      <p className="sh-eyebrow">
        {index && <span className="sh-index">{index}</span>}
        <span>{eyebrow}</span>
        <span className="sh-rule" aria-hidden />
      </p>
      <Tag id={id} className="sh-title">
        <ScrambleText text={title} />
      </Tag>
      {description && <p className="sh-desc">{description}</p>}
    </header>
  );
}
