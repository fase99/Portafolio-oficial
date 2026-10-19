/** Every writeup page lives inside the dark security-lab zone, whatever the site theme. */
export default function LabLayout({ children }: { children: React.ReactNode }) {
  return <div className="lab min-h-full pb-24">{children}</div>;
}
