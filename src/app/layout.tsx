import './globals.css';
import { Inter } from 'next/font/google';

// 1. Configuración de fuente con precarga y swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Veritus Studio | Diseño Web Profesional en Colombia',
  description: 'Creamos sitios web de alto impacto con Next.js y Tailwind CSS.',
};

// 2. Viewport separado: Mejora el FCP (First Contentful Paint)
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
    <html lang="es" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}