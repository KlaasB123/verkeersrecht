import { Phone, Mail, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="mb-6 inline-block">
              <span className="text-2xl font-bold tracking-tight">verkeersrecht</span>
              <span className="text-primary-foreground/60">.info</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Uw expert in verkeersrecht. Wij helpen u bij verkeersovertredingen en verkeersongevallen in België.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navigatie</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li>
                <button 
                  onClick={() => scrollToSection('over-ons')} 
                  className="hover:text-primary-foreground transition-colors"
                >
                  Over ons
                </button>
              </li>
              <li><Link to="/vragen-advies" className="hover:text-primary-foreground transition-colors">Vragen & advies</Link></li>
              <li>
                <button 
                  onClick={() => scrollToSection('form')} 
                  className="hover:text-primary-foreground transition-colors"
                >
                  Dagvaarding doorsturen
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/50 flex-shrink-0 mt-0.5" />
                <span>
                  Residentie Refuga<br />
                  Meldertstraat 13 bus 0.03<br />
                  B-3500 Hasselt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/50 flex-shrink-0" />
                <a href="tel:+3211371511" className="hover:text-primary-foreground transition-colors">
                  +32(0) 11 37 15 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/50 flex-shrink-0" />
                <a href="mailto:erwin@verkeersrecht.info" className="hover:text-primary-foreground transition-colors">
                  erwin@verkeersrecht.info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Op de hoogte blijven?</h4>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Volg ons op sociale media voor het laatste nieuws over verkeersrecht.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/verkeersrecht"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/advocatenkantoor-govarts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Advocatenkantoor Govarts BV • BTW BE 0837.325.675</p>
        </div>
      </div>
    </footer>
  );
};