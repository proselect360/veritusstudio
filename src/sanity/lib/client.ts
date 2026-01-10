import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export function getSanityClient() {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
    stega: { enabled: false },
  })
}
