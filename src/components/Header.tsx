import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGovarts from "@/assets/logo-govarts.png";

const navItems = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Over Ons", href: "/#over-ons", isRoute: false },
  { label: "Contact", href: "/contact", isRoute: true },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#form';
    }
    setIsMenuOpen(false);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+3211371511" className="flex items-center gap-2 hover:text-primary-foreground/70 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+32(0) 11 37 15 11</span>
            </a>
            <a href="mailto:erwin@verkeersrecht.info" className="hidden sm:flex items-center gap-2 hover:text-primary-foreground/70 transition-colors">
              <Mail className="w-4 h-4" />
              <span>erwin@verkeersrecht.info</span>
            </a>
          </div>
          <a 
            href="https://www.facebook.com/verkeersrecht" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/70 transition-colors"
          >
            Een vraag stellen?
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoGovarts} alt="Advocatenkantoor Govarts" className="h-24 w-auto mix-blend-multiply" style={{ imageRendering: 'auto' }} />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button 
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg"
            >
              DAGVAARDING DOORSTUREN
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <Button 
              onClick={scrollToForm}
              className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              DAGVAARDING DOORSTUREN
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
