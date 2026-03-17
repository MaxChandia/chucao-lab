import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'colaborador',
  title: 'Colaboradores',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreCompleto',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'campo',
      title: 'Campo',
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