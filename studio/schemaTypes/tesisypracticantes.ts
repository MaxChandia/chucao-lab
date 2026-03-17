import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'tesisypracticantes',
    title: 'Tesis y Practicantes Descripción',
    type: 'document',
    fields: [
        defineField({
            name: 'contenido',
            title: 'Contenido de Texto',
            description: 'Usa negritas y cursivas según el diseño.',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' }, 
                        ],
                    },
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
              name: 'imagenDestacada',
              title: 'Imagen Lateral',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Texto Alternativo',
                  description: 'Importante para accesibilidad y SEO',
                }
              ]
            }),
    ],
    preview: {
        select: {
            media: 'imagenDestacada',
        },
        prepare(selection) {
            return {
                title: 'Sección Tesis y Practicantes',
                media: selection.media
            }
        }
    },
});