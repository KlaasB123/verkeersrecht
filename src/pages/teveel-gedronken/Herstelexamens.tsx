import { Wine } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "RIJBEWIJS INGETROKKEN", href: "/teveel-gedronken/rijbewijs-ingetrokken" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/teveel-gedronken/rijverbod-en-inlevering-rijbewijs" },
  { label: "MEDISCHE EN/OF PSYCHOLOGISCHE PROEVEN", href: "/teveel-gedronken/medische-psychologische-proeven" },
  { label: "PRAKTISCHE EN THEORETISCHE HERSTELEXAMENS", href: "/teveel-gedronken/herstelexamens" },
];

const Herstelexamens = () => {
  return (
    <ServicePageLayout title="Praktische en theoretische herstelexamens" icon={Wine} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        In bepaalde gevallen kan de Rechtbank u verplichten praktische of theoretische rijexamen af te leggen vooraleer u uw rijbewijs terug kunt krijgen.
      </p>
      <p className="mb-6">U moet dan opnieuw uw theoretisch of praktisch rijbewijs behalen na het volgen van lessen in een erkende rijschool.</p>
      <p className="mb-6">De Rechtbank laat meestal kiezen welk examen u dient af te leggen. Dit wordt uiteraard eerst door ons met u besproken.</p>
    </ServicePageLayout>
  );
};

export default Herstelexamens;
