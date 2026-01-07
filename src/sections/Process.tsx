'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Palette, Zap, Rocket, X, CheckCircle2, ArrowRight, Calendar, Sparkles } from 'lucide-react'

// Definición de pasos con contenido enriquecido
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="process" className="relative py-24 lg:py-40 bg-white overflow-hidden isolate">
      {/* Background Decor - Más dramático */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[140px] translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-indigo-600 font-black uppercase tracking-[0.3em] text-xs mb-6 italic"
          >
            <Sparkles className="w-4 h-4" /> Speed-to-Market Methodology
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-10"
          >
            Tu ecosistema <br />
            digital en <span className="text-indigo-600">14 días.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Metodología ágil perfeccionada para <span className="text-slate-900 font-bold italic border-b-4 border-indigo-100">Veritus Studio</span>. Sin demoras, sin excusas.
          </p>
        </header>

        {/* Grid de Pasos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Línea de progreso decorativa en Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -z-10 translate-y-[-2rem]" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedStep(step)}
              className={`
                group relative p-10 bg-slate-50 rounded-[3rem] border-2 transition-all duration-500 cursor-pointer
                ${hoveredIndex === idx ? 'border-indigo-600 bg-white shadow-3xl shadow-indigo-500/10 -translate-y-4' : 'border-transparent'}
              `}
            >
              <div className="flex justify-between items-start mb-16">
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-xl 
                  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                `}>
                  {step.icon}
                </div>
                <span className={`text-5xl font-black tracking-tighter transition-colors ${hoveredIndex === idx ? 'text-indigo-600/10' : 'text-slate-200'}`}>
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 leading-none">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {step.description}
              </p>

              <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest bg-white border border-indigo-100 w-fit px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-3 h-3" />
                {step.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garantía Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <Link 
            href="#contacto" 
            className="inline-flex items-center gap-4 text-slate-400 hover:text-indigo-600 font-black transition-all group uppercase text-sm tracking-[0.2em]"
          >
            Ver garantía de cumplimiento <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
  {selectedStep && (
    <>
      {/* Fondo oscuro con desenfoque */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={() => setSelectedStep(null)}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[100]"
      />
          
          {/* Contenedor del Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden max-h-[85vh] flex flex-col"
          >
            {/* Línea de progreso superior fija */}
            <div className={`h-2 w-full shrink-0 bg-gradient-to-r ${selectedStep.gradient}`} />
            
            {/* Botón de cerrar FIJO */}
            <button 
              onClick={() => setSelectedStep(null)} 
              className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-md active:scale-90"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Área con Scroll Interno */}
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl shrink-0 bg-gradient-to-br ${selectedStep.gradient} text-white flex items-center justify-center shadow-lg`}>
                  {selectedStep.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 italic">Fase {selectedStep.number}</span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-950">{selectedStep.title}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                {selectedStep.description}
              </p>

              <div className="space-y-3 mb-10">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Entregables clave:</h4>
                {selectedStep.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm md:text-base">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Botón de Acción dentro del scroll para asegurar que se vea tras leer */}
              <Link 
                href="https://wa.me/573125858242" 
                className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl sticky bottom-0"
              >
                Empezar esta fase <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
      
    </section>
  )
}