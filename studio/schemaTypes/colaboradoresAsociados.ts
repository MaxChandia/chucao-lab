import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'colaboradorAsociado',
  title: 'Colaboradores Asociados',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreCompleto',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'nombreCompleto',
      subtitle: 'campo',
      media: 'foto',
    },
  },
});