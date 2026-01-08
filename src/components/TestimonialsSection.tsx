'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const philosophy = [
  {
    name: "Diseño Exclusivo",
    role: "Pilar 01",
    location: "Estética",
    text: "No usamos plantillas genéricas. Cada línea de código y cada píxel se diseña para que tu marca destaque sobre la competencia.",
    rating: 5,
    color: "from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20"
  },
  {
    name: "Velocidad Extrema",
    role: "Pilar 02",
    location: "Rendimiento",
    text: "Usamos Next.js 15 y optimización de imágenes para que tu web cargue en menos de 1 segundo. Si es lento, no es Veritus.",
    rating: 5,
    color: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20"
  },
  {
    name: "Enfoque Comercial",
    role: "Pilar 03",
    location: "Conversión",
    text: "Una web bonita no sirve si no vende. Integramos WhatsApp Pro y llamados a la acción estratégicos para captar clientes.",
    rating: 5,
    color: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20"
  }
]

export default function TestimonialsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-[var(--bg)] transition-colors duration-500" ref={containerRef}>
      {/* Background Decor - Ajustado para modo oscuro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-60 transition-colors" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-60 transition-colors" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Compromiso Veritus</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter mb-8 leading-none transition-colors">
            Calidad sobre <span className="text-indigo-600 italic">Cantidad</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed transition-colors">
            Estamos construyendo el futuro digital de las pymes en Colombia. Cada proyecto que aceptamos recibe nuestra total dedicación.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophy.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
          {philosophy.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] snap-center">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative h-full bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8 flex justify-between items-start">
          <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <Quote className="text-slate-200 dark:text-slate-800 group-hover:text-indigo-200 dark:group-hover:text-indigo-500 transition-colors duration-500" size={48} strokeWidth={3} />
        </div>

        <blockquote className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-[1.2] mb-12 tracking-tight transition-colors">
          "{testimonial.text}"
        </blockquote>

        <div className="mt-auto flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-indigo-600/20">
            {testimonial.name[0]}
          </div>
          <div>
            <p className="font-black text-slate-900 dark:text-slate-100 text-lg leading-none mb-1 transition-colors">{testimonial.name}</p>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest leading-none">
              {testimonial.location} • {testimonial.role}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  )
}