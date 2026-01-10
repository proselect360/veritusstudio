// src/sections/BlogServer.tsx
import { client } from '@/sanity/lib/client'
import BlogClient from './BlogClient' // Tu componente visual

const BLOG_QUERY = `*[_type == "blog"] | order(fechaPublicacion desc) {
  _id,
  titulo,
  "slug": slug.current,
  tiempoLectura,
  categoria,
  fechaPublicacion,
  "imagenUrl": imagenPrincipal.asset->url,
  "autor": {
    "nombre": autor.nombre,
    "avatarUrl": autor.avatar.asset->url
  }
}`

export default async function BlogServer() {
  const posts = await client.fetch(BLOG_QUERY)
  
  return <BlogClient posts={posts} />
}