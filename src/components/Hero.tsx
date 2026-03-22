import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Advocatenkantoor Govarts BV • Hasselt
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            UW EXPERT IN VERKEERSRECHT
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Wij helpen u bij verkeersovertredingen en verkeersongevallen in België met grote expertise, op een snelle en efficiënte wijze en via een persoonlijke benadering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-6">
              DAGVAARDING DOORSTUREN
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6">
                CONTACTEER ONS NU
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/70">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium">Grote expertise</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/70">
              <Clock className="w-6 h-6" />
              <span className="text-sm font-medium">Snelle & efficiënte bijstand</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/70">
              <Users className="w-6 h-6" />
              <span className="text-sm font-medium">Persoonlijke benadering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};