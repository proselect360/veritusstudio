import { type SchemaTypeDefinition } from 'sanity'
import { proyecto } from './proyecto'
import blog from './blog' 
import categoria from './categoria'

/**
 * Registro Central de Schemas - Veritus Studio
 * * Pilares cubiertos:
 * - SEO: La relación entre 'proyecto' y 'categoria' permite crear jerarquías
 * que Google entiende perfectamente (Categorización Semántica).
 */
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    proyecto,  // Tu esquema de portafolio
    blog,      // Tus artículos de ingeniería web
    categoria  // El nexo que une a ambos
  ],
}