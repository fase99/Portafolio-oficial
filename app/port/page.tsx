import CardExp from "@/components/CardExp";

import Header from "@/components/Header";
import Skills from "@/components/skills";
import Link from 'next/link';

export const runtime = 'edge';

const SAMPLE_PROJECTS = [
  
  
  { title: 'Desarrollo Fullstack - OlivoSport', description: 'Desarrollé una aplicación web para la gestión de proyectos y tareas de un centro deportivo, utilizando React para el frontend y Node.js con Express para el backend. Implementé autenticación de usuarios y almacenamiento de datos en MongoDB.', fecha: 'Mar/2023 - Jun/2023',
    link: 'https://github.com/fase99/OlivoSport-web',
   },

  { title: 'Desarrollo Frontend - +Arq', description: 'Desarrollé una página web para cliente de consultoría de Arquitectura +arq. Tecnologías usadas: Astro, Javascript, Typescript y CSS.', fecha: 'Jun/2025 - Sep/2025',
    link: 'https://masarq.cl/',
  },
];

export default function Home() {
  return (
    <main>
      <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>&#8592; Volver</Link>
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        
        <div className="w-full ">
          <section className="panel  self-center" style={{ maxWidth: 980, margin: '0 auto' }}>

            <div className="flex items-center gap-8 mb-8 mt-8 justify-center ">

              <img src="/sasuke-avatar.jpg" alt="Avatar" className="w-50 h-50 rounded-full object-cover border-2 border-white/10" />
              <Header title="FELIPE ALEJANDRO SILVA ESCOBAR"  />
              <h2 className="flex ">Software Development | Secure Infraestructure</h2>
              
            </div>

            


            <div style={{ marginTop: '1.2rem' }}>
              <CardExp projects={SAMPLE_PROJECTS} />
            </div>
            <div className="skills" style={{ marginTop: '20px', }}>
              <Header title="Skills"/>
              </div>
              <div>
              <Skills />
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}
