import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer (Logos)',
  type: 'document',
  fields: [
    defineField({
      name: 'logos',
      title: 'Logos de Colaboradores',
      description: 'Sube un máximo de 5 logos. Puedes arrastrarlos para cambiar el orden.',
      type: 'array',
      validation: (Rule) => Rule.max(5).error('Solo se permiten hasta 5 logos en el footer.'),
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Nombre del colaborador (Alt)',
              description: 'Importante para accesibilidad.',
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    }),
  ],
});