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
      title: 'Entrega en 14 días',
      desc: 'Proceso Speed-to-Market para negocios ágiles.',
      icon: <Clock className="w-7 h-7 text-white" />,
      accent: 'group-hover:bg-blue-600',
    },
    {
      title: 'Carga Instantánea',
      desc: 'Webs Next.js con LCP < 1s garantizado.',
      icon: <Zap className="w-7 h-7 text-white" />,
      accent: 'group-hover:bg-indigo-600',
    },
    {
      title: 'SEO Local Pro',
      desc: 'Dominio absoluto en búsquedas regionales.',
      icon: <Globe className="w-7 h-7 text-white" />,
      accent: 'group-hover:bg-emerald-600',
    },
  ]

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isMounted) return null

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      
      {/* CAPA DE ARTE DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* IMAGEN 3D CENTRAL - Arreglo de posicionamiento Mobile vs Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [0.9, 1, 0.9],
            rotate: 0,
            y: [0, -30, 0],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 1.8, ease: 'easeOut' },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          /* CAMBIO CLAVE: 
             En móvil: top-[15%] y centrado horizontal con translate-x.
             En desktop (lg): recupera el top-1/2 y translate-y-1/2.
          */
          className="absolute left-1/2 -translate-x-1/2 top-[15%] lg:top-1/2 lg:-translate-y-1/2 w-[110%] md:w-[70%] lg:w-[50%] max-w-[1000px] h-auto aspect-square z-0"
        >
          {/* Glow/Resplandor */}
          <div className="absolute inset-[15%] bg-blue-600/20 blur-[100px] lg:blur-[150px] rounded-full" />
          
          <Image
            src="/3d-abstract-shape.webp"
            alt="Veritus Studio Abstract 3D Shape"
            width={1800}
            height={1800}
            className="relative z-10 object-contain opacity-60 lg:opacity-90 drop-shadow-[0_40px_80px_rgba(37,99,235,0.3)]"
            priority
          />
        </motion.div>

        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2]" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="group relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Disponibilidad 2026
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[110px] font-black leading-[0.9] lg:leading-[0.85] tracking-tighter text-slate-950 dark:text-white mb-8"
          >
            Diseño web <span className="text-blue-600 italic font-serif font-light lowercase">premium</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white">
              que escala tu éxito
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Construimos <span className="text-slate-900 dark:text-white font-bold">activos digitales</span> de alto rendimiento que transforman visitantes en facturación real.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link
              href="https://wa.me/573125858242"
              target="_blank" // Abre en pestaña nueva
              rel="noopener noreferrer" // Seguridad para links externos
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 overflow-hidden"
            >
              {/* Efecto de Brillo (Shimmer) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              
              <span className="relative z-10 flex items-center gap-3">
                Empezar Proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <button
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto group px-10 py-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 text-slate-950 dark:text-white text-lg font-bold rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2"
            >
              Ver Portfolio
              <MousePointer2 className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
            </button>
          </motion.div>

          {/* Cards de Valor */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.8 },
              },
            }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
          >
            {trustSignals.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 transition-all duration-500 group-hover:-translate-y-2" />
                <div className="relative p-8 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 mb-5 bg-slate-950 dark:bg-slate-800 rounded-2xl flex items-center justify-center transition-all ${item.accent} shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}