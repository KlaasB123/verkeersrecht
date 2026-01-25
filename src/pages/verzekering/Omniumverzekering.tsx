import { Shield } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "TERUGVORDERING DOOR DE VERZEKERING", href: "/verzekering/terugvordering" },
  { label: "OMNIUMVERZEKERING", href: "/verzekering/omniumverzekering" },
];

const Omniumverzekering = () => {
  return (
    <ServicePageLayout title="Omniumverzekering" icon={Shield} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        De omniumverzekeraar vergoedt uw eigen schade, zelfs wanneer u zelf in fout bent.
      </p>
    </ServicePageLayout>
  );
};

export default Omniumverzekering;
