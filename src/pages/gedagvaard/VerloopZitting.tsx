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

const VerloopZitting = () => {
  return (
    <ServicePageLayout title="Verloop van de zitting" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Op de dag van de zitting spreken we af aan de Politierechtbank op een bepaald uur (indien u zelf meegaat – zie MEE NAAR DE ZITTING). Eerst wordt u naar voor geroepen door de Voorzitter van de Rechtbank en wordt u ondervraagd over de feiten. Daarna vordert de Procureur een bestraffing, waarna wij de zaak pleiten. Sommige rechtbanken spreken onmiddellijk vonnis uit, andere rechtbanken geven de datum waarop de uitspraak wordt gedaan. U kan altijd de dag van de zitting bellen naar ons kantoor voor uitleg over de zitting. Wij sturen ook steeds een brief over het verloop van de zitting.
      </p>
    </ServicePageLayout>
  );
};

export default VerloopZitting;
