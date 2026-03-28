import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { AboutSection } from "@/components/AboutSection";
import { SummonForm } from "@/components/SummonForm";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Home" 
        description="Advocatenkantoor Govarts - Specialist verkeersrecht in België met meer dan 30 jaar ervaring. Gedagvaard? Ongeval gehad? PV ontvangen? Gratis eerste contact." 
      />
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <AboutSection />
        <SummonForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
