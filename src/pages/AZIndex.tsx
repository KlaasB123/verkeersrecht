import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { azTermsContent } from "@/data/azTermsContent";

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Group terms by letter from the data
const getTermsByLetter = () => {
  const grouped: Record<string, { term: string; href: string }[]> = {};
  alphabet.forEach(letter => {
    grouped[letter] = azTermsContent
      .filter(t => t.letter === letter)
      .map(t => ({ term: t.term, href: `/a-z/${t.slug}` }));
  });
  return grouped;
};

const azTerms = getTermsByLetter();

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
                ? 'bg-primary/10 text-foreground hover:bg-primary/20'
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