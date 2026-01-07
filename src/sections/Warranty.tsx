'use client'

import { useState, useEffect } from 'react'
import { ShieldCheck, Clock, CheckCircle, Zap, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WarrantySection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <div className="h-96 bg-slate-50 animate-pulse" />

  const guarantees = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Puntualidad Radical",
      desc: "Si no entregamos tu web en el plazo acordado (14 días), te bonificamos el 20% del valor total del proyecto."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Garantía Técnica 365",
      desc: "Cobertura total contra errores de código o caídas del sistema durante el primer año. Tu web siempre online."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Velocidad Certificada",
      desc: "Garantizamos un puntaje superior a 90/100 en Google PageSpeed. Si tu web es lenta, no te la entregamos."
    }
  ]

  return (
    <section id="warranty" className="relative py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-slate-950 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" /> Confianza Veritus
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-8">
                Nuestra Garantía <br />
                <span className="text-blue-500 italic font-serif font-normal text-3xl md:text-5xl">Cero Riesgos.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                En Colombia, blindamos tu inversión con cláusulas de cumplimiento reales firmadas por contrato.
              </p>
              <div className="space-y-6">
                {guarantees.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xl">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div initial={{ rotate: 2, y: 20 }} whileInView={{ rotate: 0, y: 0 }} className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center"><HeartHandshake className="w-8 h-8 text-blue-500" /></div>
                  <div className="text-right">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-tighter">Certificado de</span>
                    <span className="block text-xl font-black text-slate-900 tracking-tighter">CALIDAD ELITE</span>
                  </div>
                </div>
                <div className="space-y-6 mb-12">
                  {[
                    "Arquitectura Next.js 15+ Certificada",
                    "Diseño UI/UX de Alta Conversión",
                    "Infraestructura Global Vercel Edge",
                    "Soporte Humano Prioritario"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-3 border-b border-slate-50 last:border-0">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-bold tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl text-center font-medium italic text-[10px] text-slate-400">
                  "Nuestra misión es que tu inversión se recupere en el menor tiempo posible."
                </div>
              </motion.div>
              <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-[3rem] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}