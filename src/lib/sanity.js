import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'xgqp070r',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false, 
})