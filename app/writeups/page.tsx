import type { Metadata } from "next";
import { Network, Radar } from "lucide-react";
import { siBurpsuite, siKalilinux, siMetasploit } from "simple-icons";
import LogoMarquee, { type MarqueeItem } from "@/components/LogoMarquee";
import SectionHeading from "@/components/SectionHeading";
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
      <SectionHeading
        as="h1"
        index="02"
        eyebrow="Writeups"
        title="Máquinas vulnerables y CTFs"
        accent="wu"
        description="Cómo resolví cada máquina, paso a paso: reconocimiento, enumeración, explotación y escalada de privilegios."
      />

      <section className="mt-14 mb-12" aria-labelledby="tools-title">
        <SectionHeading
          id="tools-title"
          eyebrow="Arsenal"
          title="Herramientas"
          accent="wu"
          size="md"
          className="mb-6"
        />
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
