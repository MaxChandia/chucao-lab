import { defineType, defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default defineType({
  name: 'colaborador',
  title: 'Colaboradores',
  orderings: [orderRankOrdering],
  type: 'document',
  fields: [
    orderRankField({ type: 'colaborador' }),
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