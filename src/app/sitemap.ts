import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veritusstudio.com.co'

  // 1. Núcleo
  const routes = ['', '/blog', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const, // El 'as const' soluciona el error rojo
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Local
  const locations = ['bogota', 'medellin', 'cundinamarca', 'madrid', 'mosquera', 'funza']
  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/diseno-web-${loc}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // Solucionado
    priority: 0.9,
  }))

  // 3. Blog
  const blogPosts = ['cuanto-cuesta-una-pagina-web-colombia'].map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const, // Solucionado
    priority: 0.7,
  }))

  return [...routes, ...locationRoutes, ...blogPosts]
}