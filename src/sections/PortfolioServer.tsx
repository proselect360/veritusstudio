// src/sections/PortfolioServer.tsx
import { client } from '@/sanity/lib/client'
import PortfolioClient from './Portfolio' // Tu componente actual con animaciones

const PROJECTS_QUERY = `*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  categoria,
  "imageUrl": imagen.asset->url,
  url
}`

export default async function PortfolioServer() {
  const proyectos = await client.fetch(PROJECTS_QUERY)
  
  // Le pasamos los datos al componente de cliente como "proyectos"
  return <PortfolioClient proyectos={proyectos} />
}