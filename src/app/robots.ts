import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Aquí bloqueas carpetas que no quieras que se vean
    },
    sitemap: 'https://veritus.co/sitemap.xml',
  }
}
