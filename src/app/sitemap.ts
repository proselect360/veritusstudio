import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veritusstudio.vercel.app'

  // 1. Tus páginas principales
  const routes = ['', '/blog', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. SEO Local: Ciudades y Departamento
  // Se añade 'cundinamarca' a la lista
  const locations = [
    'bogota', 
    'medellin', 
    'cundinamarca', // Departamento
    'madrid', 
    'mosquera', 
    'funza'
  ]

  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/diseno-web-${loc}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: loc === 'cundinamarca' ? 0.75 : 0.7, // Prioridad un poco más alta al ser departamento
  }))

  // 3. Entradas de Blog
  const blogPosts = [
    'cuanto-cuesta-una-pagina-web-colombia',
    'diseno-web-nextjs-vs-wordpress'
  ].map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...locationRoutes, ...blogPosts]
}