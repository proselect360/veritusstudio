export const proyecto = {
  name: 'proyecto',
  type: 'document',
  title: 'Mis Proyectos',
  fields: [
    {
      name: 'nombre',
      type: 'string',
      title: 'Nombre del Proyecto',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL amigable (Slug)',
      options: { source: 'nombre', maxLength: 96 },
    },
    {
      name: 'imagen',
      type: 'image',
      title: 'Captura de pantalla',
      options: { hotspot: true }, // Permite elegir el foco de la imagen
    },
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoría (ej: E-commerce)',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link del sitio en vivo',
    }
  ],
}