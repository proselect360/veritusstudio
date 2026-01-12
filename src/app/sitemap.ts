import { MetadataRoute } from 'next'

/**
 * sitemap.ts - El Mapa de Ruta Estratégico de Veritus Studio
 * Organiza la jerarquía para maximizar el rastreo en mercados clave de Colombia.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veritusstudio.com.co' // Prioriza siempre tu dominio final

  // 1. Núcleo del Ecosistema (Páginas de alta conversión)
  const routes = ['', '/blog', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const, // Cambiado a diario para que Google vea actualizaciones constantes
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. SEO Local: Sabana de Occidente y Capital
  // El uso de 'diseno-web-' como prefijo es una táctica SEO de concordancia exacta
  const locations = [
    'bogota', 
    'medellin', 
    'cundinamarca', 
    'madrid', 
    'mosquera', 
    'funza'
  ]

  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/diseno-web-${loc}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 3. Blog & Conocimiento (E-E-A-T)
  // Nota: En una fase posterior, estos slugs vendrán dinámicamente de Sanity
  const blogPosts = [
    'cuanto-cuesta-una-pagina-web-colombia',
    'diseno-web-nextjs-vs-wordpress',
    'beneficios-headless-commerce'
  ].map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...locationRoutes, ...blogPosts]
}