import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'categoria',
  title: 'Categorías',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Nombre de la Categoría',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción para SEO',
      type: 'text',
    }),
  ],
})