import CoverParticles from "@/components/cover-particles";
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import TerminalMock from "@/components/TerminalMock";
import { socialNetworks } from "@/data";

export const runtime = 'edge';

const SAMPLE_PROJECTS = [
  { title: 'Ver Portafolio', description: 'Echa una mirada a mi experiencia laboral y alguno de mis proyectos desarrollados.💣⚔️', href: '/pages/port' },
  
  { title: 'Writeups de CTFs', description: 'Echa una mirada del procedimiento utilizado para resolver máquinas vulnerables de distintas plataformas.☠️💻', href: '/pages/writeups' },
];

export default function Home() {
  return (
    <main>
      
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        <CoverParticles/>
        <div className="w-full" style={{  }}>
          <section className="panel  self-center" style={{ maxWidth: 980, margin: '0 auto' }}>
            <Header title="Felipe — Ciberseguridad y Desarrollo de Software" />

            <p style={{ marginTop: '0.8rem', color: 'var(--muted)' }}>
              Hola, soy Felipe, un entusiasta de la ciberseguridad y el hacking ético. Me apasiona explorar las vulnerabilidades de los sistemas y compartir mis conocimientos a través de write-ups detallados. En este espacio, encontrarás una colección de mis proyectos realizados y write-ups de CTFs que he resuelto.
            </p>

            <div style={{ marginTop: '1.2rem' }}>
              <ProjectsGrid projects={SAMPLE_PROJECTS} />
            </div>

            <div style={{ marginTop: '1.4rem' }}>
              <TerminalMock />
            </div>
            <div style={{ marginTop: '1.4rem', color: 'var(--muted)', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>

              {socialNetworks.map((network) => (
                <a key={network.id} href={network.src} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', textDecoration: 'none', color: 'var(--muted)' }}>
                  {network.logo}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
