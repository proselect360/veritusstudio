import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Aquí bloqueas carpetas que no quieras que se vean
    },
    // En src/app/robots.ts
      sitemap: 'https://veritusstudio.vercel.app/sitemap.xml',
  }
}
