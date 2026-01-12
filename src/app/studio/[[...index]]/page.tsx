/**
 * Sanity Studio - Centro de Control de Veritus Studio
 * Este archivo renderiza el CMS completo dentro de tu aplicación Next.js.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Pilar Rendimiento: Forzamos carga estática para el shell del Studio.
// El contenido interno se carga dinámicamente en el cliente.
export const dynamic = 'force-static'

// Importamos metadata específica de Sanity para manejar iconos y visualización del panel
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <div className="min-h-screen">
      <NextStudio config={config} />
    </div>
  )
}