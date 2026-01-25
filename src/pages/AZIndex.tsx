import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const azTerms: Record<string, { term: string; href: string }[]> = {
  A: [
    { term: "Ademanalyse", href: "/a-z/ademanalyse" },
    { term: "Ademtest", href: "/a-z/ademtest" },
    { term: "Alcoholintoxicatie", href: "/a-z/alcoholintoxicatie" },
    { term: "Alcoholslot", href: "/a-z/alcoholslot" },
    { term: "Autokeuring", href: "/a-z/autokeuring" },
  ],
  B: [
    { term: "Bebouwde kom", href: "/a-z/bebouwde-kom" },
    { term: "Belgisch Bureau Autoverzekeraars", href: "/a-z/belgisch-bureau-autoverzekeraars" },
    { term: "Beroep", href: "/a-z/beroep" },
    { term: "Betekening", href: "/a-z/betekening" },
    { term: "Bevel tot betalen", href: "/a-z/bevel-tot-betalen" },
    { term: "Bewijs", href: "/a-z/bewijs" },
    { term: "Bloedproef", href: "/a-z/bloedproef" },
    { term: "Bromfietsen", href: "/a-z/bromfietsen" },
    { term: "Burgerlijke partij", href: "/a-z/burgerlijke-partij" },
    { term: "Burgerrechtelijk aansprakelijk", href: "/a-z/burgerrechtelijk-aansprakelijk" },
  ],
  C: [
    { term: "Cassatie", href: "/a-z/cassatie" },
  ],
  D: [
    { term: "Dagvaarding", href: "/a-z/dagvaarding" },
    { term: "DIV", href: "/a-z/div" },
    { term: "Dronkenschap", href: "/a-z/dronkenschap" },
    { term: "Drugs", href: "/a-z/drugs" },
  ],
  E: [
    { term: "Eenheid van opzet", href: "/a-z/eenheid-van-opzet" },
  ],
  F: [
    { term: "Fietsen", href: "/a-z/fietsen" },
  ],
  G: [
    { term: "Gebruiksderving", href: "/a-z/gebruiksderving" },
    { term: "Gekwetst", href: "/a-z/gekwetst" },
    { term: "Geldboete", href: "/a-z/geldboete" },
    { term: "Gemeenschappelijk Motorwaarborgfonds", href: "/a-z/gemeenschappelijk-motorwaarborgfonds" },
    { term: "Gepersonaliseerde nummerplaat", href: "/a-z/gepersonaliseerde-nummerplaat" },
    { term: "Gerechtsdeurwaarder", href: "/a-z/gerechtsdeurwaarder" },
    { term: "Gerechtskosten", href: "/a-z/gerechtskosten" },
  ],
  H: [
    { term: "Herstelexamens", href: "/a-z/herstelexamens" },
    { term: "Herstelproeven", href: "/a-z/herstelproeven" },
  ],
  I: [
    { term: "Inschrijving voertuig", href: "/a-z/inschrijving-voertuig" },
    { term: "Intrekking rijbewijs", href: "/a-z/intrekking-rijbewijs" },
  ],
  J: [],
  K: [
    { term: "Keuringsattest", href: "/a-z/keuringsattest" },
  ],
  L: [
    { term: "Ladingzekering", href: "/a-z/ladingzekering" },
  ],
  M: [
    { term: "Medische expertise", href: "/a-z/medische-expertise" },
    { term: "Minnelijke medische expertise", href: "/a-z/minnelijke-medische-expertise" },
  ],
  N: [
    { term: "Nummerplaat", href: "/a-z/nummerplaat" },
  ],
  O: [
    { term: "Omniumverzekering", href: "/a-z/omniumverzekering" },
    { term: "Onmiddellijke inning", href: "/a-z/onmiddellijke-inning" },
    { term: "Opdeciemen", href: "/a-z/opdeciemen" },
  ],
  P: [
    { term: "Parket", href: "/a-z/parket" },
    { term: "Politierechtbank", href: "/a-z/politierechtbank" },
    { term: "Proces-verbaal", href: "/a-z/proces-verbaal" },
    { term: "Procureur des Konings", href: "/a-z/procureur-des-konings" },
  ],
  Q: [],
  R: [
    { term: "Raadsgeneesheer", href: "/a-z/raadsgeneesheer" },
    { term: "Rechtsbijstand", href: "/a-z/rechtsbijstand" },
    { term: "Regres", href: "/a-z/regres" },
    { term: "Rijbewijs", href: "/a-z/rijbewijs" },
    { term: "Rijverbod", href: "/a-z/rijverbod" },
  ],
  S: [
    { term: "Schadevergoeding", href: "/a-z/schadevergoeding" },
    { term: "Snelheid", href: "/a-z/snelheid" },
    { term: "Strafblad", href: "/a-z/strafblad" },
  ],
  T: [
    { term: "Technische keuring", href: "/a-z/technische-keuring" },
  ],
  U: [
    { term: "Uitstel", href: "/a-z/uitstel" },
  ],
  V: [
    { term: "Verval van recht tot sturen", href: "/a-z/verval-van-recht-tot-sturen" },
    { term: "Verjaring", href: "/a-z/verjaring" },
    { term: "Verzachtende omstandigheden", href: "/a-z/verzachtende-omstandigheden" },
    { term: "Verzekering", href: "/a-z/verzekering" },
    { term: "Vluchtmisdrijf", href: "/a-z/vluchtmisdrijf" },
    { term: "Vonnis", href: "/a-z/vonnis" },
    { term: "Vrijspraak", href: "/a-z/vrijspraak" },
  ],
  W: [
    { term: "Werkstraf", href: "/a-z/werkstraf" },
  ],
  X: [],
  Y: [],
  Z: [
    { term: "Zitting", href: "/a-z/zitting" },
  ],
};

const AZIndex = () => {
  return (
    <ServicePageLayout title="A-Z Index" icon={BookOpen}>
      <p className="text-lg leading-relaxed mb-8">
        Een overzicht van alle juridische termen en begrippen in het verkeersrecht, alfabetisch gerangschikt.
      </p>

      {/* Alphabet navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-4 bg-card rounded-xl border border-border">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-colors ${
              azTerms[letter]?.length > 0
                ? 'bg-lime/20 text-foreground hover:bg-lime/40'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Terms by letter */}
      <div className="space-y-8">
        {alphabet.map((letter) => {
          const terms = azTerms[letter];
          if (!terms || terms.length === 0) return null;
          
          return (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                {letter}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {terms.map((item) => (
                  <li key={item.term}>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {item.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </ServicePageLayout>
  );
};

export default AZIndex;