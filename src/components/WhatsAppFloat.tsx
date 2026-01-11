'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Globe, ShoppingCart, Settings, Send, User } from 'lucide-react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [openBot, setOpenBot] = useState(false)
  const [showTyping, setShowTyping] = useState(false)
  const pathname = usePathname()

  const isStudio = pathname?.startsWith('/studio')

  useEffect(() => {
    if (isStudio) return
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [isStudio])

  // Simular que el bot "escribe" cuando se abre
  useEffect(() => {
    if (openBot) {
      setShowTyping(true)
      const timer = setTimeout(() => setShowTyping(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [openBot])

  if (isStudio) return null

  const redirect = (text: string) => {
    const msg = encodeURIComponent(`Hola Veritus Studio 👋, ${text}`)
    window.open(`https://wa.me/573125858242?text=${msg}`, '_blank')
    setOpenBot(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
        
        {/* VENTANA DE CHAT EVOLUCIONADA */}
        <AnimatePresence>
          {openBot && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
              className="w-[340px] overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 backdrop-blur-xl"
            >
              {/* Header con Perfil */}
              <div className="bg-[#25D366] p-6 pb-10 text-white relative">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/20 p-1 backdrop-blur-md">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#25D366]">
                        <User className="w-6 h-6 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#25D366] rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg tracking-tight">Veritus Bot</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Soporte Humano ⚡</p>
                  </div>
                </div>
                {/* Decoración orgánica al fondo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              </div>

              {/* Contenido del Chat */}
              <div className="px-5 pb-6 -mt-6 relative z-10">
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-sm border border-slate-100 dark:border-slate-800">
                  
                  {showTyping ? (
                    <div className="flex gap-1 py-2">
                      <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                        ¡Hola! 👋 Soy el asistente de Veritus. ¿Cómo podemos transformar tu negocio hoy?
                      </p>
                      
                      <div className="space-y-2">
                        <BotOption 
                          icon={<Globe className="w-4 h-4" />} 
                          text="Quiero una Web Pro" 
                          onClick={() => redirect('quiero una página web para mi negocio')} 
                        />
                        <BotOption 
                          icon={<ShoppingCart className="w-4 h-4" />} 
                          text="Necesito un E-commerce" 
                          onClick={() => redirect('quiero una tienda online')} 
                        />
                        <BotOption 
                          icon={<Settings className="w-4 h-4" />} 
                          text="Soporte Técnico" 
                          onClick={() => redirect('necesito soporte técnico')} 
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={() => setOpenBot(false)}
                  className="w-full mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  Cerrar Asistente
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTÓN FLOTANTE PRINCIPAL */}
        <motion.button
          initial={false}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenBot(!openBot)}
          className={`relative group w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
            openBot ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-[#25D366] text-white'
          }`}
        >
          <AnimatePresence mode="wait">
            {openBot ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative"
              >
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Ondas de choque dinámicas */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        </motion.button>
      </div>
    </>
  )
}

function BotOption({ icon, text, onClick }: { icon: any, text: string, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 hover:border-[#25D366] dark:hover:border-[#25D366] hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all group shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="text-slate-400 group-hover:text-[#25D366] transition-colors scale-90 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          {text}
        </span>
      </div>
      <Send className="w-3 h-3 text-slate-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </button>
  )
}