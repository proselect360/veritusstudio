import './globals.css'; // Esta línea es vital para que Tailwind funcione
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Veritus Studio | Diseño Web Profesional en Colombia',
  description: 'Creamos sitios web de alto impacto con Next.js y Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white antialiased`}>
        {/* Aquí puedes poner el Header si quieres que aparezca en TODAS las páginas automáticamente */}
        {children}
      </body>
    </html>
  );
}