/* Small visual previews shown inside the home entry panels. */

const nodes = [
  { x: 6, label: "API" },
  { x: 100, label: "Pub/Sub" },
  { x: 194, label: "Worker" },
  { x: 288, label: "Search" },
];

export function ArchitecturePreview() {
  return (
    <div className="rounded-lg border border-line bg-bg/60 p-4">
      <svg
        viewBox="0 0 364 64"
        role="img"
        aria-label="Diagrama: API, Pub/Sub, Worker, Elasticsearch"
        className="w-full"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L6 3 L0 6 z" fill="var(--proj)" />
          </marker>
        </defs>
        {nodes.map((node, i) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={12}
              width={70}
              height={40}
              rx={8}
              fill="var(--surface-2)"
              stroke="var(--proj)"
              strokeOpacity={0.7}
            />
            <text
              x={node.x + 35}
              y={36}
              textAnchor="middle"
              fontSize={12}
              fontFamily="var(--font-mono)"
              fill="var(--text)"
            >
              {node.label}
            </text>
            {i < nodes.length - 1 && (
              <path d={`M${node.x + 73} 32 h19`} stroke="var(--proj)" strokeWidth={1.5} markerEnd="url(#arrow)" />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

export function TerminalPreview() {
  return (
    <div className="terminal !my-0">
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-title">Winterfell · DockerLabs</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[0.8rem] leading-relaxed">
        <span className="text-wu">$</span> nmap -p- --open 172.17.0.2{"\n"}
        <span className="text-muted">22/tcp&nbsp;&nbsp;open&nbsp;&nbsp;ssh</span>
        {"\n"}
        <span className="text-muted">80/tcp&nbsp;&nbsp;open&nbsp;&nbsp;http</span>
        {"\n"}
        <span className="text-muted">139/tcp open&nbsp;&nbsp;netbios-ssn</span>
        {"\n"}
        <span className="text-muted">445/tcp open&nbsp;&nbsp;microsoft-ds</span>
      </pre>
    </div>
  );
}
