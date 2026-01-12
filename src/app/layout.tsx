import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ThemeProvider } from "@/components/theme-provider";
import GlobalFloatingShape from '@/components/GlobalFloatingShape'; 
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { SanityLive } from "@/sanity/lib/live";

// Pilar Rendimiento: Variable de fuente con swap para evitar layouts shifts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://veritusstudio.com.co'), // Actualizado a tu dominio principal
  title: {
    default: 'Veritus Studio | Ingeniería Web de Alto Rendimiento',
    template: '%s | Veritus Studio'
  },
  description: 'Desarrollo con Next.js 15 para marcas que lideran. Tu ecosistema digital optimizado para Google en 14 días. Bogotá y Cundinamarca.',
  keywords: [
    'Diseño web Colombia', 
    'Next.js 15', 
    'Agencia SEO Bogotá',
    'Desarrollo Web Cundinamarca',
    'Sanity CMS Professional'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Veritus Studio | Ingeniería Web en Colombia',
    description: 'Ingeniería web de alto rendimiento con Next.js 15. Ecosistemas digitales escalables.',
    url: 'https://veritusstudio.com.co',
    siteName: 'Veritus Studio',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Veritus Studio Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veritus Studio | Desarrollo Web Premium',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: '3D_qF1gwvk1wVRc0ESIrHM2H-RUr7e-LIOuPwpHhk6w', 
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="es" 
      className={`scroll-smooth ${inter.variable}`} 
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      {/* Pilar UX: min-h-screen y overflow-x-hidden evitan saltos visuales 
         mientras las formas se mueven lateralmente.
      */}
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen flex flex-col overflow-x-hidden`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange 
        >
          <LocalBusinessSchema />
          
          {/* 1. Capa de Fondo (z-[1]): Las formas viven aquí. 
             Asegúrate de que en GlobalFloatingShape el contenedor tenga z-[1].
          */}
          <GlobalFloatingShape />
          
          {/* 2. Capa de Contenido (z-10): 
             IMPORTANTE: Debe ser bg-transparent para dejar ver las formas.
          */}
          <main className="relative z-10 flex-grow bg-transparent">
            {children}
          </main>
          
          <WhatsAppFloat />
          <SanityLive /> 
          
        </ThemeProvider>
      </body>
    </html>
  );
}