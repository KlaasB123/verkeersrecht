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

const RijverbodInleveringRijbewijs = () => {
  return (
    <ServicePageLayout title="Rijverbod en inlevering rijbewijs" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u veel te snel reed of een andere zware overtreding begaan heeft, kan het zijn dat de rechter u een rijverbod zal opleggen.
      </p>

      <p className="mb-6">
        Wij streven er altijd naar dat u geen rijverbod zult krijgen, dat dit zo kort mogelijk is of dat dit enkel in het weekend geldt. Zo kan u tijdens de week toch op uw werk geraken.
      </p>

      <p className="mb-6">
        Een rijverbod gaat pas in na een paar maanden na uw definitieve veroordeling.
      </p>

      <p className="mb-6">
        Soms kunt u de periode kiezen wanneer u uw rijbewijs dient in te leveren. Neem daarvoor contact met ons op.
      </p>

      <p className="mb-6">
        Als u uw rijbewijs moet inleveren, gebeurt dat op de griffie van de Politierechtbank waar u veroordeeld bent.
      </p>

      <p className="mb-6">
        De politie zal u het document met de mededeling dat het rijverbod ingaat, komen afgeven. U dient dan binnen de 4 werkdagen uw rijbewijs in te leveren, samen met het document van de politie, op de griffie van de Politierechtbank. De griffie is open van 8u30 tot 12u30 en van 13u30 tot 16u. Indien u het rijbewijs niet zelf kunt gaan afgeven, mag dit ook door iemand anders gebeuren.
      </p>

      <p className="mb-6">
        De griffie zal zeggen wanneer u het rijbewijs terug kunt afhalen. Dit wordt u niet opgestuurd, dus hou daar rekening mee. Wel kan u het door iemand anders met een volmacht laten afhalen. Deze volmacht wordt door u ondertekend en de naam vandiegene die het rijbewijs in uw plaats gaat afhalen, dient u te vermelden.
      </p>

      <p className="mb-6">
        Wanneer uw rijverbod enkel geldt in het weekend en op feestdagen, gaat u uw rijbewijs afgeven op de griffie van de Politierechtbank, waarna u een attest ontvangt. Met dit attest en twee pasfoto's begeeft u zich naar uw gemeente (dienst rijbewijzen), waar u een tijdelijk rijbewijs ontvangt dat enkel geldig is op de weekdagen. U mag niet rijden van vrijdag 20u tot zondag 20u (hetzelfde op een feestdag).
      </p>

      <p className="mb-6">
        Nadat het rijverbod voorbij is, kunt u uw echt rijbewijs terug afhalen op de griffie van de Politierechtbank.
      </p>
    </ServicePageLayout>
  );
};

export default RijverbodInleveringRijbewijs;
