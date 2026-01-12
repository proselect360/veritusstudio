'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Layout, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react'

const philosophy = [
  {
    name: "Diseño Exclusivo",
    role: "Pilar 01",
    location: "Estética",
    text: "No usamos plantillas genéricas. Cada línea de código se diseña para que tu marca destaque sobre la competencia.",
    icon: <Layout className="w-6 h-6 md:w-7 md:h-7" />,
    color: "from-indigo-500 via-purple-500 to-indigo-600",
  },
  {
    name: "Velocidad Extrema",
    role: "Pilar 02",
    location: "Rendimiento",
    text: "Next.js 15 y optimización radical de assets para que tu web cargue en menos de 1 segundo. El rendimiento es ley.",
    icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />,
    color: "from-blue-500 via-cyan-400 to-blue-600",
  },
  {
    name: "Enfoque Comercial",
    role: "Pilar 03",
    location: "Conversión",
    text: "Una web bonita no sirve si no vende. Integramos estrategias de captura de leads y CTAs psicológicos.",
    icon: <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />,
    color: "from-emerald-500 via-teal-400 to-emerald-600",
  }
]

export default function PhilosophySection() {
  const containerRef = useRef(null)
  // Pilar Rendimiento: Reducimos el margen para que la animación dispare justo a tiempo
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })

  return (
    <section 
      id="philosophy"
      className="relative py-24 md:py-32 lg:py-56 bg-transparent overflow-hidden isolate" 
      ref={containerRef}
      aria-labelledby="philosophy-heading"
    >
      
      {/* Luces de Fondo - Pilar Rendimiento: Uso de blur moderado para evitar lag en móviles */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-emerald-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Cabecera Estilo Editorial */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Nuestra Filosofía</span>
            </div>
            <h2 id="philosophy-heading" className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85]">
              Calidad sobre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 italic font-serif">
                Cantidad.
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 font-medium max-w-md pb-4 lg:border-l lg:border-white/10 lg:pl-12 leading-relaxed"
          >
            No somos una fábrica masiva. Somos un estudio boutique que construye <span className="text-white font-bold">activos digitales</span> diseñados para dominar tu industria.
          </motion.p>
        </div>

        {/* CONTENEDOR HÍBRIDO - Pilar Accesibilidad: Navegación de carrusel */}
        <div className="relative -mx-6 md:mx-0">
          <div 
            className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-8 md:px-0 md:overflow-visible"
            role="list"
          >
            {philosophy.map((pilar, i) => (
              <motion.div 
                key={i}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-[85vw] md:w-auto flex-shrink-0 snap-center md:snap-align-none"
              >
                <PilarCard pilar={pilar} index={i} isInView={isInView} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

function PilarCard({ pilar, index, isInView }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full focus-within:ring-2 focus-within:ring-indigo-500 rounded-[2.5rem] outline-none"
    >
      <div className={`absolute -inset-[1px] bg-gradient-to-b ${pilar.color} rounded-[2.5rem] md:rounded-[3rem] opacity-0 group-hover:opacity-20 blur-md transition-all duration-500`} aria-hidden="true" />
      
      <div className="relative h-full bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col transition-all duration-500 group-hover:bg-slate-900/60">
        
        <div className="flex justify-between items-start mb-10 md:mb-16">
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${pilar.color} flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3`}>
            {pilar.icon}
          </div>
          <div className="flex flex-col items-end" aria-hidden="true">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1">{pilar.role}</span>
            <div className="w-10 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={isInView ? { x: 0 } : {}}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                  className={`w-full h-full bg-gradient-to-r ${pilar.color}`} 
                />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-black text-white mb-4 uppercase tracking-tighter">
            {pilar.name}
          </h3>
          <p className="text-xl md:text-2xl font-bold text-slate-300 leading-[1.25] tracking-tight group-hover:text-white transition-colors">
            "{pilar.text}"
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pilar.color} animate-pulse`} aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              {pilar.location}
            </span>
          </div>
          
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}