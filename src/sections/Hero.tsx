'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Globe, ArrowRight, MousePointer2, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const trustSignals = [
    {
      title: 'Despliegue Record',
      desc: 'Tu activo online listo en 14 días con metodología ágil.',
      icon: <Clock className="w-6 h-6" />,
      color: 'text-blue-400',
      shadow: 'group-hover:shadow-blue-500/20'
    },
    {
      title: 'Velocidad Extrema',
      desc: 'Arquitectura Next.js 15 con carga < 1s garantizada.',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-indigo-400',
      shadow: 'group-hover:shadow-indigo-500/20'
    },
    {
      title: 'Autoridad Digital',
      desc: 'SEO técnico de élite para dominar resultados locales.',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-emerald-400',
      shadow: 'group-hover:shadow-emerald-500/20'
    },
  ]

  if (!isMounted) {
    // Skeleton o contenedor vacío con altura mínima para evitar CLS inicial
    return <section className="min-h-screen bg-white dark:bg-slate-950" />
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-28 pb-16 transition-colors duration-500 isolate">
      
      {/* ARTE DE FONDO - Optimizado para CLS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square"
        >
          {/* Resplandor estático para no saturar el Main Thread */}
          <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full" />
          
          <Image
            src="/3d-abstract-shape.webp"
            alt="Veritus Studio Ingeniería Web"
            width={800} // Reducido para mejor performance inicial
            height={800}
            priority // Carga inmediata
            fetchPriority="high" // Prioridad máxima en el navegador
            sizes="(max-width: 768px) 100vw, 800px"
            className="relative z-10 object-contain opacity-40 lg:opacity-70 drop-shadow-2xl animate-float"
          />
        </motion.div>

        {/* Grid de fondo ligero */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge de Disponibilidad */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
                Disponibilidad Enero 2026
              </span>
            </div>
          </motion.div>

          {/* Headline con Layout Estable */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[42px] leading-[1.1] sm:text-7xl lg:text-[100px] font-black tracking-tighter text-slate-950 dark:text-white mb-8"
          >
            Diseño web <span className="text-blue-600 italic font-light lowercase font-serif">premium</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400">
              que escala tu éxito
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12"
          >
            Construimos activos digitales de <span className="text-slate-950 dark:text-white font-bold">alto rendimiento</span> que transforman clics en facturación.
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Link
              href="https://wa.me/573125858242"
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Empezar Proyecto
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Ver Portfolio
              <MousePointer2 className="w-4 h-4 text-blue-500" />
            </button>
          </div>

          {/* Trust Signals - Carrusel móvil / Grid Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustSignals.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-center transition-all hover:border-blue-500/30"
              >
                <div className={`w-12 h-12 mx-auto mb-6 rounded-xl bg-white dark:bg-slate-950 shadow-sm flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-950 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}