'use client'

import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import { useState, useEffect, useCallback } from 'react'
import { Gauge, Search, Zap, Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function PaginaTest() {
  const [url, setUrl] = useState('')
  const [estaEscaneando, setEstaEscaneando] = useState(false)
  const [pasoEscaneo, setPasoEscaneo] = useState(0)
  const [finalizado, setFinalizado] = useState(false)
  const [mostrarAyuda, setMostrarAyuda] = useState(false)
  

  const pasos = [
    "Iniciando protocolo de auditoría...",
    "Conectando con nodos periféricos (Vercel Edge)...",
    "Analizando Core Web Vitals (Carga, Estabilidad, Respuesta)...",
    "Evaluando compresión de recursos y scripts...",
    "Verificando infraestructura HTTP/3 y cifrado TLS...",
    "Sincronizando con el motor Google PageSpeed..."
  ]

  const urlProyectoVeritus = "https://veritusstudio.vercel.app/"

  const manejarPrueba = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return
    setEstaEscaneando(true)
    setFinalizado(false)
    setMostrarAyuda(false)
    setPasoEscaneo(0)
  }

  const abrirBenchmarkVeritus = useCallback(() => {
    const urlPrueba = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(urlProyectoVeritus)}`
    window.open(urlPrueba, '_blank', 'noopener,noreferrer')
  }, [urlProyectoVeritus])

  useEffect(() => {
    let temporizador: NodeJS.Timeout
    if (estaEscaneando) {
      temporizador = setInterval(() => {
        setPasoEscaneo((prev) => {
          if (prev >= pasos.length - 1) {
            clearInterval(temporizador)
            setFinalizado(true)
            setTimeout(() => {
              const urlLimpia = url.startsWith('http') ? url : `https://${url}`
              const urlFinal = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(urlLimpia)}`
              window.open(urlFinal, '_blank', 'noopener,noreferrer')
              setEstaEscaneando(false)
              setMostrarAyuda(true)
            }, 1500)
            return prev
          }
          return prev + 1
        })
      }, 900)
    }
    return () => clearInterval(temporizador)
  }, [estaEscaneando, url, pasos.length])

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-slate-950 text-white pt-32 pb-20 font-sans relative overflow-hidden">
        {/* Luces de fondo más intensas para dar vida al fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-white/20 pb-10">
            <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="group p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-indigo-600 transition-all text-white"
              >
                <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                  Laboratorio / <span className="text-indigo-400 text-glow">Auditoría</span>
                </h1>
                <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.3em] mt-1 opacity-80">Entorno de Pruebas v1.0</p>
              </div>
            </div>
          </div>

          <section id="proceso">
            {/* Banner de Benchmark con más contraste */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-2 pl-8 rounded-full bg-slate-900 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-200">
                  Estándar de Ingeniería <span className="text-white">Veritus Studio</span>
                </p>
              </div>
              <button 
                onClick={abrirBenchmarkVeritus}
                className="text-[11px] font-black uppercase tracking-widest text-slate-950 bg-white px-10 py-4 rounded-full hover:bg-indigo-500 hover:text-white transition-all active:scale-95"
              >
                Ver nuestra Comparativa
              </button>
            </motion.div>

            {/* Tarjeta Principal */}
            <div className="relative group mb-32">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-slate-900/90 border border-white/20 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                      <Zap className="w-3.5 h-3.5 fill-current" /> Centro de Diagnóstico
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                      Análisis de <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 italic font-medium">velocidad real.</span>
                    </h2>
                    
                    <div className="flex items-center gap-10 mb-12">
                        <div className="flex flex-col">
                            <span className="text-6xl font-black text-white">95<span className="text-indigo-500">.</span></span>
                            <span className="text-[11px] text-slate-200 uppercase font-black mt-2 tracking-widest">Promedio Veritus</span>
                        </div>
                        <div className="h-16 w-px bg-white/20" />
                        <div className="flex flex-col">
                            <span className="text-6xl font-black text-white/40 italic">A+</span>
                            <span className="text-[11px] text-slate-300 uppercase font-black mt-2 tracking-widest">Rango en Edge</span>
                        </div>
                    </div>

                    <AnimatePresence>
                      {mostrarAyuda && (
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="p-8 rounded-[2.5rem] bg-indigo-600 border border-white/20 shadow-xl shadow-indigo-500/20">
                          <p className="text-white font-black text-xl mb-3 tracking-tight">¿Tu puntaje es bajo?</p>
                          <p className="text-indigo-100 text-sm mb-5 font-medium">Estás perdiendo clientes por cada segundo de carga.</p>
                          <Link href="/#contacto" className="inline-flex items-center gap-3 bg-white text-indigo-600 px-6 py-3 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-slate-100 transition-colors">
                            OPTIMIZACIÓN PRIORITARIA <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Formulario / Escáner */}
                  <div className="bg-white/5 p-1.5 rounded-[3rem] border border-white/10 shadow-inner">
                    <div className="bg-slate-950 rounded-[2.8rem] p-8 md:p-12 min-h-[440px] flex flex-col justify-center relative shadow-2xl">
                      <AnimatePresence mode="wait">
                        {!estaEscaneando ? (
                          <motion.form key="formulario" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={manejarPrueba} className="space-y-8">
                            <div className="space-y-4">
                              <label className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 ml-1">URL del Proyecto</label>
                              <div className="relative">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
                                <input 
                                  type="text" placeholder="https://tu-sitio.com" value={url}
                                  onChange={(e) => setUrl(e.target.value)}
                                  className="w-full bg-slate-900 border-2 border-white/10 text-white rounded-[2rem] py-6 pl-16 pr-6 focus:border-indigo-500 outline-none font-mono text-base transition-all shadow-2xl"
                                  required
                                />
                              </div>
                            </div>
                            <button type="submit" className="w-full bg-indigo-600 text-white font-black py-7 rounded-[2rem] flex items-center justify-center gap-4 hover:bg-indigo-500 transition-all active:scale-[0.98] shadow-xl shadow-indigo-600/20 uppercase tracking-[0.2em] text-sm">
                              Iniciar Diagnóstico <Gauge className="w-6 h-6" />
                            </button>
                          </motion.form>
                        ) : (
                          <motion.div key="escaneando" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                            <div className="relative mb-12 inline-block">
                               {!finalizado ? (
                                <Loader2 className="w-24 h-24 text-indigo-400 animate-spin stroke-[2px]" />
                              ) : (
                                <CheckCircle2 className="w-24 h-24 text-emerald-400 stroke-[2px]" />
                              )}
                            </div>
                            <motion.h3 key={pasoEscaneo} className="text-white font-black text-2xl md:text-3xl mb-4 px-4 tracking-tighter leading-tight">
                              {!finalizado ? pasos[pasoEscaneo] : "Análisis Completado"}
                            </motion.h3>
                            <p className="text-indigo-400 text-[11px] font-black uppercase tracking-[0.5em] animate-pulse">
                              Analizando Datos
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pasos inferiores con texto más claro */}
            <div className="grid md:grid-cols-3 gap-16">
              <StepInfo 
                num="01"
                title="Input de Datos"
                desc="Nuestro sistema prepara un entorno de pruebas aislado para medir el rendimiento sin interferencias de caché o latencias locales."
              />
              <StepInfo 
                num="02"
                title="Web Vitals"
                desc="Evaluamos la velocidad de carga visual (LCP) y la estabilidad de los elementos para asegurar una experiencia de usuario fluida."
              />
              <StepInfo 
                num="03"
                title="Estrategia"
                desc="Un puntaje bajo penaliza tu posicionamiento. Usamos este reporte para diseñar tu nueva infraestructura de alta velocidad."
              />
            </div>

            <div className="mt-24 p-12 rounded-[3.5rem] bg-indigo-500/5 border border-white/10 text-center">
              <p className="text-slate-300 text-[12px] uppercase tracking-[0.4em] font-bold leading-loose max-w-4xl mx-auto">
                Tecnología respaldada por <span className="text-white font-black border-b border-indigo-500 pb-0.5">Google PageSpeed Engine</span>. <br className="hidden md:block"/>
                Auditorías técnicas de grado industrial en tiempo real.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

function StepInfo({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="h-12 w-12 rounded-2xl bg-indigo-600 border border-white/20 flex items-center justify-center text-white text-sm font-black shadow-lg">
        {num}
      </div>
      <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{title}</h3>
      <p className="text-slate-200 text-lg leading-relaxed font-medium opacity-90">
        {desc}
      </p>
    </motion.div>
  )
}