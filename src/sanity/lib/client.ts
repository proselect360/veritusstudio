import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

/**
 * Cliente Público de Veritus Studio
 * * Pilares cubiertos:
 * - Rendimiento: 'useCdn: true' para respuestas ultra rápidas en el navegador.
 * - Estabilidad: Stega desactivado para evitar inyección de metadatos en el DOM público.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  
  // Pilar Rendimiento:
  // Usamos el CDN para consultas repetitivas. Esto ahorra costos de API 
  // y acelera la carga para usuarios geográficamente lejos de los servidores.
  useCdn: true, 

  // Pilar Limpieza de Código:
  // Stega inyecta "invisible strings" para que el Studio sepa qué editar.
  // Al ponerlo en 'false', nos aseguramos de que el HTML final sea puro.
  stega: {
    enabled: false,
    studioUrl: '/studio', 
  },
})