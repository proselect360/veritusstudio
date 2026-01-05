'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const trustSignals = [
    { title: 'Entrega en 14 días', desc: 'Proceso probado con +300 pymes colombianas' },
    { title: 'Carga ultrarrápida', desc: 'Next.js + optimización extrema (<1s)' },
    { title: 'Resultados locales', desc: 'Clientes en primeras posiciones en sus ciudades' },
  ]

  if (!isMounted) {
    return <HeroSkeleton />
  }

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center isolate" aria-labelledby="hero-heading">
      {/* Fondo premium (sin cambios) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent" style={{ backgroundPosition: '50% 30%' }} aria-hidden="true" />
      
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-blue-400/20 to-indigo-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-indigo-400/20 via-purple-400/10 to-pink-400/15 rounded-full blur-3xl animate-blob animation-delay-4s" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-8s" />
      </div>

      <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline más equilibrado */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
            <span className="block text-slate-900">Diseño web profesional</span>
            <span className="block mt-3 md:mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent drop-shadow-xl">
              que genera clientes
            </span>
            <span className="block mt-6 md:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800">
              en Bogotá, Medellín, Cali y toda Colombia
            </span>
          </h1>

          {/* Subtítulo más legible */}
          <p className="mt-10 md:mt-14 text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Páginas premium con <span className="text-indigo-700 font-black">Next.js</span>: carga instantánea, 
            SEO local avanzado, integración WhatsApp + IA y diseño estratégico enfocado en resultados reales.
          </p>

          {/* CTAs con texto más proporcionado */}
          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-5 px-14 py-7 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-xl md:text-2xl font-black rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-blue-600/60 overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:scale-105"
              aria-label="Solicitar propuesta gratuita"
            >
              <span className="relative z-10">Quiero mi propuesta gratis</span>
              <svg className="w-9 h-9 relative z-10 transition-transform duration-500 group-hover:translate-x-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white/30 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="#process"
              className="inline-flex items-center gap-4 px-14 py-7 border-4 border-slate-900 text-slate-900 text-xl md:text-2xl font-black rounded-3xl hover:bg-slate-900 hover:text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              Ver cómo lo hacemos
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Trust Signals con títulos más equilibrados */}
          <div className="mt-28 md:mt-36 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {trustSignals.map((item, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 hover:border-blue-600/30 ring-1 ring-white/30 hover:shadow-3xl hover:-translate-y-6 transition-all duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl flex items-center justify-center">
                    <span className="text-5xl font-black text-white">✓</span>
                  </div>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animaciones blobs (sin cambios) */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -40px) scale(1.1); }
          50% { transform: translate(-30px, 50px) scale(0.95); }
          75% { transform: translate(40px, 30px) scale(1.05); }
        }
        .animate-blob { animation: blob 35s infinite ease-in-out; }
        .animation-delay-4s { animation-delay: 4s; }
        .animation-delay-8s { animation-delay: 8s; }
      `}</style>
    </section>
  )
}

function HeroSkeleton() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
        <div className="space-y-12 animate-pulse">
          <div className="h-20 md:h-28 bg-slate-200 rounded-3xl max-w-4xl mx-auto" />
          <div className="h-28 md:h-36 bg-slate-200 rounded-3xl max-w-5xl mx-auto" />
          <div className="h-16 md:h-20 bg-slate-200 rounded-3xl max-w-3xl mx-auto" />
          
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
            <div className="h-20 bg-slate-200 rounded-3xl flex-1 max-w-md mx-auto" />
            <div className="h-20 bg-slate-200 rounded-3xl flex-1 max-w-md mx-auto" />
          </div>

          <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-slate-100 rounded-3xl border border-slate-200/50" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}