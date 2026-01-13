import Link from "next/link";

export const runtime = 'edge';

type WriteupCardProps = {
  title: string;
  platform?: string;
  excerpt?: string;
  difficulty?: string;
  category?: string;
  date?: string;
  image?: string;
  tags?: string[];
  href: string;
};

const difficultyColors: Record<string, string> = {
  'Fácil': 'text-green-400 border-green-400/30 bg-green-500/10',
  'Medio': 'text-yellow-400 border-yellow-400/30 bg-yellow-500/10',
  'Difícil': 'text-red-400 border-red-400/30 bg-red-500/10',
};

export default function WriteupCard({ 
  title, 
  platform, 
  excerpt, 
  difficulty = 'Fácil',
  category,
  date,
  image,
  tags = [],
  href 
}: WriteupCardProps) {
  return (
    <Link href={href} className="block group no-underline h-full">
      <article className="panel h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-black/40 backdrop-blur-sm" 
        style={{ padding: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
        
        {/* Image Preview */}
        {image && (
          <div className="w-full h-48 overflow-hidden bg-black/20 relative border-b border-white/5">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {/* Header with Platform and Date */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {platform && (
                <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {platform}
                </span>
              )}
              {difficulty && (
                <span className={`text-xs px-2 py-1 rounded border ${difficultyColors[difficulty] || difficultyColors['Fácil']}`}>
                  {difficulty}
                </span>
              )}
            </div>
            {date && (
              <span className="text-xs" style={{ color: 'var(--muted)' }}>{date}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="neon text-xl font-bold mb-3 group-hover:text-white transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--muted)' }}>
              {excerpt}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-auto pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
