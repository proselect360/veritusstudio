// src/sections/PortfolioWrapper.tsx
import { sanityClient } from '@/sanity/lib/client.client'

import Portfolio from './Portfolio' // Tu componente actual con animaciones

const PROJECTS_QUERY = `*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  categoria,
  "imageUrl": imagen.asset->url,
  url
}`

export default async function PortfolioWrapper() {
  const proyectos = await sanityClient.fetch(PROJECTS_QUERY)
  
  // Enviamos los datos como una propiedad (prop)
  return <Portfolio proyectos={proyectos} />
}