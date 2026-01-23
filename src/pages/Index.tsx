import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { AboutSection } from "@/components/AboutSection";
import { SummonForm } from "@/components/SummonForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
