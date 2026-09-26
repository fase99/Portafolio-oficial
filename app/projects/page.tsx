import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos de backend, cloud y arquitectura de software.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="label-mono" style={{ color: "var(--proj)" }}>
        01 — Proyectos
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        Backend, Cloud y arquitectura
      </h1>
      <p className="mt-3 mb-10 max-w-2xl text-muted">
        Cada proyecto indica el stack por capa: arquitectura, datos, infraestructura y frontend.
      </p>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
