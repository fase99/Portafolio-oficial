import CoverParticles from "@/components/cover-particles";
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import TerminalMock from "@/components/TerminalMock";



const SAMPLE_PROJECTS = [
  { title: 'Ver Portafolio', description: 'Echa una mirada a mi experiencia laboral y alguno de mis proyectos desarrollados.💣⚔️', href: '/projects/exploit-playground' },
  
  { title: 'Writeups de CTFs', description: 'Echa una mirada del procedimiento utilizado para resolver máquinas vulnerables de distintas plataformas.🛡️💻', href: '/projects/recon-dashboard' },
];

export default function Home() {
  return (
    <main>
      
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        <CoverParticles/>
        <div className="w-full" style={{  }}>
          <section className="panel  self-center" style={{ maxWidth: 980, margin: '0 auto' }}>
            <Header title="Felipe Alejandro Silva — fase99" />

            <p style={{ marginTop: '0.8rem', color: 'var(--muted)' }}>
              Bienvenido a mi Landingpage!! Aquí puedes encontrar un resumen de mis proyectos realizados.
            </p>

            <div style={{ marginTop: '1.2rem' }}>
              <ProjectsGrid projects={SAMPLE_PROJECTS} />
            </div>

            <div style={{ marginTop: '1.4rem' }}>
              <TerminalMock />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
