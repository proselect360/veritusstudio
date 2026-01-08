'use client'

import { useState, useEffect } from 'react'
import { ShieldCheck, Clock, CheckCircle, Zap, HeartHandshake, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WarrantySection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <div className="h-[600px] bg-slate-950 animate-pulse" />

  const guarantees = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "Puntualidad Radical",
      desc: "Si no entregamos tu web en el plazo acordado (14 días), te bonificamos el 20% del valor total del proyecto."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Garantía Técnica 365",
      desc: "Cobertura total contra errores de código o caídas del sistema durante el primer año. Tu web siempre online."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      title: "Velocidad Certificada",
      desc: "Garantizamos un puntaje superior a 90/100 en Google PageSpeed. Si tu web es lenta, no te la entregamos."
    }
  ]

  return (
    <section id="warranty" className="relative py-24 bg-slate-950 overflow-hidden scroll-mt-24">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl">
          
          {/* Luces internas del contenedor */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Columna Izquierda: Texto y Garantías */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <ShieldCheck className="w-4 h-4" /> Trusted Service Colombia
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-10">
                Tu inversión <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 italic font-serif font-normal">blindada al 100%.</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg font-medium">
                Eliminamos el riesgo. En nuestro estudio, la calidad no es una promesa, es un <span className="text-white underline decoration-indigo-500 underline-offset-4">compromiso legal firmado.</span>
              </p>

              <div className="space-y-8">
                {guarantees.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }} 
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-xl group-hover:border-indigo-500/50 transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: El Certificado "Físico" */}
            <div className="relative group">
              <motion.div 
                initial={{ rotate: 1, y: 20 }} 
                whileInView={{ rotate: -1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10"
              >
                {/* Sello de agua / Icono de fondo */}
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
                  <Award className="w-40 h-40 text-slate-950" />
                </div>

                <div className="flex justify-between items-start mb-16 relative">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-lg">
                    <HeartHandshake className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Deployment Protocol</span>
                    <span className="block text-2xl font-black text-slate-950 tracking-tighter leading-none">QUALITY<br/>CERTIFIED</span>
                  </div>
                </div>

                <div className="space-y-5 mb-16">
                  {[
                    "Arquitectura Next.js 15+ Enterprise",
                    "Diseño UI/UX de Alta Conversión",
                    "Infraestructura Global Vercel Edge",
                    "Protocolo de Seguridad SSL HSTS",
                    "Optimización SEO Core Web Vitals"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0 group/item">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-800 font-bold tracking-tight text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <p className="text-center font-serif italic text-xs text-slate-500 leading-relaxed">
                    "Garantizamos que cada línea de código está optimizada para transformar visitantes en clientes recurrentes."
                  </p>
                  {/* Firma visual simulada */}
                  <div className="mt-4 flex justify-center opacity-30">
                    <div className="h-px w-24 bg-slate-400" />
                  </div>
                </div>
              </motion.div>

              {/* Efecto de resplandor detrás del certificado */}
              <div className="absolute -inset-6 bg-indigo-500/20 blur-3xl rounded-[4rem] -z-10 group-hover:bg-indigo-500/30 transition-all duration-700" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}