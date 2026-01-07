'use client'

import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import Contact from '@/sections/Contact'
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Zap, Search } from 'lucide-react'
import Link from 'next/link'

export default function BlogPrices() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white overflow-hidden">
        <article className="max-w-4xl mx-auto px-6">
          
          {/* --- HERO SECTION --- */}
          <header className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">
                Guía de Inversión Actualizada 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
              ¿Cuánto cuesta realmente una página web en <span className="text-indigo-600 italic">Colombia?</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Analizamos el mercado real: desde soluciones básicas hasta ecosistemas de alto rendimiento que generan ventas masivas.
            </p>
          </header>

          {/* --- TABLA DE COSTOS --- */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">1</div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Costos fijos de infraestructura</h2>
            </div>
            
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="p-8 font-black uppercase text-xs tracking-widest">Concepto</th>
                    <th className="p-8 font-black uppercase text-xs tracking-widest">Inversión Estimada (COP)</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-50/50">
                  <tr className="border-b border-slate-100 group hover:bg-white transition-colors">
                    <td className="p-8">
                      <p className="font-black text-slate-900">Dominio Profesional</p>
                      <p className="text-xs text-slate-500">(.com, .co, .com.co)</p>
                    </td>
                    <td className="p-8 font-bold text-indigo-600">$45.000 - $120.000 <span className="text-[10px] text-slate-400 block">Anuales</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 group hover:bg-white transition-colors">
                    <td className="p-8">
                      <p className="font-black text-slate-900">Hosting de Alto Rendimiento</p>
                      <p className="text-xs text-slate-500">Servidores optimizados para velocidad</p>
                    </td>
                    <td className="p-8 font-bold text-indigo-600">$250.000 - $600.000 <span className="text-[10px] text-slate-400 block">Anuales</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* --- COMPARATIVA --- */}
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">2</div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">¿Barato o Efectivo?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-10 bg-slate-50 rounded-[3rem] border-2 border-transparent hover:border-rose-200 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Web de Bajo Costo</h3>
                <ul className="space-y-4 text-slate-500 font-medium">
                  <li className="flex items-start gap-2 italic">• Plantillas lentas y "pesadas"</li>
                  <li className="flex items-start gap-2 italic">• Nulo posicionamiento SEO</li>
                  <li className="flex items-start gap-2 italic">• Sin soporte técnico real</li>
                  <li className="flex items-start gap-2 italic">• Atrapado en mensualidades</li>
                </ul>
              </div>

              <div className="group p-10 bg-indigo-600 rounded-[3rem] shadow-2xl shadow-indigo-200 transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Ecosistema Veritus</h3>
                <ul className="space-y-4 text-indigo-50 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Código Next.js ultra-rápido</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> SEO Local incluido</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Integración con WhatsApp Pro</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Sin cuotas mensuales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- INTERLAZADO ESTRATÉGICO (CORREGIDO) --- */}
          <section className="p-12 bg-slate-900 rounded-[3.5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-indigo-400 font-black uppercase tracking-widest text-[10px] mb-6">
                <Search className="w-4 h-4" /> Análisis por región
              </div>
              <h3 className="text-3xl font-black mb-8 tracking-tighter">Domina tu mercado local</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Colombia', slug: 'diseno-web-colombia' },
                  { name: 'Bogotá', slug: 'diseno-web-bogota' },
                  { name: 'Medellín', slug: 'diseno-web-medellin' }
                  
                ].map((city) => (
                  <Link 
                    key={city.slug}
                    href={`/blog/${city.slug}`} 
                    className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all group font-bold"
                  >
                    Estrategia {city.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* --- CALL TO ACTION --- */}
          <div className="mt-24 text-center">
            <div className="inline-block p-[2px] rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">
              <div className="bg-white rounded-[2.4rem] p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-6">
                  ¿Necesitas un presupuesto <br /> 
                  <span className="text-indigo-600">hecho a tu medida?</span>
                </h2>
                <p className="text-slate-500 font-medium mb-10 max-w-lg mx-auto italic">
                  No pierdas más dinero en soluciones baratas que no venden. Recibe una consultoría técnica gratuita hoy.
                </p>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-4 bg-slate-950 text-white px-12 py-6 rounded-2xl font-black hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-200 active:scale-95"
                >
                  Agendar Consultoría <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Contact />
      <Footer />
    </>
  )
}
