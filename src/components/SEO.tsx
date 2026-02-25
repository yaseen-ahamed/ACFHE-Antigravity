import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
}

export function SEO({
  title = "ACFHE | Ayurgreen Centre for Hospitality Excellence",
  description = "ACFHE (Ayurgreen Centre for Hospitality Excellence) is a premier hospitality college in Kerala offering CTH UK-accredited hospitality courses and culinary programs.",
  keywords = "ACFHE, Ayurgreen Centre for Hospitality Excellence, Hospitality College in Kerala, Hospitality Course in Kerala, Hospitality institute in Kerala, culinary school, hotel management",
  canonicalUrl = "https://acfhe.edu.in",
  type = "website",
  image = "https://lh3.googleusercontent.com/d/10XpIuM6yOWcvfRaMXDoP32G5ZnYmnqrz",
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: "Ayurgreen Centre for Hospitality Excellence (ACFHE)",
          url: "https://acfhe.edu.in",
          logo: "https://lh3.googleusercontent.com/d/1LCVsW9RhHV_Vt7hkdprBerS8u5iOMQeh",
          image:
            "https://lh3.googleusercontent.com/d/10XpIuM6yOWcvfRaMXDoP32G5ZnYmnqrz",
          description:
            "A premier hospitality institute in Kerala offering internationally accredited hospitality and culinary courses.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Edappal",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          telephone: "+917034886897",
          sameAs: [
            "https://www.facebook.com/acfhe",
            "https://www.instagram.com/acfhe",
            "https://www.linkedin.com/school/acfhe",
          ],
        })}
      </script>
    </Helmet>
  );
}
