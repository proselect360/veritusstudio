'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Step {
  number: string
  title: string
  description: string
  duration: string
  icon: string
  gradient: string
  details?: string[]
}

const steps: Step[] = [
  {
    number: "01",
    title: "Estrategia y Diagnóstico",
    description: "Estudiamos tu negocio, competencia, público objetivo y objetivos comerciales para definir la mejor estrategia digital.",
    duration: "Días 1-2",
    icon: "🎯",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    details: [
      "Análisis profundo de tu negocio y objetivos",
      "Estudio de competencia local y nacional",
      "Definición de buyer persona",
      "Estrategia de posicionamiento y mensajes clave",
      "Plan de conversión optimizado"
    ]
  },
  {
    number: "02",
    title: "Diseño UX/UI Premium",
    description: "Creamos un diseño moderno, profesional y enfocado en conversión: claro, atractivo y alineado con tu marca.",
    duration: "Días 3-7",
    icon: "🎨",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    details: [
      "Wireframes y estructura de navegación",
      "Diseño visual personalizado (no plantillas)",
      "Paleta de colores y tipografía única",
      "Diseño mobile-first y responsive",
      "Revisión y ajustes ilimitados hasta aprobación"
    ]
  },
  {
    number: "03",
    title: "Desarrollo Técnico",
    description: "Construimos tu sitio con Next.js App Router, optimizado para velocidad, SEO técnico y Core Web Vitals excelentes.",
    duration: "Días 8-12",
    icon: "⚡",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    details: [
      "Desarrollo con Next.js 14+ (App Router)",
      "Server Components + Streaming",
      "Optimización de imágenes automática",
      "SEO técnico completo (meta, schema, sitemap)",
      "Velocidad >95 en Lighthouse"
    ]
  },
  {
    number: "04",
    title: "Lanzamiento y Entrega",
    description: "Publicamos tu web con dominio, hosting seguro, SSL, Google Analytics, integración WhatsApp y capacitación inicial.",
    duration: "Día 14",
    icon: "🚀",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    details: [
      "Configuración de dominio y DNS",
      "Hosting premium en Vercel",
      "Certificado SSL gratuito",
      "Google Analytics + Search Console",
      "Integración WhatsApp flotante",
      "Capacitación 1 hora por videollamada",
      "30 días de soporte post-lanzamiento"
    ]
  },
]

export default function ProcessSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedStep, setSelectedStep] = useState<Step | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Bloquear scroll del body
  useEffect(() => {
    if (selectedStep) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedStep])

  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedStep(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  if (!isMounted) {
    return <ProcessSkeleton />
  }

  return (
    <section 
      id="process" 
      aria-labelledby="process-heading"
      className="relative py-24 lg:py-32 overflow-hidden border-t isolate"
    >
      {/* Fondo premium (igual) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-600/10 via-transparent to-transparent opacity-60" style={{ backgroundPosition: '50% 30%' }} aria-hidden="true" />

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2s" />
        <div className="absolute bottom-0 right-0 w-96 h-96 md:w-[700px] md:h-[700px] bg-gradient-to-tl from-pink-500/15 via-rose-500/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-4s" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-cyan-500/15 to-indigo-500/10 rounded-full blur-3xl animate-blob" />
      </div>

      <div className="absolute inset-0 opacity-5 mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header (igual) */}
        <header className="text-center mb-20 lg:mb-28">
          <h2 id="process-heading" className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent leading-tight drop-shadow-sm">
            Nuestro proceso en 14 días
          </h2>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Metodología clara y probada con más de{" "}
            <span className="text-indigo-900 font-bold">300 pymes en Colombia</span>,
            diseñada para entregarte una web profesional y efectiva en tiempo récord.
          </p>
        </header>

        {/* Pasos (igual) */}
        <ol className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 md:grid md:grid-cols-4 md:gap-8 lg:gap-12 md:overflow-visible md:snap-none md:pb-0" role="list">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl border border-white/50 hover:border-indigo-900/30 transition-all duration-700 hover:-translate-y-6 flex-shrink-0 w-[88vw] max-w-md snap-center md:w-auto md:max-w-none md:flex-shrink-0 ring-1 ring-white/20"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-2xl ring-8 ring-white/80 bg-gradient-to-br ${step.gradient} text-white transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6`} aria-hidden="true">
                    {step.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-5xl font-black text-slate-900/20">{step.number}</span>
                    <time className="block text-sm font-bold uppercase tracking-wider text-slate-500 mt-1">
                      {step.duration}
                    </time>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-indigo-900 transition-colors duration-500 leading-tight">
                  {step.title}
                </h3>

                <p className="text-base text-slate-700 leading-relaxed flex-grow font-medium">
                  {step.description}
                </p>

                <div className="mt-10 pt-8 border-t border-slate-200/60">
                  <button
                    onClick={() => setSelectedStep(step)}
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-indigo-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg px-2 -mx-2 py-1"
                    aria-label={`Ver más detalles sobre ${step.title}`}
                  >
                    Ver detalle
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Indicadores móviles */}
        <div className="flex justify-center gap-2 mt-8 md:hidden" aria-hidden="true">
          {steps.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-slate-400/60" />
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-24 text-center">
          <p className="text-base md:text-lg text-slate-700 font-medium mb-10 max-w-4xl mx-auto">
            ¿Listo para tener tu web profesional en solo{" "}
            <span className="text-indigo-900 font-black">14 días</span>?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-800 text-white text-lg md:text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-indigo-900/60 hover:-translate-y-3 hover:scale-105 transition-all duration-500 ring-4 ring-indigo-500/20"
            aria-label="Iniciar mi proyecto ahora"
          >
            Iniciar mi proyecto ahora
            <svg className="w-7 h-7 transition-transform duration-300 hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* MODAL DETALLE - CENTRADO EN WEB */}
      {selectedStep && (
        <dialog open className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedStep(null)}>
          {/* En móvil: items-start (arriba), en desktop: items-center (centrado) */}
          <div 
            className="min-h-screen px-6 py-12 flex items-start md:items-center justify-center overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-3xl max-w-2xl w-full my-8 md:my-0 p-10 md:p-12 border border-white/60 ring-4 ring-indigo-600/20 max-h-[90vh] overflow-y-auto"
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/60 backdrop-blur hover:bg-white/80 transition-all z-10"
                aria-label="Cerrar detalle"
              >
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                <div className={`inline-flex w-24 h-24 rounded-3xl items-center justify-center text-5xl shadow-2xl ring-8 ring-white/80 bg-gradient-to-br ${selectedStep.gradient} text-white mb-8`}>
                  {selectedStep.icon}
                </div>

                <span className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">
                  Paso {selectedStep.number} • {selectedStep.duration}
                </span>

                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                  {selectedStep.title}
                </h3>

                <p className="text-lg text-slate-700 mb-10 leading-relaxed">
                  {selectedStep.description}
                </p>

                <ul className="space-y-4 text-left max-w-lg mx-auto">
                  {selectedStep.details?.map((detail, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-base md:text-lg text-slate-700 font-medium">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <Link
                    href="#contact"
                    onClick={() => setSelectedStep(null)}
                    className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-indigo-900 to-purple-800 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                  >
                    Iniciar mi proyecto
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </dialog>
      )}

      {/* Animaciones blobs */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 20s infinite ease-in-out; }
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-4s { animation-delay: 4s; }
      `}</style>
    </section>
  )
}

function ProcessSkeleton() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 lg:mb-28">
          <div className="h-16 bg-slate-200 rounded-3xl max-w-3xl mx-auto animate-pulse" />
          <div className="mt-6 h-8 bg-slate-200 rounded-2xl max-w-2xl mx-auto animate-pulse" />
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 md:grid md:grid-cols-4 md:gap-8 lg:gap-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-[88vw] max-w-md md:w-auto h-96 bg-white/80 rounded-3xl shadow-lg animate-pulse border border-slate-200/50">
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex justify-between">
                  <div className="w-20 h-20 bg-slate-200 rounded-3xl" />
                  <div className="w-16 h-12 bg-slate-200 rounded-lg" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-slate-200 rounded-xl w-3/4" />
                  <div className="h-4 bg-slate-200 rounded-lg" />
                  <div className="h-4 bg-slate-200 rounded-lg w-5/6" />
                  <div className="h-4 bg-slate-200 rounded-lg w-4/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}