'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Service {
  name: string
  description: string
  price: string
  ideal: string
  icon: string
  gradient: string
  features: string[]
}

const services: Service[] = [
  {
    name: "Landing Page Estratégica",
    description: "Página única de alto impacto diseñada para captar leads y vender 24/7 con mensajes claros y llamadas a la acción potentes.",
    price: "Desde $1.800.000 COP",
    ideal: "Lanzamientos, servicios profesionales, captación de leads",
    icon: "🚀",
    gradient: "from-orange-500 via-pink-500 to-rose-500",
    features: ["Diseño personalizado", "Optimizada para móviles", "Formulario + WhatsApp", "Entrega en 10-14 días"]
  },
  {
    name: "Web Corporativa Premium",
    description: "Sitio web completo con Next.js, blog integrado, SEO avanzado y diseño que transmite autoridad y confianza.",
    price: "Desde $3.800.000 COP",
    ideal: "Pymes establecidas, clínicas, abogados, consultoras",
    icon: "🏢",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    features: ["Múltiples páginas", "Blog profesional", "SEO técnico incluido", "Integración Analytics"]
  },
  {
    name: "Tienda Online Profesional",
    description: "E-commerce rápido y seguro con pagos locales (PayU, Epayco, Wompi), carrito inteligente y gestión sencilla.",
    price: "Desde $5.500.000 COP",
    ideal: "Marcas físicas que venden online, boutiques, productos propios",
    icon: "🛒",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    features: ["Hasta 50 productos", "Pasarela de pago", "Envíos Colombia", "Panel de administración"]
  }
]

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <ServicesSkeleton />
  }

  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="relative py-24 lg:py-32 overflow-hidden isolate"
    >
      {/* Fondo premium (sin cambios) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-indigo-50/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-600/8 via-transparent to-transparent" style={{ backgroundPosition: '50% 40%' }} aria-hidden="true" />

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-purple-500/15 to-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[550px] md:h-[550px] bg-gradient-to-tl from-rose-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-3s" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[480px] md:h-[480px] bg-gradient-to-r from-cyan-500/12 to-emerald-500/10 rounded-full blur-3xl animate-blob animation-delay-6s" />
      </div>

      <div className="absolute inset-0 opacity-4 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="text-center mb-20 lg:mb-28">
          <h2 
            id="services-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent leading-tight drop-shadow-md"
          >
            Servicios que generan resultados reales
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Sitios web premium con <strong className="text-indigo-900 font-bold">Next.js</strong> diseñados para pymes y profesionales en Colombia que quieren crecer de verdad.
          </p>
        </header>

        {/* Servicios: Grid en desktop/tablet, Carrusel en móvil */}
        <div className="relative">
          {/* Desktop y tablet: Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" role="list">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>

          {/* Móvil: Carrusel horizontal */}
          <div className="md:hidden">
            <div 
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
              role="list"
            >
              {services.map((service) => (
                <div key={service.name} className="flex-shrink-0 w-[88vw] max-w-md snap-center" role="listitem">
                  <ServiceCard service={service} isMobile />
                </div>
              ))}
            </div>

            {/* Indicadores sutiles en móvil */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-slate-300" />
              ))}
            </div>
          </div>
        </div>

        {/* Nota final */}
        <div className="mt-24 text-center">
          <p className="text-base md:text-lg text-slate-700 font-medium max-w-5xl mx-auto leading-relaxed">
            Todos los precios incluyen dominio .com.co por 1 año, hosting premium, SSL y soporte técnico inicial. 
            <br className="hidden md:block" />
            <span className="text-indigo-900 font-bold">Propuesta personalizada gratuita en menos de 24 horas.</span>
          </p>
        </div>
      </div>

      {/* Animaciones de blobs */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        .animate-blob {
          animation: blob 22s infinite ease-in-out;
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-3s { animation-delay: 3s; }
        .animation-delay-6s { animation-delay: 6s; }
      `}</style>
    </section>
  )
}

// Componente reutilizable para cada servicio
function ServiceCard({ service, isMobile = false }: { service: Service; isMobile?: boolean }) {
  return (
    <article
      className={`
        group relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border border-white/60 hover:border-indigo-900/30 transition-all duration-700 ring-1 ring-white/30 h-full flex flex-col
        ${isMobile ? '' : 'hover:-translate-y-6'}
      `}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] pointer-events-none"
        aria-hidden="true"
      />

      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-2xl ring-8 ring-white/70 bg-gradient-to-br ${service.gradient} text-white transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 mb-8`}>
          {service.icon}
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 group-hover:text-indigo-900 transition-colors duration-500 leading-tight">
          {service.name}
        </h3>

        <p className="text-base md:text-lg text-slate-700 mb-8 leading-relaxed flex-grow">
          {service.description}
        </p>

        <div className="mb-10 p-6 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-pink-900/5 rounded-2xl border border-indigo-900/10 backdrop-blur-sm">
          <p className="text-3xl font-black text-indigo-900">{service.price}</p>
          <p className="text-sm md:text-base text-slate-600 mt-3 font-medium">{service.ideal}</p>
        </div>

        <ul className="space-y-4 mb-12 flex-grow" aria-label="Características incluidas">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-4 text-slate-700">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                ✓
              </div>
              <span className="text-base font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="mt-auto block text-center py-5 px-8 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-800 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-900/50 hover:-translate-y-1 hover:scale-105 transition-all duration-500 ring-2 ring-indigo-700/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/60"
          aria-label={`Cotizar plan ${service.name}`}
        >
          Cotizar este plan →
        </Link>
      </div>
    </article>
  )
}

function ServicesSkeleton() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 lg:mb-28">
          <div className="h-16 bg-slate-200 rounded-3xl max-w-3xl mx-auto animate-pulse" />
          <div className="mt-6 h-8 bg-slate-200 rounded-2xl max-w-2xl mx-auto animate-pulse" />
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[88vw] max-w-md md:w-auto h-full bg-white/80 rounded-3xl shadow-xl border border-slate-200/50 p-8 md:p-10 space-y-8 animate-pulse"
            >
              <div className="w-20 h-20 bg-slate-200 rounded-3xl" />
              <div className="space-y-4">
                <div className="h-10 bg-slate-200 rounded-2xl w-4/5" />
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded-lg" />
                  <div className="h-4 bg-slate-200 rounded-lg w-11/12" />
                  <div className="h-4 bg-slate-200 rounded-lg w-10/12" />
                </div>
                <div className="h-24 bg-slate-200 rounded-2xl" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-6 bg-slate-200 rounded-lg w-full" />
                  ))}
                </div>
                <div className="h-14 bg-slate-200 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}