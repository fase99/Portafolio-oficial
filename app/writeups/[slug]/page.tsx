import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MachineHeader from "@/components/MachineHeader";
import Toc from "@/components/Toc";
import { getWriteup, getWriteupSlugs } from "@/lib/writeups";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getWriteupSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const writeup = getWriteup(slug);
  return writeup ? { title: writeup.title, description: writeup.summary } : {};
}

export default async function WriteupPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const writeup = getWriteup(slug);
  if (!writeup) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Link href="/writeups" className="label-mono transition-colors hover:text-ink">
        ← Writeups
      </Link>

      <div className="mt-6">
        <MachineHeader writeup={writeup} />
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <article
          className="markdown min-w-0"
          dangerouslySetInnerHTML={{ __html: writeup.html }}
        />
        <aside className="hidden lg:block">
          <Toc items={writeup.toc} />
        </aside>
      </div>
    </main>
  );
}
