export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Más preciso para una agencia de desarrollo
    "name": "Veritus Studio",
    "alternateName": "Veritus Diseño Web Colombia",
    "url": "https://veritusstudio.vercel.app",
    "logo": "https://veritusstudio.vercel.app/logo.png",
    "image": "https://veritusstudio.vercel.app/og-image.jpg",
    "description": "Agencia boutique de diseño web premium en Colombia. Especialistas en Next.js 15, SEO regional para Cundinamarca y desarrollo de activos digitales de alto impacto.",
    "priceRange": "$$",
    "telephone": "+573125858242",
    "email": "tu-correo@ejemplo.com", // Añadirlo mejora la confianza del pilar SEO
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "addressCountry": "CO"
    },
    "geo": { // Las coordenadas ayudan al posicionamiento en Google Maps
      "@type": "GeoCoordinates",
      "latitude": 4.7110, 
      "longitude": -74.0721
    },
    "areaServed": [
      { "@type": "City", "name": "Bogotá", "sameAs": "https://en.wikipedia.org/wiki/Bogotá" },
      { "@type": "City", "name": "Medellín", "sameAs": "https://en.wikipedia.org/wiki/Medellín" },
      { "@type": "AdministrativeArea", "name": "Cundinamarca", "sameAs": "https://en.wikipedia.org/wiki/Cundinamarca_Department" },
      { "@type": "City", "name": "Madrid", "sameAs": "https://en.wikipedia.org/wiki/Madrid,_Colombia" },
      { "@type": "City", "name": "Mosquera", "sameAs": "https://en.wikipedia.org/wiki/Mosquera,_Cundinamarca" },
      { "@type": "City", "name": "Funza", "sameAs": "https://en.wikipedia.org/wiki/Funza" },
      { "@type": "Country", "name": "Colombia" }
    ],
    "founder": {
      "@type": "Person",
      "name": "Juan Medina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño Web Profesional con Next.js 15"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Local y Regional para Sabana Occidente"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/veritusstudioweb",
      "https://www.linkedin.com/company/VeritusStudio",
      "https://wa.me/573125858242"
    ]
  };

  return (
    <script
      type="application/ld+json"
      id="local-business-schema" // ID para evitar duplicados en el DOM
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}