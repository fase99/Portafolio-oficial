import Link from 'next/link';
import WriteupCard from '../../components/WriteupCard';

export default function WriteupsIndex() {
  return (
    <main>
      <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>&#8592; Volver</Link>
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        <div className="w-full">
          <h1 className="neon" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Writeups</h1>
          <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: '2rem' }}>Aquí encontrarás algunos de mis writeups de CTFs y desafíos de seguridad informática que he completado.</p>
          <section className="panel self-center" style={{ maxWidth: 980, margin: '0 auto', padding: '1rem', display: 'grid', gap: '1rem' }}>
            <WriteupCard title="Winterfell (DockerLabs)" excerpt="Reconocimiento, explotación y escalado de privilegios en la máquina vulnerable Winterfell." href="/writeups/winterfell" />
          </section>
        </div>
      </div>
    </main>
  );
}
