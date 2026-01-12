import { defineField, defineType } from 'sanity'
import { BookOpen } from 'lucide-react' // Opcional: icono para el estudio

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: BookOpen,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Post',
      type: 'string',
      description: 'Escribe un título que incluya palabras clave (ej: Diseño Web en Madrid Cundinamarca)',
      validation: Rule => Rule.required().min(10).max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'La URL amigable del post (se genera automáticamente)',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen (Excerpt)',
      type: 'text',
      rows: 3,
      description: 'Descripción corta para las tarjetas del blog y SEO (Meta-description).',
      validation: Rule => Rule.max(160),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'categoria' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imagenPrincipal',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Alt Text)',
          description: 'Vital para accesibilidad y SEO.',
        }
      ]
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido del Artículo',
      type: 'array',
      of: [
        { 
          type: 'block',
          // Estilos personalizados para jerarquía visual (h2, h3 para SEO)
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
        },
        { 
          type: 'image', 
          options: { hotspot: true },
          fields: [{ name: 'caption', type: 'string', title: 'Leyenda' }]
        }
      ],
    }),
   
   /*defineField({
      name: 'autor',
      title: 'Autor',
      type: 'reference', // Sugerencia: Cambiar a referencia si planeas tener múltiples autores
      to: [{ type: 'autor' }], 
    }),
    */
   
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'tiempoLectura',
      title: 'Tiempo de lectura (min)',
      type: 'number',
    }),
  ],
  // Previsualización en el panel de Sanity
  preview: {
    select: {
      title: 'titulo',
      author: 'autor.nombre',
      media: 'imagenPrincipal',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author ? `Por ${author}` : '' }
    },
  },
})