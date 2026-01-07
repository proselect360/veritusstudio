export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService", // Más específico para agencias
          "name": "Veritus Studio",
          "alternateName": "Veritus Diseño Web Colombia",
          "url": "https://veritus.co", // Asegúrate de si es .co o .com
          "logo": "https://veritus.co/logo.png",
          "image": "https://veritus.co/og-image.jpg",
          "description": "Agencia boutique de diseño web premium en Colombia. Especialistas en Next.js, SEO de alto rendimiento y desarrollo de ecosistemas digitales para pymes.",
          "priceRange": "$$",
          "telephone": "+573125858242",
          "areaServed": [
            { "@type": "City", "name": "Bogotá", "sameAs": "https://en.wikipedia.org/wiki/Bogotá" },
            { "@type": "City", "name": "Medellín", "sameAs": "https://en.wikipedia.org/wiki/Medellín" },
            { "@type": "City", "name": "Cali", "sameAs": "https://en.wikipedia.org/wiki/Cali" },
            { "@type": "Country", "name": "Colombia" }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bogotá",
            "addressRegion": "Cundinamarca",
            "addressCountry": "CO"
          },
          "founder": {
            "@type": "Person",
            "name": "Juan Medina"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Diseño Web",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Diseño Web Profesional con Next.js"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Local para Empresas Colombianas"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.instagram.com/veritusstudio",
            "https://www.linkedin.com/company/veritusstudio",
            "https://wa.me/573125858242"
          ]
        }),
      }}
    />
  )
}