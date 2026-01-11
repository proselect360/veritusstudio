'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Sparkles } from 'lucide-react'

interface Post {
  _id: string;
  titulo: string;
  slug: string;
  tiempoLectura: number;
  categoria: {
    titulo: string;
  };
  fechaPublicacion: string;
  imagenUrl: string;
  autor: {
    nombre: string;
    avatarUrl: string;
  };
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    // CAMBIO: bg-transparent y isolate para permitir ver el fondo 3D
    <section id="articulos-final" className="relative py-32 bg-transparent overflow-hidden scroll-mt-32 isolate">
      
      {/* Decoración de luz ambiental sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Conocimiento Técnico</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.9]">
              Insights de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">Tecnología</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm border-l border-slate-200 dark:border-slate-800 pl-6 transition-colors">
            Estrategias de ingeniería web y SEO técnico para escalar tu presencia digital en Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <motion.article
              key={post._id || post.slug || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              // CAMBIO: bg-white/40 (claro) y bg-slate-900/40 (oscuro) con backdrop-blur
              className="group relative flex flex-col bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/5 hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Imagen de Portada con Overlay Gradiente */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.imagenUrl || '/placeholder.webp'}
                  alt={post.titulo}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-[0.2em] border border-white/10">
                    {post.categoria?.titulo}
                  </span>
                </div>
              </div>

              {/* Contenido del Post */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{post.tiempoLectura} MIN</span>
                  </div>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span>{new Date(post.fechaPublicacion).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight tracking-tight">
                  {post.titulo}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/50 dark:border-white/5">
                  {/* Autor con estilo refinado */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                      <Image 
                        src={post.autor?.avatarUrl ?? 'https://ui-avatars.com/api/?name=Veritus+Studio&background=6366f1&color=fff'} 
                        alt={post.autor?.nombre ?? 'Autor Veritus'}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-bold tracking-tight">
                      {post.autor?.nombre ?? "Veritus Studio"}
                    </span>
                  </div>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}