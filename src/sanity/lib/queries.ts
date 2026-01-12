import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`
  *[_type == "proyecto"] | order(_createdAt desc) {
    _id,
    nombre,
    url,
    // Pilar Rendimiento: Traemos el objeto completo para usarlo con urlFor()
    // Esto permite generar el blurDataURL y redimensionar dinámicamente.
    imagen, 
    
    categoria->{
      titulo
    },

    descripcion,
    fecha,
    "slug": slug.current,
    tecnologias[]
  }
`