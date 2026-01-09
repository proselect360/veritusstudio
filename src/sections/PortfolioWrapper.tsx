// src/sections/PortfolioWrapper.tsx
import { client } from '@/sanity/lib/client'
import Portfolio from './Portfolio' // Tu componente actual con animaciones

const PROJECTS_QUERY = `*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  categoria,
  "imageUrl": imagen.asset->url,
  url
}`

export default async function PortfolioWrapper() {
  const proyectos = await client.fetch(PROJECTS_QUERY)
  
  // Enviamos los datos como una propiedad (prop)
  return <Portfolio proyectos={proyectos} />
}