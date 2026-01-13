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
    <main className="min-h-screen bg-gradient-cover" style={{ padding: '2rem' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <Link href="/writeups" className="text-lg hover:text-emerald-300 inline-block mb-6">&#8592; Volver a writeups</Link>
        
        {/* Header Info */}
        <div className="panel mb-6" style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              DockerLabs
            </span>
            <span className="text-xs px-2 py-1 rounded border text-green-400 border-green-400/30 bg-green-500/10">
              Fácil
            </span>
          </div>
          <h1 className="neon text-3xl mb-2">Winterfell</h1>
          <p style={{ color: 'var(--muted)' }}>Máquina vulnerable - CTF de seguridad informática</p>
        </div>

        {/* Writeup Content */}
        <article 
          className="panel markdown" 
          style={{ 
            padding: '2rem', 
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)'
          }} 
          dangerouslySetInnerHTML={{ __html: clean }} 
        />
      </div>
    </main>
  );
}
