import {
  siAngular,
  siAstro,
  siDocker,
  siElasticsearch,
  siExpress,
  siFlask,
  siGit,
  siGooglecloud,
  siGooglepubsub,
  siJavascript,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSocketdotio,
  siSonarqubeserver,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import TechList, { type Tech } from "./TechList";

const groups: { layer: string; title: string; text: string; items: Tech[] }[] = [
  {
    layer: "01",
    title: "Frontend",
    text: "Interfaces web y responsivas.",
    items: [
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Angular", icon: siAngular },
      { name: "Astro", icon: siAstro },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    layer: "02",
    title: "Backend",
    text: "APIs, microservicios y tiempo real.",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "NestJS", icon: siNestjs },
      { name: "Express", icon: siExpress },
      { name: "Python", icon: siPython },
      { name: "Flask", icon: siFlask },
      { name: "Socket.IO", icon: siSocketdotio },
    ],
  },
  {
    layer: "03",
    title: "Datos",
    text: "Bases de datos relacionales y NoSQL.",
    items: [
      { name: "MongoDB", icon: siMongodb },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Elasticsearch", icon: siElasticsearch },
    ],
  },
  {
    layer: "04",
    title: "Infra & Cloud",
    text: "Contenedores, nube y control de versiones.",
    items: [
      { name: "Docker", icon: siDocker },
      { name: "Google Cloud", icon: siGooglecloud },
      { name: "Pub/Sub", icon: siGooglepubsub },
      { name: "SonarQube", icon: siSonarqubeserver },
      { name: "Git", icon: siGit },
    ],
  },
];

export default function StackGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="bg-surface p-6 md:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
            <span className="font-mono text-xs text-accent">{group.layer}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{group.text}</p>
          <TechList items={group.items} className="mt-6" />
        </div>
      ))}
    </div>
  );
}
