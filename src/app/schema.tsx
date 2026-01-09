export default function SchemaJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://veritus.com/#organization",
              name: "Veritus Studio",
              url: "https://veritus.com",
              logo: "https://veritus.com/logo.png",
              description:
                "Estudio boutique de diseño y desarrollo web premium en Colombia.",
              founder: {
                "@type": "Person",
                name: "Juan Medina",
              },
              sameAs: [
                "https://www.instagram.com/veritusstudioweb",
                "https://www.linkedin.com/company/VeritusStudio"
              ],
            },
            {
              "@type": "Person",
              "@id": "https://veritus.com/#juan-medina",
              name: "Juan Medina",
              jobTitle: "Founder & Web Designer",
              worksFor: {
                "@id": "https://veritus.co/#organization",
              },
              url: "https://veritus.com",
            },
          ],
        }),
      }}
    />
  )
}
