import Link from "next/link";

export const runtime = 'edge';

export type ProjectCardProps = {
  title: string;
  description?: string;
  href?: string;
};

export default function ProjectCard({ title, description, href = '#' }: ProjectCardProps) {
  return (
    <Link href={href}>
    <article className="panel terminal" style={{ padding: '1rem' }}>
      <h3 className="neon" style={{ marginBottom: '0.4rem' }}>{title}</h3>
      {description && <p style={{ color: 'var(--muted)' }}>{description}</p>}
      <div style={{ marginTop: '0.6rem' }}>
      </div>

    </article>
    </Link>
  );
}
