import Link from "next/link";
import Contact from "@/components/Contact";
import LabTeaser from "@/components/LabTeaser";
import Process from "@/components/Process";
import ProjectCard from "@/components/ProjectCard";
import RequestTrace from "@/components/RequestTrace";
import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";
import StackGrid from "@/components/StackGrid";
import { projects } from "@/content/projects";
import { getAllWriteups } from "@/lib/writeups";

const education = [
  { title: "Ingeniería Civil en Informática y Telecomunicaciones", place: "Universidad Diego Portales" },
  { title: "Google Cloud Fundamentals", place: "Google Cloud" },
  { title: "Essential Google Cloud Infrastructure", place: "Google Cloud" },
  { title: "Introduction to Cybersecurity", place: "Cisco" },
  { title: "Ethical Hacker", place: "Cisco" },
];

export default function Home() {
  const writeups = getAllWriteups();

  return (
    <main>
      {/* Hero */}
      <section className="container-x grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 lg:pb-28">
        <div>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1">
              <span className="pulse" aria-hidden />
              Disponible para proyectos y nuevas oportunidades
            </span>
          </p>

          <h1 className="display mt-8 text-[2.9rem] sm:text-6xl lg:text-[4.6rem]">
            Hola, soy <span className="text-accent">Felipe</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Soy Ingeniero Civil en Informática y Telecomunicaciones y{" "}
            <strong className="font-semibold text-ink">desarrollador full stack</strong>. Desarrollo aplicaciones web
            trabajando tanto en el frontend como en el backend, las bases de datos y el despliegue. También me dedico a
            la ciberseguridad y resuelvo máquinas vulnerables.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn-primary">
              Ver proyectos <span aria-hidden>→</span>
            </Link>
            <Link href="/#contacto" className="btn-ghost">
              Hablemos
            </Link>
          </div>
        </div>

        <RequestTrace />
      </section>

      {/* Services */}
      <section id="servicios" className="container-x scroll-mt-24 py-24 md:py-32" aria-labelledby="servicios-title">
        <SectionHeading
          id="servicios-title"
          index="01"
          eyebrow="Servicios"
          title="Qué hago"
          description="Tipos de proyectos en los que puedo trabajar, ya sea desarrollándolos completos o en una parte específica."
          className="mb-12"
        />
        <Services />
      </section>

      {/* Selected work */}
      <section className="container-x" aria-labelledby="trabajo-title">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="trabajo-title"
            index="02"
            eyebrow="Trabajo seleccionado"
            title="Proyectos"
            description="La barra bajo cada proyecto indica qué capas de la aplicación desarrollé."
          />
          <Link href="/projects" className="link-arrow">
            Ver casos en detalle <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="container-x py-24 md:py-32" aria-labelledby="stack-title">
        <SectionHeading
          id="stack-title"
          index="03"
          eyebrow="Stack"
          title="Tecnologías"
          className="mb-12"
        />
        <StackGrid />
      </section>

      {/* Process */}
      <section className="container-x pb-24 md:pb-32" aria-labelledby="proceso-title">
        <SectionHeading
          id="proceso-title"
          index="04"
          eyebrow="Proceso"
          title="Cómo trabajo"
          className="mb-12"
        />
        <Process />
      </section>

      <LabTeaser writeups={writeups} />

      {/* Education */}
      <section className="container-x pt-24 md:pt-32" aria-labelledby="formacion-title">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
          <SectionHeading id="formacion-title" index="06" eyebrow="Formación" title="Formación" />
          <ul className="divide-y divide-line border-y border-line">
            {education.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <span className="font-medium">{item.title}</span>
                <span className="label-mono shrink-0">{item.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </main>
  );
}
