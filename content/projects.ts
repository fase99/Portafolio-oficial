export type StackLayer = {
  layer: string;
  items: string[];
};

/** The four layers of an application; each project marks the ones it covers. */
export const LAYERS = ["Interfaz", "API", "Datos", "Infra"] as const;
export type Layer = (typeof LAYERS)[number];

export type Project = {
  slug: string;
  title: string;
  /** Short category, e.g. "Full stack" or "Sitio web · Cliente". */
  kind: string;
  tagline: string;
  summary?: string;
  image: string;
  covers: Layer[];
  stack: StackLayer[];
  links: { code?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "muscle-rpg",
    title: "MuscleRPG",
    kind: "Full stack · Web app",
    tagline: "Calcula la ruta óptima de ejercicios en el gimnasio para maximizar la ganancia muscular.",
    summary: "Aplicación cliente/servidor: frontend en Angular, API en NestJS, persistencia en MongoDB y entorno contenerizado con Docker.",
    image: "/musclerpg.png",
    covers: ["Interfaz", "API", "Datos", "Infra"],
    stack: [
      { layer: "Frontend", items: ["Angular", "TypeScript"] },
      { layer: "Backend", items: ["NestJS", "API REST"] },
      { layer: "Datos", items: ["MongoDB"] },
      { layer: "Infra", items: ["Docker"] },
    ],
    links: { code: "https://github.com/fase99/Muscle-RPG" },
  },
  {
    slug: "georuta-inmobiliaria",
    title: "GeoRuta Inmobiliaria",
    kind: "Full stack · Geoespacial",
    tagline:
      "Georuteo para visitas inmobiliarias que busca la ruta más resiliente frente a amenazas urbanas, no solo la más corta.",
    summary:
      "Mapa interactivo de propiedades con filtros por métricas (calidad de colegios, plusvalía) y simulación de cierres viales o accidentes para evaluar la robustez de cada ruta.",
    image: "/GeoRuta.png",
    covers: ["Interfaz", "API", "Datos", "Infra"],
    stack: [
      { layer: "Frontend", items: ["JavaScript", "Leaflet", "HTML5", "CSS3"] },
      { layer: "Backend", items: ["Python", "Flask"] },
      { layer: "Datos", items: ["PostgreSQL"] },
      { layer: "Infra", items: ["Docker"] },
    ],
    links: { code: "https://github.com/fase99/GeoRuta-Inmobiliaria" },
  },
  {
    slug: "virtual-fit",
    title: "Virtual Fit",
    kind: "Full stack · Microservicios",
    tagline:
      "Panel centralizado para iniciar, detener y supervisar los servicios de un e-commerce (pagos, puntos, carrito).",
    summary:
      "Arquitectura SOA con múltiples microservicios. Reemplaza el manejo manual por terminal por una interfaz reactiva en tiempo real que actúa como orquestador del sistema.",
    image: "/VirtualFit.png",
    covers: ["Interfaz", "API", "Datos"],
    stack: [
      { layer: "Frontend", items: ["JavaScript ES6+", "HTML5", "CSS3"] },
      { layer: "Backend", items: ["Microservicios", "SOA", "API REST", "Socket.IO"] },
      { layer: "Datos", items: ["MongoDB"] },
    ],
    links: { code: "https://github.com/fase99/ASAI-VirtualFit" },
  },
  {
    slug: "masarq",
    title: "+Arq",
    kind: "Sitio web · Cliente",
    tagline: "Sitio web para una consultora de arquitectura: rápido, responsivo y en producción.",
    summary: "Proyecto para cliente real, desde el diseño de la interfaz hasta su publicación.",
    image: "/masarq.png",
    covers: ["Interfaz"],
    stack: [{ layer: "Frontend", items: ["Astro", "TailwindCSS"] }],
    links: { demo: "https://masarq.cl/" },
  },
];
