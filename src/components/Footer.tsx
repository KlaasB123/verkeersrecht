import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold tracking-tight">verkeersrecht</span>
              <span className="text-gold">.info</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Uw expert in verkeersrecht. Wij helpen u bij verkeersovertredingen en verkeersongevallen in België.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navigatie</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#over-ons" className="hover:text-gold transition-colors">Over Ons</a></li>
              <li><a href="#vragen" className="hover:text-gold transition-colors">Vragen & Advies</a></li>
              <li><a href="#form" className="hover:text-gold transition-colors">Dagvaarding Doorsturen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Residentie Refuga<br />
                  Meldertstraat 13 bus 0.03<br />
                  B-3500 Hasselt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+3211371511" className="hover:text-gold transition-colors">
                  +32(0) 11 37 15 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:erwin@verkeersrecht.info" className="hover:text-gold transition-colors">
                  erwin@verkeersrecht.info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Advocatenkantoor Govarts BV • BTW BE 0837.325.675</p>
        </div>
      </div>
    </footer>
  );
};
