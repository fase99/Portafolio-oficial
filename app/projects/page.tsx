import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos de backend, cloud y arquitectura de software.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        as="h1"
        index="01"
        eyebrow="Proyectos"
        title="Backend, Cloud y arquitectura"
        description="Cada proyecto indica el stack por capa: arquitectura, datos, infraestructura y frontend."
        className="mb-12"
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
