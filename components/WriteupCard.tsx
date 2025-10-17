import Link from "next/link";

export const runtime = 'edge';

export default function WriteupCard({ title, excerpt, href }: { title: string; excerpt?: string; href: string }) {
  return (
    <article className="panel" style={{ padding: '0.8rem' }}>
      <h4 className="neon">{title}</h4>
      {excerpt && <p style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>{excerpt}</p>}
      <div style={{ marginTop: '0.6rem' }}>
        <Link href={href} className="pill">Leer</Link>
      </div>
    </article>
  );
}
