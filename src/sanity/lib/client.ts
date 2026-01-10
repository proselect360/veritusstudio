import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Importante para que no pida tokens en el build
  stega: {
    enabled: false, // Esto evita el error de "auth is null"
  },
})