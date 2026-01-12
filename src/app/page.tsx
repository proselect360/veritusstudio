/**
 * Veritus Studio - Home Page Engine
 * Renderiza la experiencia híbrida: Secciones estáticas + Datos dinámicos de Sanity.
 */

import HomeClient from './HomeClient'
import Portfolio from '@/sections/PortfolioServer'
import Blog from '@/sections/BlogServer'

// Pilar Rendimiento: Usamos dynamic 'force-dynamic' solo si necesitamos 
// datos ultra-frescos en cada request. Para mayor velocidad, podrías usar 
// revalidate cada 3600 segundos.
export const dynamic = 'force-dynamic'

export const metadata = {
  metadataBase: new URL('https://veritusstudio.com.co'), // Ajustado a tu dominio final
  title: 'Veritus Studio | Ingeniería Web de Alto Rendimiento',
  description: 'Desarrollamos ecosistemas digitales con Next.js 15 y Sanity CMS. Sitios web premium listos en 14 días con SEO garantizado.',
  openGraph: {
    title: 'Veritus Studio | Ecosistemas Digitales de Élite',
    description: 'Transformamos marcas con ingeniería web de alto impacto en Colombia.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_CO',
    type: 'website',
  },
}

export default function Page() {
  return (
    <HomeClient>
      {/* Pilar SEO & Conversión: El Portfolio se inyecta desde el servidor,
        lo que significa que los bots de Google ven tus trabajos realizados 
        al instante sin esperar a que cargue el JavaScript.
      */}
      <section id="portafolio" className="scroll-mt-24">
        <Portfolio />
      </section>
      
      {/* Pilar de Autoridad (Blog): Artículos recientes inyectados 
        para mejorar el ranking por palabras clave dinámicas.
      */}
      <section id="articulos" className="scroll-mt-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="py-12 lg:py-20">
          <Blog />
        </div>
      </section>
    </HomeClient>
  )
}