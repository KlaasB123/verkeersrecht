import { FileWarning, FileText, Car, Shield, Wine, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileWarning,
    title: "Gedagvaard?",
    description: "Ontvangen u een dagvaarding voor de politierechtbank? Wij staan u bij.",
    href: "/gedagvaard",
  },
  {
    icon: FileText,
    title: "Een PV ontvangen?",
    description: "Geconfronteerd met een proces-verbaal? Laat ons u adviseren over uw opties.",
    href: "/pv-ontvangen",
  },
  {
    icon: Car,
    title: "Een ongeval gehad?",
    description: "Betrokken bij een verkeersongeval? Wij helpen u uw schade te verhalen.",
    href: "/ongeval-gehad",
  },
  {
    icon: Shield,
    title: "Vraag over verzekering?",
    description: "Vragen over uw autoverzekering of dekking? Wij geven u helder advies.",
    href: "/verzekering",
  },
  {
    icon: Wine,
    title: "Teveel gedronken?",
    description: "Betrapt op rijden onder invloed? Wij kennen de wetgeving en verdedigen u.",
    href: "/teveel-gedronken",
  },
  {
    icon: UserCheck,
    title: "Gratis advocaat",
    description: "Komt u in aanmerking voor gratis rechtsbijstand? Wij informeren u.",
    href: "/gratis-advocaat",
  },
];

export const ServiceCards = () => {
  return (
    <section className="py-20 bg-background" id="vragen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            HOE KUNNEN WIJ U HELPEN?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Welk probleem u ook heeft, door onze bijstand zal u zich geholpen en ondersteund voelen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.href} key={service.title}>
              <Card 
                className="group cursor-pointer card-hover border-border bg-card h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
