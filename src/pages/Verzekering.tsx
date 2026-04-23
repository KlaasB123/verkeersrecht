import { Shield } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "TERUGVORDERING DOOR DE VERZEKERING", href: "/verzekering/terugvordering" },
  { label: "OMNIUMVERZEKERING", href: "/verzekering/omniumverzekering" },
];

const Verzekering = () => {
  return (
    <ServicePageLayout title="Een vraag over uw verzekering?" icon={Shield} subLinks={subLinks} metaDescription="Vraag over autoverzekering na een ongeval? Advocaat verkeersrecht in Hasselt – Govarts adviseert over terugvordering, omniumverzekering en BA in heel België.">
      <p className="text-lg leading-relaxed mb-6">
        Elk voertuig dient verplicht verzekerd te zijn in B.A. B.A. betekent burgerlijke aansprakelijkheid. M.a.w. wanneer u schade bij iemand anders veroorzaakt door een fout met uw voertuig, zal de verzekering deze schade vergoeden.
      </p>

      <p className="mb-6">
        Uw eigen schade (auto, kwetsuren, enz) wordt in dat geval niet betaald door de verzekering. De eigen schade wordt wel terugbetaald door de omniumverzekering. Dit is een niet-verplichte verzekering die u extra kunt nemen.
      </p>

      <p className="mb-6">
        Rijden zonder verzekering wordt streng bestraft.
      </p>

      <p className="mb-6">
        Wanneer iemand anders een ongeval veroorzaakt met zijn voertuig en u heeft schade geleden, zal diens verzekeraar u vergoeden. De begroting van de schade die u hebt geleden is een complex gegeven, waarvoor u best ons kunt raadplegen.
      </p>

      <p className="mb-6">
        Het is daarbij belangrijk dat u de nodige bewijzen kunt leveren van uw schade.
      </p>
    </ServicePageLayout>
  );
};

export default Verzekering;
