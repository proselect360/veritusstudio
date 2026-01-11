'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Globe, Zap, ShieldCheck, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: "¿Cuánto cuesta realmente una página web en Colombia para 2026?",
    answer: "El precio varía según la complejidad. Una Landing Page profesional inicia desde $1.2M COP, mientras que un ecosistema corporativo en Next.js con SEO avanzado oscila entre $2.5M y $5M COP. Lo importante es el retorno de inversión (ROI) que genera una web rápida.",
    icon: <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
  },
  {
    question: "¿Por qué usan Next.js en lugar de WordPress?",
    answer: "WordPress suele ser lento y vulnerable. Next.js nos permite entregar webs que cargan en menos de 1 segundo (LCP < 1s), lo que garantiza una mejor posición en Google y una experiencia de usuario fluida que aumenta las conversiones hasta en un 300%.",
    icon: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
  },
  {
    question: "¿Qué pasa si no me entregan en los 14 días prometidos?",
    answer: "Nuestra garantía 'Speed-to-Market' es sagrada. Si el retraso es responsabilidad de Veritus Studio, aplicamos un descuento del 20% por cada semana de demora o el desarrollo técnico queda cubierto por nuestra cuenta. Tu tiempo es dinero.",
    icon: <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />
  },
  {
    question: "¿Mi página aparecerá en Google de inmediato?",
    answer: "Registramos tu sitio en Google Search Console manualmente el día del lanzamiento. En sectores locales, nuestros clientes suelen ver resultados en las primeras páginas entre los 45 y 60 días gracias a nuestra ingeniería SEO técnica.",
    icon: <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  },
  {
    question: "¿Cómo recibo los mensajes de mis clientes?",
    answer: "Implementamos una integración nativa con la API de WhatsApp Business. Cuando un cliente hace clic, te llega un mensaje con la información exacta del servicio que está viendo, permitiéndote cerrar ventas mucho más rápido.",
    icon: <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
  }
]

export default function FAQSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className="relative py-32 bg-transparent overflow-hidden transition-colors duration-500 isolate">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // TEXTO: Slate-950 forzado para modo claro
            className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter mb-6"
          >
            Resolviendo tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">dudas</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium italic">
            Todo lo que necesitas saber para escalar tu negocio en Colombia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                activeIdx === i 
                ? 'bg-white dark:bg-slate-900/40 backdrop-blur-xl border-indigo-500/50 shadow-2xl shadow-indigo-500/10' 
                : 'bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border-slate-200 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left outline-none"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-3 rounded-2xl transition-all duration-500 ${
                    activeIdx === i 
                    ? 'bg-indigo-600 text-white scale-110 rotate-6 shadow-lg shadow-indigo-500/20' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {/* El color del icono ahora es dinámico según si está activo o no */}
                    <div className={activeIdx === i ? 'text-white' : ''}>
                      {faq.icon}
                    </div>
                  </div>
                  {/* PREGUNTA: Slate-950 en claro para que resalte sobre el fondo blanco/gris */}
                  <span className={`text-lg md:text-xl font-extrabold leading-tight transition-colors ${
                    activeIdx === i ? 'text-indigo-700 dark:text-white' : 'text-slate-900 dark:text-slate-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                  activeIdx === i ? 'bg-indigo-600 border-indigo-600 rotate-180' : 'border-slate-300 dark:border-slate-700'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-colors ${activeIdx === i ? 'text-white' : 'text-slate-400'}`} />
                </div>
              </button>

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-10 pt-2">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-8" />
                      {/* RESPUESTA: Slate-800 para que sea legible en modo claro */}
                      <p className="text-slate-800 dark:text-slate-400 text-lg leading-relaxed font-semibold pl-4 border-l-4 border-indigo-600 dark:border-indigo-500/50">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}