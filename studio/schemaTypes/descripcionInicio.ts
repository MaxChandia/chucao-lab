import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'descripcionInicio',
  title: 'Descripción Inicio',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloPrincipal',
      title: 'Título Principal (H1)',
      type: 'text', 
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bajada',
      title: 'Bajada / Subtítulo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'tituloPrincipal',
      subtitle: 'bajada',
    },
  },
});