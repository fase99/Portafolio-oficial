export type StackLayer = {
  layer: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary?: string;
  image: string;
  stack: StackLayer[];
  links: { code?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "virtual-fit",
    title: "Virtual Fit — Orquestador de microservicios",
    tagline:
      "GUI centralizada para iniciar, detener y supervisar los servicios de un e-commerce (pagos, puntos, carrito).",
    summary:
      "Arquitectura SOA con múltiples microservicios. Reemplaza el manejo manual por terminal por una interfaz reactiva que actúa como orquestador del sistema.",
    image: "/VirtualFit.png",
    stack: [
      { layer: "Arquitectura", items: ["Microservicios", "SOA", "API REST"] },
      { layer: "Datos", items: ["MongoDB"] },
      { layer: "Tiempo real", items: ["Socket.IO"] },
      { layer: "Frontend", items: ["JavaScript ES6+", "HTML5", "CSS3"] },
    ],
    links: { code: "https://github.com/fase99/ASAI-VirtualFit" },
  },
  {
    slug: "muscle-rpg",
    title: "MuscleRPG",
    tagline: "Ruta óptima de ejercicios en el gimnasio para maximizar la ganancia muscular.",
    summary: "Arquitectura cliente/servidor con Angular y NestJS.",
    image: "/musclerpg.png",
    stack: [
      { layer: "Backend", items: ["NestJS"] },
      { layer: "Frontend", items: ["Angular"] },
      { layer: "Datos", items: ["MongoDB"] },
      { layer: "Infra", items: ["Docker"] },
    ],
    links: { code: "https://github.com/fase99/Muscle-RPG" },
  },
  {
    slug: "georuta-inmobiliaria",
    title: "GeoRuta Inmobiliaria",
    tagline:
      "Georuteo para visitas inmobiliarias que busca la ruta más resiliente frente a amenazas urbanas, no solo la más corta.",
    summary:
      "Permite visualizar propiedades, filtrar por métricas (calidad de colegios, plusvalía) y simular cierres viales o accidentes para evaluar la robustez de las rutas.",
    image: "/GeoRuta.png",
    stack: [
      { layer: "Backend", items: ["Python", "Flask"] },
      { layer: "Datos", items: ["PostgreSQL"] },
      { layer: "Infra", items: ["Docker"] },
      { layer: "Frontend", items: ["JavaScript", "Leaflet", "HTML5", "CSS3"] },
    ],
    links: { code: "https://github.com/fase99/GeoRuta-Inmobiliaria" },
  },
  {
    slug: "masarq",
    title: "+Arq",
    tagline: "Sitio web estático para un cliente de consultoría de arquitectura.",
    image: "/masarq.png",
    stack: [{ layer: "Frontend", items: ["Astro", "TailwindCSS"] }],
    links: { demo: "https://masarq.cl/" },
  },
];
