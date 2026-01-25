import { FileText } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "ONMIDDELLIJKE INNING", href: "/pv-ontvangen/onmiddellijke-inning" },
  { label: "BEVEL TOT BETALEN", href: "/pv-ontvangen/bevel-tot-betalen" },
  { label: "RIJBEWIJS INGETROKKEN", href: "/pv-ontvangen/rijbewijs-ingetrokken" },
  { label: "GELDBOETE", href: "/pv-ontvangen/geldboete" },
];

const BevelTotBetalen = () => {
  return (
    <ServicePageLayout title="Bevel tot betalen" icon={FileText} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Vanaf 1 januari 2013 zullen niet betaalde onmiddellijke inningen afgehandeld worden met een bevel tot betalen van het parket (openbaar ministerie). Het bevel tot betalen wordt u per gerechtsbrief toegezonden. U moet de geldsom binnen de 45 dagen betalen.
      </p>

      <p className="mb-6">
        Wanneer u het niet eens bent, dient er een gemotiveerd bezwaar aangetekend te worden bij de procureur des Konings (parket) binnen de 30 dagen. Als u geen bezwaar aantekent binnen de 30 dagen na verzending van het bevel en de boete blijft onbetaald, dan kan dit worden ingevorderd via de belastingen.
      </p>

      <p className="mb-6">
        Het is heel belangrijk dat u dit bezwaar door ons laat opstellen, omdat er aan een aantal vormvoorschriften moeten worden voldaan. Indien het parket het bezwaar niet aanvaardt zal u gedagvaard worden en zal de rechtbank uitspraak doen.
      </p>
    </ServicePageLayout>
  );
};

export default BevelTotBetalen;
