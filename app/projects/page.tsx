import type { Metadata } from "next";
import Link from "next/link";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos full stack: interfaz, APIs, datos e infraestructura.",
};

export default function ProjectsPage() {
  return (
    <main className="container-x pb-8 pt-14 md:pt-20">
      <SectionHeading
        as="h1"
        eyebrow="Proyectos"
        title="Casos de trabajo"
        description="Cada proyecto muestra qué capas de la aplicación desarrollé y el stack que usé en cada una."
        className="mb-12"
      />

      {projects.map((project, i) => (
        <ProjectCaseStudy key={project.slug} project={project} index={i} />
      ))}

      <div className="flex flex-col items-start justify-between gap-6 border-t border-line py-14 md:flex-row md:items-center">
        <p className="display max-w-xl text-3xl md:text-4xl">¿El próximo proyecto es el tuyo?</p>
        <Link href="/#contacto" className="btn-primary">
          Hablemos <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
