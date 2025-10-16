import CardExp from "@/components/CardExp";

import Header from "@/components/Header";
import Skills from "@/components/skills";



const SAMPLE_PROJECTS = [
  { title: 'Práctica profesional - Contraloría General de la República', description: 'Realicé escaneos a todos los segmentos de red de la institución para identificar vulnerabilidades en sistemas, equipos y configuraciones.  Identificación de vulnerabilidades de versión de las bases de datos. Además, elaboré informes de pentesting con matrices de riesgo, evaluando probabilidad e impacto para orientar la mitigación de hallazgos.', fecha: 'Dic/2024 - Feb/2025' },
  
  { title: 'Desarrollo Frontend - +Arq', description: 'Desarrollé una página web para cliente de consultoría de Arquitectura +arq. Tecnologías usadas: Astro, Javascript, Typescript y CSS.' },
  { title: 'Desarrollo Fullstack - Proyecto personal', description: 'Desarrollé una aplicación web para la gestión de proyectos y tareas, utilizando React para el frontend y Node.js con Express para el backend. Implementé autenticación de usuarios y almacenamiento de datos en MongoDB.', fecha: 'Mar/2023 - Jun/2023' },
];

export default function Home() {
  return (
    <main>
      <button>
        <a href="/" style={{ color: 'var(--muted)', textDecoration: 'none', position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>&#8592; Volver</a>
      </button>
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        
        <div className="w-full" style={{  }}>
          <section className="panel  self-center" style={{ maxWidth: 980, margin: '0 auto' }}>
            <Header title="FELIPE ALEJANDRO SILVA ESCOBAR" />

            <p style={{ marginTop: '0.8rem', color: 'var(--muted)' }}>
              Estudiante de último año de Ingeniería Civil en Informática y Telecomunicaciones. Realicé mi práctica profesional en
Ciberseguridad en la Contraloría General de la República. Estoy en busca de un proyecto de titulación, para aplicar mis
habilidades analíticas para resolver problemas y contribuir a soluciones robustas y eficientes en áreas como ciberseguridad,
desarrollo de software y sistemas
            </p>


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
