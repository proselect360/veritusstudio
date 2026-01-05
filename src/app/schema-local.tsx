export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Veritus Studio",
          url: "https://veritus.com",
          areaServed: "CO",
          address: {
            "@type": "PostalAddress",
            addressCountry: "CO",
          },
          founder: "Juan Medina",
          sameAs: [
            "https://www.instagram.com/veritusstudio",
            "https://www.linkedin.com/company/veritusstudio",
          ],
        }),
      }}
    />
  )
}
