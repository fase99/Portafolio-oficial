
export const runtime = 'edge';

export default function TerminalMock({ children }: { children?: React.ReactNode }) {
  return (
    <div className="terminal2" style={{ fontSize: '0.95rem' }}>
      <code>
        {children ?? (
          <>
            user@fase99:~$ <span className="neon">cat ./proyects</span>
            <span className="cursor" />
          </>
        )}
      </code>
    </div>
  );
}
