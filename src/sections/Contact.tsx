'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  return (
    <section id="contact" className="relative py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna de Texto e Info */}
          <div>
            <span className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block italic">
              Próximo Paso
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.95] mb-8">
              Inicia tu <br />
              proyecto <span className="text-indigo-600">hoy.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
              Estamos listos para transformar tu presencia digital en una máquina de ventas. Agenda una consultoría gratuita.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">Escríbenos</p>
                  <p className="text-lg font-bold text-slate-900">contacto@veritus.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-emerald-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">WhatsApp</p>
                  <p className="text-lg font-bold text-slate-900">+57 312 585 8242</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-rose-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">Ubicación</p>
                  <p className="text-lg font-bold text-slate-900">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="relative">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-950 rounded-[3rem] p-12 text-center text-white"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tighter">¡Mensaje Recibido!</h3>
                <p className="text-slate-400 mb-8">Un consultor de Veritus Studio te contactará en menos de 4 horas.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-400 font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#fcfcfd] border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2">Nombre</label>
                    <input required type="text" placeholder="Ej. Juan Pérez" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-semibold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2">WhatsApp</label>
                    <input required type="tel" placeholder="+57 ..." className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-semibold" />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">Presupuesto Estimado</label>
                  <select className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-semibold appearance-none cursor-pointer">
                    <option>Menos de $2M COP</option>
                    <option>$2M - $5M COP</option>
                    <option>$5M - $10M COP</option>
                    <option>Más de $10M COP</option>
                  </select>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">Cuéntanos sobre tu negocio</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-semibold resize-none" placeholder="¿Qué buscas lograr con tu nueva web?"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Propuesta"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
            
            {/* Decoración */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  )
}