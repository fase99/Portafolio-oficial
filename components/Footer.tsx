import { socialNetworks } from "@/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="label-mono">© {new Date().getFullYear()} Felipe Silva Escobar</p>
        <div className="flex items-center gap-2 text-muted">
          {socialNetworks.map((network) => (
            <a
              key={network.id}
              href={network.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.label}
              className="rounded-md p-2 transition-colors hover:bg-surface hover:text-ink"
            >
              {network.logo}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
