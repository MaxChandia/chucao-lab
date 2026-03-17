import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'infraestructura', 
  title: 'Infraestructura y Equipamiento',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Nombre del Espacio o Equipo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagen',
      title: 'Fotografía',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          description: 'Descripción breve para accesibilidad',
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción Técnica / Uso',
      type: 'array',
      of: [{ type: 'block' }], // Portable Text para permitir negritas, listas, etc.
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagen',
    },
  },
});