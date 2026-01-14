
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import TerminalMock from "@/components/TerminalMock";
import { socialNetworks } from "@/data";
import { marked } from 'marked';

const SAMPLE_PROJECTS = [
  { title: 'Ver Portafolio', description: 'Echa una mirada a mi experiencia laboral y alguno de mis proyectos desarrollados.', href: '/port', emoji: '💼' },
  { title: 'Writeups de CTFs', description: 'Procedimiento y técnicas utilizadas para resolver máquinas vulnerables de distintas plataformas.', href: '/writeups', emoji: '🔓' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
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

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 mt-10">
        <div className="w-full max-w-5xl">

          <section className="text-center mb-16 md:mb-20">
       
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-4">
                <span className="neon">Felipe Silva Escobar</span>
              
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-transparent mx-auto mb-6"></div>
            </div>

        
            <div className="mb-8">
              <p className="text-lg md:text-2xl mb-3" style={{ color: 'var(--muted)' }}>
                Ingeniero Civil en Informática y Telecomunicaciones
              </p>
              <p className="text-sm md:text-lg font-light text-emerald-200/70">
                Ciberseguridad • Arquitecturas Escalables • Desarrollo de Software
              </p>
            </div>

         
            <div className="max-w-2xl mx-auto mb-10">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                Soy un pasionado por las ciencias de la computación, desarrollo fullstack y la ciberseguridad. Actualmente explorando nuevas tecnologías y resolviendo desafíos de seguridad.
              </p>
            </div>

           
           
          </section>

       
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="neon">Destacados</span>
            </h2>
            <ProjectsGrid projects={SAMPLE_PROJECTS} />
          </section>

      
          <section className="mb-16 md:mb-20">
            <div className="max-w-2xl mx-auto">
              <TerminalMock />
            </div>
          </section>

         
          <footer className="flex gap-6 items-center justify-center pt-8 border-t border-white/10">
            {socialNetworks.map((network) => (
              <a 
                key={network.id} 
                href={network.src} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-300 hover:scale-110 hover:text-emerald-400 p-2"
                aria-label="Social link"
              >
                {network.logo}
              </a>
            ))}
          </footer>
        </div>
      </div>
    </main>
  );
}
