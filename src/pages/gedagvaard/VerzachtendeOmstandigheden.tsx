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

const VerzachtendeOmstandigheden = () => {
  return (
    <ServicePageLayout title="Verzachtende omstandigheden" icon={FileWarning} subLinks={subLinks}>
      <p className="text-lg leading-relaxed mb-6">
        Verzachtende omstandigheden zijn bepaalde door ons aan te halen argumenten die ervoor zorgen dat de Rechtbank u lager zal bestraffen. Zonder verzachtende omstandigheden zou u m.a.w een hoger straf krijgen.
      </p>

      <p className="mb-6">
        De verzachtende omstandigheden zijn voor iedereen anders. Deze kunnen afhangen van uw gezinssituatie, uw werkomstandigheden, uw gemoedstoestand, de verkeersomstandigheden, enz.
      </p>

      <p className="mb-6">
        Het ontbreken van een eerdere veroordeling is natuurlijk ook een verzachtende omstandigheid. Iedereen verdient een tweede kans.
      </p>

      <p className="mb-6">
        Het is dus belangrijk dat wij eerst grondig met u overleggen om uw verzachtende omstandigheden te kennen.
      </p>
    </ServicePageLayout>
  );
};

export default VerzachtendeOmstandigheden;
