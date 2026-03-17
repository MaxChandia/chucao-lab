import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'curso',
  title: 'Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Curso',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen Corto',
      type: 'text',
      rows: 3,
      description: 'Breve descripción para tarjetas o listados.',
      validation: (Rule) => Rule.required(),
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
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido del Curso',
      type: 'array',
      of: [
        {
          type: 'block',
          // Configuración para permitir enlaces (hipervínculos)
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Enlace',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                ],
              },
            ],
          },
        },
        // Opcional: permitir imágenes dentro del contenido también
        {
          type: 'image',
          options: { hotspot: true }
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagenPrincipal',
    },
  },
});