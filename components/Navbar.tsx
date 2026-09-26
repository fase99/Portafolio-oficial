"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Proyectos", accent: "text-proj" },
  { href: "/writeups", label: "Writeups", accent: "text-wu" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-ink">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-br from-[var(--proj)] to-[var(--wu)]" />
          fase99<span className="text-muted">/</span>
        </Link>

        <ul className="flex items-center gap-1 text-sm">
          {links.map(({ href, label, accent }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-1.5 transition-colors hover:bg-surface ${
                    active ? `${accent} bg-surface-2` : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/#contacto"
              className="rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
