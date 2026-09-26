import { siDocker } from "simple-icons";

/* Small visual previews shown inside the home entry panels. */

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

const services = [
  { label: "Pagos", x: 40 },
  { label: "Puntos", x: 158 },
  { label: "Carrito", x: 276 },
];

function Node({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <g className="arch-node">
      <rect x={x} y={y} width={w} height={h} rx={7} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle">{label}</text>
    </g>
  );
}

export function ArchitecturePreview() {
  return (
    <div className="terminal !my-0">
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-title">Virtual Fit · arquitectura SOA</span>
      </div>
      <svg
        viewBox="0 0 400 214"
        className="arch block w-full p-4"
        role="img"
        aria-label="Diagrama: los clientes y los servicios de pagos, puntos y carrito se comunican a través de un bus de servicios; los servicios persisten en MongoDB y todo corre en contenedores Docker"
      >
        {/* Docker boundary */}
        <rect className="arch-docker" x={6} y={50} width={388} height={158} rx={10} />
        <g transform="translate(16 56) scale(0.5)">
          <path d={siDocker.path} fill={`#${siDocker.hex}`} />
        </g>
        <text className="arch-docker-label" x={32} y={66}>Docker</text>

        {/* Clients <-> bus <-> services <-> database */}
        <path className="arch-edge" d="M200 34 V74" />
        {services.map(({ label, x }) => (
          <g key={label}>
            <path className="arch-edge" d={`M${x + 42} 94 V118`} />
            <path className="arch-edge" d={`M${x + 42} 146 C${x + 42} 160 200 154 200 168`} />
          </g>
        ))}

        <Node x={150} y={6} w={100} h={28} label="Clientes" />
        <g className="arch-bus">
          <rect x={20} y={74} width={360} height={20} rx={10} />
          <text x={200} y={88} textAnchor="middle">BUS de comunicación</text>
        </g>
        {services.map(({ label, x }) => (
          <Node key={label} x={x} y={118} w={84} h={28} label={label} />
        ))}
        <Node x={150} y={168} w={100} h={28} label="MongoDB" />
      </svg>
    </div>
  );
}
