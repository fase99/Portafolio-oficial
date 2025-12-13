import Excomp from "./Expcomp";

export default function CardExp({ projects }: { projects: Array<{ title: string; description?: string; fecha?: string; link?:string }> }) {
  return (
    <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
      {projects.map((p) => (
        <Excomp key={p.title} title={p.title} description={p.description} fecha={p.fecha} link={p.link}/>
      ))}
    </div>
  );
}