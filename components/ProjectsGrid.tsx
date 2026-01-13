import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }: { projects: Array<{ title: string; description?: string; href?: string; emoji?: string }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
      {projects.map((p) => (
        <ProjectCard key={p.title} title={p.title} description={p.description} href={p.href} emoji={p.emoji} />
      ))}
    </div>
  );
}
