'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const trustSignals = [
    { 
      title: 'Entrega en 14 días', 
      desc: 'Proceso optimizado con +300 pymes colombianas.',
      icon: <ClockIcon />
    },
    { 
      title: 'Carga Ultrarrápida', 
      desc: 'Infraestructura Next.js para velocidad instantánea.',
      icon: <Zap className="w-8 h-8 text-white" /> 
    },
    { 
      title: 'SEO Local Pro', 
      desc: 'Dominio total en búsquedas de tu ciudad.',
      icon: <Globe className="w-8 h-8 text-white" /> 
    },
  ]

  if (!isMounted) return <HeroSkeleton />

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden flex items-center isolate bg-[#fafafa]" aria-labelledby="hero-heading">
      {/* Background Layer - Ultra Refined */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-100/40 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-100/30 rounded-full blur-[120px] animate-blob animation-delay-4s" />
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-slate-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge Superior */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Proyectos 2026 Disponibles
            </span>
          </div>

          <h1 id="hero-heading" className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-slate-950">
            Diseño web <span className="text-blue-600 italic font-serif font-normal">profesional</span> <br />
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
              que genera clientes
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            No solo creamos páginas, construimos <strong className="text-slate-900 font-bold">terminales de venta</strong>. 
            Arquitectura Next.js optimizada para la realidad comercial de Colombia.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="https://wa.me/573125858242"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              Cotizar por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              href="#portfolio"
              className="px-10 py-5 border-2 border-slate-200 text-slate-900 text-lg font-black rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Ver Portafolio
            </Link>
          </div>

          {/* Trust Signals Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {trustSignals.map((item, i) => (
              <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 mb-6 bg-slate-950 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 20s infinite alternate ease-in-out; }
        .animation-delay-4s { animation-delay: 4s; }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeroSkeleton() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full space-y-8 animate-pulse">
        <div className="h-4 w-40 bg-slate-200 mx-auto rounded-full" />
        <div className="h-20 bg-slate-200 max-w-3xl mx-auto rounded-3xl" />
        <div className="h-12 bg-slate-200 max-w-xl mx-auto rounded-2xl" />
        <div className="flex gap-4 justify-center">
          <div className="h-16 w-48 bg-slate-200 rounded-2xl" />
          <div className="h-16 w-48 bg-slate-200 rounded-2xl" />
        </div>
      </div>
    </section>
  )
}