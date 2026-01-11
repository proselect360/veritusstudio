'use client'

import { useState, useEffect, memo, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Palette, Zap, Rocket, X, CheckCircle2, ArrowRight, Calendar, Sparkles, Plus } from 'lucide-react'

// --- Tipado ---
interface Step {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  gradient: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Estrategia",
    description: "Analizamos tu mercado en Colombia para definir una ruta de conversión clara.",
    duration: "Días 1-2",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-orange-500 to-amber-500",
    details: ["Auditoría de marca", "Estudio de competencia", "Arquitectura de conversión", "Selección de Keywords SEO", "Estructura de mensajes"]
  },
  {
    number: "02",
    title: "Diseño UX/UI",
    description: "Interfaz exclusiva. Cero plantillas, 100% ADN de tu marca.",
    duration: "Días 3-7",
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-blue-600 to-indigo-600",
    details: ["Prototipos de alta fidelidad", "Diseño Mobile-First", "Sistema de diseño premium", "Psicología del color", "Revisiones totales"]
  },
  {
    number: "03",
    title: "Ingeniería",
    description: "Desarrollo Next.js de alto rendimiento. Carga instantánea.",
    duration: "Días 8-12",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-emerald-500 to-teal-600",
    details: ["Next.js 15+ (App Router)", "Lighthouse Score > 95", "API WhatsApp Business", "Optimización Meta Tags", "Compresión de assets"]
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Publicación con infraestructura global y capacitación.",
    duration: "Día 14",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-purple-600 to-rose-600",
    details: ["Despliegue Vercel Edge", "Dominio .co / .com", "Certificado SSL", "Google Search Console", "Garantía de 30 días"]
  }
]

// Componente de Fase individual optimizado
const StepCard = memo(({ step, idx, onSelect }: { step: Step; idx: number; onSelect: (s: Step) => void }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    onClick={() => onSelect(step)}
    className="w-[85vw] md:w-auto flex-shrink-0 snap-center group relative p-8 md:p-10 bg-slate-900/40 border border-white/5 hover:border-indigo-500/50 rounded-[2.5rem] transition-all cursor-pointer flex flex-col h-full overflow-hidden"
  >
    <div className="flex justify-between items-start mb-12 relative z-10">
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
        {step.icon}
      </div>
      <span className="text-4xl md:text-5xl font-black text-white/5 transition-colors group-hover:text-indigo-500/20 leading-none">
        {step.number}
      </span>
    </div>

    <div className="relative z-10">
      <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight">{step.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">{step.description}</p>
    </div>

    <div className="mt-auto flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2 text-indigo-300 font-black text-[9px] uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">
        <Calendar className="w-3 h-3" /> {step.duration}
      </div>
      <Plus className="w-5 h-5 text-indigo-400" />
    </div>
  </motion.article>
))
StepCard.displayName = 'StepCard'

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { 
    setIsMounted(true)
    if (selectedStep) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [selectedStep])

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedStep(null)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleEsc])

  if (!isMounted) return <section className="min-h-screen bg-slate-950" />

  return (
    <section id="process" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden isolate">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.03),transparent_70%)] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 italic">
            <Sparkles className="w-4 h-4" /> Metodología Speed-to-Market
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Ecosistema en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">14 días.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-xl">
            Proceso optimizado para entregas récord en <span className="text-white">Colombia</span>.
          </p>
        </header>

        {/* Listado de Fases */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0">
          {steps.map((step, idx) => (
            <StepCard key={step.number} step={step} idx={idx} onSelect={setSelectedStep} />
          ))}
        </div>
      </div>

      {/* Modal Optimizado */}
      <AnimatePresence>
        {selectedStep && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[100]"
            />
            
            <motion.div 
              role="dialog" aria-modal="true"
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${selectedStep.gradient}`} />
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedStep.gradient} text-white flex items-center justify-center`}>
                      {selectedStep.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-indigo-400 uppercase italic">Fase {selectedStep.number}</span>
                      <h3 className="text-2xl font-black text-white">{selectedStep.title}</h3>
                    </div>
                  </div>
                  <button onClick={() => setSelectedStep(null)} className="p-2 text-slate-400 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-3 mb-10">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Entregables Clave:</p>
                  {selectedStep.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 transition-colors hover:border-indigo-500/30">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-slate-200 font-bold text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`https://wa.me/573125858242?text=Me%20interesa%20la%20fase%20de%20${selectedStep.title}`}
                  target="_blank"
                  className="w-full py-5 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                >
                  Consultar sobre esta fase <ArrowRight className="w-5 h-5" />
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