import { Phone, Mail, MapPin } from "lucide-react";
import logoNavy from "@/assets/logo-govarts-navy.png";
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
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/advocatenkantoor-govarts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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