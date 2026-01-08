'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Mail, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const FORM_ENDPOINT = "https://formspree.io/f/xdakqdpw"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
      }
    } catch (error) {
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[var(--bg)] overflow-hidden scroll-mt-20 transition-colors duration-500">
      {/* Decoración de Fondo Adaptativa */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] -z-10 opacity-60 transition-colors" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/20 rounded-full blur-[120px] -z-10 opacity-60 transition-colors" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Columna Izquierda: Branding */}
          <motion.div 
            className="relative z-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 mb-6 transition-colors">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Disponibilidad Inmediata</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 dark:text-white tracking-tighter leading-[1.1] mb-8 transition-colors">
              Hagamos algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
                extraordinario.
              </span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md mb-12 transition-colors">
              No solo creamos webs, diseñamos experiencias que convierten visitas en clientes fieles.
            </p>

            <div className="grid gap-4">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />} 
                label="Email"
                value="veritusstudioweb@gmail.com" 
                href="mailto:veritusstudioweb@gmail.com"
                bg="bg-indigo-50 dark:bg-indigo-900/30"
                text="text-indigo-600 dark:text-indigo-400"
              />
              <ContactCard 
                icon={<MessageCircle className="w-5 h-5" />} 
                label="WhatsApp Directo"
                value="+57 312 585 8242" 
                href="https://wa.me/573125858242"
                bg="bg-emerald-50 dark:bg-emerald-900/30"
                text="text-emerald-600 dark:text-emerald-400"
              />
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-950 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-12 text-center text-white shadow-3xl relative overflow-hidden border border-white/5"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
                  <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">¡Todo listo!</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">Hemos recibido tu propuesta. En breve te contactaremos.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
                  >
                    Volver a enviar
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group"
                >
                  {/* Glow Effect de fondo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-1000" />
                  
                  <form 
                    onSubmit={handleSubmit} 
                    className="relative bg-white/90 dark:bg-slate-950/60 backdrop-blur-2xl border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all"
                  >
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <FormInput id="name" name="nombre" label="Nombre" placeholder="Tu nombre" />
                      <FormInput id="whatsapp" name="whatsapp" label="WhatsApp" placeholder="+57" type="tel" />
                    </div>

                    <div className="mb-8">
                      <FormInput id="email" name="email" label="Correo Electrónico" placeholder="tu@empresa.com" type="email" />
                    </div>

                    <div className="space-y-3 mb-8">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1 transition-colors">Presupuesto</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Básico', 'Premium', 'Corporativo', 'E-commerce'].map((opt) => (
                          <label key={opt} className="relative flex items-center justify-center p-3 border border-slate-100 dark:border-white/5 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-all font-semibold text-sm text-slate-600 dark:text-slate-400 has-[:checked]:bg-indigo-600 has-[:checked]:text-white has-[:checked]:border-indigo-600 transition-all">
                            <input type="radio" name="presupuesto" value={opt} className="hidden" defaultChecked={opt === 'Básico'} />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-10">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1 transition-colors">Idea del proyecto</label>
                      <textarea 
                        name="mensaje" required rows={3}
                        className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        placeholder="Cuéntanos brevemente qué necesitas..."
                      />
                    </div>

                   <button 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-slate-950 dark:bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-indigo-600/20 group"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin w-5 h-5" />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                          <span>Agendar Consultoría Gratuita</span>
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium transition-colors">
                      ✨ Respondemos en menos de 24 horas hábiles.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, bg, text }: any) {
  return (
    <a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="flex items-center gap-5 p-4 rounded-3xl border border-transparent hover:border-slate-100 dark:hover:border-white/10 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all group cursor-pointer"
    >
      <div className={`w-12 h-12 flex-shrink-0 ${bg} ${text} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-0.5">{label}</p>
        <p className="text-lg font-bold text-slate-900 dark:text-slate-200 leading-none break-all transition-colors">{value}</p>
      </div>
    </a>
  )
}

function FormInput({ id, name, label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1 transition-colors">{label}</label>
      <input 
        id={id} name={name} required type={type} placeholder={placeholder} 
        className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all font-medium text-slate-900 dark:text-white shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-600" 
      />
    </div>
  )
}