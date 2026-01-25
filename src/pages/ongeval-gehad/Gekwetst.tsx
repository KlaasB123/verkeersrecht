import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "INZITTENDEN - BESTUURDER", href: "/ongeval-gehad/inzittenden-bestuurder" },
  { label: "BURGERLIJKE PARTIJ", href: "/ongeval-gehad/burgerlijke-partij" },
  { label: "GEKWETST", href: "/ongeval-gehad/gekwetst" },
  { label: "RAADSGENEESHEER", href: "/ongeval-gehad/raadsgeneesheer" },
  { label: "MINNELIJKE MEDISCHE EXPERTISE OF MME", href: "/ongeval-gehad/minnelijke-medische-expertise" },
];

const Gekwetst = () => {
  return (
    <ServicePageLayout title="Gekwetst" icon={Car} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u gekwetst wordt tengevolge van een ongeval dat niet te wijten is aan uw fout, is het heel belangrijk dat u zich onmiddellijk laat onderzoeken door een geneesheer. Liefst laat u ook foto's (medische beeldvorming – radiologie) maken in het ziekenhuis. Zo krijgt u de nodige attesten om aan te tonen dat de kwetsuren die u heeft, het gevolg zijn van het ongeval.
      </p>

      <p className="mb-6">
        Het is immers niet ondenkbaar dat de verzekeraar die u moet vergoeden achteraf twijfelt of uw kwetsuren er wel gekomen zijn door het ongeval. U wil niet meemaken dat deze verzekeraar achteraf zegt dat u bv. van de trap bent gevallen en dat dit uw kwetsuren veroorzaakt heeft.
      </p>

      <p className="mb-6">
        Sommige kwetsuren duiken pas enkele dagen later op. Wanneer dit het geval is, gaat u ook best onmiddellijk naar de dokter.
      </p>

      <p className="mb-6">
        Hou altijd alles bij in een afzonderlijk mapje. Stop al uw uitgaven aan het ziekenhuis, de dokter, de apotheker, uw verplaatsingen, parkeergeld, enz. in dit mapje, dan kan u dit aan ons bezorgen. Wij gebruiken dit voor het opstellen van uw schadebegroting.
      </p>

      <p className="mb-6">
        Uw schade wordt immers maar vergoed wanneer u ze kunt bewijzen.
      </p>

      <p className="mb-6">
        Best neemt u of een familielid zo spoedig mogelijk na het ongeval met ons contact op, zodat wij ervoor kunnen zorgen dat u zich niets hoeft aan te trekken van deze administratieve en juridische beslommeringen. U heeft immers al andere zorgen genoeg.
      </p>

      <p className="mb-6">
        Wij helpen u dit leed en de ongemakken te verminderen. De kosten van de advocaat worden gedragen door de rechtsbijstand.
      </p>
    </ServicePageLayout>
  );
};

export default Gekwetst;
