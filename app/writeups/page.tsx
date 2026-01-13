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
