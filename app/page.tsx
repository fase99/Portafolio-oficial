import Contact from "@/components/Contact";
import CvButton from "@/components/CvButton";
import EntryPanel from "@/components/EntryPanel";
import InterceptConsole from "@/components/InterceptConsole";
import { TerminalPreview } from "@/components/EntryPreviews";
import ScrambleText from "@/components/ScrambleText";

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
      <section className="hero pt-20 pb-20 md:pt-32 md:pb-28">
        <p className="label-mono flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[var(--proj)] to-[var(--wu)]" />
          Ingeniero Civil en Informática y Telecomunicaciones
        </p>

        <h1
          data-scramble-scope
          className="mt-6 w-fit text-5xl font-semibold leading-[1] tracking-tighter sm:text-7xl lg:text-8xl"
        >
          <span className="block">
            <ScrambleText text="Felipe Alejandro Silva" textClassName="text-gradient" />
          </span>
          <span className="block">
            <ScrambleText text="Escobar" textClassName="text-gradient" />
          </span>
        </h1>

        <div className="mt-14 grid max-w-4xl gap-x-14 gap-y-10 md:mt-20 md:grid-cols-2">
          <div className="role" data-accent="proj">
            <p className="role-title">Backend &amp; Cloud Engineer</p>
            <p className="mt-2 leading-relaxed text-muted">
              Desarrollo APIs y microservicios con NestJS y Node.js, y los despliego en Google Cloud.
            </p>
          </div>
          <div className="role" data-accent="wu">
            <p className="role-title">Ciberseguridad</p>
            <p className="mt-2 leading-relaxed text-muted">
              Pentesting, escaneo de redes y resolución de CTFs con Kali Linux.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
        
          <a href="#contacto" className="btn-ghost">
            Contacto
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6" aria-label="Secciones">
        <EntryPanel
          index="01"
          eyebrow="Proyectos"
          title="Backend, Cloud y arquitectura"
          description="APIs y microservicios con NestJS y Node.js, arquitecturas SOA, integraciones con GCP Pub/Sub y Elasticsearch, y despliegues con Docker y CI/CD. Cada proyecto detalla su stack por capa y enlaza a su código."
          accent="proj"
          href="/projects"
          cta="Ver proyectos"
          chips={["NestJS", "GCP", "Docker", "MongoDB"]}
        />

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

      <section className="mt-24" aria-labelledby="desafio-title">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-16">
          <div data-scramble-scope>
            <p className="label-mono">Desafío rápido</p>
            <h2 id="desafio-title" className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              <ScrambleText text="Mensaje interceptado" />
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Capturé este paquete en la red. Decodifica el payload y escribe lo que dice en texto plano.
            </p>
          </div>
          <InterceptConsole />
        </div>
      </section>

      <Contact />
    </main>
  );
}
