import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export default function Winterfell() {
  const mdPath = path.join(process.cwd(), 'writeups', 'Winterfell(Dockerlabs).md');
  let md = '';
  try {
    md = fs.readFileSync(mdPath, 'utf8');
  } catch (err) {
    md = '# Error\nNo se pudo leer el writeup.';
  }

  const raw = marked.parse(md, { mangle: false, headerIds: false });
  const clean = sanitizeHtml(raw, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img', 'h1', 'h2', 'h3' ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title', 'loading', 'width', 'height']
    }
  });

  return (
    <main style={{ padding: '2rem' }}>
      <Link href="/writeups" style={{ color: 'var(--muted)', textDecoration: 'none' }}>&#8592; Volver a writeups</Link>
  <article className="panel markdown" style={{ maxWidth: 980, margin: '1rem auto', padding: '1rem' }} dangerouslySetInnerHTML={{ __html: clean }} />
    </main>
  );
}
