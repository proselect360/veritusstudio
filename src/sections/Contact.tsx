'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <ContactSkeleton />
  }

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="relative py-20 lg:py-28 overflow-hidden isolate"
    >
      {/* Fondo premium (sin cambios, sigue sutil) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-600/8 via-transparent to-transparent" aria-hidden="true" />
      
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 to-indigo-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-5s" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-400/15 to-emerald-400/10 rounded-full blur-3xl animate-blob animation-delay-10s" />
      </div>

      <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Header más equilibrado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 
              id="contact-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent leading-tight"
            >
              Tu web profesional en 14 días
            </h2>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Chatea ahora por WhatsApp y recibe en minutos una propuesta personalizada con precio exacto, plan y fechas de entrega.
            </p>
          </motion.div>

          {/* Botones CTA más compactos y elegantes */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20una%20página%20web%20para%20mi%20negocio%20en%20Colombia"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl p-10 shadow-2xl flex flex-col items-center gap-6 ring-4 ring-emerald-500/20"
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 pointer-events-none" />

              <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.446l-.232-.139-3.578.505.107-3.817.23-.205a9.86 9.86 0 011.446-5.03l.167-.224 3.815-.106.205.23a9.865 9.86 0 015.032 1.446l.233.139 3.578-.505-.107 3.817-.23.205a9.86 9.86 0 01-1.446 5.03l-.167.224-3.815.106-.205-.23a9.862 9.862 0 01-5.032-1.446z" />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-2xl font-black tracking-tight text-white">Chatea por WhatsApp</p>
                <p className="text-base font-semibold text-white/90 mt-2">Respuesta inmediata (menos de 5 min)</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:contacto@veritus.co?subject=Cotización%20Web%20Profesional%20-%20[Nombre%20de%20tu%20negocio]&body=Hola%2C%0D%0A%0D%0AQuiero%20una%20cotización%20para%20una%20página%20web.%0D%0AMi%20negocio%20es%3A%20%5Bdescribe%20brevemente%5D%0D%0ACiudad%3A%20%5BBogotá%2C%20Medellín%2C%20etc.%5D%0D%0A%0D%0AGracias!"
              className="group relative bg-white/90 backdrop-blur-xl border-2 border-white/50 rounded-3xl p-10 shadow-2xl flex flex-col items-center gap-6 ring-4 ring-indigo-600/10 hover:ring-indigo-600/30 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <span className="text-5xl">✉️</span>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-700 transition-colors duration-400">
                  Enviar por correo
                </p>
                <p className="text-base font-semibold text-slate-600 mt-2">Propuesta detallada en 24 horas</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Badge más compacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 inline-block px-10 py-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl ring-2 ring-indigo-600/10 hover:ring-indigo-600/30 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 max-w-3xl mx-auto"
          >
            <p className="text-base lg:text-lg font-bold text-slate-800 leading-relaxed">
              🚀 Sin compromiso · Precio fijo y transparente · 
              <span className="text-indigo-700 font-black">Entrega en 14 días según nuestra experiencia con +300 clientes</span>
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -60px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.95); }
        }
        .animate-blob { animation: blob 30s infinite ease-in-out; }
        .animation-delay-5s { animation-delay: 5s; }
        .animation-delay-10s { animation-delay: 10s; }
      `}</style>
    </section>
  )
}

function ContactSkeleton() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-12 animate-pulse">
          <div className="h-16 bg-slate-200 rounded-3xl max-w-3xl mx-auto" />
          <div className="h-8 bg-slate-200 rounded-2xl max-w-2xl mx-auto" />
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="h-72 bg-slate-100 rounded-3xl border border-slate-200/50" />
            <div className="h-72 bg-slate-100 rounded-3xl border border-slate-200/50" />
          </div>
          
          <div className="h-20 bg-slate-100 rounded-3xl max-w-2xl mx-auto border border-slate-200/50" />
        </div>
      </div>
    </section>
  )
}