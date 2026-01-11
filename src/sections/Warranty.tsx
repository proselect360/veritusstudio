'use client'

import { useState, useEffect } from 'react'
import { ShieldCheck, Clock, CheckCircle, Zap, HeartHandshake, Award, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WarrantySection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <div className="h-[600px] bg-slate-950 animate-pulse" />

  const guarantees = [
    {
      icon: <Clock className="w-7 h-7 text-indigo-400" />,
      title: "Puntualidad Radical",
      desc: "Si no entregamos tu web en el plazo acordado (14 días), te bonificamos el 20% del valor total del proyecto de inmediato."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-indigo-400" />,
      title: "Garantía Técnica 365",
      desc: "Cobertura total contra errores de código o caídas del sistema durante el primer año. Tu activo digital siempre operativo."
    },
    {
      icon: <Zap className="w-7 h-7 text-indigo-400" />,
      title: "Velocidad Certificada",
      desc: "Garantizamos un puntaje superior a 90/100 en Google PageSpeed. Si tu web no es ultrarrápida, no te la entregamos."
    }
  ]

  return (
    <section id="warranty" className="relative py-32 bg-transparent overflow-hidden scroll-mt-24">
      
      {/* Background Decor - Coherencia visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-10 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          
          {/* Luces cinemáticas internas */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Columna Izquierda: Copywriting de Alto Impacto */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.4em] mb-10"
              >
                <ShieldCheck className="w-4 h-4" /> Trusted Infrastructure
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-[calc(-0.04em)] leading-[0.85] mb-12">
                Tu inversión <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-indigo-300 to-slate-500 italic font-serif font-medium">blindada al 100%.</span>
              </h2>
              
              <p className="text-slate-400 text-xl mb-16 leading-tight max-w-lg font-medium italic border-l-2 border-indigo-500/40 pl-8">
                Eliminamos el riesgo técnico. En nuestro estudio, la calidad no es una promesa, es un <span className="text-white underline decoration-indigo-500/50 underline-offset-8 font-bold">compromiso legal firmado.</span>
              </p>

              <div className="space-y-10">
                {guarantees.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }} 
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-2xl mb-3 tracking-tight uppercase">{item.title}</h4>
                      <p className="text-slate-500 text-base leading-snug font-medium group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: El Certificado "Pro" */}
            <div className="relative group perspective-1000">
              <motion.div 
                initial={{ rotateY: 5, y: 20 }} 
                whileInView={{ rotateY: -5, y: 0 }} 
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-white rounded-[4rem] p-12 md:p-16 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] relative z-10 border-[12px] border-slate-50"
              >
                {/* Sello de agua Premium */}
                <div className="absolute bottom-12 right-12 opacity-[0.04] pointer-events-none rotate-12">
                  <Award className="w-56 h-56 text-slate-950" />
                </div>

                <div className="flex justify-between items-start mb-20 relative">
                  <div className="w-20 h-20 bg-slate-950 rounded-[2rem] flex items-center justify-center shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-700">
                    <HeartHandshake className="w-10 h-10 text-indigo-400" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-2">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Protocol V-26</span>
                    </div>
                    <span className="block text-3xl font-black text-slate-950 tracking-tighter leading-none">HIGH QUALITY<br/>CERTIFIED</span>
                  </div>
                </div>

                <div className="space-y-6 mb-20">
                  {[
                    "Next.js 15+ Enterprise Core",
                    "UI/UX Conversion Framework",
                    "Global Edge Infrastructure",
                    "Advanced SSL HSTS Security",
                    "SEO Core Web Vitals Optimization"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-5 py-4 border-b border-slate-100 last:border-0">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-slate-950 font-black tracking-tight text-base uppercase">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative p-8 bg-slate-950 rounded-[2.5rem] overflow-hidden group/box">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-700" />
                  <p className="relative z-10 text-center font-serif italic text-sm text-slate-400 leading-relaxed">
                    "Garantizamos bajo contrato que cada línea de código es un activo diseñado para transformar tráfico en capital."
                  </p>
                  <div className="relative z-10 mt-6 flex flex-col items-center">
                    <div className="h-[1px] w-24 bg-white/20 mb-2" />
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Official Quality Seal</span>
                  </div>
                </div>
              </motion.div>

              {/* Glow Aura - Detrás del certificado */}
              <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] rounded-[5rem] -z-10 group-hover:bg-indigo-500/30 transition-all duration-1000" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}