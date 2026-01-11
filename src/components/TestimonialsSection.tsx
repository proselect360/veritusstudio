'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Layout, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react'

const philosophy = [
  {
    name: "Diseño Exclusivo",
    role: "Pilar 01",
    location: "Estética",
    text: "No usamos plantillas genéricas. Cada línea de código y cada píxel se diseña para que tu marca destaque sobre la competencia.",
    icon: <Layout className="w-6 h-6" />,
    color: "from-indigo-500 via-purple-500 to-indigo-600",
    shadow: "shadow-indigo-500/20"
  },
  {
    name: "Velocidad Extrema",
    role: "Pilar 02",
    location: "Rendimiento",
    text: "Usamos Next.js 15 y optimización de imágenes para que tu web cargue en menos de 1 segundo. Si es lento, no es Veritus.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500 via-cyan-400 to-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    name: "Enfoque Comercial",
    role: "Pilar 03",
    location: "Conversión",
    text: "Una web bonita no sirve si no vende. Integramos WhatsApp Pro y llamados a la acción estratégicos para captar clientes.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-emerald-500 via-teal-400 to-emerald-600",
    shadow: "shadow-emerald-500/20"
  }
]

export default function PhilosophySection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 lg:py-56 bg-transparent overflow-hidden isolate" ref={containerRef}>
      
      {/* Luces de Fondo (Mesh Gradient) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Cabecera Refinada */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-950/5 dark:bg-white/5 border border-slate-950/10 dark:border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">Nuestra Filosofía</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.85]">
              Calidad sobre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 italic">
                Cantidad.
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-md pb-4 lg:border-l lg:border-slate-200 lg:dark:border-slate-800 lg:pl-12"
          >
            No somos una fábrica de sitios web masivos. Somos un estudio que construye activos digitales que <span className="text-slate-950 dark:text-white font-bold text-2xl">escalan.</span>
          </motion.p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {philosophy.map((pilar, i) => (
            <PilarCard key={i} pilar={pilar} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PilarCard({ pilar, index, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -15 }}
      className="group relative"
    >
      {/* Efecto de borde iluminado (Border Glow) */}
      <div className={`absolute -inset-[1px] bg-gradient-to-b ${pilar.color} rounded-[3rem] opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500`} />
      
      <div className="relative h-full bg-white/60 dark:bg-slate-950/60 backdrop-blur-3xl rounded-[3rem] p-10 lg:p-14 border border-white/40 dark:border-white/10 flex flex-col transition-colors duration-500">
        
        {/* Top: Icon & Pillar Number */}
        <div className="flex justify-between items-start mb-12">
          <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${pilar.color} flex items-center justify-center text-white shadow-2xl ${pilar.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            {pilar.icon}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-1">{pilar.role}</span>
            <div className="w-8 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
               <motion.div 
                initial={{ x: "-100%" }}
                animate={isInView ? { x: 0 } : {}}
                transition={{ delay: 0.8 + (index * 0.2), duration: 1 }}
                className={`w-full h-full bg-gradient-to-r ${pilar.color}`} 
               />
            </div>
          </div>
        </div>

        {/* Middle: Content */}
        <div className="mb-14">
          <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-6 uppercase tracking-tighter group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {pilar.name}
          </h3>
          <p className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-[1.3] tracking-tight">
            "{pilar.text}"
          </p>
        </div>

        {/* Bottom: Meta & Link */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pilar.color}`} />
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {pilar.location}
            </span>
          </div>
          
          <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </button>
        </div>

      </div>
    </motion.div>
  )
}