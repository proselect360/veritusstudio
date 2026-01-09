"use client"

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ShareButton from '@/components/ShareButton'
import Header from '@/components/Header' 
import Footer from '@/sections/Footer'

// Actualiza tu constante POST_QUERY así:
const POST_QUERY = `{
  "post": *[_type == "blog" && slug.current == $slug][0] {
    titulo,
    "imagenUrl": imagenPrincipal.asset->url,
    contenido,
    fechaPublicacion,
    tiempoLectura,
    // CLAVE: Usamos -> para obtener el título de la referencia
    "categoria": categoria->titulo, 
    autor { nombre, "avatarUrl": avatar.asset->url }
  },
  "relacionados": *[_type == "blog" && slug.current != $slug][0...3] {
    titulo,
    "slug": slug.current,
    "imagenUrl": imagenPrincipal.asset->url,
    "categoria": categoria->titulo,
    tiempoLectura
  }
}`

export default function BlogPostPage({ params }: { params: any }) {
  const [data, setData] = useState<any>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchData = async () => {
      const { slug } = await params;
      const result = await client.fetch(POST_QUERY, { slug });
      setData(result);
    };
    fetchData();
  }, [params]);

  // Cambiamos la validación para usar 'data'
  if (!data || !data.post) return <div className="min-h-screen bg-white" />;
  
  const { post, relacionados } = data;

  const ptComponents = {
    block: {
      normal: ({children}: any) => (
        <p className="text-xl leading-[2] text-slate-600 mb-12 font-light tracking-tight">
          {children}
        </p>
      ),
      h2: ({children}: any) => (
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 mt-28 mb-10 tracking-[-0.04em] leading-[1.1]">
          {children}
        </h2>
      ),
    },
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-8 my-16 italic text-3xl text-slate-800 font-medium">
        "{children}"
      </blockquote>
    ),
  };

  return (
    <>
      <Header />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white overflow-hidden">
        
        {/* Cabecera del Artículo */}
        <header className="relative pt-48 pb-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 text-slate-400 hover:text-blue-600 mb-16 transition-all group font-bold"
            >
              <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">←</span>
              <span className="text-[11px] uppercase tracking-[0.5em]">Volver al inicio</span>
            </Link>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] mb-12 leading-[1] text-slate-950">
              {post.titulo}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-slate-500">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-xl relative">
                    {post.autor?.avatarUrl && <Image src={post.autor.avatarUrl} alt="Autor" fill className="object-cover" />}
                  </div>
                  <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">{post.autor?.nombre}</span>
               </div>
               <span className="hidden md:block w-12 h-[1px] bg-slate-200" />
               <div className="text-sm font-medium tracking-widest uppercase">
                 {post.categoria} — {post.tiempoLectura} Min de lectura
               </div>
            </div>
          </motion.div>
        </header>

        {/* Imagen Principal */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[1400px] mx-auto px-4 mb-32"
        >
          <div className="relative h-[50vh] md:h-[75vh] rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
            {post.imagenUrl && (
              <Image 
                src={post.imagenUrl} 
                alt={post.titulo} 
                fill 
                className="object-cover"
                priority
              />
            )}
          </div>
        </motion.section>

        {/* Contenido y Footer de Autor */}
        <section className="max-w-4xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-slate prose-2xl max-w-none"
          >
            <PortableText value={post.contenido} components={ptComponents} />
          </motion.div>

          {/* FOOTER PREMIUM DE AUTOR E IA */}
          <footer className="mt-40 p-12 md:p-16 rounded-[4rem] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
            <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-purple-500 to-blue-400 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white/10 overflow-hidden bg-slate-900">
                  {post.autor?.avatarUrl ? (
                    <Image 
                      src={post.autor.avatarUrl} 
                      alt={post.autor.nombre} 
                      fill 
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-3xl font-black">{post.autor?.nombre?.charAt(0)}</div>
                  )}
                </div>
              </div>

              <div className="text-center md:text-left space-y-4">
                <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black uppercase tracking-[0.3em] text-[8px]">Autor Original</div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-black uppercase tracking-[0.3em] text-[8px]">Asistido por Veritus IA</div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white">{post.autor?.nombre}</h4>
                  <p className="text-slate-400 text-lg font-light max-w-sm leading-relaxed">Fusionamos la visión humana con inteligencia avanzada para crear perspectivas que inspiran.</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0">
              <div className="hover:scale-105 transition-transform duration-300">
                <ShareButton titulo={post.titulo} />
              </div>
            </div>
          </footer>
        </section>

        {/* SECCIÓN RELACIONADOS: "SIGUE EXPLORANDO" */}
        <section className="max-w-[1400px] mx-auto px-6 py-40 border-t border-slate-100 mt-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-4">Sigue Explorando</p>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-950">Artículos Relacionados</h3>
            </div>
            <Link 
            href="/#articulos-final" 
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-slate-950 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
          >
            Ver todo el blog
          </Link>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relacionados?.map((item: any) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group block">
                <div className="relative h-[450px] rounded-[3rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  {item.imagenUrl && (
                    <Image 
                      src={item.imagenUrl} 
                      alt={item.titulo} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                    />
                  )}
                  {/* Gradiente de profundidad en la tarjeta */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">{item.categoria}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{item.tiempoLectura} Min</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {item.titulo}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}