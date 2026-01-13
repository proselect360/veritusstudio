'use client'

import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import { Zap, Search, Globe, Code2, ArrowUpRight, Cpu, Layout } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white pt-32 pb-20 overflow-hidden">
        {/* Decoración de fondo premium */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-24 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">
              Capabilities 2024
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
              Ingeniería <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-indigo-500 italic">
                sin límites.
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
              Desarrollamos infraestructura digital donde el diseño de vanguardia se encuentra con la optimización de nivel industrial.
            </p>
          </motion.div>
        </section>

        {/* Listado Detallado de Servicios */}
        <section className="max-w-7xl mx-auto px-6 grid gap-6 relative z-10">
          <ServiceDetail 
            number="01"
            icon={<Cpu className="w-6 h-6" />}
            title="Sistemas con Next.js & IA"
            tag="Performance"
            description="No creamos simples webs. Desarrollamos ecosistemas digitales basados en arquitecturas ISR que procesan datos en tiempo real. Velocidad de respuesta instantánea y escalabilidad atómica."
          />
          <ServiceDetail 
            number="02"
            icon={<Search className="w-6 h-6" />}
            title="SEO de Grado de Ingeniería"
            tag="Visibilidad"
            description="Dominamos los Core Web Vitals. Implementamos estructuras de datos JSON-LD avanzadas y optimización de renderizado para asegurar que Google priorice tu negocio frente a la competencia."
          />
          <ServiceDetail 
            number="03"
            icon={<Layout className="w-6 h-6" />}
            title="E-commerce Architecture"
            tag="Conversión"
            description="Plataformas de comercio electrónico diseñadas para el tráfico masivo. Flujos de checkout en un clic y arquitecturas Headless que eliminan cualquier fricción en la compra."
          />
        </section>

        {/* CTA Premium */}
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic">¿Listo para elevar el estándar?</h2>
              <Link href="/#contact" className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-indigo-500 hover:text-white transition-all">
                Iniciar Proyecto <Zap className="w-4 h-4 fill-current" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ServiceDetail({ number, icon, title, description, tag }: { number: string, icon: any, title: string, description: string, tag: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-700 hover:border-white/10"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Lado Izquierdo: Número e Icono */}
        <div className="flex flex-row md:flex-col justify-between items-start gap-6">
          <span className="text-5xl font-black text-white/10 group-hover:text-indigo-500/20 transition-colors duration-700">
            {number}
          </span>
          <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
            {icon}
          </div>
        </div>

        {/* Lado Derecho: Contenido */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight flex items-center gap-4">
            {title}
            <ArrowUpRight className="w-6 h-6 text-white/0 group-hover:text-white/40 -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}