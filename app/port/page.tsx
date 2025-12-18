import CardExp from "@/components/CardExp";

import Header from "@/components/Header";
import Skills from "@/components/skills";
import Link from 'next/link';

export const runtime = 'edge';

const SAMPLE_PROJECTS = [
  
  
  { title: 'Desarrollo Fullstack - MuscleRPG', 
    description: 'Sistema de Ruta Óptima de ejercicios en el GYM para maximizar la ganancia muscular. Arquitectura cliente/servidor con Angular y Nestjs.', 
    imageURL: "musclerpg.png",
    link: 'https://github.com/fase99/Muscle-RPG',
   },

  { title: 'Desarrollo Frontend - +Arq', 
    description: 'Desarrollo de página web estática para cliente de consultoría de Arquitectura llamado +arq.', 
    imageURL: "masarq.png",
    link: 'https://masarq.cl/',
  },
];


const PRESENTATION = ""

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        
        <div className="w-full flex">
          <section className="panel  self-center" style={{ maxWidth: 980, margin: '0 auto' }}>

            <Link href="/" className="text-2xl ml-7 shadow hover:text-emerald-300">&#8592; Volver</Link>
            <div className="flex items-center ml-13 gap-8 mb-8 mt-8  ">

              <img src="/sasuke-avatar.jpg" alt="Avatar" className="w-50 h-50 rounded-full object-cover border-2 border-white/10" />

              <div className="">
                <Header title="fase99$" />
                <h2 className="flex ">Software Development | Secure Infraestructure </h2>
                
              </div>
            </div>

            


            <div className="mt-top-200">
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
