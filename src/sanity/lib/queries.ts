import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`
*[_type == "proyecto"] | order(_createdAt desc) {
  _id,
  nombre,
  url,
  "imageUrl": imagen.asset->url,

  categoria->{
    titulo
  },

  descripcion,
  fecha,
  "slug": slug.current,
  tecnologias[]
}
`
