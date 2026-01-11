'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Mail, CheckCircle2, Loader2, Sparkles, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 lg:py-56 overflow-hidden scroll-mt-20 isolate">
      
      {/* Luces de fondo optimizadas para no ensuciar el móvil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-[20%] w-[80vw] h-[80vw] bg-indigo-500/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 -right-[20%] w-[60vw] h-[60vw] bg-emerald-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Info de Contacto: Más compacta en móvil */}
          <motion.div 
            className="relative z-20 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 md:mb-8 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Disponibilidad 2026</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 md:mb-10 text-white">
              Hagamos algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 italic">
                extraordinario.
              </span>
            </h2>
            
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md mb-8 md:mb-12 text-slate-400">
              Transformamos visiones en <span className="text-white">activos digitales</span> de alto impacto.
            </p>

            {/* Contact Cards: Layout Horizontal en móviles pequeños para evitar el apilamiento excesivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 max-w-sm lg:max-w-none">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />} 
                label="Escríbenos"
                value="veritusstudioweb@gmail.com" 
                href="mailto:veritusstudioweb@gmail.com"
              />
              <ContactCard 
                icon={<MessageCircle className="w-5 h-5" />} 
                label="WhatsApp"
                value="+57 312 585 8242" 
                href="https://wa.me/573125858242"
              />
            </div>
          </motion.div>

          {/* Formulario: Rediseño para evitar el look "apilado" */}
          <div className="relative mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <FormInput id="name" label="Nombre" placeholder="Tu nombre" />
                    <FormInput id="whatsapp" label="WhatsApp" placeholder="+57..." />
                  </div>

                  <div className="mb-5">
                    <FormInput id="email" label="Correo Corporativo" placeholder="email@ejemplo.com" type="email" />
                  </div>

                  <div className="space-y-2 mb-8 md:mb-10">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Tu idea o proyecto</label>
                    <textarea 
                      required rows={3}
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-[1.5rem] px-5 py-4 transition-all font-medium text-white placeholder:text-slate-500 outline-none resize-none text-sm md:text-base"
                      placeholder="¿Qué tienes en mente?"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="group w-full py-5 md:py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-sm md:text-lg flex items-center justify-center gap-4 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span className="uppercase tracking-widest">Enviar Propuesta</span>
                        <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-900/40 border border-white/10 rounded-[2rem] p-10 text-center backdrop-blur-3xl shadow-2xl"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">¡Enviado!</h3>
                  <p className="text-slate-400 text-sm md:text-base mb-8">Te responderemos en menos de 24h.</p>
                  <button onClick={() => setSubmitted(false)} className="text-indigo-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 mx-auto">
                    Nuevo mensaje <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px #0f172a inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </section>
  )
}

function ContactCard({ icon, label, value, href }: any) {
  return (
    <a 
      href={href} target="_blank" rel="noopener noreferrer" 
      className="flex items-center gap-4 p-4 rounded-[1.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">{label}</p>
        <p className="text-[13px] md:text-sm font-bold text-slate-200 truncate">{value}</p>
      </div>
    </a>
  )
}

function FormInput({ id, label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">{label}</label>
      <input 
        id={id} required type={type} placeholder={placeholder} 
        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl md:rounded-[1.25rem] px-5 py-4 transition-all font-bold text-white outline-none placeholder:text-slate-500 text-sm" 
      />
    </div>
  )
}