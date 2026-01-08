import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', 
});

export const metadata = {
  title: 'Veritus Studio | Diseño Web Profesional en Colombia',
  description: 'Desarrollo web de alto rendimiento con Next.js y Tailwind CSS.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* ThemeProvider envuelve todo el contenido para que el modo oscuro funcione */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
        >
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}