'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Palette, Zap, Rocket, X, CheckCircle2, ArrowRight, Calendar, Sparkles, Plus } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Estrategia & Diagnóstico",
    description: "Analizamos tu mercado y competencia en Colombia para definir una ruta de conversión clara y efectiva.",
    duration: "Días 1-2",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
    details: [
      "Auditoría de marca y objetivos comerciales",
      "Estudio de competencia local y nacional",
      "Definición de arquitectura de conversión",
      "Selección de palabras clave para SEO Local",
      "Estructura de mensajes y CTAs"
    ]
  },
  {
    number: "02",
    title: "Diseño UX/UI Premium",
    description: "Creamos una interfaz moderna y exclusiva. Cero plantillas, 100% ADN de tu marca para transmitir autoridad.",
    duration: "Días 3-7",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-blue-600 to-indigo-600",
    details: [
      "Prototipos de alta fidelidad",
      "Diseño Mobile-First optimizado",
      "Sistema de diseño y tipografías premium",
      "Psicología del color aplicada a la venta",
      "Revisiones hasta satisfacción total"
    ]
  },
  {
    number: "03",
    title: "Ingeniería Next.js",
    description: "Desarrollo de alto rendimiento. Código limpio, carga instantánea y optimización SEO técnica nivel experto.",
    duration: "Días 8-12",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-600",
    details: [
      "Desarrollo con Next.js 15+ (App Router)",
      "Optimización Core Web Vitals (Lighthouse >95)",
      "Integración de API de WhatsApp Business",
      "Implementación de Meta Tags y OpenGraph",
      "Compresión inteligente de assets"
    ]
  },
  {
    number: "04",
    title: "Lanzamiento Elite",
    description: "Publicamos tu web con infraestructura global, certificados de seguridad y capacitación de gestión.",
    duration: "Día 14",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-purple-600 to-rose-600",
    details: [
      "Despliegue en servidores Vercel Edge",
      "Configuración de dominio .com.co",
      "Instalación de Certificado SSL de por vida",
      "Google Search Console & Analytics 4",
      "Garantía técnica de 30 días"
    ]
  },
]

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<(typeof steps)[0] | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { 
    setIsMounted(true) 
  }, [])

  if (!isMounted) return null

  return (
    <section id="process" className="relative py-24 lg:py-48 bg-slate-950 overflow-hidden isolate">
      
      {/* Luces de fondo (Glow effects) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[160px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-20 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-8 italic"
          >
            <Sparkles className="w-4 h-4" /> Speed-to-Market Methodology
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-12">
            Tu ecosistema <br />
            digital en <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">14 días.</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
            Un proceso optimizado para <span className="text-white border-b-2 border-indigo-500/30">resultados inmediatos</span>. Sin demoras, sin fricciones.
          </p>
        </header>

        {/* GRID DE PASOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedStep(step)}
              className="group relative p-10 bg-slate-900/40 backdrop-blur-sm rounded-[3rem] border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {step.icon}
                </div>
                <span className="text-5xl font-black tracking-tighter text-slate-800 transition-colors group-hover:text-indigo-500/20">
                  {step.number}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 leading-none">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  {step.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-indigo-300 font-black text-[9px] uppercase tracking-widest bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full shadow-inner">
                  <Calendar className="w-3 h-3" />
                  {step.duration}
                </div>
                <span className="flex items-center gap-1 text-[10px] font-black text-white uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver detalles <Plus className="w-3 h-3 text-indigo-400" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <button className="group inline-flex items-center gap-4 text-slate-500 hover:text-white transition-all">
            <span className="font-black uppercase text-[10px] tracking-[0.3em]">Ver garantía de cumplimiento</span>
            <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* MODAL DARK */}
      <AnimatePresence>
        {selectedStep && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[100]"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-xl bg-slate-900 border border-slate-800 rounded-[3rem] shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)] z-[101] overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className={`h-2 w-full shrink-0 bg-gradient-to-r ${selectedStep.gradient}`} />
              
              <button 
                onClick={() => setSelectedStep(null)} 
                className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-white hover:text-slate-950 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="flex items-center gap-5 mb-10">
                  <div className={`w-16 h-16 rounded-2xl shrink-0 bg-gradient-to-br ${selectedStep.gradient} text-white flex items-center justify-center shadow-xl`}>
                    {selectedStep.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 italic">Etapa {selectedStep.number}</span>
                    <h3 className="text-3xl font-black text-white">{selectedStep.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Hoja de ruta y entregables:</h4>
                  {selectedStep.details.map((detail, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4 bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50"
                    >
                      <CheckCircle2 className="mt-0.5 w-5 h-5 text-indigo-400 shrink-0" />
                      <span className="text-slate-300 font-bold text-sm leading-tight">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <Link 
                  href={`https://wa.me/573125858242?text=Hola!%20Me%20interesa%20iniciar%20la%20fase%20de%20${selectedStep.title}`}
                  target="_blank"
                  className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all shadow-xl shadow-white/5"
                >
                  Agendar Consultoría Gratuita <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}