"use client"

import { useEffect, useState } from 'react'
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      try {
        const result = await client.fetch(POST_QUERY, { slug }) 
        setData(result)
      } catch (error) {
        console.error("Error al obtener el artículo:", error)
      }
    }
    fetchData()
  }, [slug])

  if (!data?.post) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-pulse text-slate-400 font-bold italic">Cargando artículo...</div>
    </div>
  )

  const { post } = data

  return (
    <>
      <Header />
      {/* Barra de progreso de lectura */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]" style={{ scaleX }} />
      
      <main className="min-h-screen bg-white text-slate-900 pb-20">
        <header className="pt-40 text-center max-w-4xl mx-auto px-6">
          {/* Navegación de migas de pan (Breadcrumbs) */}
          <div className="flex justify-center items-center gap-4 mb-12 text-sm uppercase tracking-widest font-bold">
            <Link href="/" className="text-slate-400 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <span className="text-slate-200">|</span>
            <Link href="/blog" className="text-slate-400 hover:text-blue-600 transition-colors">
              Ver todo el Blog
            </Link>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-balance">
            {post.titulo}
          </h1>
          
          <div className="text-slate-500 font-medium">
            {post.categoria} — {post.tiempoLectura} min de lectura
          </div>
        </header>

        {post.imagenUrl && (
          <section className="max-w-6xl mx-auto px-6 my-24">
            <div className="relative h-[70vh] rounded-[3.5rem] overflow-hidden shadow-2xl">
              <Image src={post.imagenUrl} alt={post.titulo} fill className="object-cover" priority />
            </div>
          </section>
        )}

        <article className="max-w-3xl mx-auto px-8 prose prose-slate prose-lg">
          <PortableText value={post.contenido} />
        </article>
      </main>
      
      <Footer />
    </>
  )
}