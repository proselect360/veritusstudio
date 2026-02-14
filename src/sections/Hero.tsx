'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, Globe, ArrowRight, MousePointer2, Clock } from 'lucide-react'

export default function HeroSection() {
  const trustSignals = [
    { title: 'Despliegue Récord', desc: 'Tu activo online listo en 14 días con metodología ágil.', icon: <Clock className="w-6 h-6" aria-hidden="true" />, color: 'text-blue-400' },
    { title: 'Velocidad Extrema', desc: 'Arquitectura Next.js 15 con carga < 1s garantizada.', icon: <Zap className="w-6 h-6" aria-hidden="true" />, color: 'text-indigo-400' },
    { title: 'Autoridad Digital', desc: 'SEO técnico de élite para dominar resultados locales.', icon: <Globe className="w-6 h-6" aria-hidden="true" />, color: 'text-emerald-400' },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-32 md:pb-20 isolate"
      aria-label="Introducción Veritus Studio"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" aria-hidden="true" />
          <div className="relative w-full h-full flex items-center justify-center animate-float">
            <Image
              src="/3d-abstract-shape.webp"
              alt=""
              width={800}
              height={800}
              priority
              fetchPriority="high"
              className="relative z-10 object-contain opacity-50 sm:opacity-60 md:opacity-70 drop-shadow-2xl"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 500px, (max-width: 1024px) 700px, 800px"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-30" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-6 sm:py-0">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 min-h-[36px] sm:min-h-[40px]">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500" />
              </span>
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-300">
                Disponibilidad Enero 2026
              </p>
            </div>
          </div>

          <h1 className="text-[32px] leading-[1.15] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-[90px] font-black tracking-tighter text-white mb-4 sm:mb-6 md:mb-8">
            Diseño web <span className="text-blue-500 italic font-light lowercase font-serif">premium</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
              que escala tu éxito
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-6 sm:mb-8 md:mb-12 px-1">
            Construimos activos digitales de <strong className="text-white font-bold">alto rendimiento</strong> que transforman clics en facturación real.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-16 md:mb-24 max-w-xs sm:max-w-none mx-auto">
            <Link
              href="#contacto"
              className="sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white text-base sm:text-lg font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 sm:gap-3 active:scale-95"
            >
              Empezar Proyecto
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Link>
            <Link
              href="#dinamico"
              className="sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-slate-900 border border-white/10 text-white text-base sm:text-lg font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Ver Portafolio
              <MousePointer2 className="w-4 h-4 text-blue-500" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {trustSignals.map((item, i) => (
              <article
                key={i}
                className="group p-5 sm:p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 text-center transition-all hover:border-indigo-500/40 hover:bg-white/[0.07]"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-6 rounded-xl bg-slate-900/80 flex items-center justify-center ${item.color}`} aria-hidden="true">
                  {item.icon}
                </div>
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white mb-1.5 sm:mb-3">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
