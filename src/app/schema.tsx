/**
 * SchemaJsonLd - Grafo de Conocimiento de Veritus Studio
 * Vincula la marca (Organización) con su fundador (Persona) para mejorar el E-E-A-T.
 */
export default function SchemaJsonLd() {
  const domain = "https://veritusstudio.com.co"; // Centralizado para evitar errores de ID

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${domain}/#organization`,
              "name": "Veritus Studio",
              "url": domain,
              "logo": {
                "@type": "ImageObject",
                "@id": `${domain}/#logo`,
                "url": `${domain}/logo.png`,
                "contentUrl": `${domain}/logo.png`,
                "caption": "Veritus Studio Logo"
              },
              "image": { "@id": `${domain}/#logo` },
              "description": "Ingeniería web de alto rendimiento y diseño boutique con Next.js 15 en Colombia.",
              "founder": { "@id": `${domain}/#juan-medina` },
              "sameAs": [
                "https://www.instagram.com/veritusstudioweb",
                "https://www.linkedin.com/company/VeritusStudio"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+573125858242",
                "contactType": "sales",
                "areaServed": "CO",
                "availableLanguage": "Spanish"
              }
            },
            {
              "@type": "Person",
              "@id": `${domain}/#juan-medina`,
              "name": "Juan Medina",
              "jobTitle": "Lead Web Architect & Founder",
              "url": domain,
              "image": {
                "@type": "ImageObject",
                "@id": `${domain}/#person-image`,
                "url": `${domain}/juan-medina.jpg`, // Asegúrate de tener esta imagen
                "caption": "Juan Medina - Founder of Veritus Studio"
              },
              "sameAs": [
                "https://linkedin.com/in/tu-perfil-personal" // Reemplaza con tu perfil real
              ],
              "worksFor": { "@id": `${domain}/#organization` }
            },
            {
              "@type": "WebSite",
              "@id": `${domain}/#website`,
              "url": domain,
              "name": "Veritus Studio",
              "publisher": { "@id": `${domain}/#organization` },
              "inLanguage": "es-CO"
            }
          ],
        }),
      }}
    />
  );
}