import EntryPanel from "@/components/EntryPanel";
import { ArchitecturePreview, TerminalPreview } from "@/components/EntryPreviews";

const stack = [
  {
    title: "Backend & Cloud",
    accent: "text-proj",
    dot: "from-[var(--proj)] to-[var(--proj-2)]",
    items: [
      "NestJS", "TypeScript", "Node.js", "Express", "MongoDB",
      "GCP Pub/Sub", "Elasticsearch", "Docker", "SOA", "CI/CD · SonarQube",
    ],
  },
  {
    title: "Ciberseguridad",
    accent: "text-wu",
    dot: "from-[var(--wu)] to-[var(--wu-2)]",
    items: [
      "Kali Linux", "Nmap", "NetExec", "Metasploit", "Burp Suite",
      "Escaneo de redes", "Pentesting", "Matrices de riesgo", "NIST", "ISO 27001",
    ],
  },
];

const courses = [
  "Google Cloud Fundamentals",
  "Essential Google Cloud Infrastructure",
  "Introduction to Cybersecurity — Cisco",
  "Ethical Hacker — Cisco",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6">
      <section className="hero pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="label-mono">Ingeniero Civil en Informática y Telecomunicaciones</p>
        <h1 className="text-gradient mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Felipe Silva Escobar
        </h1>

        <div className="mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
          <div className="role" data-accent="proj">
            <p className="role-title">Backend &amp; Cloud Engineer</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Desarrollo APIs y microservicios con NestJS y Node.js, y los despliego en Google Cloud.
            </p>
          </div>
          <div className="role" data-accent="wu">
            <p className="role-title">Ciberseguridad</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Pentesting, escaneo de redes y resolución de CTFs con Kali Linux.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6" aria-label="Secciones">
        <EntryPanel
          index="01"
          eyebrow="Proyectos"
          title="Backend, Cloud y arquitectura"
          description="APIs, microservicios, bases de datos y despliegues."
          accent="proj"
          href="/projects"
          cta="Ver proyectos"
          chips={["NestJS", "GCP", "Docker", "MongoDB"]}
        >
          <ArchitecturePreview />
        </EntryPanel>

        <EntryPanel
          index="02"
          eyebrow="Writeups"
          title="Máquinas vulnerables y CTFs"
          description="Resolución paso a paso: reconocimiento, explotación y escalada de privilegios."
          accent="wu"
          href="/writeups"
          cta="Leer writeups"
          chips={["Nmap", "NetExec", "Metasploit", "Kali Linux"]}
        >
          <TerminalPreview />
        </EntryPanel>
      </section>

      <section className="mt-20" aria-label="Stack">
        <h2 className="label-mono mb-4">Stack</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {stack.map((group) => (
            <div key={group.title} className="surface p-5">
              <h3 className={`flex items-center gap-2 text-sm font-medium ${group.accent}`}>
                <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${group.dot}`} />
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-label="Formación">
        <h2 className="label-mono mb-4">Formación complementaria</h2>
        <ul className="flex flex-wrap gap-2">
          {courses.map((course) => (
            <li key={course} className="chip">
              {course}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
