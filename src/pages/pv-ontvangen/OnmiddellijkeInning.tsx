import { FileText } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "ONMIDDELLIJKE INNING", href: "/pv-ontvangen/onmiddellijke-inning" },
  { label: "BEVEL TOT BETALEN", href: "/pv-ontvangen/bevel-tot-betalen" },
  { label: "RIJBEWIJS INGETROKKEN", href: "/pv-ontvangen/rijbewijs-ingetrokken" },
  { label: "GELDBOETE", href: "/pv-ontvangen/geldboete" },
];

const OnmiddellijkeInning = () => {
  return (
    <ServicePageLayout title="Onmiddellijke inning" icon={FileText} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Een onmiddellijke inning is een voorstel tot betaling van een geldboete. Betaalt u deze geldboete, zult u niet verder vervolgd worden. Het is altijd beter de onmiddellijke inning te betalen, anders komen er alleen maar kosten bij. Dit geldt uiteraard enkel wanneer u de overtreding niet betwist. Indien u niet tot betaling overgaat, ontvangt u een bevel tot betalen (zie BEVEL TOT BETALEN).
      </p>
    </ServicePageLayout>
  );
};

export default OnmiddellijkeInning;
