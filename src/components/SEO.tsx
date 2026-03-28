import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://verkeersrecht.lovable.app";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = title === "Home" 
    ? "Advocatenkantoor Govarts | Specialist Verkeersrecht België" 
    : `${title} | Advocatenkantoor Govarts`;

  const canonicalUrl = canonical || `${BASE_URL}${pathname === "/" ? "" : pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};
