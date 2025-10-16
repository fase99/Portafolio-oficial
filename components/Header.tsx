export default function Header({ title, onWriteupsClick }: { title?: string; onWriteupsClick?: () => void }) {
  return (
    <header className="flex items-center justify-between mb-4">
      <h1 className="neon" style={{ fontSize: '1.6rem' }}>{title ?? 'fase99'}</h1>
      
       
   
    </header>
  );
}
