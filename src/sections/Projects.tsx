import { client } from '@/sanity/lib/client' // Cambiado de { getClient } a { client }
import { PROJECTS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

import type { Proyecto as SanityProyecto } from '@/sanity/types'

export default async function Projects() {
  // CORRECCIÓN: Usamos client.fetch directamente sin llamar a una función
  const proyectos: SanityProyecto[] = await client.fetch(PROJECTS_QUERY, undefined, { next: { revalidate: 60 } })

  if (!proyectos || proyectos.length === 0) return null

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">
          Nuestros Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proy) => (
            <div
              key={proy._id}
              className="group overflow-hidden rounded-2xl bg-slate-900 border border-white/10 hover:border-[#25D366]/50 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative h-64 w-full">
                <Image
                  src={proy.imagen ? urlFor(proy.imagen).width(1400).height(900).url() : '/placeholder.webp'}
                  alt={proy.nombre || "Proyecto Veritus"} // Siempre añade un alt por seguridad
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                {proy.categoria?.titulo && (
                  <p className="text-[#25D366] text-sm font-semibold uppercase tracking-wider mb-2">
                    {proy.categoria.titulo}
                  </p>
                )}

                <h3 className="text-xl font-bold text-white mb-4">
                  {proy.nombre}
                </h3>

                {proy.url && (
                  <a
                    href={proy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white/70 hover:text-white font-medium underline decoration-[#25D366] underline-offset-4"
                  >
                    Ver sitio en vivo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}