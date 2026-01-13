import Excomp from "./Expcomp";

export default function CardExp({ projects }: { projects: Array<{ title: string; description?: string; imageURL?: string; link?:string; technologies?: Array<{name: string; logo: string}> }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      {projects.map((p) => (
        <Excomp key={p.title} title={p.title} description={p.description} imageURL={p.imageURL} link={p.link} technologies={p.technologies}/>
      ))}
    </div>
  );
}