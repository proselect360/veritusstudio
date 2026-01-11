'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProyectoSanity {
  _id: string
  nombre: string
  url: string
  imageUrl: string
  categoria?: {
    titulo: string
  }
}

export default function Portfolio({ proyectos }: { proyectos: ProyectoSanity[] }) {
  if (!proyectos || proyectos.length === 0) return null;

  return (
    <section id="portfolio" className="relative py-32 lg:py-56 bg-transparent overflow-hidden isolate transition-colors duration-500">
      
      {/* Glow ambiental corregido para modo claro */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-[140px] -z-10 animate-pulse" />

      <div className="relative z-10 max-w-[100rem] mx-auto px-6 lg:px-12">
        
        {/* Cabecera Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-16">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-16 bg-indigo-600 dark:bg-indigo-500/50" />
              <span className="text-indigo-700 dark:text-indigo-400 font-black uppercase tracking-[0.5em] text-[10px] italic">
                Selected Works 2026
              </span>
            </motion.div>
            
            {/* Título Principal: Slate-950 en claro / White en oscuro */}
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-950 dark:text-white tracking-tighter leading-[0.85]">
              Casos que <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-600 to-slate-400 dark:from-slate-200 dark:via-slate-400 dark:to-slate-600 italic font-medium font-serif">
                elevan marcas.
              </span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl font-medium max-w-sm border-l-2 border-indigo-600 dark:border-indigo-500/30 pl-8 py-2 leading-tight italic"
          >
            No diseñamos sitios; construimos activos digitales de alto rendimiento.
          </motion.p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-40">
          {proyectos.map((project, index) => (
            <motion.div 
              key={project._id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
            >
              {/* Contenedor de Imagen */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 transition-all duration-700 group-hover:border-indigo-500 group-hover:shadow-[0_40px_100px_-20px_rgba(79,70,229,0.2)] dark:group-hover:shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)]">
                <Image
                  src={project.imageUrl || "/placeholder.webp"}
                  alt={project.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90 dark:opacity-70 group-hover:opacity-100"
                />
                
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center">
                   <Link 
                    href={project.url || "#"} 
                    target="_blank"
                    className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl scale-90 group-hover:scale-100 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                  >
                    Ver Proyecto <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Info del Proyecto */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-4 py-1.5 rounded-full">
                    {project.categoria?.titulo || "Digital Asset"}
                  </span>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-500 uppercase">
                      {project.nombre}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-500 font-bold mt-2 italic flex items-center gap-2 text-sm">
                      <Sparkles className="w-4 h-4 text-indigo-600/40" /> Crafted by Veritus Studio
                    </p>
                  </div>

                  <Link 
                    href={project.url || "#"} 
                    target="_blank"
                    className="p-5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group-hover:rotate-12 shadow-sm"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}