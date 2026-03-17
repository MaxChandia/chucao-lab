import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './schemaTypes/deskStructure'

const singletons = [
  'descripcionInicio', 
  'proyectoPrincipal', 
  'quienesSomos', 
  'caminataSonora', 
  'divulgacionCIentifica', 
  'tesisypracticantes',
  'footer'
];

export default defineConfig({
  name: 'default',
  title: 'Chucao Lab',

  projectId: 'xgqp070r',
  dataset: 'production',

  plugins: [
    structureTool({ structure }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter((template) => !singletons.includes(template.id)),
  },

  document: {
    actions: (prev, context) => {
      // Si el tipo de documento está en nuestra lista de singletons
      return singletons.includes(context.schemaType)
        ? prev.filter(({ action }) => 
            action && ['publish', 'discardChanges', 'restore'].includes(action)
          )
        : prev;
    },
  },
})