'use client'

import { useState, useEffect, useCallback } from 'react'
import { Gauge, Search, ShieldCheck, Zap, Loader2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function PageSpeedCTA() {
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanStep, setScanStep] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  // Arreglo completo de pasos de auditoría para una experiencia inmersiva
  const steps = [
    "Iniciando protocolo de auditoría...",
    "Conectando con nodos de borde (Vercel Edge)...",
    "Analizando Core Web Vitals (LCP, CLS, INP)...",
    "Evaluando compresión de activos y scripts...",
    "Verificando infraestructura HTTP/3 y TLS 1.3...",
    "Sincronizando con Google PageSpeed Engine..."
  ]

  const veritusProjectUrl = "https://veritusstudio.vercel.app/"

  // Lógica para iniciar el test del usuario
  const handleTest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return // Evita ejecutar si el input está vacío
    
    setIsScanning(true)
    setIsDone(false)
    setShowHelp(false)
    setScanStep(0)
  }

  // Lógica para auditar la web de Veritus (Benchmark)
  const openVeritusBenchmark = useCallback(() => {
    const testUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(veritusProjectUrl)}`
    window.open(testUrl, '_blank', 'noopener,noreferrer')
  }, [veritusProjectUrl])

  // Efecto que maneja la simulación del escaneo y la redirección final
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isScanning) {
      timer = setInterval(() => {
        setScanStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(timer)
            setIsDone(true)
            
            // Tiempo de espera final antes de redirigir
            setTimeout(() => {
              const cleanUrl = url.startsWith('http') ? url : `https://${url}`
              const finalUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(cleanUrl)}`
              
              window.open(finalUrl, '_blank', 'noopener,noreferrer')
              
              // Resetear estados para permitir nuevos escaneos
              setIsScanning(false)
              setShowHelp(true)
            }, 1500)
            return prev
          }
          return prev + 1
        })
      }, 900) // Velocidad del escaneo
    }
    return () => clearInterval(timer)
  }, [isScanning, url, steps.length])

  return (
    <section id="process" className="relative py-32 bg-transparent overflow-hidden isolate scroll-mt-20" aria-labelledby="audit-title">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Banner Superior - Pilar de Autoridad */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-2 pl-6 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/5"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Ingeniería que domina el <span className="text-white">estándar 90+</span>
            </p>
          </div>
          <button 
            onClick={openVeritusBenchmark}
            className="text-[10px] font-black uppercase tracking-widest text-slate-950 bg-white px-8 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 active:scale-95"
          >
            Auditar mi Web
          </button>
        </motion.div>

        <div className="relative group">
          {/* Brillo perimetral */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -z-10" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Lado Izquierdo: Copy Editorial */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[9px] uppercase tracking-[0.3em] mb-8">
                  <Zap className="w-3 h-3" /> Diagnostic Center
                </div>
                
                <h2 id="audit-title" className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-8">
                  Auditoría de <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 italic font-serif font-medium">
                    performance real.
                  </span>
                </h2>
                
                <p className="text-slate-400 font-medium mb-10 leading-relaxed max-w-sm text-lg italic">
                  "Mide tu velocidad con los mismos estándares que usamos en Veritus."
                </p>
                
                <div className="flex items-center gap-8 mb-12">
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-white tracking-tighter">98<span className="text-indigo-500">.</span></span>
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em] mt-1">Veritus Avg.</span>
                    </div>
                    <div className="h-12 w-px bg-white/10" />
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-white/40 tracking-tighter italic font-serif">A+</span>
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em] mt-1">Edge Rank</span>
                    </div>
                </div>

                <AnimatePresence>
                  {showHelp && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                      <p className="text-white font-bold text-sm leading-tight mb-3">
                        ¿Puntaje insatisfactorio?
                      </p>
                      <Link 
                        href="#contact"
                        className="inline-flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                      >
                        Optimización Prioritaria <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Lado Derecho: Terminal de Escaneo */}
              <div className="bg-black/40 backdrop-blur-3xl p-1 rounded-[2.5rem] border border-white/5 shadow-inner">
                <div className="bg-slate-900/40 rounded-[2.3rem] p-8 md:p-10 min-h-[400px] flex flex-col justify-center relative">
                  
                  <AnimatePresence mode="wait">
                    {!isScanning ? (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onSubmit={handleTest} className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Endpoint URL</label>
                          <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                            <input 
                              type="text" 
                              placeholder="https://tu-sitio.com"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                              className="w-full bg-black/50 border border-white/10 text-white rounded-2xl py-5 pl-14 pr-4 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono text-sm placeholder:text-slate-800"
                              required
                            />
                          </div>
                        </div>
                        
                        <button 
                          type="submit"
                          className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-indigo-500/20 active:scale-[0.98]"
                        >
                          Diagnosticar Rendimiento <Gauge className="w-5 h-5" />
                        </button>

                        <div className="pt-4 flex items-center justify-center gap-4 border-t border-white/5">
                          <p className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">
                            Powered by Google Lighthouse Engine 12.0
                          </p>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div 
                        key="scanning"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-center"
                        role="status"
                      >
                        <div className="relative mb-10 inline-block">
                           <div className="absolute inset-0 bg-indigo-500 blur-[50px] opacity-20 animate-pulse" />
                           {!isDone ? (
                            <div className="relative">
                               <Loader2 className="w-20 h-20 text-indigo-500 animate-spin stroke-[1px]" />
                               <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-[10px] font-black text-indigo-400">0{scanStep + 1}</span>
                               </div>
                            </div>
                          ) : (
                            <CheckCircle2 className="w-20 h-20 text-emerald-500 stroke-[1px]" />
                          )}
                        </div>
                        
                        <motion.h3 
                          key={scanStep}
                          className="text-white font-black tracking-tighter text-2xl mb-2"
                        >
                          {!isDone ? steps[scanStep] : "Análisis Completado"}
                        </motion.h3>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
                          {!isDone ? `Analizando: ${url}` : "Abriendo reporte oficial..."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags de Infraestructura */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:opacity-100 transition-opacity">
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">HTTP/3 Ready</span>
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Core Web Vitals Optimized</span>
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Serverless Architecture</span>
        </div>
      </div>
    </section>
  )
}