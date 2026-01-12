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
  }
}`

// Definición de estilos premium para el contenido de Sanity
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-black mt-16 mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-10 mb-4 tracking-tight text-indigo-400">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-slate-400 leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-indigo-400 underline decoration-indigo-500/30 underline-offset-4 hover:text-white transition-colors font-bold"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="text-white font-black">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-4 mb-8 list-none pl-0">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex gap-3 text-slate-400">
        <span className="text-indigo-500 mt-1.5 flex-shrink-0">●</span>
        <span>{children}</span>
      </li>
    ),
  },
}

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
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="animate-pulse text-slate-500 font-bold italic">Cargando artículo...</div>
    </div>
  )

  const { post } = data

  return (
    <>
      <Header />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]" style={{ scaleX }} />
      
      <main className="min-h-screen bg-slate-950 text-white pb-20">
        <header className="pt-40 text-center max-w-4xl mx-auto px-6">
          <div className="flex justify-center items-center gap-4 mb-12 text-[10px] uppercase tracking-[0.3em] font-black">
            <Link href="/" className="text-slate-500 hover:text-indigo-400 transition-colors">Inicio</Link>
            <span className="text-slate-800">|</span>
            <Link href="/blog" className="text-slate-500 hover:text-indigo-400 transition-colors">Ver todo el Blog</Link>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9] text-balance">
            {post.titulo}
          </h1>
          
          <div className="text-indigo-400/80 font-bold text-xs uppercase tracking-widest">
            {post.categoria} — {post.tiempoLectura} min de lectura
          </div>
        </header>

        {post.imagenUrl && (
          <section className="max-w-6xl mx-auto px-6 my-20">
            <div className="relative h-[60vh] md:h-[75vh] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
              <Image src={post.imagenUrl} alt={post.titulo} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/20" />
            </div>
          </section>
        )}

        <article className="max-w-3xl mx-auto px-8 prose prose-invert prose-indigo prose-lg lg:prose-xl">
          <PortableText value={post.contenido} components={portableTextComponents} />
        </article>
      </main>
      
      <Footer />
    </>
  )
}