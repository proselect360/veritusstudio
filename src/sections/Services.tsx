'use client'

import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { 
  Rocket, Building2, ShoppingCart, CheckCircle2, 
  ArrowRight, UserCircle, Sparkles, Timer 
} from 'lucide-react'

// --- Tipado de Datos ---
interface Service {
  name: string;
  description: string;
  price: string;
  oldPrice: string;
  ideal: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  recommended?: boolean;
  tag?: string;
}

// --- Configuración de Servicios (La info que necesitabas) ---
const services: Service[] = [
  {
    name: "Marca Personal",
    description: "Hub de autoridad para expertos que buscan destacar con diseño minimalista y carga instantánea.",
    price: "890K", oldPrice: "1.2M", ideal: "Expertos y Freelancers",
    icon: <UserCircle className="w-7 h-7" />,
    gradient: "from-slate-500 to-slate-800",
    features: ["Link-in-bio Premium", "Blog optimizado", "Agendamiento One-Click", "SEO de Nombre"]
  },
  {
    name: "Landing Page Pro",
    description: "Terminal de ventas de alta conversión diseñada para campañas de pauta agresiva.",
    price: "1.4M", oldPrice: "1.9M", ideal: "Infoproductos y Servicios",
    icon: <Rocket className="w-7 h-7" />,
    gradient: "from-orange-500 to-rose-600",
    features: ["Copywriting persuasivo", "A/B Testing Integrado", "Velocidad < 800ms", "Pixel Tracking"]
  },
  {
    name: "Web Corporativa",
    description: "Arquitectura de elite para empresas que exigen liderazgo digital y SEO local dominante.",
    price: "2.9M", oldPrice: "3.8M", ideal: "Pymes y Consultoras",
    icon: <Building2 className="w-7 h-7" />,
    gradient: "from-blue-600 to-indigo-700",
    features: ["Hasta 10 Secciones", "SEO Técnico Avanzado", "Infraestructura Cloud", "Soporte Priority"],
    recommended: true, tag: "Más Elegido"
  },
  {
    name: "E-commerce Elite",
    description: "Tienda virtual con experiencia de compra tipo Apple para marcas que escalan.",
    price: "4.5M", oldPrice: "5.8M", ideal: "Retail y Marcas Propias",
    icon: <ShoppingCart className="w-7 h-7" />,
    gradient: "from-emerald-500 to-teal-600",
    features: ["Checkout de 1 Paso", "Pagos Nacionales/Intl", "Automatización Logística", "Carritos Abandonados"]
  }
]

// Componente de Tarjeta optimizado con memo
const ServiceCard = memo(({ service }: { service: Service }) => {
  return (
    <div className={`
      relative h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 flex flex-col isolate group/card
      ${service.recommended 
        ? 'bg-slate-900 border-2 border-indigo-500/40 shadow-2xl' 
        : 'bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06]'}
    `}>
      {service.recommended && (
        <div className="absolute -top-4 left-8 bg-indigo-500 text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full z-20">
          {service.tag}
        </div>
      )}

      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-lg group-hover/card:scale-110 transition-transform`}>
        {service.icon}
      </div>

      <h3 className="text-2xl font-black text-white mb-3 tracking-tighter uppercase">{service.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{service.description}</p>

      <div className="mb-8 mt-auto pt-8 border-t border-white/10">
        <span className="text-[10px] font-bold text-slate-500 line-through mb-1 block uppercase tracking-widest">Base: ${service.oldPrice}</span>
        <div className="flex items-center gap-3">
          <span className="text-4xl font-black text-white tracking-tighter">${service.price}</span>
          <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">2026</span>
        </div>
      </div>

      <ul className="space-y-3 mb-10">
        {service.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
            <span className="tracking-tight">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={`Solicitar información sobre ${service.name}`}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative w-full py-4 bg-transparent border-2 border-indigo-500/30 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
      >
        Me interesa
      </button>
    </div>
  )
})

ServiceCard.displayName = 'ServiceCard'

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  // Estado inicial vacío para evitar CLS y errores de hidratación
  if (!isMounted) return <section className="min-h-screen bg-slate-950" />

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-slate-950 isolate">
      {/* Fondo optimizado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08),transparent_50%)] -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-[120rem] mx-auto px-6">
        
        <header className="max-w-5xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 mb-8"
          >
            <Timer className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Oportunidad Enero 2026</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.9]">
            Planes de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic font-medium">alto impacto.</span>
          </h2>
        </header>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Banner de Consultoría */}
        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-indigo-600 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase">¿Visión a medida?</h3>
              <p className="text-indigo-100 font-medium text-sm leading-snug">
                Cotizamos ecosistemas complejos, apps móviles y automatización con tecnología de élite.
              </p>
            </div>
          </div>
          
          <button 
            aria-label="Solicitar consultoría técnica personalizada"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full lg:w-auto px-10 py-5 bg-white text-indigo-600 font-black rounded-xl hover:scale-105 transition-transform active:scale-95 uppercase tracking-widest text-sm shadow-xl"
          >
            Consultoría Técnica
          </button>
        </div>
      </div>
    </section>
  )
}