import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2aDZ2LTZoLTZ2NnptLTYtNmgtNnY2aDZ2LTZ6bS02IDBoLTZ2Nmg2di02em0xMi0xMmg2di02aC02djZ6bS02IDBoLTZ2Nmg2di02em0tNiAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Advocatenkantoor Govarts BV • Hasselt
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Uw Expert in{" "}
            <span className="text-gold">Verkeersrecht</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Wij helpen u bij verkeersovertredingen en verkeersongevallen in België met grote expertise, op een snelle en efficiënte wijze en via een persoonlijke benadering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-foreground font-semibold shadow-xl text-lg px-8 py-6">
              Dagvaarding Doorsturen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6">
              Contacteer Ons Nu
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Shield className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium">Grote Expertise</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Clock className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium">Snelle & Efficiënte Bijstand</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Users className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium">Persoonlijke Benadering</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
};
