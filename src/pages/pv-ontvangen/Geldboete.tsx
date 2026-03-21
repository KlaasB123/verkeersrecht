import { FileText } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "ONMIDDELLIJKE INNING", href: "/pv-ontvangen/onmiddellijke-inning" },
  { label: "BEVEL TOT BETALEN", href: "/pv-ontvangen/bevel-tot-betalen" },
  { label: "RIJBEWIJS INGETROKKEN", href: "/pv-ontvangen/rijbewijs-ingetrokken" },
  { label: "GELDBOETE", href: "/pv-ontvangen/geldboete" },
];

const Geldboete = () => {
  return (
    <ServicePageLayout title="Geldboete" icon={FileText} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        De geldboete hangt af van de snelheid die u reed of de overtreding die u begaan heeft. Hoe sneller u reed of hoe zwaarder de overtreding, hoe hoger de boete en het rijverbod. Het leidt ons te ver om alle geldboetes voor alle overtredingen op te sommen.
      </p>

      <p className="mb-6">
        U kan er een aantal zelf berekenen via{" "}
        <a href="http://www.wegcode.be/boeteberekening" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          http://www.wegcode.be/boeteberekening
        </a>
      </p>

      <p className="mb-6">
        Ook vindt u ze op de website{" "}
        <a href="http://wegcode.be/wetteksten/secties/wetten/verkeerswet/456-t4hs2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          http://wegcode.be/wetteksten/secties/wetten/verkeerswet/456-t4hs2
        </a>
      </p>

      <p className="mb-6">
        U kan ons hiervoor altijd bellen.
      </p>

      <p className="mb-6">
        Vanaf 40 km per uur boven de toegelaten snelheid en 30 km per uur in de bebouwde kom, wordt u gedagvaard voor de rechtbank. De rechtbank zal dan de geldboete en een eventueel rijverbod bepalen. De door de rechtbank opgelegde geldboete dient steeds met 6 opdeciemen vermenigvuldigd te worden (bv. een geldboete van 50 euro = 50 x 6 = 300 euro).
      </p>

      <p className="mb-6">
        Wordt u gedagvaard, is het heel belangrijk dat u zich in dat geval door ons laat bijstaan.
      </p>
    </ServicePageLayout>
  );
};

export default Geldboete;
