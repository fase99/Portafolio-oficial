import Link from "next/link";

export const runtime = 'edge';

export default function WriteupCard({ title, excerpt, href }: { title: string; excerpt?: string; href: string }) {
  return (

    <div  style={{ marginTop: '0.6rem' }}>
    <Link href={href} className="no-underline hover:underline" style={{ color: 'inherit' }}>
      <article className="panel" style={{ padding: '0.8rem' }}>
        <h3 className="neon">{title}</h3>
        {excerpt && <p style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>{excerpt}</p>}
      </article>
    </Link>
    </div>
  );
}
