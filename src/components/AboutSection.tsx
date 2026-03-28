import { CheckCircle2, GraduationCap } from "lucide-react";
import erwinPhoto from "@/assets/erwin-govarts.jpg";

const features = [
  "Meer dan 30 jaar ervaring",
  "Specialist verkeersrecht",
  "Persoonlijke benadering",
  "Eerste contact is gratis",
  "Actief voor elke rechtbank in België",
  "Ook handels- en aannemingsrecht",
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-card" id="over-ons">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-navy-light font-semibold text-sm uppercase tracking-wider mb-3">
              Over ons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Erwin Govarts
              <span className="block text-lg font-normal text-muted-foreground mt-2">
                Advocatenkantoor Govarts BV
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Met meer dan 30 jaar ervaring aan de balie van Limburg is Erwin Govarts een van de meest doorgewinterde specialisten in het verkeersrecht in België. Sinds de oprichting van zijn kantoor in 1993 heeft hij duizenden cliënten bijgestaan in uiteenlopende verkeerszaken — van rijverboden en alcoholintoxicatie tot verkeersongevallen en complexe schadedossiers.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Zijn jarenlange expertise vertaalt zich in een grondige kennis van de verkeersregelgeving, de rechtspraak en de praktische realiteit van de Belgische rechtbanken. Naast verkeersrecht is hij eveneens actief in handelsrecht, aannemingsrecht en burgerlijke aansprakelijkheid. Erwin Govarts staat bekend om zijn nauwgezette aanpak, zijn oog voor detail en zijn vasthoudendheid in het verdedigen van de belangen van zijn cliënten — voor elke rechtbank in België.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Een verkeersrechtelijk probleem kan ingrijpende gevolgen hebben voor uw dagelijks leven en professionele situatie. Erwin Govarts begrijpt de ernst van die situatie en biedt u de juridische expertise die u verdient — helder, doelgericht en zonder omwegen. Het eerste contact is gratis en vrijblijvend.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <GraduationCap className="w-5 h-5 text-navy-light" />
              <span className="text-sm italic">Afgestudeerd aan de KU Leuven</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy-light flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={erwinPhoto}
              alt="Erwin Govarts – Advocatenkantoor Govarts BV"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
