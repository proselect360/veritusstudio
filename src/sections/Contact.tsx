'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Mail, MapPin, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

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
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden scroll-mt-20">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Columna Izquierda: Branding e Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Disponibilidad Inmediata</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[1.1] mb-8">
            Hagamos algo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              extraordinario.
            </span>
          </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md mb-12">
              No solo creamos webs, diseñamos experiencias que convierten visitas en clientes fieles.
            </p>

            <div className="grid sm:grid-cols-1 gap-6">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />} 
                label="Email Corporativo"
                value="veritusstudioweb@gmail.com" 
                href="mailto:veritusstudioweb@gmail.com"
                bg="bg-indigo-50"
                text="text-indigo-600"
              />
              <ContactCard 
                icon={<MessageCircle className="w-5 h-5" />} 
                label="WhatsApp Directo"
                value="+57 312 585 8242" 
                href="https://wa.me/573125858242"
                bg="bg-emerald-50"
                text="text-emerald-600"
              />
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario Premium */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-950 rounded-[2.5rem] p-12 text-center text-white shadow-3xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
                  <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">¡Todo listo!</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">Hemos recibido tu propuesta. En breve uno de nuestros especialistas te contactará.</p>
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
                  {/* Glow effect detrás del form */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000" />
                  
                  <form 
                    onSubmit={handleSubmit} 
                    className="relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)]"
                  >
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <FormInput id="name" name="nombre" label="Nombre Completo" placeholder="Tu nombre" />
                      <FormInput id="whatsapp" name="whatsapp" label="WhatsApp" placeholder="+57" type="tel" />
                    </div>

                    <div className="space-y-3 mb-8">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Presupuesto del proyecto</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Básico', 'Premium', 'Corporativo', 'E-commerce'].map((opt) => (
                          <label key={opt} className="relative flex items-center justify-center p-3 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 transition-all font-semibold text-sm text-slate-600 has-[:checked]:bg-indigo-600 has-[:checked]:text-white has-[:checked]:border-indigo-600">
                            <input type="radio" name="presupuesto" value={opt} className="hidden" defaultChecked={opt === 'Básico'} />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-10">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Idea del proyecto</label>
                      <textarea 
                        name="mensaje" required rows={3}
                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all font-medium text-slate-900"
                        placeholder="Cuéntanos brevemente qué necesitas..."
                      />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-slate-950/20"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send className="w-4 h-4" /> Enviar Mensaje</>}
                    </button>
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
    <a href={href} className="flex items-center gap-5 p-4 rounded-3xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all group">
      <div className={`w-12 h-12 ${bg} ${text} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{label}</p>
        <p className="text-lg font-bold text-slate-900 leading-none">{value}</p>
      </div>
    </a>
  )
}

function FormInput({ id, name, label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{label}</label>
      <input 
        id={id} name={name} required type={type} placeholder={placeholder} 
        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all font-medium text-slate-900 shadow-sm" 
      />
    </div>
  )
}

