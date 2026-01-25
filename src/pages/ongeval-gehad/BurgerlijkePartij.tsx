import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "INZITTENDEN - BESTUURDER", href: "/ongeval-gehad/inzittenden-bestuurder" },
  { label: "BURGERLIJKE PARTIJ", href: "/ongeval-gehad/burgerlijke-partij" },
  { label: "GEKWETST", href: "/ongeval-gehad/gekwetst" },
  { label: "RAADSGENEESHEER", href: "/ongeval-gehad/raadsgeneesheer" },
  { label: "MINNELIJKE MEDISCHE EXPERTISE OF MME", href: "/ongeval-gehad/minnelijke-medische-expertise" },
];

const BurgerlijkePartij = () => {
  return (
    <ServicePageLayout title="Burgerlijke partij" icon={Car} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u schade geleden hebt door een verkeersongeval, kunt u deze schade verhalen op (de verzekering van) de dader. Dit gebeurt door u burgerlijke partij te stellen voor de Rechtbank waar de dader dient te verschijnen. Wij doen het nodige om u te helpen en stellen een schadebegroting op. Deze schade bestaat uit uw voertuigschade en uw lichamelijke schade (zie RAADSGENEESHEER). Tevens zullen we na een grondig onderzoek alle andere schadeposten begroten. Dikwijls heeft u op veel meer schadevergoeding recht, dan u zou vermoeden. U neemt hiervoor best contact met ons op.
      </p>
    </ServicePageLayout>
  );
};

export default BurgerlijkePartij;
