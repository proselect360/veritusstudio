import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ThemeProvider } from "@/components/theme-provider";
import GlobalFloatingShape from '@/components/GlobalFloatingShape'; 

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  // CAMBIO: Como no tienes dominio personalizado, usamos el de Vercel para evitar errores de Google
  metadataBase: new URL('https://veritusstudio.vercel.app'), 
  title: {
    default: 'Veritus Studio | Diseño Web Profesional en Colombia',
    template: '%s | Veritus Studio'
  },
  description: 'Ingeniería web de alto rendimiento con Next.js 15. Tu ecosistema digital listo en 14 días.',
  keywords: ['Diseño web Colombia', 'Next.js', 'Desarrollo web profesional'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  // CORRECCIÓN: El código de verificación debe ser solo el ID, sin el ".html" ni "google-site-verification"
  verification: {
    google: 'googlea193934f1ca9a133', 
  },
}; // <-- Aquí faltaba cerrar la llave del objeto metadata

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