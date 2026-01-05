import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"; // ← Asegúrate de tener este archivo
import WhatsAppFloat from "@/components/WhatsAppFloat"; // ← El botón flotante

export const metadata: Metadata = {
  title: "Veritus Studio - Diseño Web Profesional en Colombia",
  description:
    "Páginas web premium con Next.js para pymes en Bogotá, Medellín, Cali y toda Colombia. Entrega en 14 días garantizada.",
  keywords:
    "diseño web Colombia, páginas web premium, Next.js Colombia, web para pymes, landing page Bogotá, tienda online Medellín",
  openGraph: {
    title: "Veritus Studio - Diseño Web Profesional en Colombia",
    description:
      "Sitios web rápidos, modernos y enfocados en generar clientes reales.",
    url: "https://veritus.co", // Cambia por tu dominio real
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Recomendado: crea una imagen 1200x630
        width: 1200,
        height: 630,
        alt: "Veritus Studio - Diseño Web Premium",
      },
    ],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Favicon (reemplaza con tus archivos reales) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Fuente Inter - Recomendada para sitios modernos */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-sans antialiased bg-white text-slate-900">
        {/* Header fijo */}
        <Header />

        {/* Contenido principal */}
        <main>{children}</main>

        {/* Botón flotante de WhatsApp */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}