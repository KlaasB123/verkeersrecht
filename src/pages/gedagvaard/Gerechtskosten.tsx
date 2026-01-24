import { FileWarning } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "VOOR WELKE RECHTBANK", href: "/gedagvaard/voor-welke-rechtbank" },
  { label: "VERLOOP VAN DE ZITTING", href: "/gedagvaard/verloop-van-de-zitting" },
  { label: "MEE NAAR DE ZITTING", href: "/gedagvaard/mee-naar-de-zitting" },
  { label: "VRIJSPRAAK", href: "/gedagvaard/vrijspraak" },
  { label: "VERZACHTENDE OMSTANDIGHEDEN", href: "/gedagvaard/verzachtende-omstandigheden" },
  { label: "VONNIS - BEROEP", href: "/gedagvaard/vonnis-beroep" },
  { label: "GERECHTSKOSTEN", href: "/gedagvaard/gerechtskosten" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/gedagvaard/rijverbod-en-inlevering-rijbewijs" },
];

const Gerechtskosten = () => {
  return (
    <ServicePageLayout title="Gerechtskosten" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        De gerechtskosten moeten door u worden betaald wanneer u veroordeeld bent. Ze bestaan uit de kosten van de gerechtsdeurwaarder en andere kosten (correspondentie, sleepkosten, kosten deskundige, enz.), een geïndexeerde vergoeding en een bijdrage voor het slachtofferfonds.
      </p>

      <p className="mb-6">
        De vergoeding bedraagt 50 euro en de bijdrage voor het Slachtofferfonds 150 euro. De Rechtbank moet deze bedragen altijd opleggen, behalve bij een vrijspraak. De bijdrage aan het Slachtofferfonds is wel pas verschuldigd vanaf een geldboete van 150 euro.
      </p>
    </ServicePageLayout>
  );
};

export default Gerechtskosten;
