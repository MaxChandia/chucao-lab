import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false, 
})