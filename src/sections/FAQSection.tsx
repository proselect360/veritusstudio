'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Globe, Zap, ShieldCheck, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: "¿Cuánto cuesta realmente una página web en Colombia para 2026?",
    answer: "El precio varía según la complejidad. Una Landing Page profesional inicia desde $1.2M COP, mientras que un ecosistema corporativo en Next.js con SEO avanzado oscila entre $2.5M y $5M COP. Lo importante no es el costo, sino el retorno de inversión (ROI) que genera una web rápida.",
    icon: <Globe className="text-indigo-500 dark:text-indigo-400" />
  },
  {
    question: "¿Por qué usan Next.js en lugar de WordPress?",
    answer: "WordPress suele ser lento y vulnerable. Next.js nos permite entregar webs que cargan en menos de 1 segundo (LCP < 1s), lo que garantiza una mejor posición en Google y una experiencia de usuario fluida que aumenta las conversiones hasta en un 300%.",
    icon: <Zap className="text-emerald-500 dark:text-emerald-400" />
  },
  {
    question: "¿Qué pasa si no me entregan en los 14 días prometidos?",
    answer: "Nuestra garantía 'Speed-to-Market' es sagrada. Si el retraso es responsabilidad de Veritus Studio, aplicamos un descuento del 20% por cada semana de demora o el desarrollo técnico queda cubierto por nuestra cuenta. Tu tiempo es dinero.",
    icon: <ShieldCheck className="text-rose-500 dark:text-rose-400" />
  },
  {
    question: "¿Mi página aparecerá en Google de inmediato?",
    answer: "Registramos tu sitio en Google Search Console manualmente el día del lanzamiento. En sectores locales (ej. 'abogados en Bogotá'), nuestros clientes suelen ver resultados en las primeras páginas entre los 45 y 60 días gracias a nuestra ingeniería SEO técnica.",
    icon: <HelpCircle className="text-blue-500 dark:text-blue-400" />
  },
  {
    question: "¿Cómo recibo los mensajes de mis clientes?",
    answer: "Implementamos una integración nativa con la API de WhatsApp Business. Cuando un cliente hace clic, te llega un mensaje con la información exacta del servicio que está viendo, permitiéndote cerrar ventas mucho más rápido desde tu celular.",
    icon: <MessageCircle className="text-green-500 dark:text-green-400" />
  }
]

export default function FAQSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/50 overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 transition-colors">
            Resolviendo tus <span className="text-indigo-600 dark:text-indigo-400">dudas</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic transition-colors">Todo lo que necesitas saber para escalar tu negocio en Colombia.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300"
              initial={false}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className={`w-full flex items-center justify-between p-8 text-left transition-all ${
                  activeIdx === i 
                    ? 'bg-indigo-50/50 dark:bg-indigo-900/10' 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0">{faq.icon}</div>
                  <span className="text-lg font-black text-slate-900 dark:text-slate-100 leading-tight transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${activeIdx === i ? 'rotate-180 text-indigo-600' : ''}`} />
              </button>

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <div className="h-px bg-slate-100 dark:bg-slate-800 mb-6 transition-colors" />
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors">
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

      {/* Script de Schema.org para Google (Inyectado para SEO) */}
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