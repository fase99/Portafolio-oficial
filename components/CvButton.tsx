import { Download } from "lucide-react";

export default function CvButton() {
  return (
    <a href="/Cv-profesional.PDF.pdf" download className="btn-primary">
      <Download size={18} strokeWidth={2} aria-hidden="true" />
      Descargar CV
      <span className="btn-tag">PDF</span>
    </a>
  );
}
