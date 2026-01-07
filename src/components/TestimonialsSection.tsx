'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "María Alejandra Gómez",
    role: "Propietaria - Boutique La Elegancia",
    location: "Bogotá",
    text: "En solo 14 días tuve mi tienda online funcionando. Las ventas por WhatsApp se dispararon desde la primera semana. ¡El equipo de Veritus es profesional!",
    rating: 5,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    name: "Carlos Ramírez",
    role: "Abogado Independiente",
    location: "Medellín",
    text: "Mi web corporativa transmite la seriedad que necesitaba. Ahora recibo consultas de clientes premium que antes no llegaban. Excelente inversión.",
    rating: 5,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Laura Mendoza",
    role: "Gerente - Clínica BellaVida",
    location: "Cali",
    text: "El diseño es hermoso y moderno. Lo mejor: pacientes agendan citas directamente desde la web. La integración con WhatsApp es perfecta.",
    rating: 5,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Andrés Felipe Torres",
    role: "Emprendedor - Sabores del Valle",
    location: "Barranquilla",
    text: "Mi landing page captó más de 200 leads en el primer mes. El proceso fue rápido y el resultado superó mis expectativas.",
    rating: 5,
    color: "from-orange-500/20 to-rose-500/20"
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-white" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header con Animación */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Social Proof</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter mb-8 leading-none">
            Impacto <span className="text-indigo-600 italic">Real</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Hemos ayudado a más de <span className="text-slate-950 font-bold">300 pymes colombianas</span> a transformar su presencia digital en una máquina de ventas.
          </p>
        </motion.div>

        {/* Desktop: Masonry-style Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
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

        {/* Mobile: Animated Scroll */}
        <div className="md:hidden flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, i) => (
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
      className="group relative h-full bg-slate-50 rounded-[3rem] p-10 lg:p-14 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      {/* Background Glow on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Quote Icon Animado */}
        <div className="mb-8 flex justify-between items-start">
          <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <Quote className="text-slate-200 group-hover:text-indigo-200 transition-colors duration-500" size={48} strokeWidth={3} />
        </div>

        {/* Texto con tipografía premium */}
        <blockquote className="text-2xl lg:text-3xl font-bold text-slate-900 leading-[1.2] mb-12 tracking-tight">
          "{testimonial.text}"
        </blockquote>

        {/* Footer del autor */}
        <div className="mt-auto flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-indigo-600/20">
            {testimonial.name[0]}
          </div>
          <div>
            <p className="font-black text-slate-900 text-lg leading-none mb-1">{testimonial.name}</p>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none">
              {testimonial.location} • {testimonial.role.split('-')[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Border Light Effect */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  )
}