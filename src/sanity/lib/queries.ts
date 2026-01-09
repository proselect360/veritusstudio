import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  categoria,
  "imageUrl": imagen.asset->url,
  url,
  // Añadimos estos para diseños más pro:
  descripcion, 
  fecha,
  "slug": slug.current,
  tecnologias[] // Si tienes una lista de tags (Next.js, AI, etc)
}`