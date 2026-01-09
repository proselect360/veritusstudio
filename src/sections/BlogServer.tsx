// src/sections/BlogServer.tsx
import { client } from '@/sanity/lib/client'
import BlogClient from './BlogClient'

const BLOG_QUERY = `*[_type == "blog"] | order(fechaPublicacion desc) {
  _id,
  titulo,
  "slug": slug.current,
  tiempoLectura,
  "categoria": categoria->titulo, 
  fechaPublicacion,
  "imagenUrl": imagenPrincipal.asset->url,
  "autor": {
    "nombre": autor.nombre,
    "avatarUrl": autor.avatar.asset->url
  }
}`

export default async function BlogServer() {
  const posts = await client.fetch(BLOG_QUERY)
  
  return (
    // Usamos un ID que no se repita en todo el proyecto
    <section id="nuestros-articulos" className="scroll-mt-32"> 
      <BlogClient posts={posts} />
    </section>
  )
}