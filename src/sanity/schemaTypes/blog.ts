import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Post',
      type: 'string',
      validation: Rule => Rule.required().warning('Un título es necesario para el SEO'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'reference', // Ahora es una referencia
      to: [{ type: 'categoria' }], // Apunta al esquema 'categoria'
  validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imagenPrincipal',
      title: 'Imagen de portada',
      type: 'image',
      options: {
        hotspot: true, // Esto permite centrar la cara o el objeto importante
      },
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } } // Permite meter fotos dentro del texto
      ],
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'object',
      fields: [
        { name: 'nombre', type: 'string', title: 'Nombre del Autor' },
        { name: 'avatar', type: 'image', title: 'Foto del Autor', options: { hotspot: true } }
      ]
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
    }),
    defineField({
      name: 'tiempoLectura',
      title: 'Tiempo de lectura (minutos)',
      type: 'number',
    }),
    defineField({
      name: 'galeria',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
  ],
})