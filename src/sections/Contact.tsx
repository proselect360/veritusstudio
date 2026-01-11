'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Mail, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden scroll-mt-20 isolate">
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            className="relative z-20 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* Badge adaptativo */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-indigo-300 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Disponibilidad 2026</span>
            </div>
            
            {/* TÍTULO: Forzamos Negro en claro / Blanco en oscuro */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-slate-950 dark:text-white transition-colors">
              Hagamos algo <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-emerald-700 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400">
                extraordinario.
              </span>
            </h2>
            
            <p className="text-xl font-medium leading-relaxed max-w-md mb-12 text-slate-600 dark:text-slate-400">
              Transformamos visiones en productos digitales. <span className="font-bold text-slate-900 dark:text-white underline decoration-indigo-500">¿Listo para el siguiente nivel?</span>
            </p>

            <div className="space-y-4 max-w-sm">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />} 
                label="Email"
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

          <div className="relative">
            <form 
              onSubmit={handleSubmit} 
              className="relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <FormInput id="name" label="Nombre" placeholder="Tu nombre" />
                <FormInput id="whatsapp" label="WhatsApp" placeholder="+57" />
              </div>

              <div className="mb-8">
                <FormInput id="email" label="Correo" placeholder="email@ejemplo.com" type="email" />
              </div>

              <div className="space-y-4 mb-10">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Tu mensaje</label>
                <textarea 
                  required rows={4}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-transparent focus:border-indigo-600 rounded-3xl px-6 py-5 transition-all font-medium text-slate-950 dark:text-white placeholder:text-slate-400 outline-none resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button className="w-full py-6 bg-slate-950 dark:bg-indigo-600 text-white rounded-3xl font-black text-lg flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                <span>Enviar Propuesta</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href }: any) {
  return (
    <a 
      href={href} target="_blank" rel="noopener noreferrer" 
      className="flex items-center gap-5 p-5 rounded-[2rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-white/5 hover:border-indigo-500 transition-all group"
    >
      <div className="w-14 h-14 flex-shrink-0 bg-slate-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{label}</p>
        <p className="text-base font-bold text-slate-900 dark:text-slate-200 leading-none">{value}</p>
      </div>
    </a>
  )
}

function FormInput({ id, label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-4">
      <label htmlFor={id} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">{label}</label>
      <input 
        id={id} required type={type} placeholder={placeholder} 
        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-transparent focus:border-indigo-600 rounded-[1.25rem] px-6 py-5 transition-all font-bold text-slate-950 dark:text-white outline-none placeholder:text-slate-400" 
      />
    </div>
  )
}