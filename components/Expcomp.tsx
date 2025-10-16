import { relative } from "path";

export type Exp = {
  title: string;
  description?: string;
  fecha?: string;
};

export default function Excomp({ title, description, fecha }: Exp) {
  return (
    
    <article className="panel" style={{ padding: '1rem', marginTop: '15px'}}>
      <div style={{ marginTop: '5px', textAlign: 'left' }}>
      {fecha && <p style={{ color: 'var(--muted)' }}>{fecha}</p>}
      </div>
      <h3 className="neon" style={{ marginBottom: '0.4rem'}}>{title}</h3>
      {description && <p style={{ color: 'var(--muted)', marginTop: '10px'}}>{description}</p>}
    </article>
  );
}
