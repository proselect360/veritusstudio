'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Palette, Zap, Rocket, X, CheckCircle2, ArrowRight, Calendar, Sparkles, Plus } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Estrategia",
    description: "Analizamos tu mercado en Colombia para definir una ruta de conversión clara.",
    duration: "Días 1-2",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-orange-500 to-amber-500",
    details: [
      "Auditoría de marca y objetivos",
      "Estudio de competencia local",
      "Arquitectura de conversión",
      "Selección de Keywords SEO",
      "Estructura de mensajes y CTAs"
    ]
  },
  {
    number: "02",
    title: "Diseño UX/UI",
    description: "Interfaz exclusiva. Cero plantillas, 100% ADN de tu marca.",
    duration: "Días 3-7",
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-blue-600 to-indigo-600",
    details: [
      "Prototipos de alta fidelidad",
      "Diseño Mobile-First optimizado",
      "Sistema de diseño premium",
      "Psicología del color aplicada",
      "Revisiones hasta satisfacción total"
    ]
  },
  {
    number: "03",
    title: "Ingeniería",
    description: "Desarrollo Next.js de alto rendimiento. Carga instantánea.",
    duration: "Días 8-12",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-emerald-500 to-teal-600",
    details: [
      "Next.js 15+ (App Router)",
      "Lighthouse Score > 95",
      "Integración API WhatsApp Business",
      "Optimización Meta Tags",
      "Compresión de assets"
    ]
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Publicación con infraestructura global y capacitación de gestión.",
    duration: "Día 14",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-purple-600 to-rose-600",
    details: [
      "Despliegue Vercel Edge",
      "Configuración dominio .co / .com",
      "Certificado SSL de por vida",
      "Google Search Console & GA4",
      "Garantía técnica de 30 días"
    ]
  },
]

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<(typeof steps)[0] | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])
  if (!isMounted) return null

  return (
    <section id="process" className="relative py-24 md:py-32 bg-transparent overflow-hidden isolate">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 italic"
          >
            <Sparkles className="w-4 h-4" /> Speed-to-Market Methodology
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Ecosistema <br />
            en <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">14 días.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
            Proceso de ingeniería optimizado para <span className="text-white border-b border-indigo-500/30">entregas récord</span>.
          </p>
        </header>

        {/* CARRUSEL MÓVIL / GRID WEB */}
        <div className="relative -mx-6 md:mx-0">
          <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedStep(step)}
                className="w-[85vw] md:w-auto flex-shrink-0 snap-center md:snap-align-none group relative p-8 md:p-10 bg-slate-900/30 backdrop-blur-xl rounded-[2.5rem] border border-white/5 hover:border-indigo-500/50 hover:bg-slate-900/50 transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {step.icon}
                  </div>
                  <span className="text-4xl md:text-5xl font-black tracking-tighter text-white/5 transition-colors group-hover:text-indigo-500/20">
                    {step.number}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-none uppercase tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-indigo-300 font-black text-[9px] uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {step.duration}
                  </div>
                  <Plus className="w-5 h-5 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL DETALLES */}
      <AnimatePresence>
        {selectedStep && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[100]"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-xl bg-slate-900 border border-white/10 rounded-[3rem] shadow-2xl z-[101] overflow-hidden backdrop-blur-2xl"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${selectedStep.gradient}`} />
              
              <button onClick={() => setSelectedStep(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-all">
                <X className="w-5 h-5" />
              </button>

              <div className="p-10 md:p-12 overflow-y-auto max-h-[85vh]">
                <div className="flex items-center gap-5 mb-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedStep.gradient} text-white flex items-center justify-center shadow-lg`}>
                    {selectedStep.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 italic">Fase {selectedStep.number}</span>
                    <h3 className="text-3xl font-black text-white">{selectedStep.title}</h3>
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Entregables:</h4>
                  {selectedStep.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-slate-200 font-bold text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`https://wa.me/573125858242?text=Me%20interesa%20la%20fase%20${selectedStep.title}`}
                  target="_blank"
                  className="w-full py-5 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  Agendar Consultoría <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}