import { AppWindow, Cloud, Globe, Server, ShieldCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: AppWindow,
    title: "Aplicaciones web",
    text: "Plataformas, paneles de administración y herramientas internas.",
  },
  {
    icon: Server,
    title: "APIs y backend",
    text: "APIs REST, microservicios e integraciones con otros servicios.",
  },
  {
    icon: Globe,
    title: "Sitios web",
    text: "Sitios corporativos y landing pages responsivas.",
  },
  {
    icon: Cloud,
    title: "Cloud y despliegue",
    text: "Contenedores con Docker y despliegue en la nube.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad aplicada",
    text: "Revisión de vulnerabilidades y buenas prácticas de seguridad en el código.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    text: "Nuevas funcionalidades y mejoras sobre sistemas existentes.",
  },
];

export default function Services() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ icon: Icon, title, text }) => (
        <li key={title} className="group bg-surface p-6 transition-colors hover:bg-surface-2 md:p-7">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-line text-accent">
            <Icon size={19} strokeWidth={1.7} aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
        </li>
      ))}
    </ul>
  );
}
