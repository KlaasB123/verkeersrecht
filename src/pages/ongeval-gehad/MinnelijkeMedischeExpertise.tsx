import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "INZITTENDEN - BESTUURDER", href: "/ongeval-gehad/inzittenden-bestuurder" },
  { label: "BURGERLIJKE PARTIJ", href: "/ongeval-gehad/burgerlijke-partij" },
  { label: "GEKWETST", href: "/ongeval-gehad/gekwetst" },
  { label: "RAADSGENEESHEER", href: "/ongeval-gehad/raadsgeneesheer" },
  { label: "MINNELIJKE MEDISCHE EXPERTISE OF MME", href: "/ongeval-gehad/minnelijke-medische-expertise" },
];

const MinnelijkeMedischeExpertise = () => {
  return (
    <ServicePageLayout title="Minnelijke medische expertise of MME" icon={Car} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Na het ongeval en nadat u uitbehandeld bent (de periode van genezing is voltooid en de letsels zijn geconsolideerd), zal de verzekeraar u uitnodigen op de minnelijke medische expertise (kortweg: M.M.E.). Dit is een medisch onderzoek dat zal plaatsvinden op een locatie bepaald door de verzekeraar.
      </p>

      <p className="mb-6">
        De verzekeraar zal u onderzoeken en uw medisch dossier opvragen.
      </p>

      <p className="mb-6">
        De dokter van de verzekeraar die u onderzoekt, wordt betaald door de verzekeraar en zal de belangen van de verzekeraar verdedigen.
      </p>

      <p className="mb-6">
        Daarom is het van groot belang dat u zich laat bijstaan door een eigen raadsgeneesheer die uw belangen verdedigt.
      </p>

      <p className="mb-6">
        Wij wijzen u erop dat de minnelijke medische expertise die plaatsvindt buiten de Rechtbank om, niet steeds de beste weg is om uw rechten te vrijwaren. In sommige gevallen is het beter een gerechtelijke medische expertise te laten doorgaan. Wij lichten u graag in over de voor- en nadelen van beide opties.
      </p>

      <p className="mb-6">
        Wij stellen u de juiste raadsgeneesheer voor en verzorgen de volledige opvolging van uw schadedossier.
      </p>
    </ServicePageLayout>
  );
};

export default MinnelijkeMedischeExpertise;
