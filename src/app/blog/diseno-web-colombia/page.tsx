'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import Contact from '@/sections/Contact'
import { CheckCircle2, Zap, ShieldCheck, MessageCircle, ArrowRight, BarChart3 } from 'lucide-react'

export default function DisenoWebColombia() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-white" />

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - Estilo Veritus Pro */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Tecnología de Vanguardia</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-10">
              Diseño Web <br />
              <span className="text-indigo-600 font-black">en Colombia</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              Páginas web premium con <span className="text-slate-900 font-bold">Next.js</span> para empresas que no se conforman con lo básico. Rendimiento extremo y SEO real.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all hover:scale-105">
                Quiero mi cotización gratis
              </a>
              <Link href="/blog/cuanto-cuesta-pagina-web-colombia" className="px-10 py-5 bg-slate-100 text-slate-900 font-black rounded-2xl hover:bg-slate-200 transition-all">
                Ver Guía de Precios 2026
              </Link>
            </div>
          </div>
        </section>

        {/* Sección de Autoridad "Zapatero a su zapato" - Adaptada para Colombia */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  ¿Por qué las pymes en <span className="text-indigo-500">Colombia</span> nos eligen?
                </h2>
                <div className="space-y-8">
                  {[
                    { title: "Velocidad Next.js", desc: "Cargas en < 1s. Google ama la rapidez y tus clientes también.", icon: <Zap className="text-indigo-400" /> },
                    { title: "SEO Local #1", desc: "Dominamos Bogotá, Medellín y Cali. Te ponemos donde están las ventas.", icon: <BarChart3 className="text-indigo-400" /> },
                    { title: "WhatsApp Business Pro", desc: "Integración nativa para capturar leads 24/7 sin fricciones.", icon: <MessageCircle className="text-indigo-400" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-black text-xl mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-4 shadow-2xl">
                  <Image 
                    src="/mockup-web-colombia.png" 
                    alt="Veritus Studio Web" 
                    width={600} 
                    height={800} 
                    className="rounded-[2rem] shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-indigo-600 p-6 rounded-3xl shadow-xl">
                    <p className="text-2xl font-black italic">14 Días</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Entrega Garantizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Grid de Sedes - Interlinking Estratégico */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <h3 className="text-3xl font-black text-slate-950 mb-12 text-center">Nuestra presencia nacional</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { city: 'Bogotá D.C.', href: '/blog/diseno-web-bogota', slug: 'Estrategia SEO Capital' },
              { city: 'Medellín', href: '/blog/diseno-web-medellin', slug: 'Innovación Digital' },
              { city: 'Cali & Resto de Col', href: '#contact', slug: 'Expansión Nacional' }
            ].map((item, i) => (
              <Link href={item.href} key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-indigo-600 transition-all">
                <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600">{item.city}</h4>
                <p className="text-indigo-600/60 font-bold text-xs uppercase tracking-widest mb-4">{item.slug}</p>
                <div className="inline-flex items-center gap-2 text-slate-900 font-black text-sm">
                  Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
