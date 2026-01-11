import HomeClient from './HomeClient'
import Portfolio from '@/sections/PortfolioServer' // Sanity activo
import Blog from '@/sections/BlogServer' // Sanity activo

export const dynamic = 'force-dynamic'

export const metadata = {
  // Ajustamos la URL base a tu dominio de Vercel para resolver el aviso de la terminal
  metadataBase: new URL('https://veritus-studio.vercel.app'), 
  title: 'Veritus Studio | Diseño Web de Alto Rendimiento en Colombia',
  description: 'Páginas web premium con Next.js 15. Entrega en 14 días y SEO optimizado.',
  openGraph: {
    title: 'Veritus Studio | Terminales de Venta Digital',
    description: 'Construimos infraestructura digital de alto impacto.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_CO',
    type: 'website',
  },
}

export default function Page() {
  return (
    <HomeClient>
      {/* Portfolio de Sanity */}
      <Portfolio />
      
      {/* Blog de Sanity con ID para el scroll del menú */}
      <div id="ver-articulos-recientes" className="scroll-mt-32">
        <Blog />
      </div>
    </HomeClient>
  )
}