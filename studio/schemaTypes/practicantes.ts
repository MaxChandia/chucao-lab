import { defineType, defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default defineType({
  name: 'practicante',
  title: 'Practicantes',
  orderings: [orderRankOrdering],
  type: 'document',
  fields: [
    orderRankField({ type: 'practicante' }),
    defineField({
      name: 'nombreCompleto',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carrera',
      title: 'Carrera',
      type: 'string', 
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'nombreCompleto',
      subtitle: 'carrera',
      media: 'foto',
    },
  },
});