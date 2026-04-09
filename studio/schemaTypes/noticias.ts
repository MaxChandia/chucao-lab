import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'noticia',
  title: 'Noticias',
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
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 96),
      },
      validation: (Rule) => Rule.required().custom(slug => {
        if (!slug || !slug.current) {
          return 'El slug es obligatorio.';
        }
        if (/\s/.test(slug.current)) {
          return 'El slug no debe contener espacios.';
        }

        if (slug.current.startsWith('/')){
          return 'El slug no debe comenzar con una barra (/).';
        }
        return true;
      }),
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Describe la imagen para mejorar la accesibilidad y el SEO.',
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
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie de foto',
            },
          ],
        },
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL de YouTube',
            },
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
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
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