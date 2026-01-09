'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, User, ArrowRight } from 'lucide-react'

interface Post {
  _id: string;
  titulo: string;
  slug: string;
  tiempoLectura: number;
  categoria: string;
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
    <section id="articulos-final" className="py-24 bg-black scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights de <span className="text-[#25D366]">Tecnología</span>
          </h2>
          <p className="text-white/60 max-w-2xl">
            Explora artículos sobre desarrollo web, SEO y estrategias digitales para escalar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/5 hover:border-[#25D366]/30 transition-all duration-500"
            >
              {/* Imagen de Portada */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.imagenUrl || '/placeholder.webp'}
                  alt={post.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-[#25D366] uppercase tracking-widest border border-white/10">
                    {post.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-xs text-white/40">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.tiempoLectura} min lectura</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(post.fechaPublicacion).toLocaleDateString('es-CO')}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#25D366] transition-colors line-clamp-2">
                  {post.titulo}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  {/* Autor */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                      <Image 
                        src={post.autor.avatarUrl || '/avatar-placeholder.png'} 
                        alt={post.autor.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-white/70 font-medium">{post.autor.nombre}</span>
                  </div>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="p-2 rounded-full bg-white/5 group-hover:bg-[#25D366] group-hover:text-black transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
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
