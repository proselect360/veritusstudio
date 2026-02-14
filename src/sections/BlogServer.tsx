// src/sections/BlogServer.tsx
import { client } from '@/sanity/lib/client'
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
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return <BlogClient posts={[]} />
    const posts = await client.fetch(BLOG_QUERY, undefined, { next: { revalidate: 60 } })
    return <BlogClient posts={posts ?? []} />
  } catch {
    return <BlogClient posts={[]} />
  }
}