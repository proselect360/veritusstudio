import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/sanity/SanityImage";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

// Pilar SEO: Metadata estática para la sección de portafolio
export const metadata = {
  title: "Portafolio de Ingeniería Web | Veritus Studio",
  description: "Explora nuestros proyectos destacados. Soluciones digitales de alto rendimiento desarrolladas con Next.js 15 y Sanity CMS.",
  alternates: { canonical: '/proyectos' },
};

export default async function ProyectosPage() {
  // Pilar Live: Los datos se obtienen en el servidor y se hidratan en tiempo real
  const { data: proyectos } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white">
            Proyectos <span className="text-indigo-500">Destacados</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
            Ingeniería web de alto rendimiento aplicada a negocios reales. 
            Cada proyecto es una solución a medida diseñada para convertir.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {proyectos.map((proyecto: any) => (
            <article 
              key={proyecto._id} 
              className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Contenedor de Imagen con Overlay */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                <SanityImage 
                  asset={proyecto.imagen} 
                  alt={proyecto.nombre}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <Link 
                     href={`/proyectos/${proyecto.slug}`}
                     className="bg-white text-black p-4 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl"
                   >
                     <ArrowRight size={24} />
                   </Link>
                </div>
              </div>

              {/* Contenido del Card */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest">
                    {proyecto.categoria?.titulo || "Development"}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {proyecto.nombre}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                {/* Footer del Card: Tecnologías y Link Externo */}
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias?.map((tech: string) => (
                      <span key={tech} className="text-[10px] text-slate-400 font-mono bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  
                  {proyecto.url && (
                    <a 
                      href={proyecto.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-full transition-all"
                      title="Visitar sitio web"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}