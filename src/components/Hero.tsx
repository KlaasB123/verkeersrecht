import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { EmailLink } from "@/components/EmailLink";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-12 md:pt-40 md:pb-16 lg:pt-44 lg:pb-20 bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left: Hero text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Shield className="w-4 h-4 text-primary-foreground/70" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Advocatenkantoor Govarts BV • Hasselt
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              UW EXPERT IN VERKEER
            </h1>

            <p className="text-primary-foreground/90 text-lg sm:text-xl font-semibold mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Advocaat verkeersrecht in Hasselt – actief in heel België
            </p>

            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Als advocatenkantoor in Hasselt helpen wij u bij verkeersovertredingen en verkeersongevallen in België met grote expertise, op een snelle en efficiënte wijze en via een persoonlijke benadering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a href="#form">
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/80 font-semibold text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6">
                  DAGVAARDING DOORSTUREN
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-muted text-foreground hover:bg-muted/80 font-semibold text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6">
                  CONTACTEER ONS NU
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Shield className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Grote expertise</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Snelle & efficiënte bijstand</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Persoonlijke benadering</span>
              </div>
            </div>
          </div>

          {/* Right: Contact card */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold text-primary-foreground mb-5">CONTACTGEGEVENS</h3>

            <div className="space-y-4 text-primary-foreground">
              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Adres</p>
                <p className="font-medium">Residentie Refuga</p>
                <p className="text-sm">Meldertstraat 13 bus 0.03</p>
                <p className="text-sm">B-3500 Hasselt</p>
              </div>

              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">BTW</p>
                <p className="text-sm">BE 0837.325.675</p>
              </div>

              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Telefoon</p>
                <a href="tel:+3211371511" className="font-semibold text-lg hover:underline block">
                  +32(0) 11 37 15 11
                </a>
              </div>

              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">E-mail</p>
                <EmailLink email="erwin@verkeersrecht.info" className="hover:underline block text-sm">
                  erwin@verkeersrecht.info
                </EmailLink>
                <EmailLink email="info@govarts.be" className="hover:underline block text-sm">
                  info@govarts.be
                </EmailLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};