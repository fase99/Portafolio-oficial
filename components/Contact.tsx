import CvButton from "./CvButton";
import ScrambleText from "./ScrambleText";

const channels = [
  {
    label: "Correo",
    value: "felipe.silva2@mail.udp.cl",
    href: "mailto:felipe.silva2@mail.udp.cl",
  },
  {
    label: "Teléfono",
    value: "+56 9 9121 3399",
    href: "tel:+56991213399",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/felipe-silva-e",
    href: "https://www.linkedin.com/in/felipe-silva-e",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="mt-28 scroll-mt-24" aria-labelledby="contacto-title">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-16">
        <div data-scramble-scope>
          <p className="label-mono">03 — Contacto</p>
          <h2 id="contacto-title" className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            <ScrambleText text="Contacto" />
          </h2>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Escríbeme, llámame o revisa mi CV.
          </p>
          <div className="mt-6">
            <CvButton />
          </div>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {channels.map(({ label, value, href, external }) => (
            <div
              key={label}
              className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <dt className="label-mono shrink-0">{label}</dt>
              <dd className="min-w-0 mt-2">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="break-all text-base font-medium tracking-tight transition-colors hover:text-proj sm:text-right sm:text-lg"
                >
                  {value}
                  <span
                    aria-hidden
                    className="ml-2 inline-block text-muted transition-transform group-hover:translate-x-1 group-hover:text-proj"
                  >
                    {external ? "↗\uFE0E" : "→"}
                  </span>
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
