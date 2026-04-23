import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "INZITTENDEN - BESTUURDER", href: "/ongeval-gehad/inzittenden-bestuurder" },
  { label: "BURGERLIJKE PARTIJ", href: "/ongeval-gehad/burgerlijke-partij" },
  { label: "GEKWETST", href: "/ongeval-gehad/gekwetst" },
  { label: "RAADSGENEESHEER", href: "/ongeval-gehad/raadsgeneesheer" },
  { label: "MINNELIJKE MEDISCHE EXPERTISE OF MME", href: "/ongeval-gehad/minnelijke-medische-expertise" },
];

const OngevalGehad = () => {
  return (
    <ServicePageLayout title="Een ongeval gehad?" icon={Car} subLinks={subLinks} metaDescription="Verkeersongeval gehad? Advocaat verkeersrecht in Hasselt – Govarts helpt bij schadevergoeding, burgerlijke partijstelling en medische expertise in heel België.">
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u een verkeersongeval heeft gehad en u meent dat u in uw recht bent, is eventuele getuigen zoeken het eerste wat u moet doen. Dezen kunnen dan immers op objectieve wijze uw gelijk aantonen. Maak zoveel mogelijk foto's vanuit de vier hoeken. Trek een foto van de schade aan uw voertuig en dit aan het andere voertuig. Maak ook foto's van de brokstukken, glas, olie, koelvloeistof en remsporen.
      </p>

      <p className="mb-6">
        Wanneer er geen gekwetsten zijn, dient er een gemeenschappelijk ongevalsaangifte te worden ingevuld door alle betrokken bestuurders. Vul elke rubriek zorgvuldig in met de gevraagde gegevens. Plaats ook kruisjes aan de diverse verkeerssituaties die worden opgesomd en die van toepassing zijn en vermeldt het aantal kruisjes dat u heeft aangevinkt. Maak een zo goed mogelijke schets van de ongevalssituatie. Geef uw commentaar in het voorziene vakje. Onderteken de aangifte en laat deze eveneens ondertekenen door de andere bestuurder(s). Zorg dat u een exemplaar voor uzelf bekomt. Deze ongevalsaangifte dient zo spoedig mogelijk aan uw verzekeringsmakelaar te worden overgemaakt.
      </p>

      <p className="mb-6">
        Verwittig enkel de politie wanneer u meent dat u in uw recht bent en de andere bestuurder dit niet wil toegeven in de gemeenschappelijke ongevalsaangifte. Als het ongelijk van de andere bestuurder duidelijk blijkt uit de ongevalsaangifte, zal diens verzekeraar u vergoeden, ook al was er geen politie ter plaatse.
      </p>

      <p className="mb-6">
        Wanneer er gekwetsten zijn, zal normaal gezien de politie de nodige vaststellingen doen. Denk goed na over wat u verklaart aan de politie. U hoeft nooit uw ongelijk toe te geven. Wanneer u niets wenst te verklaren, meldt u dit aan de politie. Geef altijd een uitgebreide verklaring. Wanneer u bv. naar links moest afdraaien, vermeldt dan dat u in uw spiegel heeft gekeken, uw richtingaanwijzer heeft ontstoken en u daarna voorgesorteerd. Dan heeft u afgedraaid. Dikwijls zijn de verklaringen te kort, waardoor de Rechtbank denkt dat u bepaalde handelingen niet heeft uitgevoerd. Lees alleszins uw verklaring na en onderteken enkel wanneer uw verklaring correct wordt weergegeven. Vraag altijd kopie van uw verklaring.
      </p>

      <p className="mb-6">
        Als er politie geweest is, zal de Procureur des Konings beslissen wie er voor de Rechtbank dient te verschijnen.
      </p>

      <p className="mb-6">
        Best neemt u na een ongeval contact met ons op, zodat wij u verder kunnen informeren wat te doen. Hoe sneller wij u kunnen bijstaan, hoe groter de kans dat u uw gelijk kunt aantonen.
      </p>
    </ServicePageLayout>
  );
};

export default OngevalGehad;
