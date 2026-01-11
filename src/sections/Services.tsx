'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Rocket, Building2, ShoppingCart, CheckCircle2, 
  ArrowRight, UserCircle, Sparkles, Timer 
} from 'lucide-react'


interface Service {
  name: string; description: string; price: string; oldPrice: string;
  ideal: string; icon: React.ReactNode; gradient: string;
  features: string[]; recommended?: boolean; tag?: string;
}



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
    recommended: true, tag: "Oferta Año Nuevo"
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
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])
  if (!isMounted) return null

  return (
    <section id="services" className="relative py-32 bg-transparent overflow-hidden isolate">
      
      {/* Luz de fondo dinámica */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.08),transparent_70%)] -z-10" />

      <div className="relative z-10 max-w-[110rem] mx-auto px-6">
        
        <header className="max-w-5xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 mb-8 backdrop-blur-md"
          >
            <Timer className="w-4 h-4 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Oportunidad de Año Nuevo · 2026</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-[calc(-0.05em)] leading-[0.85]">
            Planes de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic font-medium">alto impacto.</span>
          </h2>
        </header>

        {/* Carrusel Pro */}
        <div className="relative -mx-6">
          <div className="flex overflow-hidden select-none mask-fade-edges py-12">
            <motion.div 
              className="flex gap-8 pr-8"
              animate={isPaused ? {} : { x: ["0%", "-50%"] }}
              transition={{ x: { duration: 40, repeat: Infinity, ease: "linear" } }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...services, ...services].map((service, i) => (
                <div key={i} className="w-[350px] md:w-[420px] flex-shrink-0">
                  <ServiceCard service={service} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Banner de Cierre - Diseño "Liquid" */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="mt-24 p-12 md:p-16 rounded-[4rem] bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-3xl border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden"
        >
          <div className="flex items-center gap-10 relative z-10">
            <div className="w-20 h-20 rounded-[2.5rem] bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(79,70,229,0.6)] group-hover:rotate-[360deg] transition-transform duration-1000">
              <Sparkles className="w-10 h-10" />
            </div>
            <div>
               <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-3">¿Buscas el siguiente nivel?</h3>
               <p className="text-slate-400 font-medium text-lg max-w-xl leading-snug">Cotizamos desarrollos a medida, integraciones complejas y automatización avanzada.</p>
            </div>
          </div>
          
          <Link href="https://wa.me/573125858242" className="relative z-10 w-full md:w-auto px-12 py-7 bg-white text-black font-black rounded-[2rem] hover:bg-indigo-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-4 text-lg shadow-2xl">
            CONSULTA TÉCNICA
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div 
      whileHover={{ y: -15 }}
      className={`
        relative h-full p-10 md:p-12 rounded-[3.5rem] transition-all duration-700 flex flex-col isolate
        ${service.recommended 
          ? 'bg-slate-900/80 border-[1.5px] border-indigo-500/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10' 
          : 'bg-white/[0.03] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.07] shadow-2xl'}
      `}
    >
      {service.recommended && (
        <div className="absolute -top-5 left-12 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2.5 rounded-full shadow-[0_10px_20px_rgba(79,70,229,0.4)] z-20">
          {service.tag}
        </div>
      )}

      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-10 shadow-2xl transform group-hover:scale-110 transition-transform`}>
        {service.icon}
      </div>

      <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase leading-none">{service.name}</h3>
      <p className="text-slate-400 text-base font-medium leading-relaxed mb-12">{service.description}</p>

      <div className="mb-12 mt-auto pt-10 border-t border-white/10">
        <span className="text-xs font-bold text-slate-500 line-through mb-2 block tracking-widest uppercase">Precio Regular: ${service.oldPrice}</span>
        <div className="flex items-baseline gap-3">
          <span className="text-6xl font-black text-white tracking-tighter">${service.price}</span>
          <span className="text-xs font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">Año Nuevo</span>
        </div>
      </div>

      <ul className="space-y-5 mb-14">
        {service.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-4 text-[15px] font-semibold text-slate-200">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} p-[1px]`}>
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <span className="tracking-tight">{feat}</span>
          </li>
        ))}
      </ul>

      
        <button
          type="button"
          onClick={() => {
            document.dispatchEvent(new CustomEvent('open-whatsapp-bot'))
          }}
          className="MISMAS CLASES"
        >
          CONSULTA TÉCNICA
        </button>

   
    </motion.div>
  )
}