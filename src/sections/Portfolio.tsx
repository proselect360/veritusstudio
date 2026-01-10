'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

// 1. Definimos la estructura de los datos que vienen de Sanity
interface Proyecto {
  _id: string;
  nombre: string;
  categoria: string;
  imageUrl: string;
  url: string;
}

// 2. Pasamos 'proyectos' como propiedad al componente
export default function Portfolio({ proyectos }: { proyectos: Proyecto[] }) {
  
  // Si Sanity no devuelve nada, evitamos que la sección quede vacía o de error
  if (!proyectos || proyectos.length === 0) return null;

  return (
    <section id="portfolio" className="py-24 lg:py-48 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera con Estilo Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-indigo-500" />
              <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] italic">
                Selección de Proyectos 2026
              </span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
              Casos que están <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 italic font-serif font-normal">
                escalando negocios.
              </span>
            </h2>
          </div>
          
          <p className="text-slate-500 text-xl font-medium max-w-sm border-l border-slate-800 pl-8 py-2 leading-relaxed italic">
            No solo diseñamos interfaces; construimos activos digitales que generan rentabilidad 24/7.
          </p>
        </div>

        {/* 3. Mapeamos los proyectos que vienen de Sanity */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
          {proyectos.map((project, index) => (
            <motion.div 
              key={project._id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-40' : ''}`}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[3.5rem] bg-slate-900 border border-slate-800 transition-all duration-700 group-hover:border-indigo-500/50 group-hover:shadow-[0_40px_100px_-20px_rgba(79,70,229,0.2)]">
                <Image
                  src={project.imageUrl || "/placeholder.webp"}
                  alt={project.nombre}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[4px] flex items-center justify-center">
                   <Link 
                    href={project.url} 
                    target="_blank"
                    className="flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black shadow-2xl scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 hover:bg-indigo-500 hover:text-white"
                  >
                    Explorar Proyecto <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-12 px-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-4xl font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                      {project.nombre}
                    </h3>
                    <p className="text-slate-500 font-bold mt-3 italic flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-500/50" /> {project.categoria}
                    </p>
                  </div>

                  <Link 
                    href={project.url} 
                    target="_blank"
                    className="mt-2 p-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-white hover:text-slate-950 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
                  >
                    <ArrowUpRight className="w-7 h-7" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="mt-48 text-center">
            <Link 
              href="https://wa.me/573125858242"
              className="inline-flex flex-col items-center group"
            >
                <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-xs mb-6 group-hover:text-indigo-400 transition-colors">¿Listo para ser el siguiente?</span>
                <div className="text-5xl md:text-7xl font-black text-white border-b-4 border-slate-900 group-hover:border-indigo-500 transition-all pb-2">
                    Empezar mi proyecto
                </div>
            </Link>
        </div>
      </div>
    </section>
  )
}