// src/sections/PortfolioWrapper.tsx
import { sanityServerClient } from '@/sanity/lib/client.server'
import Portfolio from './Portfolio'

const PROJECTS_QUERY = `*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  url,
  "imageUrl": imagen.asset->url,
  categoria->{
    titulo
  }
}`

export default async function PortfolioWrapper() {
  const proyectos = await sanityServerClient.fetch(PROJECTS_QUERY)

  return <Portfolio proyectos={proyectos} />
}
