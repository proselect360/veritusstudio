import { MetadataRoute } from 'next'

/**
 * robots.ts - Protocolo de Exclusión para Veritus Studio
 * Define los límites para los rastreadores de motores de búsqueda.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/studio/',   // Bloqueamos el panel de Sanity para evitar ruido en los resultados
        '/admin/',    // Rutas administrativas genéricas
        '/private/',  // Documentación interna o archivos de cliente
      ],
    },
    // Es vital que esta URL coincida exactamente con tu sitemap.ts
    sitemap: 'https://veritusstudio.com.co/sitemap.xml',
  }
}