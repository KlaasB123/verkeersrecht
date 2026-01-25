import { Wine } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "RIJBEWIJS INGETROKKEN", href: "/teveel-gedronken/rijbewijs-ingetrokken" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/teveel-gedronken/rijverbod-en-inlevering-rijbewijs" },
  { label: "MEDISCHE EN/OF PSYCHOLOGISCHE PROEVEN", href: "/teveel-gedronken/medische-psychologische-proeven" },
  { label: "PRAKTISCHE EN THEORETISCHE HERSTELEXAMENS", href: "/teveel-gedronken/herstelexamens" },
];

const RijbewijsIngetrokken = () => {
  return (
    <ServicePageLayout title="Rijbewijs ingetrokken" icon={Wine} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u veel te snel reed of bij een andere zware overtreding, kan het zijn dat u onmiddellijk uw rijbewijs moet afgeven. In beginsel is dit voor 15 dagen.
      </p>
      <p className="mb-6">Deze 15 dagen worden later door de Rechtbank van uw rijverbod afgetrokken.</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>bij vluchtmisdrijf</li>
        <li>wanneer u door uw fout ernstige verwondingen of de dood hebt veroorzaakt</li>
        <li>bij het rijden zonder rijbewijs</li>
        <li>bij zware snelheidsovertredingen</li>
        <li>bij het rijden onder invloed van alcohol of drugs</li>
      </ul>
      <p className="mb-6">Best neemt u zo spoedig mogelijk met ons contact op zodat we dit kunnen voorkomen of inperken.</p>
    </ServicePageLayout>
  );
};

export default RijbewijsIngetrokken;
