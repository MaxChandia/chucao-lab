import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'novedadActividad',
  title: 'Novedades y Actividades',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen Destacada',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Divulgación Científica', value: 'Divulgación' },
          { title: 'Eventos', value: 'Eventos' },
          { title: 'Caminatas Sonoras', value: 'Caminatas Sonoras' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoriaIngles',
      title: 'Categoría en inglés',
      type: 'string',
      options: {
        list: [
          { title: 'Dissemination', value: 'Dissemination' },
          { title: 'Events', value: 'Events' },
          { title: 'Soundwalks', value: 'Soundwalks' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bajada',
      title: 'Bajada',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cuerpo',
      title: 'Cuerpo',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Texto alternativo' },
            { name: 'caption', type: 'string', title: 'Pie de foto' },
          ],
        },
      ],
    }),
    defineField({
      name: 'galeria',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Título debajo de la imagen (Pie de foto)',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      author: 'autor',
      media: 'imagenDestacada',
    },
  },
});