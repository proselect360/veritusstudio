/**
 * Veritus Studio - Home Page Engine
 * Shell estático + bloques Sanity en Suspense para LCP y PageSpeed.
 */

import { Suspense } from 'react'
import HomeClient from './HomeClient'
import Portfolio from '@/sections/PortfolioServer'
import Blog from '@/sections/BlogServer'

export const dynamic = 'force-dynamic'
export const metadata = {
  metadataBase: new URL('https://veritusstudio.com.co'),
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

function PortfolioFallback() {
  return <section id="portafolio" className="scroll-mt-24 min-h-[320px]" aria-hidden="true" />
}

function BlogFallback() {
  return (
    <section id="articulos" className="scroll-mt-24 bg-slate-950 min-h-[280px]" aria-hidden="true" />
  )
}

export default function Page() {
  return (
    <HomeClient>
      <Suspense fallback={<PortfolioFallback />}>
        <section id="portafolio" className="scroll-mt-24">
          <Portfolio />
        </section>
      </Suspense>
      <Suspense fallback={<BlogFallback />}>
        <section id="articulos" className="scroll-mt-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="py-0">
            <Blog />
          </div>
        </section>
      </Suspense>
    </HomeClient>
  )
}