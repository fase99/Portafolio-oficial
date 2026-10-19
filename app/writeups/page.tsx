import type { Metadata } from "next";
import { Network, Radar } from "lucide-react";
import { siBurpsuite, siKalilinux, siMetasploit, siWireshark } from "simple-icons";
import SectionHeading from "@/components/SectionHeading";
import TechList, { type Tech } from "@/components/TechList";
import WriteupList from "@/components/WriteupList";
import { getAllWriteups } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Security Lab",
  description: "Resolución paso a paso de máquinas vulnerables y CTFs.",
};

const tools: Tech[] = [
  { name: "Kali Linux", icon: siKalilinux },
  { name: "Nmap", icon: Radar },
  { name: "NetExec", icon: Network },
  { name: "Metasploit", icon: siMetasploit },
  { name: "Burp Suite", icon: siBurpsuite },
  { name: "Wireshark", icon: siWireshark },
];

const practices = ["Escaneo de redes", "Pentesting", "Matrices de riesgo", "NIST", "ISO 27001"];

export default function WriteupsIndex() {
  const writeups = getAllWriteups();

  return (
    <main className="container-x pt-14 md:pt-20">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">felipe@lab</span>:<span className="text-[var(--diff-medium)]">~/writeups</span>$ ls -la
      </p>

      <SectionHeading
        as="h1"
        eyebrow="Security Lab"
        title="Máquinas vulnerables y CTFs"
        description="Cómo resolví cada máquina, paso a paso: reconocimiento, enumeración, explotación y escalada de privilegios."
        className="mt-6"
      />

      <section className="mt-12 grid gap-8 border-y border-line py-8 md:grid-cols-2" aria-label="Arsenal">
        <div>
          <p className="label-mono mb-4">Herramientas</p>
          <TechList items={tools} />
        </div>
        <div>
          <p className="label-mono mb-4">Prácticas y marcos</p>
          <ul className="flex flex-wrap gap-2">
            {practices.map((practice) => (
              <li key={practice} className="chip">
                {practice}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12">
        <WriteupList writeups={writeups} />
      </div>
    </main>
  );
}
