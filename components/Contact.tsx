import CvButton from "./CvButton";

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
  {
    label: "GitHub",
    value: "github.com/fase99",
    href: "https://github.com/fase99",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="container-x scroll-mt-24 py-24 md:py-32" aria-labelledby="contacto-title">
      <p className="sh-eyebrow">
        <span className="sh-index">07</span>
        <span>Contacto</span>
        <span className="sh-rule" aria-hidden />
      </p>
      <h2 id="contacto-title" className="display mt-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl">
        Hablemos
      </h2>

      <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
        <div>
          <p className="max-w-sm leading-relaxed text-muted">
            Puedes escribirme por proyectos, oportunidades laborales o cualquier consulta.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:felipe.silva2@mail.udp.cl" className="btn-primary">
              Escríbeme
            </a>
            <CvButton />
          </div>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {channels.map(({ label, value, href, external }) => (
            <div key={label} className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <dt className="label-mono shrink-0">{label}</dt>
              <dd className="min-w-0">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="break-all text-base font-medium tracking-tight transition-colors hover:text-accent sm:text-lg"
                >
                  {value}
                  <span
                    aria-hidden
                    className="ml-2 inline-block text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    {external ? "↗︎" : "→"}
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
