import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left: Hero text */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Shield className="w-4 h-4 text-primary-foreground/70" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Advocatenkantoor Govarts BV • Hasselt
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              UW EXPERT IN VERKEERSRECHT
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Wij helpen u bij verkeersovertredingen en verkeersongevallen in België met grote expertise, op een snelle en efficiënte wijze en via een persoonlijke benadering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 font-semibold text-lg px-8 py-6">
                DAGVAARDING DOORSTUREN
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="#contact">
                <Button size="lg" className="bg-muted text-foreground hover:bg-muted/80 font-semibold text-lg px-8 py-6">
                  CONTACTEER ONS NU
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-primary-foreground/70">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium">Grote expertise</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-primary-foreground/70">
                <Clock className="w-6 h-6" />
                <span className="text-sm font-medium">Snelle & efficiënte bijstand</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-primary-foreground/70">
                <Users className="w-6 h-6" />
                <span className="text-sm font-medium">Persoonlijke benadering</span>
              </div>
            </div>
          </div>

          {/* Right: Contact card */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
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
                <a href="mailto:erwin@verkeersrecht.info" className="hover:underline block text-sm">
                  erwin@verkeersrecht.info
                </a>
                <a href="mailto:info@govarts.be" className="hover:underline block text-sm">
                  info@govarts.be
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};