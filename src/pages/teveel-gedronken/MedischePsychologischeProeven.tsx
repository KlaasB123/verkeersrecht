import { Wine } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "RIJBEWIJS INGETROKKEN", href: "/teveel-gedronken/rijbewijs-ingetrokken" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/teveel-gedronken/rijverbod-en-inlevering-rijbewijs" },
  { label: "MEDISCHE EN/OF PSYCHOLOGISCHE PROEVEN", href: "/teveel-gedronken/medische-psychologische-proeven" },
  { label: "PRAKTISCHE EN THEORETISCHE HERSTELEXAMENS", href: "/teveel-gedronken/herstelexamens" },
];

const MedischePsychologischeProeven = () => {
  return (
    <ServicePageLayout title="Medische en/of psychologische proeven" icon={Wine} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Bij sommige zware overtredingen (vooral bij dronkenschap en rijden onder invloed van drugs) wordt er door de Rechtbank een medisch en/of psychologisch herstelonderzoek (herstelproeven) opgelegd.
      </p>
      <p className="mb-6">De kostprijs van een medisch onderzoek bedraagt in principe 91 euro en van een psychologisch onderzoek 308 euro.</p>
      <p className="mb-6">Het is belangrijk dat u zo goed mogelijk meewerkt en u zo sympathiek mogelijk opstelt.</p>
    </ServicePageLayout>
  );
};

export default MedischePsychologischeProeven;
