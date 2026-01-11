'use client'

import { useState, useEffect } from 'react'
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

// --- Configuración de Servicios ---
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

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])
  if (!isMounted) return null

  return (
    <section id="services" className="relative py-24 md:py-32 bg-transparent overflow-hidden isolate">
      
      {/* Luz de fondo ambiental */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.06),transparent_70%)] -z-10" />

      <div className="relative z-10 max-w-[120rem] mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <header className="max-w-5xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 mb-8 backdrop-blur-md"
          >
            <Timer className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Oportunidad Año Nuevo · 2026</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white tracking-[calc(-0.05em)] leading-[0.9] md:leading-[0.85]">
            Planes de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic font-medium">alto impacto.</span>
          </h2>
        </header>

        {/* Contenedor Híbrido: Carrusel Móvil / Grid Desktop */}
        <div className="relative -mx-6 md:mx-0">
          <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-[85vw] md:w-full flex-shrink-0 snap-center md:snap-align-none"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banner Slim Liquid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl border border-white/10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 group relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-indigo-600/5 blur-[80px] rounded-full" />
            <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-500/5 blur-[80px] rounded-full" />
          </div>

          <div className="flex items-center gap-6 md:gap-8 relative z-10 text-center md:text-left flex-col md:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] group-hover:rotate-12 transition-transform duration-500">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase">
                ¿Tu visión <span className="text-indigo-400 italic font-serif">a medida?</span>
              </h3>
              <p className="text-slate-400 font-medium text-sm leading-snug">
                Cotizamos ecosistemas complejos, apps móviles y automatización avanzada con tecnología de élite.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-10 w-full lg:w-auto px-10 py-5 bg-white text-black font-black rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-sm group/btn overflow-hidden active:scale-95"
          >
            <span className="absolute inset-0 bg-indigo-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 -z-10" />
            <span className="relative z-10 uppercase tracking-widest">Consultoría Técnica</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`
      relative h-full p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500 flex flex-col isolate group/card
      ${service.recommended 
        ? 'bg-slate-900/90 border-2 border-indigo-500/40 shadow-2xl ring-1 ring-white/10' 
        : 'bg-white/[0.03] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.06]'}
    `}>
      {service.recommended && (
        <div className="absolute -top-4 left-8 bg-indigo-500 text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full z-20 shadow-lg">
          {service.tag}
        </div>
      )}

      {/* Icono */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-xl group-hover/card:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>

      {/* Info */}
      <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter uppercase">{service.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{service.description}</p>

      {/* Precios */}
      <div className="mb-8 mt-auto pt-8 border-t border-white/10">
        <span className="text-[10px] font-bold text-slate-500 line-through mb-1 block tracking-widest uppercase">Base: ${service.oldPrice}</span>
        <div className="flex items-center gap-3">
          <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">${service.price}</span>
          <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">Año Nuevo</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {service.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
            <span className="tracking-tight">{feat}</span>
          </li>
        ))}
      </ul>

      {/* Botón Acción */}
      <button
        type="button"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="group relative w-full py-5 bg-transparent border-2 border-indigo-500/30 text-indigo-400 text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 overflow-hidden active:scale-95"
      >
        <span className="absolute inset-0 bg-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10" />
        <span className="relative z-10">Me interesa</span>
      </button>
    </div>
  )
}