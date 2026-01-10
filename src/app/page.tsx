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
      <Portfolio />
      {/* Envolvemos el Blog aquí con un ID que NO se repita en ningún otro archivo */}
      <div id="ver-articulos-recientes" className="scroll-mt-32">
        <Blog />
      </div>
    </HomeClient>
  )
}