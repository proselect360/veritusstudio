import './globals.css';
import { Inter } from 'next/font/google';

// 1. Configuración de fuente optimizada
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata = {
  title: 'Veritus Studio | Diseño Web Profesional en Colombia',
  description: 'Creamos sitios web de alto impacto con Next.js y Tailwind CSS.',
};

// 2. Viewport separado para mejor rendimiento
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5', // El color índigo de tu marca
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}