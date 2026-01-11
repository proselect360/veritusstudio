import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ThemeProvider } from "@/components/theme-provider";
// 1. IMPORTA EL NUEVO COMPONENTE AQUÍ
import GlobalFloatingShape from '@/components/GlobalFloatingShape'; 

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
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
        >
          {/* 2. COLOCA LA FORMA FLOTANTE AQUÍ */}
          {/* Se renderiza al fondo (z-0) pero dentro del contexto del tema */}
          <GlobalFloatingShape />

          {/* 3. EL CONTENIDO PRINCIPAL */}
          {/* Asegúrate de que tus componentes (Hero, Portfolio, etc.) 
              tengan la clase "relative z-10" para estar por encima de la imagen */}
          <main className="relative z-10 bg-transparent">
            {children}
          </main>

          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}