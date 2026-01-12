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
    <section 
      id="projects" 
      className="relative py-24 lg:py-40 bg-transparent overflow-hidden isolate transition-colors duration-500 scroll-mt-20"
    >
      {/* Glow ambiental sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Cabecera Editorial Ajustada */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-indigo-600 dark:bg-indigo-500/50" />
              <span className="text-indigo-700 dark:text-indigo-400 font-black uppercase tracking-[0.4em] text-[9px] italic">
                Selected Works 2026
              </span>
            </motion.div>
            
            {/* Título más pequeño: de 10rem a 7xl/9xl */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.9]">
              Casos que <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 dark:from-slate-100 dark:via-slate-400 dark:to-slate-600 italic font-medium font-serif">
                elevan marcas.
              </span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-xs border-l-2 border-indigo-600 dark:border-indigo-500/30 pl-6 py-1 leading-snug italic"
          >
            Construimos activos digitales de alto rendimiento con enfoque en conversión.
          </motion.p>
        </div>

        {/* Grid de Proyectos con espaciado optimizado */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-y-32">
          {proyectos.map((project, index) => (
            <motion.div 
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Contenedor de Imagen con Bordes Suavizados */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 transition-all duration-700 group-hover:border-indigo-500/50 group-hover:shadow-2xl">
                <Image
                  src={project.imageUrl || "/placeholder.webp"}
                  alt={project.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 opacity-95 dark:opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay Glassmorphism */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                   <Link 
                    href={project.url || "#"} 
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                  >
                    Explorar <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Info del Proyecto Ajustada */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-3 py-1 rounded-lg">
                    {project.categoria?.titulo || "Digital Project"}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {project.nombre}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-500 font-medium mt-1 italic flex items-center gap-2 text-xs">
                      <Sparkles className="w-3 h-3 text-indigo-600/40" /> Veritus Studio Quality
                    </p>
                  </div>

                  <Link 
                    href={project.url || "#"} 
                    target="_blank"
                    className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 shadow-sm"
                  >
                    <ArrowUpRight className="w-5 h-5" />
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