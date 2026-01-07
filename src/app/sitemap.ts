import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // app/sitemap.ts
const baseUrl = 'https://veritusstudio.vercel.app' // Cambia a tu dominio real

  // 1. Tus páginas principales
  const routes = ['', '/blog', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Páginas de Servicios por Ciudad (SEO Local)
  // Agrega aquí todas las ciudades que estás atacando
  const cities = ['bogota', 'medellin', 'cali', 'barranquilla']
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/diseno-web-${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. Entradas de Blog (Si tienes slugs dinámicos)
  // Aquí podrías hacer un fetch a tu base de datos o CMS
  const blogPosts = [
    'cuanto-cuesta-una-pagina-web-colombia',
    'diseno-web-nextjs-vs-wordpress'
  ].map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...cityRoutes, ...blogPosts]
}