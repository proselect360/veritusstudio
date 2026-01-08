'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, Building2, ShoppingCart, CheckCircle2, ArrowRight, UserCircle, Cpu } from 'lucide-react'

interface Service {
  name: string
  description: string
  price: string
  ideal: string
  icon: React.ReactNode
  gradient: string
  features: string[]
  recommended?: boolean
  tag?: string
}

const services: Service[] = [
  {
    name: "Marca Personal",
    description: "Ideal para profesionales y freelancers que necesitan autoridad inmediata y un hub de enlaces de alto impacto.",
    price: "1.2M",
    ideal: "Expertos y Freelancers",
    icon: <UserCircle className="w-8 h-8" />,
    gradient: "from-slate-600 to-slate-800",
    features: ["Link-in-bio personalizado", "Blog de pensamiento", "Agendamiento automático", "Portfolio de proyectos"]
  },
  {
    name: "Landing Page Pro",
    description: "Terminal de ventas diseñada para campañas de Meta/Google Ads con una tasa de conversión superior.",
    price: "1.9M",
    ideal: "Infoproductos y Servicios",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-orange-500 to-rose-500",
    features: ["Copywriting persuasivo", "A/B Testing Ready", "Integración CRM/Mailchimp", "Velocidad de carga < 1s"]
  },
  {
    name: "Web Corporativa",
    description: "Arquitectura de autoridad con SEO local avanzado para empresas que buscan liderar el mercado nacional.",
    price: "3.8M",
    ideal: "Pymes y Consultoras",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-600",
    features: ["Hasta 8 secciones", "SEO Técnico Colombia", "Blog Autogestionable", "Soporte 24/7 Priority"],
    recommended: true,
    tag: "Más Rentable"
  },
  {
    name: "E-commerce Elite",
    description: "Tienda virtual escalable con experiencia de compra premium y automatización de procesos logísticos.",
    price: "5.8M",
    ideal: "Retail y Marcas Propias",
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: "from-emerald-400 to-teal-500",
    features: ["Pagos PSE/Wompi/Epayco", "Cálculo de envíos", "Gestión de Stock", "Recuperación de Carrito"]
  },
  {
    name: "SaaS & Custom App",
    description: "Desarrollo a medida con lógica de negocio compleja, bases de datos y paneles de usuario avanzados.",
    price: "9.5M",
    ideal: "Startups y Automatización",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-600",
    features: ["Autenticación de usuarios", "Panel de administración", "API personalizada", "Escalabilidad en la nube"]
  }
]

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <div className="py-32 bg-slate-950 min-h-screen" />

  return (
    <section id="services" className="relative py-24 lg:py-40 bg-slate-950 overflow-hidden">
      {/* Glow ambiental de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-[95rem] mx-auto px-6 lg:px-12">
        <header className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block italic">
            Pricing Strategy 2026
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
            Soluciones que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 italic font-serif font-normal">dominan el mercado.</span>
          </h2>
          <p className="mt-8 text-slate-500 text-lg lg:hidden italic animate-pulse">
            ← Desliza para explorar los planes →
          </p>
        </header>

        {/* Carrusel Táctil / Grid */}
        <div className="
          flex flex-nowrap gap-6 overflow-x-auto pb-12 lg:pb-0 
          snap-x snap-mandatory no-scrollbar
          lg:grid lg:grid-cols-5 lg:overflow-visible
        ">
          {services.map((service, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center flex items-stretch">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Banner Inferior */}
        <div className="mt-16 lg:mt-24 p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white text-slate-950 flex-shrink-0 flex items-center justify-center font-black italic shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              VS
            </div>
            <div>
               <p className="text-white font-black text-2xl tracking-tight leading-tight">¿Proyecto a gran escala?</p>
               <p className="text-slate-400 font-medium mt-1">Hosting, Dominio .co y SSL incluidos el primer año.</p>
            </div>
          </div>
          
          <Link href="https://wa.me/573125858242" className="relative z-10 group w-full md:w-auto px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20">
            Personalizar Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`
      relative group p-8 rounded-[3rem] transition-all duration-500 flex flex-col w-full
      ${service.recommended 
        ? 'bg-slate-900 border-2 border-indigo-500 shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] scale-[0.98] lg:scale-105 z-20' 
        : 'bg-slate-900/40 border border-slate-800 shadow-sm hover:border-slate-700'}
    `}>
      {service.recommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg z-30">
          {service.tag}
        </span>
      )}

      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>

      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.name}</h3>
      
      <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
        {service.description}
      </p>

      <div className="mb-8 mt-auto pt-6 border-t border-slate-800">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-white">${service.price}</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">COP + IVA</span>
        </div>
        <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mt-2">{service.ideal}</p>
      </div>

      <ul className="space-y-4 mb-10">
        {service.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-[13px] font-bold text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="flex-1 leading-tight">{feat}</span>
          </li>
        ))}
      </ul>

      <Link 
        href="https://wa.me/573125858242" 
        className={`w-full py-5 rounded-2xl font-black text-sm text-center transition-all duration-300 flex items-center justify-center gap-2
          ${service.recommended 
            ? 'bg-white text-slate-950 hover:bg-indigo-500 hover:text-white' 
            : 'bg-slate-800 text-white hover:bg-indigo-600'}`}
      >
        Cotizar Proyecto
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}