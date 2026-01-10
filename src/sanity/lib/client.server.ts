import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const sanityServerClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // server = siempre fresh
  perspective: 'published',
})

