'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Globe, ArrowRight, MousePointer2, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const trustSignals = [
    {
      title: 'Despliegue Récord',
      desc: 'Tu activo online listo en 14 días con metodología ágil.',
      icon: <Clock className="w-6 h-6" aria-hidden="true" />,
      color: 'text-blue-400',
    },
    {
      title: 'Velocidad Extrema',
      desc: 'Arquitectura Next.js 15 con carga < 1s garantizada.',
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      color: 'text-indigo-400',
    },
    {
      title: 'Autoridad Digital',
      desc: 'SEO técnico de élite para dominar resultados locales.',
      icon: <Globe className="w-6 h-6" aria-hidden="true" />,
      color: 'text-emerald-400',
    },
  ]

  return (
    <section 
      id="inicio" 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-16 isolate" 
      aria-label="Introducción Veritus Studio"
    >
      {/* Fondo optimizado */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
          
          {/* Imagen central optimizada */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/3d-abstract-shape.webp"
              alt="Ingeniería web de alto rendimiento Veritus Studio"
              width={800}
              height={800}
              priority
              fetchPriority="high"
              className="relative z-10 object-contain opacity-70 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>
        </div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-30" 
          aria-hidden="true" 
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="flex justify-center mb-8 h-[40px]">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                Disponibilidad Enero 2026
              </p>
            </motion.div>
          </div>

          {/* Headline */}
          <h1 className="text-[42px] leading-[1.1] sm:text-7xl lg:text-[100px] font-black tracking-tighter text-white mb-8 min-h-[1.2em]">
            Diseño web <span className="text-blue-500 italic font-light lowercase font-serif">premium</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
              que escala tu éxito
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12 min-h-[60px]">
            Construimos activos digitales de <strong className="text-white font-bold">alto rendimiento</strong> que transforman clics en facturación real.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 min-h-[68px]">
            <Link
              href="#contacto"
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Empezar Proyecto
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>

            <Link
              href="#dinamico"
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 border border-white/10 text-white text-lg font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Ver Portafolio
              <MousePointer2 className="w-4 h-4 text-blue-500" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustSignals.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 text-center transition-all hover:border-blue-500/30"
              >
                <div className={`w-12 h-12 mx-auto mb-6 rounded-xl bg-slate-950 shadow-sm flex items-center justify-center ${item.color}`} aria-hidden="true">
                  {item.icon}
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-white mb-3">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
