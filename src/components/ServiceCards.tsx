import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import gedagvaardImg from "@/assets/gedagvaard.webp";
import pvImg from "@/assets/pv.webp";
import ongevalImg from "@/assets/ongeval.jpg";
import verzekeringImg from "@/assets/verzekering.jpg";
import gedronkenImg from "@/assets/gedronken.jpeg";
import gratisAdvocaatImg from "@/assets/gratis-advocaat.jpg";

const services = [
  {
    image: gedagvaardImg,
    title: "Gedagvaard?",
    description: "Ontving u een dagvaarding voor de politierechtbank? Wij staan u bij.",
    href: "/gedagvaard",
  },
  {
    image: pvImg,
    title: "Een PV ontvangen?",
    description: "Geconfronteerd met een proces-verbaal? Laat ons u adviseren over uw opties.",
    href: "/pv-ontvangen",
  },
  {
    image: ongevalImg,
    title: "Een ongeval gehad?",
    description: "Betrokken bij een verkeersongeval? Wij helpen u uw schade te verhalen.",
    href: "/ongeval-gehad",
  },
  {
    image: verzekeringImg,
    title: "Vraag over verzekering?",
    description: "Vragen over uw autoverzekering of dekking? Wij geven u helder advies.",
    href: "/verzekering",
  },
  {
    image: gedronkenImg,
    title: "Teveel gedronken?",
    description: "Betrapt op rijden onder invloed? Wij kennen de wetgeving en verdedigen u.",
    href: "/teveel-gedronken",
  },
  {
    image: gratisAdvocaatImg,
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
          {services.map((service) => (
            <Link to={service.href} key={service.title}>
              <Card 
                className="group cursor-pointer border-border bg-card h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
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
