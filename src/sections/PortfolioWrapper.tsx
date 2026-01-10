// src/sections/PortfolioWrapper.tsx
import { client } from '@/sanity/lib/client' // Cambiado de getClient a client
import Portfolio from './Portfolio'

// Forzamos a que esta sección siempre busque datos frescos y no use caché vieja
export const dynamic = 'force-dynamic'

const PROJECTS_QUERY = `*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  categoria,
  "imageUrl": imagen.asset->url,
  url
}`

export default async function PortfolioWrapper() {
  // Corregido: Usamos client.fetch directamente
  const proyectos = await client.fetch(PROJECTS_QUERY)
  
  return <Portfolio proyectos={proyectos} />
}