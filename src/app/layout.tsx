import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Importamos el componente Script
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ThemeProvider } from "@/components/theme-provider";
import LazyFloatingShape from '@/components/LazyFloatingShape'; 
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL('https://veritusstudio.com.co'),
  title: {
    default: 'Veritus Studio | Ingeniería Web de Alto Rendimiento',
    template: '%s | Veritus Studio'
  },
  description: 'Desarrollo con Next.js 15 para marcas que lideran. Tu ecosistema digital optimizado para Google en 14 días. Bogotá y Colombia.',
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
  // Solo iconos circulares (generado por icon.tsx + SVG) — sin .ico cuadrado
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#030712', 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="es" 
      className={`scroll-smooth dark ${inter.variable}`} 
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="preload" href="/3d-abstract-shape.webp" as="image" />
        <meta name="color-scheme" content="dark" />
      </head>
      
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-50 min-h-screen flex flex-col overflow-x-hidden`}>
          {/* GA diferido para no bloquear LCP (solo si tienes ID real) */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="lazyOnload" />
              <Script id="google-analytics" strategy="lazyOnload">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
                </Script>
            </>
          )}

          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            forcedTheme="dark" 
            enableSystem={false} 
            disableTransitionOnChange
          >
            <LocalBusinessSchema />
            <LazyFloatingShape />
            
            <main className="relative z-10 flex-grow bg-transparent">
              {children}
            </main>
            
            <WhatsAppFloat />
            {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? <SanityLive /> : null} 
          </ThemeProvider>
      </body>
    </html>
  );
}
