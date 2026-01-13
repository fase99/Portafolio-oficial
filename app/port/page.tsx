import CardExp from "@/components/CardExp";

import Header from "@/components/Header";
import Link from 'next/link';

export const runtime = 'edge';

const SAMPLE_PROJECTS = [
  
  
  { title: 'Desarrollo Fullstack - MuscleRPG', 
    description: 'Sistema de Ruta Óptima de ejercicios en el GYM para maximizar la ganancia muscular. Arquitectura cliente/servidor con Angular y Nestjs.', 
    imageURL: "musclerpg.png",
    link: 'https://github.com/fase99/Muscle-RPG',
    technologies: [
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
      { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ]
   },

  { title: 'Desarrollo Frontend - +Arq', 
    description: 'Desarrollo de página web estática para cliente de consultoría de Arquitectura llamado +arq.', 
    imageURL: "masarq.png",
    link: 'https://masarq.cl/',
    technologies: [
      { name: 'Astro', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
];


//const PRESENTATION = ""

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="relative w-full py-6 md:py-8 px-4 md:px-6">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm md:text-lg mb-8 hover:text-emerald-300 transition-colors"
        >
          &#8592; <span>Volver</span>
        </Link>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12 md:mb-16">
            {/* Profile Header - Responsive Flex */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10 md:mb-14">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src="/sasuke-avatar.jpg" 
                    alt="Avatar" 
                    className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-2 border-emerald-500/30 shadow-lg hover:border-emerald-400/60 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/10 animate-pulse"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <Header title="fase99$" />
                <h2 className="text-base md:text-xl text-emerald-200/80 mt-2 md:mt-3 font-light tracking-wide">
                  Software Development | Secure Infrastructure
                </h2>
                <p className="text-sm md:text-base mt-4" style={{ color: 'var(--muted)' }}>
                  Desarrollador fullstack especializado en seguridad, backend y arquitecturas escalables. 
                  Apasionado por CTFs y pentesting. Aquí puedes ver algunos de mis proyectos personales.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="neon">Proyectos Destacados</span>
              </h2>
              <div className="w-100 h-3 bg-gradient-to-r from-emerald-400 to-transparent mt-3 rounded-full"></div>
            </div>

            <CardExp projects={SAMPLE_PROJECTS} />
          </section>
        </div>
      </div>
    </main>
  );
}
