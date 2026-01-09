import HomeClient from './HomeClient'
import Portfolio from '@/sections/PortfolioServer' // Tu componente de servidor
import Blog from '@/sections/BlogServer'

export const metadata = {
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
      {/* Pasamos el Portfolio como contenido interno (children) */}
      <Portfolio />
      <Blog />
    </HomeClient>
  )
}