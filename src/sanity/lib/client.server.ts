// src/sanity/lib/client.server.ts
import { createClient } from 'next-sanity' // Usar next-sanity para mejor integración con Next.js 15

/**
 * Cliente de Servidor para Veritus Studio
 * * Pilares cubiertos:
 * - SEO: Permite que el contenido esté disponible para rastreadores desde el primer byte.
 * - Rendimiento: Al usar useCdn: false en el servidor, obtenemos siempre la data más fresca
 * sin el retraso de propagación del borde para ediciones críticas.
 */
export const sanityServerClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  
  // Pilar Rendimiento: 
  // 'false' en servidor asegura que los webhooks de Sanity 
  // actualicen el sitio instantáneamente sin esperar al CDN.
  useCdn: false, 

  // Pilar Seguridad:
  // El token solo debe estar en el cliente de servidor para 
  // proteger tus datos de edición.
  token: process.env.SANITY_API_READ_TOKEN, 
  
  // Optimización para Next.js 15 (caching a nivel de fetch)
  stega: {
    enabled: false, // Desactivado por defecto para evitar metadata visual en producción
    studioUrl: '/studio',
  },
})