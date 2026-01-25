import { FileText } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "ONMIDDELLIJKE INNING", href: "/pv-ontvangen/onmiddellijke-inning" },
  { label: "BEVEL TOT BETALEN", href: "/pv-ontvangen/bevel-tot-betalen" },
  { label: "RIJBEWIJS INGETROKKEN", href: "/pv-ontvangen/rijbewijs-ingetrokken" },
  { label: "GELDBOETE", href: "/pv-ontvangen/geldboete" },
];

const PvOntvangen = () => {
  return (
    <ServicePageLayout title="Een PV ontvangen?" icon={FileText} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u een verkeersovertreding begaan hebt, zult u vanwege de politie eerst een proces-verbaal (PV) met een antwoordformulier ontvangen. In het PV staan de vaststellingen opgesomd (voertuig, nummerplaat, snelheid, enz.) en meestal ook de te betalen geldboete (onmiddellijke inning). Op het antwoordformulier wordt u gevraagd allerhande gegevens op te schrijven. Het parket (openbaar ministerie) weet zo wie er gereden heeft en dus de geldboete zal toegestuurd krijgen wanneer u het niet was. Betaalt u de onmiddellijke inning niet, zal het parket (openbaar ministerie) een bevel geven tot betalen.
      </p>

      <p className="mb-6">
        Behalve wanneer u de overtreding betwist, is het aangewezen de voorgestelde geldboete te betalen. Anders wordt u nadien voor de rechtbank gedagvaard en dat brengt enkel meer kosten met zich mee. Laat even door ons onderzoeken of er betwisting mogelijk is vooraleer u tot betaling overgaat. Ons advies is gratis.
      </p>

      <p className="mb-6">
        U wordt altijd gedagvaard voor de rechtbank wanneer u meer dan 40 km per uur boven de toegelaten snelheid reed en meer dan 30 km per uur in de bebouwde kom (waar u 50 km per uur of minder mag rijden). Ook zijn er bepaalde zware overtredingen waarvoor geen te betalen geldboete wordt aangeboden maar waar onmiddellijk gedagvaard wordt.
      </p>
    </ServicePageLayout>
  );
};

export default PvOntvangen;
