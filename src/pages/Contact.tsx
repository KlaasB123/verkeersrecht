import { MapPin, Phone, Mail, Send } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <ServicePageLayout title="Contact" icon={Phone} metaDescription="Contacteer Advocatenkantoor Govarts voor al uw vragen over verkeersrecht. Eerste contact is gratis. Bel +32(0) 11 37 15 11 of stuur een e-mail.">
      <div className="not-prose grid lg:grid-cols-3 gap-8">
        {/* Left: Email CTA */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Stel uw vraag</h2>
          <p className="text-muted-foreground mb-6">
            Heeft u een vraag over verkeersrecht? Stuur ons direct een e-mail en wij antwoorden zo snel mogelijk.
          </p>

          <Card className="w-[calc(100%-2rem)] max-w-md mx-auto lg:w-full lg:max-w-none lg:mx-0 border-0 shadow-lg">
...
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-foreground mb-4">Locatie</h2>
          <div className="w-[calc(100%-2rem)] max-w-md mx-auto lg:w-full lg:max-w-none lg:mx-0 rounded-xl overflow-hidden border border-border shadow-lg flex-1">
            <iframe
              title="Locatie Advocatenkantoor Govarts"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.5!2d5.3378!3d50.9307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c121a5e8b6e8e7%3A0x0!2sMeldertstraat%2013%2C%203500%20Hasselt!5e0!3m2!1snl!2sbe!4v1700000000000!5m2!1snl!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default Contact;
