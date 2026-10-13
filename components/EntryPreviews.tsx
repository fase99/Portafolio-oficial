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

/* Same columns for both tiers: each client service talks to the bus, never to a server directly. */
const columns = [72, 184, 296];
const clients = ["Pagos", "Puntos", "Carrito"];
const services = ["Pagos", "Puntos", "Carrito"];
const NODE_W = 84;

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
        viewBox="0 0 400 206"
        className="arch block w-full p-4"
        role="img"
        aria-label="Diagrama SOA: los servicios cliente de pagos, puntos y carrito se comunican con los servicios del servidor únicamente a través del bus de comunicación, que corre en un contenedor Docker; los servicios del servidor persisten en MongoDB"
      >
        {/* Docker boundary: only the bus runs in a container */}
        <rect className="arch-docker" x={10} y={52} width={380} height={50} rx={10} />
        <g transform="translate(18 56) scale(0.5)">
          <path d={siDocker.path} fill={`#${siDocker.hex}`} />
        </g>
        <text className="arch-docker-label" x={34} y={66}>Docker</text>

        {/* Client services <-> bus <-> server services -> database */}
        {columns.map((x) => {
          const cx = x + NODE_W / 2;
          return (
            <g key={x}>
              <path className="arch-edge" d={`M${cx} 38 V74`} />
              <path className="arch-edge" d={`M${cx} 94 V114`} />
              <path className="arch-edge" d={`M${cx} 142 C${cx} 156 226 156 226 170`} />
            </g>
          );
        })}

        <text className="arch-tier" x={10} y={28}>Cliente</text>
        {clients.map((label, i) => (
          <Node key={`c-${label}`} x={columns[i]} y={10} w={NODE_W} h={28} label={label} />
        ))}

        <g className="arch-bus">
          <rect x={20} y={74} width={360} height={20} rx={10} />
          <text x={200} y={88} textAnchor="middle">BUS de comunicación</text>
        </g>

        <text className="arch-tier" x={10} y={132}>Servidor</text>
        {services.map((label, i) => (
          <Node key={`s-${label}`} x={columns[i]} y={114} w={NODE_W} h={28} label={label} />
        ))}
        <Node x={176} y={170} w={100} h={28} label="MongoDB" />
      </svg>
    </div>
  );
}
