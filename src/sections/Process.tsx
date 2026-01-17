'use client'

import { useState, useEffect, memo, useCallback } from 'react'
import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Palette, Zap, Rocket, X, CheckCircle2, ArrowRight, Calendar, Sparkles, Plus, ShieldCheck, Clock, Gauge } from 'lucide-react'

// --- Tipado y Datos ---
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
    title: "Estrategia & IA",
    description: "Modelamos la arquitectura de datos y conversión específica para tu nicho.",
    duration: "Días 1-2",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-orange-500 to-amber-500",
    details: ["Auditoría técnica de marca", "Análisis de conversión (CRO)", "Arquitectura de información", "Estrategia de Keywords SEO", "Mapa de flujo de usuario"]
  },
  {
    number: "02",
    title: "Diseño High-End",
    description: "Interfaces visuales de vanguardia. Sin plantillas, puro ADN digital.",
    duration: "Días 3-7",
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-blue-600 to-indigo-600",
    details: ["Prototipado en alta fidelidad", "Diseño Mobile-First adaptativo", "Sistema de diseño escalable", "Psicología visual aplicada", "Micro-interacciones premium"]
  },
  {
    number: "03",
    title: "Ingeniería Next.js",
    description: "Código limpio y optimizado para cargar en menos de un segundo.",
    duration: "Días 8-12",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-emerald-500 to-teal-600",
    details: ["Desarrollo con Next.js 15", "Optimización de Core Web Vitals", "Integración de API seguras", "SEO Técnico On-Page", "Estructura Headless CMS"]
  },
  {
    number: "04",
    title: "Despliegue Global",
    description: "Lanzamiento en infraestructura perimetral con garantía total.",
    duration: "Día 14",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-purple-600 to-rose-600",
    details: ["Deployment en Vercel Edge", "Configuración de seguridad SSL", "Indexación en Google acelerada", "Testing de carga y estrés", "Garantía de soporte 30 días"]
  }
]

export default function MetodologiaPage() {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null)

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-indigo-500/30">
      <Header />
      
      <main className="pt-32 pb-20 overflow-hidden">
        {/* Luces de fondo dinámicas */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>

        {/* Hero de Metodología */}
        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8">
              <Sparkles className="w-4 h-4" /> Ingeniería de Procesos
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
              Nuestra <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-500 italic">Metodología.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed opacity-90">
              Transformamos ideas complejas en infraestructuras digitales de alto rendimiento en un ciclo cerrado de <span className="text-white border-b-2 border-indigo-500">14 días.</span>
            </p>
          </motion.div>
        </section>

        {/* Grid de Pasos Evolucionado */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <StepCard key={step.number} step={step} idx={idx} onSelect={setSelectedStep} />
            ))}
          </div>
        </section>

        {/* Sección de Compromisos Técnicos (Añadido para el toque Premium) */}
        <section className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="p-12 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-emerald-400" />
                    <h4 className="text-lg font-black uppercase tracking-widest">Calidad Militar</h4>
                    <p className="text-slate-400 text-sm">Pruebas de seguridad y estabilidad en cada despliegue.</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Clock className="w-10 h-10 text-indigo-400" />
                    <h4 className="text-lg font-black uppercase tracking-widest">Tiempo Garantizado</h4>
                    <p className="text-slate-400 text-sm">Si no cumplimos los plazos, optimizamos tu SEO gratis.</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Gauge className="w-10 h-10 text-purple-400" />
                    <h4 className="text-lg font-black uppercase tracking-widest">Performance A+</h4>
                    <p className="text-slate-400 text-sm">Garantizamos +90 puntos en Google PageSpeed Insights.</p>
                  </div>
              </div>
           </div>
        </section>
      </main>

      {/* Modal de Detalle */}
      <AnimatePresence>
        {selectedStep && (
          <ModalStep step={selectedStep} onClose={() => setSelectedStep(null)} />
        )}
      </AnimatePresence>

    
    </div>
  )
}

// --- Subcomponentes ---

const StepCard = memo(({ step, idx, onSelect }: { step: Step; idx: number; onSelect: (s: Step) => void }) => (
  <motion.article 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    onClick={() => onSelect(step)}
    className="group relative p-10 bg-slate-900/60 border border-white/5 hover:border-indigo-500/50 rounded-[2.5rem] transition-all duration-500 cursor-pointer flex flex-col h-full shadow-2xl overflow-hidden"
  >
    {/* Glow de fondo al hover */}
    <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`} />

    <div className="flex justify-between items-start mb-16 relative z-10">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
        {step.icon}
      </div>
      <span className="text-6xl font-black text-white/[0.03] transition-colors group-hover:text-indigo-500/10 leading-none">
        {step.number}
      </span>
    </div>

    <div className="relative z-10">
      <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">{step.title}</h3>
      <p className="text-slate-200 text-base leading-relaxed mb-8 font-medium opacity-80 group-hover:opacity-100 transition-opacity">{step.description}</p>
    </div>

    <div className="mt-auto flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all">
        <Calendar className="w-3 h-3" /> {step.duration}
      </div>
      <Plus className="w-6 h-6 text-indigo-400 group-hover:rotate-90 transition-transform duration-500" />
    </div>
  </motion.article>
))
StepCard.displayName = 'StepCard'

function ModalStep({ step, onClose }: { step: Step, onClose: () => void }) {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[100]"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.9 }} 
        animate={{ opacity: 1, y: 0, scale: 1 }} 
        exit={{ opacity: 0, y: 100, scale: 0.9 }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-slate-900 border border-white/20 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[101] overflow-hidden"
      >
        <div className={`h-2 w-full bg-gradient-to-r ${step.gradient}`} />
        <div className="p-10 md:p-14">
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-xl`}>
                {step.icon}
              </div>
              <div>
                <span className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.3em]">Fase {step.number}</span>
                <h3 className="text-4xl font-black text-white tracking-tighter">{step.title}</h3>
              </div>
            </div>
            <button onClick={onClose} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-1 gap-4 mb-12">
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-2">Entregables de Ingeniería:</p>
            {step.details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-all">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-white font-bold text-sm md:text-base tracking-tight">{detail}</span>
              </div>
            ))}
          </div>

          <Link 
            href={`https://wa.me/573125858242?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20la%20fase%20de%20${step.title}`}
            target="_blank"
            className="w-full py-6 bg-white text-black rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
          >
            Discutir este proceso <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </>
  )
}