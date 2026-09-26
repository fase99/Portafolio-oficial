import type { Metadata } from "next";
import WriteupList from "@/components/WriteupList";
import { getAllWriteups } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Writeups",
  description: "Resolución paso a paso de máquinas vulnerables y CTFs.",
};

export default function WriteupsIndex() {
  const writeups = getAllWriteups();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="label-mono" style={{ color: "var(--wu)" }}>
        02 — Writeups
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        Máquinas vulnerables y CTFs
      </h1>
      <p className="mt-3 mb-10 max-w-2xl text-muted">
        Cómo resolví cada máquina, paso a paso: reconocimiento, enumeración, explotación y escalada
        de privilegios.
      </p>

      <WriteupList writeups={writeups} />
    </main>
  );
}
