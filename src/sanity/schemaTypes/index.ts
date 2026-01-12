import { type SchemaTypeDefinition } from 'sanity'
import { proyecto } from './proyecto'
import blog from './blog'          // Sin llaves porque es "export default"
import categoria from './categoria' // Sin llaves porque es "export default"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    proyecto,
    blog,
    categoria
  ],
}