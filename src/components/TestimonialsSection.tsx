'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: "María Alejandra Gómez",
    role: "Propietaria - Boutique La Elegancia",
    location: "Bogotá",
    text: "En solo 14 días tuve mi tienda online funcionando. Las ventas por WhatsApp se dispararon desde la primera semana. ¡El equipo de Veritus es profesional y cumplidor!",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Abogado Independiente",
    location: "Medellín",
    text: "Mi web corporativa transmite la seriedad que necesitaba. Ahora recibo consultas de clientes premium que antes no llegaban. Excelente inversión.",
    rating: 5,
  },
  {
    name: "Laura Mendoza",
    role: "Gerente - Clínica Estética BellaVida",
    location: "Cali",
    text: "El diseño es hermoso y moderno. Lo mejor: pacientes agendan citas directamente desde la web. La integración con WhatsApp es perfecta.",
    rating: 5,
  },
  {
    name: "Andrés Felipe Torres",
    role: "Emprendedor - FoodTruck Sabores del Valle",
    location: "Barranquilla",
    text: "Mi landing page captó más de 200 leads en el primer mes. El proceso fue rápido y el resultado superó mis expectativas.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
      {/* Fondo sutil premium */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent leading-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-4xl mx-auto font-medium">
            Más de 300 pymes colombianas ya confiaron en nosotros para crecer en digital.
          </p>
        </div>

        {/* Testimonios: Grid en desktop, Carrusel en móvil */}
        <div className="relative">
          {/* Desktop: Grid 2 columnas */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>

          {/* Móvil: Carrusel horizontal */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] max-w-md snap-center">
                  <TestimonialCard testimonial={t} isMobile />
                </div>
              ))}
            </div>

            {/* Indicadores móviles */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-slate-400/60" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, isMobile = false }: { testimonial: any; isMobile?: boolean }) {
  return (
    <div className={`
      group relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 hover:border-indigo-600/20 transition-all duration-700 h-full flex flex-col
      ${isMobile ? '' : 'hover:shadow-3xl hover:-translate-y-6'}
    `}>
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Estrellas */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.316 9.397c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
          ))}
        </div>

        {/* Testimonio */}
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed flex-grow mb-10 font-medium italic">
          "{testimonial.text}"
        </p>

        {/* Autor */}
        <div className="mt-auto">
          <p className="font-black text-xl text-slate-900">{testimonial.name}</p>
          <p className="text-base text-slate-600 mt-1">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  )
}