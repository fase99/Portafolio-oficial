import type { Metadata } from "next";
import { Network, Radar } from "lucide-react";
import { siBurpsuite, siKalilinux, siMetasploit } from "simple-icons";
import LogoMarquee, { type MarqueeItem } from "@/components/LogoMarquee";
import ScrambleText from "@/components/ScrambleText";
import WriteupList from "@/components/WriteupList";
import { getAllWriteups } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Writeups",
  description: "Resolución paso a paso de máquinas vulnerables y CTFs.",
};

const tools: MarqueeItem[] = [
  { name: "Kali Linux", icon: siKalilinux },
  { name: "Nmap", icon: Radar },
  { name: "NetExec", icon: Network },
  { name: "Metasploit", icon: siMetasploit },
  { name: "Burp Suite", icon: siBurpsuite },
];

const practices = [
  "Escaneo de redes",
  "Pentesting",
  "Matrices de riesgo",
  "NIST",
  "ISO 27001",
];

export default function WriteupsIndex() {
  const writeups = getAllWriteups();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="label-mono" style={{ color: "var(--wu)" }}>
        02 — Writeups
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        <ScrambleText text="Máquinas vulnerables y CTFs" />
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Cómo resolví cada máquina, paso a paso: reconocimiento, enumeración, explotación y escalada
        de privilegios.
      </p>

      <section className="mt-10 mb-12" aria-label="Herramientas">
        <h2 className="label-mono mb-4">Herramientas</h2>
        <LogoMarquee items={tools} accent="wu" label="Herramientas de ciberseguridad" />
        <ul className="mt-4 flex flex-wrap gap-2">
          {practices.map((practice) => (
            <li key={practice} className="chip">
              {practice}
            </li>
          ))}
        </ul>
      </section>

      <WriteupList writeups={writeups} />
    </main>
  );
}
