import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'proyectoPrincipal',
  title: 'Proyecto Principal (Destacado)',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      description: 'Ej: Proyecto Jardín Sonoro Santiago',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Link del botón)',
      type: 'slug',
      description: 'Genera la URL a la que llevará el botón "VER PROYECTO COMPLETO"',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen (Párrafo principal)',
      type: 'text',
      rows: 4,
      description: 'El texto descriptivo grande.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'extra',
      title: 'Info Extra (Texto pequeño)',
      type: 'string',
      description: 'Ej: Fondecyt Iniciación 2024-2027.',
    }),
    defineField({
      name: 'imagenPrincipal',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          validation: (Rule) => Rule.required(),
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'resumen',
      media: 'imagenPrincipal',
    },
  },
});