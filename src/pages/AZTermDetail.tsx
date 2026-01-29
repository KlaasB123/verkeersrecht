import { useParams, Link } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getTermBySlug, getTermsByLetter, azTermsContent } from "@/data/azTermsContent";

const AZTermDetail = () => {
  const { term } = useParams<{ term: string }>();
  const termData = term ? getTermBySlug(term) : undefined;

  if (!termData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <Link 
              to="/a-z" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-charcoal transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>terug naar A-Z</span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-4">Term niet gevonden</h1>
            <p className="text-muted-foreground">De gevraagde term bestaat niet in onze database.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedTerms = getTermsByLetter(termData.letter).filter(t => t.slug !== termData.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/a-z" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>terug naar A-Z</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar with related terms */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <nav className="bg-card rounded-xl p-4 border border-border">
                <h3 className="font-semibold text-foreground mb-3 text-lg">{termData.letter}</h3>
                <ul className="space-y-1">
                  {getTermsByLetter(termData.letter).map((t) => (
                    <li key={t.slug}>
                      <Link 
                        to={`/a-z/${t.slug}`}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          t.slug === termData.slug 
                            ? 'bg-lime/20 text-foreground font-medium' 
                            : 'text-muted-foreground hover:text-charcoal hover:bg-secondary'
                        }`}
                      >
                        {t.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <article className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-lime flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-foreground" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {termData.term}
                </h1>
              </div>
              
              <div 
                className="prose prose-lg max-w-none text-muted-foreground [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:mb-2"
                dangerouslySetInnerHTML={{ __html: termData.content }}
              />

              {/* Navigation to other terms */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Andere termen</h3>
                <div className="flex flex-wrap gap-2">
                  {azTermsContent
                    .filter(t => t.slug !== termData.slug)
                    .slice(0, 10)
                    .map((t) => (
                      <Link
                        key={t.slug}
                        to={`/a-z/${t.slug}`}
                        className="px-3 py-1 bg-secondary text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                      >
                        {t.term}
                      </Link>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AZTermDetail;
