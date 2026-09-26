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
