import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }: { projects: Array<{ title: string; description?: string; href?: string }> }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
      {projects.map((p) => (
        <ProjectCard key={p.title} title={p.title} description={p.description} href={p.href} />
      ))}
    </div>
  );
}
