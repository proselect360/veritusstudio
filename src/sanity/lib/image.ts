import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from '../env'

// Configuración del generador de URLs de Sanity
const builder = createImageUrlBuilder({ projectId, dataset })

/**
 * urlFor: El motor de optimización visual de Veritus Studio.
 * * Permite:
 * 1. .width() y .height(): Redimensionar en el servidor de Sanity.
 * 2. .format('webp'): Convertir automáticamente a formatos modernos.
 * 3. .blur(10): Crear placeholders para carga progresiva.
 */
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}