'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, Building2, ShoppingCart, CheckCircle2, ArrowRight } from 'lucide-react'

interface Service {
  name: string
  description: string
  price: string
  ideal: string
  icon: React.ReactNode
  gradient: string
  features: string[]
  recommended?: boolean
}

const services: Service[] = [
  {
    name: "Landing Page Estratégica",
    description: "Terminal de ventas de alto impacto diseñada para captar leads y convertir tráfico en ingresos reales con mensajes potentes.",
    price: "1.8M",
    ideal: "Lanzamientos y Servicios",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-orange-500 to-rose-500",
    features: ["Copywriting persuasivo", "Optimización de velocidad", "Integración WhatsApp API", "Entrega en 10 días"]
  },
  {
    name: "Web Corporativa Pro",
    description: "Ecosistema digital completo con Next.js, SEO avanzado y arquitectura de autoridad para empresas que escalan.",
    price: "3.8M",
    ideal: "Pymes y Consultoras",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-blue-600 to-indigo-600",
    features: ["Múltiples secciones", "Blog autogestionable", "SEO Técnico Local", "Analytics Avanzado"],
    recommended: true
  },
  {
    name: "Tienda Online Elite",
    description: "E-commerce robusto con pasarelas de pago colombianas, gestión de inventario y experiencia de usuario fluida.",
    price: "5.5M",
    ideal: "Boutiques y Marcas Propias",
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-600",
    features: ["Pagos PSE/Crédito", "Gestión de pedidos", "Logística integrada", "Panel administrativo"]
  }
]

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <ServicesSkeleton />

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#fafafa] overflow-hidden isolate">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px] animate-blob animation-delay-3s" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <header className="max-w-3xl mb-20">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block italic">
            Solutions Architecture
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.95]">
            Servicios que <br />
            <span className="text-slate-400 italic font-serif font-normal">generan capital.</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center font-black italic">VS</div>
            <p className="text-slate-400 text-sm max-w-md">
              Todos los planes incluyen <span className="text-white font-bold">Hosting Premium, Dominio .com.co</span> y soporte técnico especializado por 30 días.
            </p>
          </div>
          <Link href="https://wa.me/573125858242" className="px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300">
            Solicitar Propuesta Gratis
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`
      relative group p-10 rounded-[3rem] transition-all duration-500 flex flex-col h-full
      ${service.recommended 
        ? 'bg-white border-2 border-indigo-600 shadow-2xl shadow-indigo-200 scale-105 z-10' 
        : 'bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2'}
    `}>
      {service.recommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
          Más Popular
        </span>
      )}

      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
        {service.icon}
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.name}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{service.description}</p>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-bold text-slate-400 uppercase">Desde</span>
          <span className="text-4xl font-black text-slate-900">${service.price}</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">COP</span>
        </div>
        <p className="text-[11px] text-indigo-600 font-black uppercase tracking-wider mt-1">{service.ideal}</p>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {service.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            {feat}
          </li>
        ))}
      </ul>

      <Link 
        href="https://wa.me/573125858242" 
        className={`
          w-full py-4 rounded-2xl font-black text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn
          ${service.recommended 
            ? 'bg-indigo-600 text-white hover:bg-slate-900 shadow-lg shadow-indigo-200' 
            : 'bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white'}
        `}
      >
        Cotizar Proyecto
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

function ServicesSkeleton() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-[600px] bg-white rounded-[3rem] animate-pulse border border-slate-200" />
        ))}
      </div>
    </section>
  )
}