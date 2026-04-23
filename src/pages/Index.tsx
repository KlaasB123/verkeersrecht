import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { AboutSection } from "@/components/AboutSection";
import { SummonForm } from "@/components/SummonForm";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney"],
  name: "Advocatenkantoor Govarts BV – Advocaat Verkeersrecht Hasselt",
  alternateName: "Advocaat Verkeersrecht Hasselt",
  description:
    "Advocaat gespecialiseerd in verkeersrecht in Hasselt (Limburg, België). Bijstand bij dagvaardingen voor de politierechtbank, verkeersovertredingen, rijverbod, alcoholintoxicatie en verkeersongevallen.",
  url: "https://verkeersrecht.info",
  logo: "https://verkeersrecht.info/assets/logo-govarts-white-sZCfKrEo.png",
  image: "https://verkeersrecht.info/assets/erwin-govarts-DKFsGQiO.jpg",
  telephone: "+32 11 37 15 11",
  email: "erwin@verkeersrecht.info",
  vatID: "BE 0837.325.675",
  founder: { "@type": "Person", name: "Erwin Govarts" },
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Hasselt" },
    { "@type": "AdministrativeArea", name: "Limburg" },
    { "@type": "Country", name: "België" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Meldertstraat 13 bus 0.03 (Residentie Refuga)",
    addressLocality: "Hasselt",
    postalCode: "3500",
    addressCountry: "BE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 50.9307, longitude: 5.3325 },
  sameAs: [
    "https://www.facebook.com/verkeersrecht",
    "https://www.linkedin.com/in/erwin-govarts-7343995/",
  ],
  knowsAbout: [
    "Verkeersrecht",
    "Politierechtbank",
    "Verkeersovertredingen",
    "Rijverbod",
    "Alcoholintoxicatie",
    "Verkeersongevallen",
    "Rijbewijs ingetrokken",
    "Dagvaarding",
  ],
  serviceType: [
    "Advocaat verkeersrecht",
    "Bijstand politierechtbank",
    "Juridisch advies verkeersongevallen",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Verkeersrecht.info – Advocaat Verkeersrecht Hasselt",
  url: "https://verkeersrecht.info",
  inLanguage: "nl-BE",
  publisher: { "@type": "Organization", name: "Advocatenkantoor Govarts BV" },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Home"
        description="Advocaat verkeersrecht in Hasselt. Advocatenkantoor Govarts – 30+ jaar ervaring in verkeersrecht in België: dagvaarding, rijverbod, alcoholintoxicatie, verkeersongevallen. Gratis eerste contact."
        structuredData={[legalServiceSchema, websiteSchema]}
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
