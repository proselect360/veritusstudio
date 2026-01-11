import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ThemeProvider } from "@/components/theme-provider";
import GlobalFloatingShape from '@/components/GlobalFloatingShape'; 
import LocalBusinessSchema from '@/components/LocalBusinessSchema'; // Asegúrate de haber creado este componente

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  // Configuración base para URLs canónicas y redes sociales
  metadataBase: new URL('https://veritusstudio.vercel.app'), 
  title: {
    default: 'Veritus Studio | Diseño Web Profesional en Colombia',
    template: '%s | Veritus Studio'
  },
  description: 'Ingeniería web de alto rendimiento con Next.js 15 para empresas en Bogotá y Cundinamarca. Tu ecosistema digital listo en 14 días.',
  keywords: [
    'Diseño web Colombia', 
    'Next.js 15', 
    'Desarrollo web profesional',
    'Diseño web Madrid Cundinamarca',
    'Diseño web Mosquera',
    'Diseño web Funza'
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // ID de verificación corregido para Google Search Console
  verification: {
    google: '3D_qF1gwvk1wVRc0ESIrHM2H-RUr7e-LIOuPwpHhk6w', 
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-950 selection:bg-indigo-500/30`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange 
        >
          {/* Inyección de SEO Técnico (JSON-LD) */}
          <LocalBusinessSchema />
          
          {/* Componentes visuales globales */}
          <GlobalFloatingShape />
          
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
          
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}

