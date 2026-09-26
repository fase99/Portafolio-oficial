import type { StackLayer } from "@/content/projects";

export default function StackChips({ stack }: { stack: StackLayer[] }) {
  return (
    <dl className="space-y-2">
      {stack.map(({ layer, items }) => (
        <div key={layer} className="flex items-start gap-3">
          <dt className="label-mono w-24 shrink-0 pt-1">{layer}</dt>
          <dd className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
