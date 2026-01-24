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

const MeeNaarZitting = () => {
  return (
    <ServicePageLayout title="Mee naar de zitting" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Als u meegaat naar de zitting, zullen we een bepaald uur afspreken hoe laat u er wordt verwacht. Zo hoeft u niet nodeloos te wachten. Als de zaak wordt opgeroepen, komt u op ons verzoek naar voor. Links zetelt het openbaar ministerie, in het midden de Rechter en rechts de griffier. De Rechter zal u vragen wat er gebeurd is. U doet uw verhaal en spreekt de Rechter aan met "meneer of mevrouw de Voorzitter".
      </p>

      <p className="mb-6">
        Daarna mag u gaan zitten en volgt de vordering van de Procureur (parket of openbaar ministerie) en onze pleidooien. Na het pleidooi gaat u rechtstaan en vraagt de Rechter of u hieraan nog iets wil toevoegen. Er zal op voorhand worden besproken wat u kunt zeggen.
      </p>

      <p className="mb-6">
        Als de feiten niet te betwisten zijn, is het altijd goed te zeggen dat het u spijt en dat u in het vervolg beter zult opletten. De Rechter zal dit zeker op prijs stellen bij het nadenken over de straf.
      </p>
    </ServicePageLayout>
  );
};

export default MeeNaarZitting;
