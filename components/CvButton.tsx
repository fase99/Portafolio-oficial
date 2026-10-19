import { Download } from "lucide-react";

export default function CvButton() {
  return (
    <a href="/Cv-profesional.PDF.pdf" download className="btn-ghost">
      <Download size={17} strokeWidth={2} aria-hidden="true" />
      Descargar CV
      <span className="btn-tag !bg-surface-2">PDF</span>
    </a>
  );
}
