import Link from 'next/link';
import WriteupCard from '../../components/WriteupCard';
import Header from '@/components/Header';

export default function WriteupsIndex() {
  const writeups = [
    {
      title: 'Winterfell',
      platform: 'DockerLabs',
      excerpt: 'Reconocimiento, explotación y escalado de privilegios en la máquina vulnerable Winterfell.',
      difficulty: 'Fácil',
      category: 'CTF',
      date: '2025',
      image: '/static/images/winterfell/ping_winterfell.png',
      tags: ['Nmap', 'enum4linux', 'SMB', 'Dirb', 'Linux'],
      href: '/writeups/winterfell'
    },
  ];

  return (
    <main>
      <div className="flex min-h-[100vh] h-full items-center justify-center bg-no-repeat bg-gradient-cover font-sans">
        {/* Animated Background - Professional HD */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-80 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-500/12 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-emerald-500/10 opacity-50"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="%23fff" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
        }}></div>
      </div>
        <div className="w-full" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
          <Link href="/" className="text-2xl shadow hover:text-emerald-300 inline-block mb-8">&#8592; Volver</Link>
          
          <div className="text-center mb-12 ">
            <div className='flex items-center justify-center'>

              <Header title="Máquinas Vulnerables - CTF" />
            </div>
            <p className="text-lg mt-4" style={{ color: 'var(--muted)' }}>
              Documentación detallada de CTFs, máquinas vulnerables y desafíos de seguridad informática
            </p>
          </div>

          <div className="mb-8">
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
              {writeups.map((writeup, index) => (
                <WriteupCard key={index} {...writeup} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
