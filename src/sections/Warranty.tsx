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
      icon: <Clock className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />,
      title: "Puntualidad Radical",
      desc: "Si no entregamos tu web en el plazo acordado, te bonificamos el 20% del valor total."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />,
      title: "Garantía Técnica",
      desc: "Cobertura total contra errores o caídas durante el primer año. Activo siempre operativo."
    },
    {
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />,
      title: "Velocidad Pro",
      desc: "Garantizamos +90/100 en Google PageSpeed. Si no es rápida, no te la entregamos."
    }
  ]

  return (
    <section id="warranty" className="relative py-16 md:py-32 bg-transparent overflow-hidden scroll-mt-24">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1000px] h-[600px] bg-indigo-600/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[100rem] mx-auto px-4 md:px-12">
        <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-10 md:p-24 overflow-hidden shadow-2xl">
          
          {/* Luces cinemáticas internas */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-b md:bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            
            {/* Columna Izquierda */}
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-10"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Trusted Infrastructure
              </motion.div>
              
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-12">
                Tu inversión <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-indigo-300 to-slate-500 italic font-serif font-medium">blindada al 100%.</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-16 leading-relaxed max-w-lg font-medium italic border-l-2 border-indigo-500/40 pl-5 md:pl-8">
                Eliminamos el riesgo. La calidad es un <span className="text-white underline decoration-indigo-500/50 underline-offset-4 md:underline-offset-8 font-bold">compromiso legal.</span>
              </p>

              <div className="space-y-6 md:space-y-10">
                {guarantees.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }} 
                    className="flex gap-4 md:gap-8 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg md:text-2xl mb-1 md:mb-3 tracking-tight uppercase">{item.title}</h4>
                      <p className="text-slate-500 text-sm md:text-base leading-snug font-medium group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Columna Derecha (Certificado) */}
            <div className="order-1 lg:order-2 relative group w-full max-w-[450px] mx-auto lg:max-w-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 shadow-2xl relative z-10 border-[6px] md:border-[12px] border-slate-50"
              >
                {/* Sello de agua */}
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 opacity-[0.03] pointer-events-none">
                  <Award className="w-32 h-32 md:w-56 md:h-56 text-slate-950" />
                </div>

                <div className="flex justify-between items-start mb-10 md:mb-20">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-slate-950 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-xl">
                    <HeartHandshake className="w-7 h-7 md:w-10 md:h-10 text-indigo-400" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Protocol V-26</span>
                    <span className="block text-xl md:text-3xl font-black text-slate-950 tracking-tighter leading-none uppercase">High Quality<br/>Certified</span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 mb-10 md:mb-20">
                  {["Next.js 15+ Core", "UI/UX Framework", "SEO Optimization"].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 md:gap-5 py-3 md:py-4 border-b border-slate-100 last:border-0">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-950 font-black tracking-tight text-xs md:text-base uppercase">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 md:p-8 bg-slate-950 rounded-2xl md:rounded-[2.5rem] text-center">
                  <p className="text-[10px] md:text-sm italic text-slate-400 leading-relaxed">
                    "Activo diseñado para transformar tráfico en capital."
                  </p>
                </div>
              </motion.div>
              
              {/* Glow Aura */}
              <div className="absolute -inset-4 md:-inset-10 bg-indigo-500/20 blur-[60px] md:blur-[100px] rounded-[3rem] md:rounded-[5rem] -z-10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}