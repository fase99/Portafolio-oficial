
export default function Writeups() {
  return (
    <main>
      <button>
        <a href="/" style={{ color: 'var(--muted)', textDecoration: 'none', position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>&#8592; Volver</a>
      </button>
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        <div className="w-full" style={{  }}>
          <h1 className="neon" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Writeups</h1>
          <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: '2rem' }}>Aquí encontrarás algunos de mis writeups de CTFs y desafíos de seguridad informática que he completado.</p>
          <section className="panel  self-center" style={{ maxWidth: 980, margin: '0 auto', padding: '1rem' }}>
            <p style={{ color: 'var(--muted)', textAlign: 'center' }}>Próximamente...</p>
          </section>   
        </div>
        </div>
    </main>
  );
}