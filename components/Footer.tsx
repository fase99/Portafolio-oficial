import Link from "next/link";
import { socialNetworks } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="label-mono">© {new Date().getFullYear()} Felipe Silva Escobar · Full Stack Developer</p>
        <div className="flex items-center gap-1 text-muted">
          <Link href="/writeups" className="label-mono mr-3 transition-colors hover:text-ink">
            Security Lab
          </Link>
          {socialNetworks.map((network) => (
            <a
              key={network.id}
              href={network.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.label}
              className="rounded-full p-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {network.logo}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
