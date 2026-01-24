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

const Vrijspraak = () => {
  return (
    <ServicePageLayout title="Vrijspraak" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        In alle gevallen zullen wij eerst onderzoeken of het mogelijk is de vrijspraak te bekomen.
      </p>

      <p className="mb-6">
        Bij vrijspraak wordt u niet veroordeeld (bestraft), hoeft u geen gerechtskosten te betalen en bekomt u geen strafblad (blanco strafregister).
      </p>

      <p className="mb-6">
        Dit is onze eerste doelstelling bij uw verdediging.
      </p>

      <p className="mb-6">
        Vrijspraak kan wanneer niet bewezen wordt dat u de overtreding begaan heeft, in geval van procedurefouten of andere specifieke juridische omstandigheden (verjaring, enz.).
      </p>

      <p className="mb-6">
        Verjaring is geen vrijspraak maar geeft hetzelfde resultaat.
      </p>

      <p className="mb-6">
        Dit alles zal grondig door ons worden onderzocht. Er zal u in alle eerlijkheid worden verteld of en hoe groot de kans is dat de vrijspraak bekomen wordt.
      </p>
    </ServicePageLayout>
  );
};

export default Vrijspraak;
