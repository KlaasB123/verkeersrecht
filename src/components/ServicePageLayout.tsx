import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { LucideIcon } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  subLinks?: SubLink[];
  metaDescription?: string;
}

export const ServicePageLayout = ({ title, icon: Icon, children, subLinks, metaDescription }: ServicePageLayoutProps) => {
  const defaultDescription = `${title} - Advocatenkantoor Govarts, specialist verkeersrecht in België. Meer dan 30 jaar ervaring. Gratis eerste contact.`;
  return (
    <div className="min-h-screen bg-background">
      <SEO title={title} description={metaDescription || defaultDescription} />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>terug</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar with sub-links - LEFT SIDE */}
            {subLinks && subLinks.length > 0 && (
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <nav className="bg-card rounded-xl p-4 border border-border">
                  <ul className="space-y-1">
                    {subLinks.map((link) => (
                      <li key={link.label}>
                        <Link 
                          to={link.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-navy hover:bg-secondary rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* Main content */}
            <article className={`w-full ${!subLinks || subLinks.length === 0 ? 'lg:col-span-2 max-w-5xl' : 'max-w-3xl'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {title}
                </h1>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {children}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
