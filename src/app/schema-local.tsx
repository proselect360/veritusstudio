/**
 * LocalBusinessSchema - Datos Estructurados de Veritus Studio
 * Este componente le dice exactamente a Google quién eres, qué haces y dónde operas.
 */
export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService", // Más específico que LocalBusiness para agencias
          "name": "Veritus Studio",
          "alternateName": ["Veritus Diseño Web", "Veritus Studio Colombia"],
          "url": "https://veritusstudio.com.co", // Asegúrate de que coincida con tu dominio final
          "logo": "https://veritusstudio.com.co/logo.png",
          "image": "https://veritusstudio.com.co/og-image.jpg",
          "description": "Agencia boutique especializada en diseño web de alto rendimiento con Next.js 15 y Sanity CMS. Líderes en transformación digital para empresas en Bogotá y la Sabana de Occidente.",
          "priceRange": "$$$", // Posicionamiento premium
          "telephone": "+573125858242",
          "email": "contacto@veritusstudio.com.co",
          "areaServed": [
            { "@type": "City", "name": "Bogotá" },
            { "@type": "City", "name": "Madrid", "description": "Sabana Occidente, Cundinamarca" },
            { "@type": "City", "name": "Mosquera" },
            { "@type": "City", "name": "Funza" },
            { "@type": "AdministrativeArea", "name": "Cundinamarca" },
            { "@type": "Country", "name": "Colombia" }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid", // Tu base de operaciones
            "addressRegion": "Cundinamarca",
            "addressCountry": "CO"
          },
          "founder": {
            "@type": "Person",
            "name": "Juan Medina"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Ingeniería Web",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desarrollo Web Headless con Next.js 15",
                  "description": "Sitios web ultra rápidos optimizados para Core Web Vitals."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-commerce de Alto Rendimiento",
                  "description": "Tiendas online escalables con integración de pasarelas colombianas."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Estratégico Regional",
                  "description": "Posicionamiento orgánico para el mercado de Bogotá y Cundinamarca."
                }
              }
            ]
          },
          "sameAs": [
            "https://www.instagram.com/veritusstudioweb",
            "https://www.linkedin.com/company/veritus-studio",
            "https://wa.me/573125858242"
          ]
        }),
      }}
    />
  )
}