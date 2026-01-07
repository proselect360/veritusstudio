import Header from '@/components/Header'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import Link from 'next/link'
import { Search, TrendingUp, Globe, Target, BarChart3, Rocket, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Diseño Web SEO en Bogotá | Veritus Studio',
  description: 'No solo hacemos páginas bonitas, las hacemos visibles. Optimización SEO en Bogotá para que tu negocio aparezca donde tus clientes buscan.',
}

export default function SeoPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-32">
        {/* Hero Section Localizado */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <span className="text-indigo-600 font-black uppercase tracking-widest text-sm mb-4 block">Estrategia Digital Local</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter mb-8 leading-[0.9]">
              Dominamos el <br />
              <span className="text-indigo-600">SEO en Bogotá</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Si tu empresa no aparece en la primera página de Google, estás cediendo el mercado a tu competencia. Creamos webs que escalan.
            </p>
          </div>

          {/* Grid de Servicios con el estilo de tarjetas Veritus */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Search className="w-10 h-10" />,
                title: "Auditoría Técnica",
                desc: "Analizamos más de 100 factores técnicos que impiden que tu web en Bogotá suba posiciones."
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "SEO Local Bogotá",
                desc: "Optimizamos tu perfil de Google Business y palabras clave geolocalizadas para la capital."
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Estrategia de Contenidos",
                desc: "Creamos artículos que resuelven dudas reales de tus clientes y atraen tráfico calificado."
              }
            ].map((service, index) => (
              <div key={index} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all group">
                <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Autoridad "Zapatero a su zapato" aplicada a SEO */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full" />
            
            <div className="flex-1 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                El SEO no es un gasto, <br />
                <span className="text-indigo-500 text-3xl">es una inversión patrimonial.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                "Hacer una web sin SEO es como imprimir volantes y guardarlos en un cajón. Nadie los va a ver."
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <BarChart3 className="w-4 h-4 text-indigo-400" /> Resultados Medibles
                </div>
                <div className="flex items-center gap-2 text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Rocket className="w-4 h-4 text-indigo-400" /> Carga Ultra-rápida
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem]">
                <h4 className="text-xl font-bold mb-4">¿Dudas sobre la inversión?</h4>
                <p className="text-slate-400 text-sm mb-6">
                  Muchos negocios fallan por elegir la opción más barata. Mira nuestra guía de costos reales en Colombia para tomar una decisión informada.
                </p>
                <Link 
                  href="/blog/cuanto-cuesta-una-pagina-web-colombia" 
                  className="inline-flex items-center gap-2 text-indigo-400 font-black hover:text-indigo-300 transition-colors uppercase text-xs tracking-widest"
                >
                  Ver guía de precios <ArrowRight className="w-4 h-4" />
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