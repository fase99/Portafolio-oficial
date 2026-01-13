import Link from "next/link";

export const runtime = 'edge';

export type ProjectCardProps = {
  title: string;
  description?: string;
  href?: string;
  emoji?: string;
};

export default function ProjectCard({ title, description, href = '#', emoji }: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <article className="relative overflow-hidden rounded-xl border border-emerald-400/20 bg-gradient-to-br from-black/40 to-black/20 p-6 transition-all duration-300 hover:border-emerald-400/50 hover:bg-gradient-to-br hover:from-black/50 hover:to-black/30 hover:shadow-lg hover:shadow-emerald-500/10" >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/0 transition-all duration-300 pointer-events-none"></div>
        
        <div className="relative z-10">
          {/* Emoji and Title */}
          <div className="flex items-start gap-3 mb-3">
            {emoji && <span className="text-3xl mt-1">{emoji}</span>}
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{title}</h3>
          </div>
          
          {/* Description */}
          {description && (
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {description}
            </p>
          )}
          
          {/* Arrow indicator */}
          <div className="mt-4 flex items-center gap-2 text-emerald-400/0 group-hover:text-emerald-400 transition-all duration-300">
            <span className="text-sm font-medium">Explorar</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
