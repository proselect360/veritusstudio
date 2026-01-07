import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';

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
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
        {/* El botón ahora está correctamente ubicado antes de cerrar el body */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}