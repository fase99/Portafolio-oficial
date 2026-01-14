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
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
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
  { title: 'GeoRuta Inmobiliaria', 
    description: 'Sistema avanzado de georuteo que redefine la planificación de visitas inmobiliarias. El objetivo no es solo encontrar la ruta más corta, sino la más "resiliente": aquella que garantiza seguridad y predictibilidad frente a amenazas urbanas. La plataforma permite a los agentes visualizar propiedades, filtrar por métricas avanzadas (calidad de colegios cercanos, plusvalía) y simular escenarios de crisis (cierres viales o accidentes) para evaluar la robustez de sus rutas.', 
    imageURL: "GeoRuta.png",
    link: 'https://github.com/fase99/GeoRuta-Inmobiliaria',
    technologies: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Leaflet', logo: 'https://www.svgrepo.com/show/353991/leaflet.svg' }
    ]
  },
  { title: 'Virtual Fit - Interfaz GUI Profesional / Proyecto de Arquitectura de Software - Arquitectura SOA', 
    description: 'Resumen del Proyecto Este proyecto aborda el desafío de administrar una arquitectura compleja de microservicios para un e-commerce. En lugar de depender de múltiples terminales y comandos manuales, desarrollé una GUI centralizada que actúa como orquestador del sistema. La aplicación permite iniciar, detener y supervisar servicios críticos (como el motor de pagos, gestión de puntos y carrito de compras) desde una interfaz unificada y reactiva.', 
    imageURL: "VirtualFit.png",
    link: 'https://github.com/fase99/ASAI-VirtualFit',
    technologies: [

      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Socket.IO', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
 
      { name: 'Microservices / SOA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },

      { name: 'API REST', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
      { name: 'Vanilla JavaScript (ES6+)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'CSS3 (Grid & Flexbox)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'HTML5 Semantic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ]
  },
];


//const PRESENTATION = ""

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="relative w-full py-6 md:py-8 px-4 md:px-6">
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
