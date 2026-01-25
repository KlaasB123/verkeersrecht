import { FileText } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "ONMIDDELLIJKE INNING", href: "/pv-ontvangen/onmiddellijke-inning" },
  { label: "BEVEL TOT BETALEN", href: "/pv-ontvangen/bevel-tot-betalen" },
  { label: "RIJBEWIJS INGETROKKEN", href: "/pv-ontvangen/rijbewijs-ingetrokken" },
  { label: "GELDBOETE", href: "/pv-ontvangen/geldboete" },
];

const RijbewijsIngetrokken = () => {
  return (
    <ServicePageLayout title="Rijbewijs ingetrokken" icon={FileText} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u veel te snel reed of bij een andere zware overtreding, kan het zijn dat u onmiddellijk uw rijbewijs moet afgeven. In beginsel is dit voor 15 dagen.
      </p>

      <p className="mb-6">
        Deze 15 dagen worden later door de Rechtbank van uw rijverbod afgetrokken. Als u dus 30 dagen rijverbod krijgt van de Rechtbank, hoeft u nog maar 15 dagen uw rijbewijs inleveren.
      </p>

      <p className="mb-6">
        Zo kan het rijbewijs ondermeer onmiddellijk worden ingetrokken:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>bij vluchtmisdrijf</li>
        <li>wanneer u door uw fout ernstige verwondingen of de dood hebt veroorzaakt</li>
        <li>bij het rijden zonder rijbewijs</li>
        <li>bij zware snelheidsovertredingen</li>
        <li>bij het rijden onder invloed van alcohol of drugs</li>
      </ul>

      <p className="mb-6">
        De Procureur des Konings (parket of openbaar ministerie) kan de intrekking verlengen door een vordering voor de Politierechtbank. De Politierechtbank zal over deze verlenging beslissen.
      </p>

      <p className="mb-6">
        Best neemt u zo spoedig mogelijk met ons contact op zodat we dit kunnen voorkomen of inperken.
      </p>
    </ServicePageLayout>
  );
};

export default RijbewijsIngetrokken;
