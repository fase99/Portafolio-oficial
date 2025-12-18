import Excomp from "./Expcomp";

export default function CardExp({ projects }: { projects: Array<{ title: string; description?: string; imageURL?: string; link?:string }> }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      {projects.map((p) => (
        <Excomp key={p.title} title={p.title} description={p.description} imageURL={p.imageURL} link={p.link}/>
      ))}
    </div>
  );
}