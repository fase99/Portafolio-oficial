const steps = [
  {
    title: "Entender",
    text: "Revisamos el problema, el objetivo y el alcance del proyecto.",
  },
  {
    title: "Diseñar",
    text: "Defino la arquitectura, el modelo de datos y la interfaz.",
  },
  {
    title: "Construir",
    text: "Desarrollo por etapas, con avances que puedes revisar.",
  },
  {
    title: "Desplegar",
    text: "Publico el proyecto, reviso la seguridad y dejo la documentación.",
  },
];

export default function Process() {
  return (
    <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
      {steps.map((step, i) => (
        <li key={step.title} className="relative border-t border-line-strong pt-5">
          <span className="absolute -top-px left-0 h-px w-10 bg-accent" aria-hidden />
          <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
