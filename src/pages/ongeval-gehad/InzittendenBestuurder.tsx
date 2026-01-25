import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "INZITTENDEN - BESTUURDER", href: "/ongeval-gehad/inzittenden-bestuurder" },
  { label: "BURGERLIJKE PARTIJ", href: "/ongeval-gehad/burgerlijke-partij" },
  { label: "GEKWETST", href: "/ongeval-gehad/gekwetst" },
  { label: "RAADSGENEESHEER", href: "/ongeval-gehad/raadsgeneesheer" },
  { label: "MINNELIJKE MEDISCHE EXPERTISE OF MME", href: "/ongeval-gehad/minnelijke-medische-expertise" },
];

const InzittendenBestuurder = () => {
  return (
    <ServicePageLayout title="Inzittenden - bestuurder" icon={Car} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Bent u gekwetst bij een verkeersongeval, laat u dan steeds zo spoedig mogelijk onderzoeken door een dokter of in het ziekenhuis (GEKWETST). Deze zal een attest m.b.t. kwetsuren afleveren, zodat hier later geen discussie meer over kan bestaan.
      </p>

      <p className="mb-6">
        Wanneer u als inzittende gekwetst wordt, zal de verzekering van degene die het ongeval veroorzaakt heeft, al uw schade vergoeden.
      </p>

      <p className="mb-6">
        Als uw eigen bestuurder het ongeval heeft veroorzaakt, wordt uw lichamelijke schade als inzittende vergoed door de verzekeraar van de bestuurder (niet de andere schade). Helaas wordt dit dikwijls vergeten.
      </p>

      <p className="mb-6">
        Als bestuurder wordt u volledig vergoed voor uw schade door de verzekeraar van diegene die het ongeval veroorzaakt heeft.
      </p>

      <p className="mb-6">
        Heeft uzelf een fout begaan, zal u niets trekken.
      </p>

      <p className="mb-6">
        Er bestaat een verzekering die uw eigen schade als bestuurder ook dekt. Dit kan voor slechts een kleine bijpremie bij uw gewone autoverzekering. Het is aan te raden deze dekking te nemen. Raadpleeg hiervoor uw verzekeringsmakelaar.
      </p>
    </ServicePageLayout>
  );
};

export default InzittendenBestuurder;
