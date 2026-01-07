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
    description: "Ideal para profesionales, conferencistas o freelancers que necesitan autoridad inmediata y un hub de enlaces.",
    price: "1.2M",
    ideal: "Expertos y Freelancers",
    icon: <UserCircle className="w-8 h-8" />,
    gradient: "from-slate-700 to-slate-900",
    features: ["Link-in-bio personalizado", "Blog de pensamiento", "Agendamiento automático", "Portfolio de proyectos"]
  },
  {
    name: "Landing Page Pro",
    description: "Terminal de ventas de alto impacto diseñada para campañas de Meta/Google Ads con alta tasa de conversión.",
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
    gradient: "from-blue-600 to-indigo-600",
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
    gradient: "from-emerald-500 to-teal-600",
    features: ["Pagos PSE/Wompi/Epayco", "Cálculo de envíos", "Gestión de Stock", "Recuperación de Carrito"]
  },
  {
    name: "SaaS & Custom App",
    description: "Desarrollo a medida con lógica de negocio compleja, bases de datos y paneles de usuario avanzados.",
    price: "9.5M",
    ideal: "Startups y Automatización",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-purple-600 to-pink-600",
    features: ["Autenticación de usuarios", "Panel de administración", "API personalizada", "Escalabilidad en la nube"]
  }
]

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <ServicesSkeleton />

  return (
    <section id="services" className="relative py-16 lg:py-32 bg-[#fafafa] overflow-hidden">
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
        <header className="max-w-3xl mb-12 lg:mb-20">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block italic">
            Pricing Strategy 2026
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.95]">
            Soluciones que <br />
            <span className="text-slate-400 italic font-serif font-normal text-3xl md:text-6xl">dominan el mercado.</span>
          </h2>
          {/* Indicador visual para móvil */}
          <p className="mt-4 text-slate-500 text-sm font-medium lg:hidden italic animate-pulse">
            ← Desliza para explorar los planes →
          </p>
        </header>

        {/* Contenedor Carrusel Táctil en Móvil */}
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

        <div className="mt-12 lg:mt-20 p-8 rounded-[2.5rem] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-3xl">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center font-black italic shadow-lg">VS</div>
            <div>
               <p className="text-white font-bold text-lg leading-tight">¿Necesitas algo específico?</p>
               <p className="text-slate-400 text-sm">Hosting, Dominio .co y SSL incluidos el primer año.</p>
            </div>
          </div>
          <Link href="https://wa.me/573125858242" className="group w-full md:w-auto px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
            Personalizar Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`
      relative group p-8 rounded-[2.5rem] transition-all duration-500 flex flex-col w-full
      ${service.recommended 
        ? 'bg-white border-2 border-indigo-600 shadow-2xl scale-[0.98] lg:scale-105 z-20' 
        : 'bg-white border border-slate-100 shadow-sm'}
    `}>
      {service.recommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg z-30 whitespace-nowrap">
          {service.tag}
        </span>
      )}

      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6 shadow-md`}>
        {service.icon}
      </div>

      <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{service.name}</h3>
      
      {/* Texto de descripción corregido para que NO se corte */}
      <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="mb-6 mt-auto border-t border-slate-50 pt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-slate-900">${service.price}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">COP</span>
        </div>
        <p className="text-[10px] text-indigo-600 font-black uppercase tracking-wider mt-1">{service.ideal}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {service.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2 text-[12px] font-bold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <span className="flex-1">{feat}</span>
          </li>
        ))}
      </ul>

      <Link 
        href="https://wa.me/573125858242" 
        className={`w-full py-4 rounded-xl font-black text-sm text-center transition-all duration-300 flex items-center justify-center gap-2
          ${service.recommended 
            ? 'bg-indigo-600 text-white shadow-lg' 
            : 'bg-slate-50 text-slate-900 hover:bg-slate-950 hover:text-white'}`}
      >
        Cotizar Proyecto
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

function ServicesSkeleton() {
  return <div className="py-24 bg-slate-50 min-h-screen" />
}