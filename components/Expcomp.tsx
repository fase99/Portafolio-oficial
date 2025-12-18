import { a } from "motion/react-client";
import { relative } from "path";

export const runtime = 'edge';

export type Exp = {
  title: string;
  description?: string;
  imageURL?: string;
  link?: string;
};

export default function Excomp({ title, description, imageURL, link }: Exp) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group no-underline h-full">
      <article className="panel h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-black/40 backdrop-blur-sm" style={{ padding: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
        
        <div className="w-full h-48 overflow-hidden bg-black/20 relative border-b border-white/5">
          {imageURL ? (
            <img 
              src={imageURL} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20 bg-white/5">
              <span>No Preview</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="neon text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
          {description && (
            <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--muted)' }}>
              {description}
            </p>
          )}
        </div>
      </article>
    </a>
  );
}
