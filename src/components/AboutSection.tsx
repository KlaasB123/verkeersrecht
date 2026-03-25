import { CheckCircle2 } from "lucide-react";
import erwinPhoto from "@/assets/erwin-govarts.jpg";

const features = [
  "Grote expertise in verkeersrecht",
  "Snelle en efficiënte bijstand",
  "Persoonlijke benadering",
  "Eerste contact is gratis",
  "Begeleiding voor de Rechtbank",
  "Hulp bij schadevergoeding",
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
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Deze website legt uit hoe wij u helpen wanneer u in België een verkeersovertreding begaan heeft of betrokken bent in een verkeersongeval en schade hebt geleden. Wij zullen u helpen met een grote expertise, op een snelle en efficiënte wijze en via een persoonlijke benadering. Welk probleem u ook heeft, door onze bijstand zal u zich geholpen en ondersteund voelen.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Neem best zo spoedig mogelijk contact met ons op, zodat wij u verder kunnen begeleiden voor de Rechtbank of om uw schade te bekomen. Dit eerste contact is gratis. Ook kan u via de website een vraag stellen of een afspraak maken.
            </p>

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
