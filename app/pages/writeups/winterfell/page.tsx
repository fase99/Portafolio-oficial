import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function simpleMarkdownToHtml(md: string) {
  // Very small converter: headings, code blocks, images, paragraphs and lists
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/```([\s\S]*?)```/gim, function(_, code) {
      const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return '<pre><code>' + escaped + '</code></pre>';
    })
    .replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" style="max-width:100%;height:auto"/>')
    .replace(/\n\n+/gim, '</p><p>')
    .replace(/\n/gim, '<br/>');

  // Wrap with paragraph tags where appropriate
  html = '<p>' + html + '</p>';
  // Clean empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  // Fix paragraph around block elements
  html = html.replace(/<p>(\s*)(<(h1|h2|h3|pre|img)[\s\S]*?>)/gim, '$2');
  html = html.replace(/<(\/h1|\/h2|\/h3|\/pre)>(\s*)<\/p>/gim, '</$1>');

  return html;
}

export default function WinterfellPage() {
  const mdPath = path.join(process.cwd(), 'writeups', 'Winterfell(Dockerlabs).md');
  let md = '';
  try {
    md = fs.readFileSync(mdPath, 'utf8');
  } catch (err) {
    md = '# Error\nNo se pudo leer el writeup.';
  }

  const content = simpleMarkdownToHtml(md);

  return (
    <main style={{ padding: '2rem' }}>
      <Link href="/writeups" style={{ color: 'var(--muted)', textDecoration: 'none' }}>&#8592; Volver a writeups</Link>
  <article className="panel markdown" style={{ maxWidth: 980, margin: '1rem auto', padding: '1rem' }} dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
