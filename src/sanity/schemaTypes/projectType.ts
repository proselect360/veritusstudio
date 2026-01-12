import { defineField, defineType } from 'sanity'
import { FolderKanban } from 'lucide-react'

export const projectType = defineType({
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  icon: FolderKanban,
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texto Alternativo (SEO)', type: 'string' }
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
      rows: 3,
    }),
  ],
})
