"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Proyectos" },
  { href: "/#servicios", label: "Servicios", hideOnMobile: true },
  { href: "/writeups", label: "Security Lab" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-ink" aria-label="Felipe Silva — inicio">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-[0.7rem] font-bold text-bg">
            fs
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">fase99</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center gap-0.5 text-sm">
            {links.map(({ href, label, hideOnMobile }) => {
              const active = !href.startsWith("/#") && (pathname === href || pathname.startsWith(`${href}/`));
              return (
                <li key={href} className={hideOnMobile ? "hidden md:block" : undefined}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-1.5 transition-colors ${
                      active ? "bg-surface-2 text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <Link href="/#contacto" className="btn-primary hidden !px-4 !py-2.5 !text-sm sm:inline-flex">
            Hablemos
          </Link>
        </div>
      </nav>
    </header>
  );
}
