'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "E-commerce de Belleza",
    category: "Tienda Online / Next.js",
    image: "/proyecto1.webp", // Sube tus imágenes a /public
    link: "https://sebumherenciapura.pages.dev/",
    tags: ["Vercel", "Tailwind", "Stripe"]
  },
  {
    title: "Centro Vacacional",
    category: "Real Estate / SEO Local",
    image: "/proyecto2.webp",
    link: "https://hotelycentrovacacionallaprimavera.vercel.app/",
    tags: ["SEO", "Next.js", "WhatsApp Pro"]
  }
]


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm block mb-4">
              Casos de Éxito
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">
              Proyectos que están <br /> 
              <span className="text-slate-400 italic font-serif font-normal">dominando el mercado</span>
            </h2>
          </div>
          
          <p className="text-slate-500 font-medium max-w-sm">
            Diseñamos interfaces que no solo se ven bien, sino que están optimizadas para convertir visitas en ventas reales.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Imagen con Efecto Zoom */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="bg-white text-slate-950 p-6 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl"
                  >
                    <ExternalLink className="w-8 h-8" />
                  </Link>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <div className="flex gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 font-medium mt-1">{project.category}</p>
                </div>

                <Link 
                  href={project.link} 
                  target="_blank"
                  className="w-12 h-12 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}