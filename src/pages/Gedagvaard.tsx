import { FileWarning } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SummonForm } from "@/components/SummonForm";

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

const Gedagvaard = () => {
  return (
    <ServicePageLayout title="Gedagvaard?" icon={FileWarning} subLinks={subLinks} metaDescription="Gedagvaard voor de politierechtbank? Advocatenkantoor Govarts helpt u met meer dan 30 jaar ervaring in verkeersrecht. Gratis eerste contact.">
      <p className="text-lg leading-relaxed mb-6">
        Een dagvaarding is de oproeping via de gerechtsdeurwaarder om te verschijnen voor de Rechtbank (in verkeerszaken de Politierechtbank) voor een overtreding die u begaan heeft. Opgepast, dit zal meestal ongeveer binnen de tien dagen zijn. Het kan ook korter maar nooit minder dan drie dagen. U heeft dus niet veel tijd.
      </p>

      <p className="mb-6">
        Hebt u een dagvaarding ontvangen, dan kan u uw makelaar contacteren met de vraag of u een rechtsbijstandsverzekering hebt afgesloten. In de meeste gevallen is dat zo. U kan dan zelf uw eigen advocaat kiezen. U kunt dus altijd ons kantoor laten aanstellen.
      </p>

      <p className="mb-6">
        Wij kunnen ook zelf contact opnemen met de verzekering. U stuurt dan gewoon de dagvaarding, uw merk voertuig, nummerplaat en polisnummer door en wij zorgen voor de aangifte.
      </p>

      <p className="mb-6">
        Wij worden volledig door de verzekering betaald en kosten u dus niets. De makelaar zal aangifte doen bij de verzekeringsmaatschappij, die ons dan zal verwittigen. U kan ons ook altijd rechtstreeks contacteren, dan doen wij zelf de aangifte. In dat geval is het belangrijk dat u ons de dagvaarding en uw polisnummer van de verzekering alsook de nummerplaat van uw wagen bezorgt.
      </p>

      <p className="mb-6">
        Wij maken dan een afspraak voor een eerste gesprek waarin we de omstandigheden van de overtreding overlopen en een aantal vragen stellen over uw persoonlijke omstandigheden (bv. is het de eerste keer dat u moet voorkomen, waarom was u gehaast, was u gestresseerd, kan u uw rijbewijs missen, enz.). Aan de hand van deze gegevens zorgen wij ervoor dat we een verhaal kunnen vertellen aan de rechtbank, zodat u geen nummer bent.
      </p>

      <p className="mb-6">
        Hierna gaan we het strafdossier inzien op de griffie van de politierechtbank. We onderzoeken een aantal juridische elementen zoals de verjaring, procedurefouten, enz. Ook kijken wij na of de overtreding te betwisten valt.
      </p>

      <p className="mb-6">
        Na de inzage ontvangt u een brief met het verzoek nogmaals een afspraak te maken. Op deze afspraak wordt u geïnformeerd over de inhoud van het strafdossier en bespreken we de strategie van de verdediging en de mogelijke bestraffing.
      </p>

      <p className="mb-8">
        Er wordt ook grondig nagedacht of u wel of niet op de zitting aanwezig dient te zijn. Soms is het beter van wel, soms ook niet. Sommige mensen zeggen te veel tegen de Rechter, sommigen klappen volledig toe. Anderen kunnen het dan weer heel geloofwaardig vertellen. Wij zullen u adviseren of het aangewezen is om mee te komen of niet. Er wordt eventueel een en ander op papier gezet, waarvan u uiteraard kopie ontvangt. Zo herinnert de Rechtbank zich wat er op de zitting gezegd werd. Meestal zijn er meer dan 50 zaken op zo'n zitting, dus dit kan zeker nuttig zijn.
      </p>

      <div className="mt-12">
        <SummonForm />
      </div>
    </ServicePageLayout>
  );
};

export default Gedagvaard;
