'use client'

import { memo } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { 
  Rocket, Building2, ShoppingCart, CheckCircle2, 
  UserCircle 
} from 'lucide-react'

// --- Tipado Profesional ---
interface Service {
  name: string
  description: string
  minPrice: string
  maxPrice: string
  oldPrice: string
  ideal: string
  icon: React.ReactNode
  gradient: string
  features: string[]
  recommended?: boolean
  tag?: string
}

const services: Service[] = [
  {
    name: "Página Profesional",
    description: "Presencia digital ágil, ideal para empezar con pie derecho.",
    minPrice: "550.000",
    maxPrice: "900.000",
    oldPrice: "1.200.000",
    ideal: "Freelancers y marcas personales",
    icon: <UserCircle className="w-7 h-7" />,
    gradient: "from-slate-500 to-slate-800",
    features: [
      "One page profesional (Next.js)",
      "2 Correos corporativos (Redirect)",
      "Certificado SSL Gratis",
      "WhatsApp integrado",
      "Alojamiento optimizado (Vercel)"
    ]
  },
  {
    name: "Página de Ventas",
    description: "Landing optimizada para convertir visitas en dinero.",
    minPrice: "1.000.000",
    maxPrice: "1.600.000",
    oldPrice: "2.000.000",
    ideal: "Servicios e infoproductos",
    icon: <Rocket className="w-7 h-7" />,
    gradient: "from-orange-500 to-rose-600",
    features: [
      "Hasta 8 secciones persuasivas",
      "5 Correos corporativos",
      "Pixel de Meta y Google Ads",
      "Carga ultra rápida (< 1s)",
      "Formularios inteligentes"
    ]
  },
  {
    name: "Página Empresarial",
    description: "Sitio institucional escalable para empresas que crecen.",
    minPrice: "2.000.000",
    maxPrice: "3.500.000",
    oldPrice: "4.200.000",
    ideal: "Pymes y empresas",
    icon: <Building2 className="w-7 h-7" />,
    gradient: "from-blue-600 to-indigo-700",
    features: [
      "Hasta 20 secciones internas",
      "10 Correos corporativos",
      "CMS para autogestión",
      "Soporte prioritario 30 días",
      "Seguridad avanzada Cloudflare"
    ],
    recommended: true,
    tag: "Más Elegido"
  },
  {
    name: "Tienda Online",
    description: "E-commerce de alto rendimiento sin comisiones por venta.",
    minPrice: "4.200.000",
    maxPrice: "6.500.000",
    oldPrice: "7.500.000",
    ideal: "Retail y marcas propias",
    icon: <ShoppingCart className="w-7 h-7" />,
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Catálogo dinámico de productos",
      "Pagos PSE / Nequi / Tarjetas",
      "Correos corporativos ilimitados",
      "Panel administrativo fácil",
      "SEO avanzado para productos"
    ]
  }
]

const ServiceCard = memo(({ service }: { service: Service }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={{ y: -8 }}
      className={`
        relative group h-full p-8 rounded-[2.5rem] flex flex-col overflow-hidden transition-all duration-500
        ${service.recommended
          ? 'bg-slate-900/90 border-2 border-indigo-500/50 shadow-[0_0_40px_-15px_rgba(99,102,241,0.5)]'
          : 'bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05]'}
      `}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${service.recommended ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.08)'},
              transparent 80%
            )
          `,
        }}
      />

      {service.recommended && (
        <div className="absolute top-6 right-8">
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-indigo-500 text-white text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest"
          >
            {service.tag}
          </motion.span>
        </div>
      )}

      <div className={`w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>

      <h3 className="text-2xl font-black text-white uppercase mb-3 tracking-tight">
        {service.name}
      </h3>

      <p className="text-slate-400 text-sm mb-8 leading-relaxed">
        {service.description}
      </p>

      {/* --- Precios Ajustados (No Overlap) --- */}
      <div className="mt-auto mb-8 pt-6 border-t border-white/10">
        <span className="text-[10px] text-slate-500 line-through block mb-2">
          Valor Comercial: ${service.oldPrice}
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-1">
            Inversión Estimada
          </span>
          <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
            <span className="text-2xl font-black text-white leading-none">
              ${service.minPrice}
            </span>
            <span className="text-slate-600 text-xl font-light leading-none">—</span>
            <span className="text-2xl font-black text-white leading-none">
              ${service.maxPrice}
            </span>
            <span className="text-slate-500 text-[10px] font-bold pb-0.5">
              COP
            </span>
          </div>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {service.features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-300 group/item">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 group-hover/item:scale-110 transition-transform" />
            <span className="group-hover/item:text-white transition-colors">{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`
          relative overflow-hidden w-full py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all duration-300
          ${service.recommended 
            ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-500/20' 
            : 'border-2 border-indigo-500/30 text-indigo-400 hover:border-indigo-500 hover:text-white'}
        `}
      >
        <span className="relative z-10">Cotizar ahora</span>
        {service.recommended && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        )}
      </button>
    </motion.div>
  )
})

ServiceCard.displayName = 'ServiceCard'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[120rem] mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase mb-6 tracking-tighter">
              Nuestros <span className="text-indigo-500">Servicios</span>
            </h2>
            <div className="h-1.5 w-24 bg-indigo-500 mx-auto mb-8 rounded-full" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Diseño de vanguardia y tecnología Headless para marcas que no se conforman con lo común.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.1,
                ease: [0.21, 1.11, 0.81, 0.99] 
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}