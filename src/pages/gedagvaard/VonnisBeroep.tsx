import { FileWarning } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const subLinks = [
  { label: "VOOR WELKE RECHTBANK", href: "/gedagvaard/voor-welke-rechtbank" },
  { label: "VERLOOP VAN DE ZITTING", href: "/gedagvaard/verloop-van-de-zitting" },
  { label: "MEE NAAR DE ZITTING", href: "/gedagvaard/mee-naar-de-zitting" },
  { label: "VRIJSPRAAK", href: "/gedagvaard/vrijspraak" },
  { label: "VERZACHTENDE OMSTANDIGHEDEN", href: "/gedagvaard/verzachtende-omstandigheden" },
  { label: "VONNIS - BEROEP", href: "/gedagvaard/vonnis-beroep" },
  { label: "GERECHTSKOSTEN", href: "/gedagvaard/gerechtskosten" },
  { label: "RIJVERBOD EN INLEVERING RIJBEWIJS", href: "/gedagvaard/rijverbod-en-inlevering-rijbewijs" },
];

const VonnisBeroep = () => {
  return (
    <ServicePageLayout title="Vonnis - beroep" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Het vonnis is de uitspraak van de Rechtbank waarin vermeld staat of de Rechtbank de feiten bewezen acht en zo ja, welke bestraffing er wordt opgelegd. Het vonnis wordt soms de dag van de zitting uitgesproken of anders op een latere datum. Op deze latere datum hoeft u niet aanwezig te zijn.
      </p>

      <p className="mb-6">
        U kunt hoger beroep aantekenen tegen het uitgesproken vonnis wanneer u het niet eens bent. Dit dient te gebeuren binnen de 15 dagen na de uitspraak.
      </p>

      <p className="mb-6">
        Na de uitspraak maken we een nieuwe afspraak en bespreken we de mogelijkheid om beroep aan te tekenen.
      </p>

      <p className="mb-6">
        In beroep worden de feiten opnieuw bekeken en beoordeeld door een andere Rechtbank. U krijgt dus een nieuwe kans. Het zal grondig worden onderzocht of het zin heeft om beroep aan te tekenen. Ofwel om een vrijspraak te bekomen, ofwel een lagere bestraffing. Het parket kan eveneens beroep instellen, maar dat gebeurt niet vaak wanneer er geen vrijspraak is geweest.
      </p>

      <p className="mb-6">
        Ook de procedure in beroep wordt door de rechtsbijstandsverzekering betaald.
      </p>

      <p className="mb-6">
        Door het hoger beroep komt de zaak voor de Correctionele Rechtbank. De straf uitgesproken door de Politierechtbank wordt hierdoor niet uitgevoerd. U hoeft dus niets te betalen en uw rijbewijs niet in te leveren totdat de rechter in beroep een beslissing heeft genomen.
      </p>
    </ServicePageLayout>
  );
};

export default VonnisBeroep;
