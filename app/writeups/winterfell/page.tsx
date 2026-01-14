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
      {/* Animated Background - Professional HD */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-80 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-500/12 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-emerald-500/10 opacity-50"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="%23fff" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
        }}></div>
      </div>
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
