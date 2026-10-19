type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  /** Two-digit section number shown before the eyebrow. */
  index?: string;
  as?: "h1" | "h2";
  size?: "lg" | "md";
  id?: string;
  description?: React.ReactNode;
  className?: string;
};

/** Section / page title: numbered mono eyebrow, then a display title. */
export default function SectionHeading({
  eyebrow,
  title,
  index,
  as: Tag = "h2",
  size = "lg",
  id,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`sh ${className}`} data-size={size}>
      <p className="sh-eyebrow">
        {index && <span className="sh-index">{index}</span>}
        <span>{eyebrow}</span>
        <span className="sh-rule" aria-hidden />
      </p>
      <Tag id={id} className="sh-title">
        {title}
      </Tag>
      {description && <p className="sh-desc">{description}</p>}
    </header>
  );
}
