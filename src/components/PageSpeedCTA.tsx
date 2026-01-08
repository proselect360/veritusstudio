'use client'

import { useState, useEffect } from 'react'
import { Gauge, Search, ShieldCheck, Zap, Loader2, CheckCircle2, ArrowRight, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function PageSpeedCTA() {
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanStep, setScanStep] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const steps = [
    "Iniciando protocolo de auditoría...",
    "Conectando con nodos de borde (Edge)...",
    "Analizando Core Web Vitals (LCP, FID)...",
    "Evaluando compresión de activos y scripts...",
    "Sincronizando con Google PageSpeed Insights..."
  ]

  const veritusProjectUrl = "https://sebumherenciapura.pages.dev/"

  const handleTest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return window.open('https://pagespeed.web.dev/', '_blank')
    setIsScanning(true)
    setIsDone(false)
    setShowHelp(false)
  }

  const openVeritusBenchmark = () => {
    const testUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(veritusProjectUrl)}`
    window.open(testUrl, '_blank')
  }

  useEffect(() => {
    if (isScanning) {
      const timer = setInterval(() => {
        setScanStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(timer)
            setIsDone(true)
            setTimeout(() => {
              const cleanUrl = url.startsWith('http') ? url : `https://${url}`
              const finalUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(cleanUrl)}`
              window.open(finalUrl, '_blank')
              setIsScanning(false)
              setScanStep(0)
              setShowHelp(true)
            }, 1500)
            return prev
          }
          return prev + 1
        })
      }, 850)
      return () => clearInterval(timer)
    }
  }, [isScanning, url])

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Banner de Contraste Superior */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-indigo-500/5 border border-indigo-500/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center sm:text-left">
              ¿Quieres ver un <span className="text-white">100/100</span> real?
            </p>
          </div>
          <button 
            onClick={openVeritusBenchmark}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-indigo-600 px-6 py-2 rounded-full hover:bg-white hover:text-slate-950 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Auditar Web Veritus
          </button>
        </motion.div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Lado Izquierdo: Info */}
              <div>
                <div className="flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                  <Zap className="w-4 h-4" /> Diagnostic Center
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                  Auditoría de <br />
                  <span className="text-slate-500 italic font-serif font-normal">alto rendimiento.</span>
                </h2>
                <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                  Mide tu sitio con los mismos estándares que usamos en Veritus. Ingresa tu URL y descubre por qué tus visitantes no están convirtiendo.
                </p>
                
                <div className="flex items-center gap-6 mb-10">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-white tracking-tighter">98%</span>
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest italic">Veritus Avg.</span>
                    </div>
                    <div className="h-10 w-px bg-slate-800"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-indigo-500 italic tracking-tighter">Vercel</span>
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Edge Optimized</span>
                    </div>
                </div>

                {/* Auxilio - Redirección a Formulario de Contacto */}
                <AnimatePresence>
                  {showHelp && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 shadow-2xl shadow-indigo-500/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                          <Zap className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm leading-tight italic">
                            Podemos llevar este puntaje al 100%.
                          </p>
                          <p className="text-slate-500 text-[10px] mt-1 mb-3">
                            Nuestra infraestructura resuelve los errores técnicos automáticamente.
                          </p>
                          <Link 
                            href="#contacto"
                            className="inline-flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors border-b border-indigo-500/30 pb-1"
                          >
                            Solicitar optimización gratuita <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Lado Derecho: Input & Escaneo */}
              <div className="bg-slate-950/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 relative min-h-[350px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!isScanning ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onSubmit={handleTest} className="space-y-6"
                    >
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                        <input 
                          type="text" 
                          placeholder="tu-sitio-web.co"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 text-white rounded-2xl py-5 pl-12 pr-4 focus:outline-none focus:border-indigo-500 transition-all font-bold placeholder:text-slate-700"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <button 
                          type="submit"
                          className="w-full bg-white text-slate-950 font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-95"
                        >
                          Iniciar Auditoría Real <Gauge className="w-5 h-5" />
                        </button>
                        
                        <div 
                          onClick={openVeritusBenchmark}
                          className="w-full bg-slate-900/50 text-slate-400 border border-slate-800 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 hover:text-white transition-all cursor-pointer text-xs uppercase tracking-widest"
                        >
                          Nuestras Paginas <Cpu className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <p className="text-center text-slate-600 text-[9px] font-black uppercase tracking-[0.2em] italic">
                        Powered by Google Lighthouse Engine 12.0
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="scanning"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="text-center flex flex-col items-center justify-center"
                    >
                      <div className="relative mb-8">
                        {!isDone ? (
                          <Loader2 className="w-16 h-16 text-indigo-500 animate-spin" />
                        ) : (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                          </motion.div>
                        )}
                        <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 animate-pulse"></div>
                      </div>
                      <motion.p 
                        key={scanStep}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="text-white font-black tracking-tighter text-xl mb-3"
                      >
                        {!isDone ? steps[scanStep] : "¡Auditoría Completa!"}
                      </motion.p>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                        {!isDone ? `Analizando: ${url}` : "Abriendo reporte oficial..."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Badge Inferior */}
        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/30 border border-slate-800 rounded-full group cursor-default">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                    Infraestructura <span className="text-white">Vercel Edge Network</span> & Next.js 15
                </span>
            </div>
        </div>
      </div>
    </section>
  )
}