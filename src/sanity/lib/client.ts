import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  // Forzamos a que NO busque herramientas de edición
  stega: {
    enabled: false,
    studioUrl: '/studio', 
  },
})