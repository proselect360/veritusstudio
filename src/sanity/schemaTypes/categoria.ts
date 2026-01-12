import { defineField, defineType } from 'sanity'
import { Tag } from 'lucide-react'

export default defineType({
  name: 'categoria',
  title: 'Categorías',
  type: 'document',
  icon: Tag,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Nombre de la Categoría',
      type: 'string',
      description: 'Ej: Ingeniería Web, Marketing Digital, Casos de Éxito',
      validation: Rule => Rule.required().min(3).max(30),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'titulo', 
        maxLength: 96 
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción para SEO',
      type: 'text',
      rows: 3,
      description: 'Esta descripción ayuda a posicionar la página de la categoría en Google.',
      validation: Rule => Rule.max(160),
    }),
    defineField({
      name: 'color',
      title: 'Color de Marca',
      type: 'string',
      description: 'Código Hexadecimal (ej: #4f46e5) para acentos visuales en el blog.',
      initialValue: '#4f46e5',
    }),
    defineField({
      name: 'orden',
      title: 'Orden de prioridad',
      type: 'number',
      description: 'Define la posición en los filtros del blog (1 es el primero).',
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'descripcion',
    },
  },
})