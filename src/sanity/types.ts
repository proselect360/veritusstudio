// Centralized TypeScript types derived from Sanity schemas (manual first step; use `sanity codegen` to auto-generate)
export type Author = {
  _id: string
  nombre: string
  avatar?: { asset: { _ref: string; url?: string } }
}

export type Categoria = {
  _id: string
  titulo: string
}

export type Proyecto = {
  _id: string
  nombre: string
  slug?: string
  url?: string
  descripcion?: string
  imagen?: any
  imageUrl?: string
  categoria?: Categoria
  tecnologias?: string[]
}

export type BlogPost = {
  _id: string
  titulo: string
  slug?: string
  tiempoLectura?: number
  fechaPublicacion?: string
  imagenPrincipal?: any
  categoria?: Categoria
  autor?: Author
  cuerpo?: any
}
