// src/sections/BlogServer.tsx
import { client } from '@/sanity/lib/client' // Cambiado de { getClient } a { client }
import BlogClient from './BlogClient'

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
  // Corregido: Usamos client directamente sin paréntesis
  const posts = await client.fetch(BLOG_QUERY)

  return <BlogClient posts={posts} />
}