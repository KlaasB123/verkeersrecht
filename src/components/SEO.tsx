import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://verkeersrecht.info";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  structuredData?: object | object[];
}

const DEFAULT_KEYWORDS =
  "advocaat verkeersrecht, advocaat verkeersrecht Hasselt, advocaat Hasselt, verkeersrecht, verkeersrecht advocaat Hasselt, verkeersrechtadvocaat, advocatenkantoor Hasselt, advocaat Limburg, verkeersovertreding advocaat, dagvaarding politierechtbank, rijbewijs ingetrokken, alcoholintoxicatie advocaat, Erwin Govarts, Advocatenkantoor Govarts";

export const SEO = ({ title, description, canonical, keywords, structuredData }: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle =
    title === "Home"
      ? "Advocaat Verkeersrecht Hasselt | Advocatenkantoor Govarts"
      : `${title} | Advocaat Verkeersrecht Hasselt – Govarts`;

  const canonicalUrl = canonical || `${BASE_URL}${pathname === "/" ? "" : pathname}`;
  const metaKeywords = keywords ?? DEFAULT_KEYWORDS;

  const structuredDataArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <html lang="nl-BE" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="geo.region" content="BE-VLI" />
      <meta name="geo.placename" content="Hasselt" />
      <meta name="geo.position" content="50.9307;5.3325" />
      <meta name="ICBM" content="50.9307, 5.3325" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="nl_BE" />
      <meta property="og:site_name" content="Advocatenkantoor Govarts – Verkeersrecht" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {structuredDataArray.map((data, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
