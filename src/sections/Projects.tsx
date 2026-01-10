import { sanityClient } from '@/sanity/lib/client.client'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'

export default async function Projects() {
  // 1. Traemos los proyectos desde Sanity
  const proyectos = await sanityClient.fetch(PROJECTS_QUERY)

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Nuestros Proyectos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proy: any) => (
            <div key={proy._id} className="group overflow-hidden rounded-2xl bg-slate-900 border border-white/10 hover:border-[#25D366]/50 transition-all">
              {/* Imagen Dinámica */}
              <div className="relative h-64 w-full">
                <Image 
                  src={proy.imageUrl} 
                  alt={proy.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <p className="text-[#25D366] text-sm font-semibold uppercase tracking-wider mb-2">{proy.categoria}</p>
                <h3 className="text-xl font-bold text-white mb-4">{proy.nombre}</h3>
                <a 
                  href={proy.url} 
                  target="_blank" 
                  className="inline-block text-white/70 hover:text-white font-medium underline decoration-[#25D366] underline-offset-4"
                >
                  Ver sitio en vivo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}