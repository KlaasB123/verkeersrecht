import { Shield } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "TERUGVORDERING DOOR DE VERZEKERING", href: "/verzekering/terugvordering" },
  { label: "OMNIUMVERZEKERING", href: "/verzekering/omniumverzekering" },
];

const Terugvordering = () => {
  return (
    <ServicePageLayout title="Terugvordering door de verzekering - verhaal - regres" icon={Shield} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Regres of verhaal zijn andere woorden voor de terugvordering door de verzekeraar van de schadevergoeding die ze heeft uitgekeerd aan een slachtoffer van een ongeval dat door u werd veroorzaakt. M.a.w. zal de verzekeraar eerst het slachtoffer vergoeden en daarna de uitbetaalde som van u terugvorderen.
      </p>
      <p className="mb-6">Dit gebeurt voornamelijk wanneer een ongeval veroorzaakt wordt in geval van:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>dronkenschap</li>
        <li>drugs</li>
        <li>rijden zonder rijbewijs</li>
        <li>niet betalen van de premie</li>
        <li>opzettelijk veroorzaken van het ongeval</li>
        <li>snelheidswedstrijden (bv. straatraces)</li>
        <li>opzettelijk verzwijgen bij het afsluiten van de verzekering</li>
      </ul>
      <p className="mb-6">
        De terugvordering is bij wet beperkt tot bepaalde bedragen. Zo kan de uitbetaling door de verzekeraar volledig worden teruggevorderd tot +/- 10.500 euro. Vanaf 10.500 euro wordt maar de helft teruggevorderd tot een maximum van +/- 31.000 euro.
      </p>
    </ServicePageLayout>
  );
};

export default Terugvordering;
