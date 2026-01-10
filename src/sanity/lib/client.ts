// src/sanity/lib/client.ts
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  perspective: 'published', // Fuerza a ver solo contenido público
  stega: {
    enabled: false, 
  },
})