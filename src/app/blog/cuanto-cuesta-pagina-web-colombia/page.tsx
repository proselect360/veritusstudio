'use client'

import Header from '@/components/Header'
import Footer from '@/sections/Footer'
// CORRECCIÓN 1: Nombre de importación unificado (asumiendo que el archivo es Contact.tsx)
import Contact from '@/sections/Contact' 
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Zap, Search } from 'lucide-react'
import Link from 'next/link'

export default function BlogPrices() {
  return (
    <>
      <Header />
      {/* CORRECCIÓN 2: Forzado a Modo Oscuro (bg-slate-950 y texto blanco) */}
      <main className="pt-32 pb-24 bg-slate-950 text-white overflow-hidden">
        <article className="max-w-4xl mx-auto px-6">
          
          {/* --- HERO SECTION --- */}
          <header className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">
                Guía de Inversión Actualizada 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              ¿Cuánto cuesta realmente una página web en <span className="text-indigo-400 italic">Colombia?</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Analizamos el mercado real: desde soluciones básicas hasta ecosistemas de alto rendimiento que generan ventas masivas.
            </p>
          </header>

          {/* --- TABLA DE COSTOS --- */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
              <h2 className="text-3xl font-black text-white tracking-tight">Costos fijos de infraestructura</h2>
            </div>
            
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="p-8 font-black uppercase text-xs tracking-widest">Concepto</th>
                    <th className="p-8 font-black uppercase text-xs tracking-widest">Inversión Estimada (COP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                    <td className="p-8">
                      <p className="font-black text-white">Dominio Profesional</p>
                      <p className="text-xs text-slate-400">(.com, .co, .com.co)</p>
                    </td>
                    <td className="p-8 font-bold text-indigo-400">$45.000 - $120.000 <span className="text-[10px] text-slate-500 block">Anuales</span></td>
                  </tr>
                  <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                    <td className="p-8">
                      <p className="font-black text-white">Hosting de Alto Rendimiento</p>
                      <p className="text-xs text-slate-400">Servidores optimizados para velocidad</p>
                    </td>
                    <td className="p-8 font-bold text-indigo-400">$250.000 - $600.000 <span className="text-[10px] text-slate-500 block">Anuales</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* --- COMPARATIVA --- */}
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
              <h2 className="text-3xl font-black text-white tracking-tight">¿Barato o Efectivo?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Opción Mala */}
              <div className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-rose-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Web de Bajo Costo</h3>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li>• Plantillas lentas y "pesadas"</li>
                  <li>• Nulo posicionamiento SEO</li>
                  <li>• Sin soporte técnico real</li>
                  <li>• Atrapado en mensualidades</li>
                </ul>
              </div>

              {/* Opción Veritus */}
              <div className="group p-10 bg-indigo-600 rounded-[3rem] shadow-2xl shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Ecosistema Veritus</h3>
                <ul className="space-y-4 text-indigo-50 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Código Next.js ultra-rápido</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> SEO Local incluido</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> WhatsApp Business Pro</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Sin cuotas mensuales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- CALL TO ACTION --- */}
          <div className="mt-24 text-center">
            <div className="inline-block p-[2px] rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">
              <div className="bg-slate-900 rounded-[2.4rem] p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                  ¿Necesitas un presupuesto <br /> 
                  <span className="text-indigo-400">hecho a tu medida?</span>
                </h2>
                <p className="text-slate-400 font-medium mb-10 max-w-lg mx-auto italic">
                  No pierdas más dinero en soluciones baratas que no venden. Recibe una consultoría técnica gratuita hoy.
                </p>
                {/* CORRECCIÓN 3: Link de contacto apuntando al ID correcto */}
                <Link 
                  href="/#contacto" 
                  className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-6 rounded-2xl font-black hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95"
                >
                  Agendar Consultoría <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* SECCIÓN DE CONTACTO ABAJO */}
      <section id="contacto">
        <Contact />
      </section>
      
      <Footer />
    </>
  )
}