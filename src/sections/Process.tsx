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

  // Evita errores de hidratación en Next.js
  useEffect(() => { 
    setIsMounted(true) 
  }, [])

  if (!isMounted) return null

  return (
    <section id="process" className="relative py-20 lg:py-40 bg-white overflow-hidden isolate">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-50/40 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 italic"
          >
            <Sparkles className="w-4 h-4" /> Speed-to-Market Methodology
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-10">
            Tu ecosistema <br />
            digital en <span className="text-indigo-600">14 días.</span>
          </h2>

          <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl italic">
            ← Desliza para explorar nuestro proceso →
          </p>
        </header>

        {/* CARRUSEL MÓVIL / GRID DESKTOP */}
        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-12 no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 scroll-smooth">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedStep(step)}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center group relative p-8 md:p-10 bg-slate-50 rounded-[3rem] border-2 border-transparent hover:border-indigo-600 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {step.icon}
                </div>
                <span className="text-4xl font-black tracking-tighter text-slate-200 group-hover:text-indigo-600/10 transition-colors">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 leading-none">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {step.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-600 font-black text-[9px] uppercase tracking-widest bg-white border border-indigo-100 px-3 py-1.5 rounded-full shadow-sm">
                  <Calendar className="w-3 h-3" />
                  {step.duration}
                </div>
                <span className="flex items-center gap-1 text-[10px] font-black text-indigo-600 uppercase tracking-tighter opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  Ver más <Plus className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

       {/* Footer de la Sección de Proceso */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('warranty');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-4 text-slate-400 hover:text-indigo-600 font-black transition-all group uppercase text-[10px] tracking-[0.2em] cursor-pointer bg-transparent border-none"
          >
            Ver garantía de cumplimiento <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* MODAL CON ANIMATE PRESENCE */}
      <AnimatePresence>
        {selectedStep && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100]"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className={`h-2 w-full shrink-0 bg-gradient-to-r ${selectedStep.gradient}`} />
              
              <button 
                onClick={() => setSelectedStep(null)} 
                className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-red-500 hover:text-white transition-all active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl shrink-0 bg-gradient-to-br ${selectedStep.gradient} text-white flex items-center justify-center shadow-lg`}>
                    {selectedStep.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 italic">Etapa {selectedStep.number}</span>
                    <h3 className="text-2xl font-black text-slate-950">{selectedStep.title}</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
                  {selectedStep.description}
                </p>

                <div className="space-y-4 mb-10">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">Entregables de la fase:</h4>
                  {selectedStep.details.map((detail, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-800 font-bold text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <Link 
                  href={`https://wa.me/573125858242?text=Hola!%20Me%20interesa%20iniciar%20la%20fase%20de%20${selectedStep.title}`}
                  target="_blank"
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-950 transition-all shadow-xl"
                >
                  Iniciar Proyecto <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}