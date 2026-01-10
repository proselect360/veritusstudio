"use client"

import { useEffect, useState } from 'react'
// IMPORTANTE: Cambiado de getClient a client para coincidir con tu configuración
import { client } from '@/sanity/lib/client' 
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/sections/Footer'

const POST_QUERY = `{
  "post": *[_type == "blog" && slug.current == $slug][0] {
    titulo,
    "imagenUrl": imagenPrincipal.asset->url,
    contenido,
    fechaPublicacion,
    tiempoLectura,
    "categoria": categoria->titulo,
    autor { nombre, "avatarUrl": avatar.asset->url }
  },
  "relacionados": *[_type == "blog" && slug.current != $slug][0...3] {
    titulo,
    "slug": slug.current,
    "imagenUrl": imagenPrincipal.asset->url,
    tiempoLectura
  }
}`

export default function BlogPostClient({ slug }: { slug: string }) {
  const [data, setData] = useState<any>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

useEffect(() => {
    const fetchData = async () => {
      try {
        // El error ocurre aquí si { slug } no se envía o está vacío
        const result = await client.fetch(POST_QUERY, { slug }) 
        setData(result)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    
    if (slug) fetchData() // Solo ejecuta si el slug existe
  }, [slug])

  if (!data?.post) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-pulse text-slate-400 font-bold">Cargando artículo...</div>
    </div>
  )

  const { post, relacionados } = data

  return (
    <>
      <Header />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <header className="pt-40 text-center max-w-4xl mx-auto px-6">
          <Link href="/blog" className="text-slate-400 hover:text-blue-600 font-bold transition-colors">
            ← Volver al Blog
          </Link>

          <h1 className="text-5xl md:text-7xl font-black mt-12 mb-6 leading-tight">
            {post.titulo}
          </h1>

          <div className="text-sm uppercase tracking-widest text-slate-500 font-medium">
            {post.categoria} — {post.tiempoLectura} min lectura
          </div>
        </header>

        {post.imagenUrl && (
          <section className="max-w-6xl mx-auto px-6 my-24">
            <div className="relative h-[70vh] rounded-[3.5rem] overflow-hidden shadow-2xl">
              <Image
                src={post.imagenUrl}
                alt={post.titulo || "Imagen del artículo"} // 'alt' añadido para evitar errores de accesibilidad
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        <section className="max-w-3xl mx-auto px-8 prose prose-slate prose-lg">
          <PortableText value={post.contenido} />
        </section>

        <section className="max-w-6xl mx-auto px-6 py-32 border-t border-slate-100 mt-24">
          <h3 className="text-4xl font-black mb-12">Artículos Relacionados</h3>

          <div className="grid md:grid-cols-3 gap-12">
            {relacionados?.map((item: any) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                  <Image 
                    src={item.imagenUrl || '/placeholder.webp'} 
                    alt={item.titulo}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                  {item.titulo}
                </h4>
                <p className="text-slate-500 text-sm mt-2">{item.tiempoLectura} min lectura</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}