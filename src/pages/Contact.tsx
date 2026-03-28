import { MapPin, Phone, Mail, Send } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <ServicePageLayout title="Contact" icon={Phone} metaDescription="Contacteer Advocatenkantoor Govarts voor al uw vragen over verkeersrecht. Eerste contact is gratis. Bel +32(0) 11 37 15 11 of stuur een e-mail.">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Email CTA */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Stel uw vraag</h2>
          <p className="text-muted-foreground mb-6">
            Heeft u een vraag over verkeersrecht? Stuur ons direct een e-mail en wij antwoorden zo snel mogelijk.
          </p>

          <Card className="border-0 shadow-lg mx-auto max-w-md lg:max-w-none lg:mx-0">
            <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-4">
              <Mail className="w-12 h-12 text-primary" />
              <p className="text-lg text-foreground">
                Stuur uw vraag naar:
              </p>
              <a
                href="mailto:erwin@verkeersrecht.info"
                className="text-2xl font-bold text-primary hover:underline transition-colors"
              >
                erwin@verkeersrecht.info
              </a>
              <Button
                asChild
                size="lg"
                className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                <a href="mailto:erwin@verkeersrecht.info">
                  <Send className="mr-2 w-5 h-5" />
                  E-MAIL VERSTUREN
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Middle: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Contactgegevens</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Advocatenkantoor Govarts BV</p>
                <p className="text-muted-foreground">Residentie Refuga</p>
                <p className="text-muted-foreground">Meldertstraat 13 bus 0.03</p>
                <p className="text-muted-foreground">B-3500 Hasselt</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:+3211371511" className="text-foreground font-semibold hover:text-primary transition-colors">
                +32(0) 11 37 15 11
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <a href="mailto:erwin@verkeersrecht.info" className="block text-foreground hover:text-primary transition-colors">
                  erwin@verkeersrecht.info
                </a>
                <a href="mailto:info@govarts.be" className="block text-foreground hover:text-primary transition-colors">
                  info@govarts.be
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            <p>BTW: BE 0837.325.675</p>
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-foreground mb-4">Locatie</h2>
          <div className="mx-auto max-w-md lg:max-w-none lg:mx-0 w-full rounded-xl overflow-hidden border border-border shadow-lg flex-1">
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
