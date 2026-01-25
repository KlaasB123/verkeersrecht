import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "INZITTENDEN - BESTUURDER", href: "/ongeval-gehad/inzittenden-bestuurder" },
  { label: "BURGERLIJKE PARTIJ", href: "/ongeval-gehad/burgerlijke-partij" },
  { label: "GEKWETST", href: "/ongeval-gehad/gekwetst" },
  { label: "RAADSGENEESHEER", href: "/ongeval-gehad/raadsgeneesheer" },
  { label: "MINNELIJKE MEDISCHE EXPERTISE OF MME", href: "/ongeval-gehad/minnelijke-medische-expertise" },
];

const Raadsgeneesheer = () => {
  return (
    <ServicePageLayout title="Raadsgeneesheer" icon={Car} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Een raadsgeneesheer is een dokter die u bijstaat om uw medische toestand (lichamelijke schade) te bepalen wanneer u gekwetst bent geraakt door een ongeval. Hij is gespecialiseerd in het bepalen van lichamelijke schade.
      </p>

      <p className="mb-6">
        Een gewone huisarts heeft als bedoeling u te genezen. Een raadsgeneesheer zal u niet genezen, hij zal wel uw lichamelijke schade bepalen, die naderhand door ons zal worden gebruikt voor het opstellen van de schadebegroting. De raadsgeneesheer is dus uw vertrouwensarts, die uw medische belangen verdedigt, net zoals uw advocaat uw juridische belangen verdedigt.
      </p>

      <p className="mb-6">
        Uw raadsgeneesheer zal u eerst uitnodigen voor een gesprek en een onderzoek. Hierdoor heeft hij op voorhand kennis van uw verhaal, uw medische voorgeschiedenis en uw medische toestand. Zodoende kan hij u beter verdedigen tijdens de daaropvolgende medische expertise.
      </p>

      <p className="mb-6">
        Wij helpen u bij het zoeken van de juiste raadsgeneesheer waar u zich goed bij voelt en die u kunt vertrouwen.
      </p>
    </ServicePageLayout>
  );
};

export default Raadsgeneesheer;
