import { UserCheck } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const GratisAdvocaat = () => {
  return (
    <ServicePageLayout title="Gratis advocaat" icon={UserCheck}>
      <p className="text-lg leading-relaxed mb-6">
        U bent gedagvaard en u vraagt zich af of u een advocaat nodig hebt en wat dit gaat kosten. Heeft u een advocaat nodig? Is dit wel nuttig? Zeer zeker. Zelfs al kan u het goed uitleggen, is het toch veel beter dat wij u bijstaan.
      </p>

      <p className="mb-6">
        Vergelijk het met een tandarts. Iedereen kan zijn tanden poetsen, maar voor het trekken van een tand gaat u toch ook naar een tandarts. Hetzelfde geldt voor een advocaat. Voor de rechtbank laat u zich beter door ons bijstaan.
      </p>

      <p className="mb-6">Wij onderzoeken:</p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>of de feiten te betwisten vallen</li>
        <li>of de zaak verjaard is</li>
        <li>of er procedurefouten gemaakt zijn</li>
        <li>of er verzachtende omstandigheden kunnen aangehaald worden</li>
        <li>of er beroep moet aangetekend worden</li>
        <li>of het rijverbod in de weekends of in uw vakantie kan vallen</li>
      </ul>

      <p className="mb-6">
        U spaart een verlofdag uit en hoeft de stress van een zitting niet te ondergaan. De bestraffing zal zeker lager zijn dan wanneer u alleen naar de zitting zou gaan. Kortom, onze aanstelling is zeer zeker een meerwaarde.
      </p>

      <p className="mb-6">
        Wat gaat u dit kosten? Dit kost niets wanneer u verzekerd bent in rechtsbijstand.
      </p>

      <p className="mb-6">
        In de meeste gevallen beschikt u immers over dergelijke rechtsbijstandsverzekering. Alle auto's moeten verzekerd zijn voor ongevallen en bij deze verzekering hoort meestal een rechtsbijstandsverzekering. Deze verzekering betaalt alle kosten van een advocaat.
      </p>

      <p className="mb-6">
        U kunt dan zelf kiezen welke advocaat u wil. U kunt dus perfect ons kantoor aanstellen. Dit kost u niets.
      </p>
    </ServicePageLayout>
  );
};

export default GratisAdvocaat;
