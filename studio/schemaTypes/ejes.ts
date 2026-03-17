import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'eje',
  title: 'Ejes de Investigación',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreEje',
      title: 'Nombre del Eje',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nombreEje',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'texto',
      title: 'Descripción / Texto del Eje',
      type: 'array', 
      of: [{ type: 'block' }], // Usamos Portable Text para que puedas poner negritas, párrafos, etc.
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen Principal del Eje',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'nombreEje',
      media: 'imagen',
    },
  },
});

