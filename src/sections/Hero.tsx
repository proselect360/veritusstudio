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
    desc: 'Tu activo online listo en 14 días con metodología ágil certificada.',
    icon: <Clock className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />,
    accent: 'hover:border-blue-500/50',
    bg: 'group-hover:bg-blue-600',
    shadow: 'shadow-blue-500/20'
  },
  {
    title: 'Velocidad Extrema',
    desc: 'Arquitectura Next.js 15 con carga < 1s. Retención de usuarios garantizada.',
    icon: <Zap className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />,
    accent: 'hover:border-indigo-500/50',
    bg: 'group-hover:bg-indigo-600',
    shadow: 'shadow-indigo-500/20'
  },
  {
    title: 'Autoridad Digital',
    desc: 'SEO técnico de élite para dominar los resultados de búsqueda locales.',
    icon: <Globe className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />,
    accent: 'hover:border-emerald-500/50',
    bg: 'group-hover:bg-emerald-600',
    shadow: 'shadow-emerald-500/20'
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

          {/* Contenedor con Scroll Snap para móvil */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.4 },
                },
              }}
              /* CLASES CLAVE: 
                - flex overflow-x-auto: activa el carrusel en móvil
                - snap-x snap-mandatory: hace que las tarjetas "encajen" al deslizar
                - md:grid: vuelve a la cuadrícula normal en escritorio
              */
              className="mt-16 md:mt-24 flex overflow-x-auto pb-12 pt-4 px-4 md:px-0 md:overflow-visible md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 snap-x snap-mandatory scrollbar-hide"
            >
              {trustSignals.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  /* min-w-[85%]: permite ver un pedazo de la siguiente tarjeta (afordance visual) */
                  className="group relative flex-shrink-0 w-[85%] md:w-full snap-center md:snap-align-none"
                >
                  {/* Fondo con Glassmorphism */}
                  <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-200 dark:border-white/10 transition-all duration-500 md:group-hover:-translate-y-3 shadow-lg md:group-hover:shadow-2xl" />
                  
                  {/* Luz de acento superior */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] opacity-0 md:group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]`} />

                  <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                    {/* Contenedor del Icono */}
                    <div className="relative mb-6 md:mb-8">
                      <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-20 transition-all duration-500 ${item.accent.replace('group-hover:', '')} md:group-hover:opacity-60`} />
                      <div className={`relative w-14 h-14 md:w-16 md:h-16 bg-slate-950 dark:bg-slate-800 rounded-2xl flex items-center justify-center transition-all duration-500 md:group-hover:scale-110 shadow-2xl border border-white/5`}>
                        <div className="text-white md:group-hover:text-blue-400 transition-colors">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-slate-950 dark:text-white mb-3 tracking-tight uppercase">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    {/* Indicador de lectura */}
                    <div className="mt-6 md:mt-8 w-10 h-[2px] bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full w-full transition-transform duration-700 translate-x-[-100%] md:group-hover:translate-x-0 ${item.accent.replace('group-hover:', '')}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
}