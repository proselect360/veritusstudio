// src/app/blog/page.tsx
import BlogClient from '@/sections/BlogClient'
import { sanityServerClient } from '@/sanity/lib/client.server'
import Header from '@/components/Header' // Asegúrate de que la ruta sea correcta
import Footer from '@/sections/Footer'    // Asegúrate de que la ruta sea correcta
import Link from 'next/link'

const ALL_POSTS_QUERY = `*[_type == "blog"] | order(fechaPublicacion desc) {
  _id, 
  titulo,
  "slug": slug.current,
  "imagenUrl": imagenPrincipal.asset->url,
  tiempoLectura,
  fechaPublicacion,
  "categoria": categoria->{ titulo },
  autor->{ 
    nombre,
    "avatarUrl": avatar.asset->url
  }
}`

export default async function BlogPage() {
  const posts = await sanityServerClient.fetch(ALL_POSTS_QUERY)

  return (
    <>
      {/* Header global para navegación */}
      <Header />

      <main className="min-h-screen bg-black pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Enlace para volver a la página principal */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-white/50 hover:text-[#25D366] transition-colors font-medium"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              Volver al Inicio
            </Link>
          </div>

          <header className="mb-20">
            <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter">
              Blog<span className="text-[#25D366]">.</span>
            </h1>
            <p className="text-white/40 mt-4 max-w-xl text-lg">
              Tendencias, guías y estrategias digitales de Veritus Studio.
            </p>
          </header>

          {/* Listado de posts */}
          <BlogClient posts={posts} />
        </div>
      </main>

      {/* Footer para cerrar la página */}
      <Footer />
    </>
  )
}