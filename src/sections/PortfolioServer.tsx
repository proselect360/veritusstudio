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
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return <Portfolio proyectos={[]} />
    const proyectos = await sanityServerClient.fetch(PROJECTS_QUERY, undefined, { next: { revalidate: 60 } })
    return <Portfolio proyectos={proyectos ?? []} />
  } catch {
    return <Portfolio proyectos={[]} />
  }
}
