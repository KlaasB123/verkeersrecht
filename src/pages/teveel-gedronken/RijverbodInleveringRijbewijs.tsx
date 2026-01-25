import { Wine } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "RIJBEWIJS INGETROKKEN", href: "/teveel-gedronken/rijbewijs-ingetrokken" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/teveel-gedronken/rijverbod-en-inlevering-rijbewijs" },
  { label: "MEDISCHE EN/OF PSYCHOLOGISCHE PROEVEN", href: "/teveel-gedronken/medische-psychologische-proeven" },
  { label: "PRAKTISCHE EN THEORETISCHE HERSTELEXAMENS", href: "/teveel-gedronken/herstelexamens" },
];

const RijverbodInleveringRijbewijs = () => {
  return (
    <ServicePageLayout title="Rijverbod en inlevering rijbewijs" icon={Wine} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u veel te snel reed of een andere zware overtreding begaan heeft, kan het zijn dat de rechter u een rijverbod zal opleggen.
      </p>
      <p className="mb-6">Wij streven er altijd naar dat u geen rijverbod zult krijgen, dat dit zo kort mogelijk is of dat dit enkel in het weekend geldt.</p>
      <p className="mb-6">Als u uw rijbewijs moet inleveren, gebeurt dat op de griffie van de Politierechtbank waar u veroordeeld bent.</p>
    </ServicePageLayout>
  );
};

export default RijverbodInleveringRijbewijs;
