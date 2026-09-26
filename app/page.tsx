import Contact from "@/components/Contact";
import CvButton from "@/components/CvButton";
import EntryPanel from "@/components/EntryPanel";
import InterceptConsole from "@/components/InterceptConsole";
import { ArchitecturePreview, TerminalPreview } from "@/components/EntryPreviews";
import LogoMarquee, { type MarqueeItem } from "@/components/LogoMarquee";
import ScrambleText from "@/components/ScrambleText";
import {
  siDocker,
  siElasticsearch,
  siExpress,
  siGooglecloud,
  siGooglepubsub,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siSonarqubeserver,
  siTypescript,
} from "simple-icons";

const stack: MarqueeItem[] = [
  { name: "NestJS", icon: siNestjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express", icon: siExpress },
  { name: "MongoDB", icon: siMongodb },
  { name: "Google Cloud", icon: siGooglecloud },
  { name: "GCP Pub/Sub", icon: siGooglepubsub },
  { name: "Elasticsearch", icon: siElasticsearch },
  { name: "Docker", icon: siDocker },
  { name: "SonarQube", icon: siSonarqubeserver },
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
          description="APIs y microservicios en JavaScript y TypeScript con Node.js y NestJS, arquitecturas SOA, persistencia en MongoDB y despliegues con Docker. Cada proyecto detalla su stack por capa y enlaza a su código."
          accent="proj"
          href="/projects"
          cta="Ver proyectos"
          chips={["NestJS", "SOA", "Docker", "MongoDB"]}
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
        <LogoMarquee items={stack} label="Tecnologías de backend y cloud" />
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

      

      <Contact />
    </main>
  );
}
