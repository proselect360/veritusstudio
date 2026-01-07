import Header from '@/components/Header'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import Link from 'next/link'
import { Layout, Zap, Search, MapPin, BarChart, Rocket, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Diseño Web en Medellín | Veritus Studio',
  description: 'Servicio profesional de diseño web en Medellín. Webs ultra-rápidas con Next.js, escalables y optimizadas para dominar el mercado paisa.',
}

export default function DisenoWebMedellinPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-32">
        {/* Hero Section Localizado */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <span className="text-indigo-600 font-black uppercase tracking-widest text-sm mb-4 block">Innovación Digital desde la Montaña</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter mb-8 leading-[0.9]">
              Diseño Web <br />
              <span className="text-indigo-600">Pro en Medellín</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              En la ciudad de la innovación, tu empresa no puede permitirse una web lenta. Creamos arquitectura digital de alto rendimiento para el mercado paisa.
            </p>
          </div>

          {/* Grid de Beneficios con estilo Veritus */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Layout className="w-10 h-10" />,
                title: "UI/UX de Vanguardia",
                desc: "Diseñamos interfaces que capturan la esencia innovadora de Medellín y convierten visitas en negocios."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Velocidad Extrema",
                desc: "Usamos Next.js para que tu sitio cargue en menos de 1 segundo. En Medellín, el tiempo es dinero."
              },
              {
                icon: <MapPin className="w-10 h-10" />,
                title: "SEO Geo-Localizado",
                desc: "Posicionamos tu marca en los primeros resultados de búsqueda de todo el Valle de Aburrá."
              }
            ].map((benefit, index) => (
              <div key={index} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all group">
                <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Autoridad - El gancho hacia la Guía de Precios */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full" />
            
            <div className="flex-1 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                Medellín merece <br />
                <span className="text-indigo-500 text-3xl font-bold italic">tecnología de clase mundial.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                No te conformes con plantillas genéricas. Una web profesional en Medellín debe ser una herramienta de crecimiento, no un gasto estático.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <BarChart className="w-4 h-4 text-indigo-400" /> Analítica Avanzada
                </div>
                <div className="flex items-center gap-2 text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Rocket className="w-4 h-4 text-indigo-400" /> Escalabilidad Total
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem]">
                <h4 className="text-xl font-bold mb-4">Inversión Transparente</h4>
                <p className="text-slate-400 text-sm mb-6">
                  ¿Quieres saber cuánto cuesta realmente un proyecto de este nivel en Medellín? Hemos desglosado cada peso en nuestra guía 2026.
                </p>
                <Link 
                  href="/blog/cuanto-cuesta-una-pagina-web-colombia" 
                  className="inline-flex items-center gap-2 text-indigo-400 font-black hover:text-indigo-300 transition-colors uppercase text-xs tracking-widest"
                >
                  Ver presupuesto detallado <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  )
}