
export const runtime = 'edge';

export default function TerminalMock({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-emerald-400/20 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-emerald-500/10">
      {/* Terminal header */}
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-emerald-400/10">
        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
        <span className="ml-auto text-xs text-emerald-400/60 font-mono">fase99@portfolio ~</span>
      </div>
      
      <code className="text-sm md:text-base font-mono block text-emerald-200/90 leading-relaxed">
        {children ?? (
          <>
            <span className="text-emerald-400">user@fase99</span>
            <span className="text-white/50">:~$</span>
            {' '}
            <span className="neon">cat ./bio</span>
            <br />
            <br />
            <span className="text-emerald-300">▸ Full Stack Developer</span>
            <br />
            <span className="text-emerald-300">▸ Security Enthusiast</span>
            <br />
            <span className="text-emerald-300">▸ CTF Solver</span>
            <br />
            <br />
            <span className="text-emerald-400">user@fase99</span>
            <span className="text-white/50">:~$</span>
            {' '}
            <span className="text-white/40 animate-pulse">_</span>
          </>
        )}
      </code>
    </div>
  );
}
