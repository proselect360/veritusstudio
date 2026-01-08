'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Zap, Globe, ArrowRight, Sparkles, MousePointer2 } from 'lucide-react'
import { motion } from 'framer-motion' // Opcional pero recomendado para animaciones fluidas

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const trustSignals = [
    { 
      title: 'Entrega en 14 días', 
      desc: 'Proceso Speed-to-Market para negocios ágiles.',
      icon: <ClockIcon />,
      accent: 'group-hover:bg-blue-600'
    },
    { 
      title: 'Carga Instantánea', 
      desc: 'Webs Next.js con LCP < 1s garantizado.',
      icon: <Zap className="w-7 h-7 text-white" />,
      accent: 'group-hover:bg-indigo-600'
    },
    { 
      title: 'SEO Local Pro', 
      desc: 'Dominio absoluto en búsquedas regionales.',
      icon: <Globe className="w-7 h-7 text-white" />,
      accent: 'group-hover:bg-emerald-600'
    },
  ]

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) return <HeroSkeleton />

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      
      {/* CAPA DE ARTE DE FONDO (Refinada) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-emerald-400/10 to-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-4s" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge Superior */}
          <div className="flex justify-center mb-8">
            <div className="group relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:border-blue-400/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Disponibilidad Limitada <span className="text-blue-600 dark:text-blue-400 ml-1 italic font-serif lowercase text-xs">2026</span>
              </span>
            </div>
          </div>

          {/* Headline Titánico */}
          <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-black leading-[0.85] tracking-tighter text-slate-950 dark:text-white mb-8">
            Diseño web <span className="text-blue-600 italic font-serif font-light lowercase">premium</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white">
              que escala tu éxito
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            No solo creamos páginas, construimos <span className="text-slate-900 dark:text-slate-100 font-bold decoration-blue-500/30 underline underline-offset-4">activos digitales</span> de alto rendimiento con Next.js que transforman visitantes en facturación real.
          </p>

          {/* CTAs Primarios */}
          <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="https://wa.me/573125858242"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span>Empezar Proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={scrollToPortfolio}
              className="group px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              Ver Portfolio
              <MousePointer2 className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
            </button>
          </div>

          {/* Grid de Propuesta de Valor */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {trustSignals.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:shadow-2xl group-hover:shadow-indigo-500/5 group-hover:-translate-y-2" />
                
                <div className="relative p-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 mb-6 bg-slate-950 dark:bg-slate-800 rounded-2xl flex items-center justify-center transition-all duration-500 ${item.accent} group-hover:rotate-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
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
        .animate-blob { animation: blob 15s infinite alternate ease-in-out; }
        .animation-delay-4s { animation-delay: 4s; }
      `}</style>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeroSkeleton() {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-4xl px-12 space-y-12 animate-pulse">
        <div className="h-4 w-32 bg-slate-100 dark:bg-slate-900 mx-auto rounded-full" />
        <div className="h-40 bg-slate-100 dark:bg-slate-900 rounded-3xl" />
        <div className="h-20 bg-slate-100 dark:bg-slate-900 max-w-2xl mx-auto rounded-2xl" />
        <div className="flex gap-4 justify-center">
          <div className="h-16 w-48 bg-slate-100 dark:bg-slate-900 rounded-2xl" />
          <div className="h-16 w-48 bg-slate-100 dark:bg-slate-900 rounded-2xl" />
        </div>
      </div>
    </section>
  )
}