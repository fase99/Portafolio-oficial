import { LAYERS, type Layer } from "@/content/projects";

/** Four-segment bar showing which application layers a project covers. */
export default function Coverage({ covers, showLabels = false }: { covers: Layer[]; showLabels?: boolean }) {
  const summary = `Capas cubiertas: ${covers.join(", ")}`;

  return (
    <div aria-label={summary} role="img">
      <div className="coverage">
        {LAYERS.map((layer) => (
          <span key={layer} data-on={covers.includes(layer)} />
        ))}
      </div>
      {showLabels && (
        <div className="coverage mt-1.5" aria-hidden>
          {LAYERS.map((layer) => (
            <small
              key={layer}
              className={`font-mono text-[0.62rem] uppercase tracking-[0.06em] ${
                covers.includes(layer) ? "text-ink" : "text-muted/60"
              }`}
            >
              {layer}
            </small>
          ))}
        </div>
      )}
    </div>
  );
}
