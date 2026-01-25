import { Wine } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "RIJBEWIJS INGETROKKEN", href: "/teveel-gedronken/rijbewijs-ingetrokken" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/teveel-gedronken/rijverbod-en-inlevering-rijbewijs" },
  { label: "MEDISCHE EN/OF PSYCHOLOGISCHE PROEVEN", href: "/teveel-gedronken/medische-psychologische-proeven" },
  { label: "PRAKTISCHE EN THEORETISCHE HERSTELEXAMENS", href: "/teveel-gedronken/herstelexamens" },
];

const TeveelGedronken = () => {
  return (
    <ServicePageLayout title="Teveel gedronken?" icon={Wine} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Wanneer u met de auto bent, kan de politie u ondermeer een ademtest of een ademanalyse opleggen:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>bij een verkeersongeval</li>
        <li>bij het besturen van een voertuig of aan de begeleider met het oog op scholing</li>
        <li>bij het op het punt staan van het besturen van een voertuig op een openbare plaats</li>
      </ul>

      <p className="mb-6">
        U heeft teveel gedronken wanneer de ademtest een alcoholconcentratie van ten minste 0,22 milligram per liter uitgeademde lucht of 0,5 gram per liter bloed (promille) aangeeft.
      </p>

      <p className="mb-6">
        Uw rijbewijs zal 3 uren worden ingetrokken wanneer u ten minste 0,22 milligram (0,5 gram) en minder dan 0,35 milligram (0,8 gram) blaast. Blaast u meer dan 0,35 milligram of 0,8 gram zal u uw rijbewijs minstens 6 uren moeten afgeven.
      </p>

      <p className="mb-6">
        Opgepast, de toestellen van de politie geven enkel milligram per liter uitgeademde lucht aan. Wanneer u 0,35 ziet, betekent dit 0,8 promille! Vergis u dus niet, vaak denken mensen dat ze minder geblazen hebben dan het werkelijk was.
      </p>

      <p className="mb-6">
        Wanneer vastgesteld werd dat u gedronken hebt achter het stuur, zal er ongetwijfeld een dagvaarding voor de Politierechtbank volgen, tenzij het slechts een minieme hoeveelheid was. Tot 0,66 milligram (1,5 gram) wordt u in de regel beticht van alcoholintoxicatie. Boven 0,66 milligram of 1,5 gram zal het parket u dagvaarden voor dronkenschap. Voor de betichting dronkenschap wordt ook naar andere zaken gekeken die door de politie werden genoteerd, ondermeer uw uitzicht, adem, spraak, kledij, oriëntatie in tijd en ruimte, enz. De rechter zal met deze opmerkingen van de politie rekening houden.
      </p>

      <p className="mb-6">
        Het verschil tussen beide betichtingen alcoholintoxicatie en dronkenschap is belangrijk. In geval van dronkenschap zal de verzekeraar immers de door haar uitgekeerde schadevergoeding van u kunnen terugvorderen. Bij alcoholintoxicatie is dat niet zo.
      </p>

      <p className="mb-6">
        In de eerste plaats kijken wij na of er geen procedurefouten gebeurd zijn bij het afnemen van de ademtest en de ademanalyse. Zo er geen betwisting mogelijk is, streven wij er naar om de betichting dronkenschap om te zetten naar alcoholintoxicatie. U wil immers niet meemaken dat u alles moet terugbetalen aan de verzekering. De bestraffing is ook anders. De gemiddelde bestraffing bij alcoholintoxicatie is 1.200 euro geldboete en dikwijls een rijverbod van 8 tot 15 dagen. De gemiddelde bestraffing bij dronkenschap is 1.200 euro en een maand rijverbod. Hoe meer u gedronken heeft, hoe hoger de bestraffing. Er kan zelfs een alcoholslot worden opgelegd.
      </p>

      <p className="mb-6">
        Wanneer we kunnen aantonen dat er verzachtende omstandigheden waren, kunnen deze straffen worden verminderd. Het is dus belangrijk dat u dit alles grondig met ons bespreekt.
      </p>
    </ServicePageLayout>
  );
};

export default TeveelGedronken;
