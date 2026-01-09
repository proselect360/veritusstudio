import { type SchemaTypeDefinition } from 'sanity'
import { proyecto } from './proyecto'
import blog from './blog' 
import categoria from './categoria' // 1. Importa el archivo que creaste

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [proyecto, blog, categoria], // 2. Añádelo aquí
}