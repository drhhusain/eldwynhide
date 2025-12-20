import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

const builder = createImageUrlBuilder({ projectId, dataset })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

