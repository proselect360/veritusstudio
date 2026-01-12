import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import { Zap, ShieldCheck, Search, Globe, Rocket, Code2 } from 'lucide-react'

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
        {/* Encabezado de Página */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            Nuestros <span className="text-indigo-500">Servicios.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
            Ingeniería web de precisión diseñada para negocios que no aceptan menos del 100% en rendimiento y conversión.
          </p>
        </section>

        {/* Listado Detallado de Servicios */}
        <section className="max-w-7xl mx-auto px-6 grid gap-12">
          <ServiceDetail 
            icon={<Code2 className="w-8 h-8 text-indigo-500" />}
            title="Desarrollo High-End con Next.js"
            description="Construimos aplicaciones web ultrarrápidas utilizando la arquitectura de renderizado más avanzada (ISR/SSR). Optimizamos cada línea de código para garantizar tiempos de carga inferiores a 1 segundo."
          />
          <ServiceDetail 
            icon={<Search className="w-8 h-8 text-indigo-500" />}
            title="SEO Técnico & Web Vitals"
            description="No solo es contenido; es estructura. Optimizamos el LCP, FID y CLS para que Google te sitúe en la cima. Tu web será técnicamente impecable."
          />
           <ServiceDetail 
            icon={<Globe className="w-8 h-8 text-indigo-500" />}
            title="E-commerce de Alto Impacto"
            description="Tiendas online que no se caen. Escalabilidad garantizada y flujos de pago optimizados para maximizar tu retorno de inversión."
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

// Componente interno para evitar repetir código
function ServiceDetail({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="group p-10 bg-slate-900/50 border border-white/5 rounded-[2.5rem] hover:bg-slate-900 transition-all duration-500">
      <div className="mb-6">{icon}</div>
      <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>
      <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">{description}</p>
    </div>
  )
}