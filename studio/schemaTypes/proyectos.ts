import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor/a o Autores',
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
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen Destacada (Portada)',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    // --- SECCIONES DEL PROYECTO (TEXTO O IMAGEN) ---
    defineField({
      name: 'secciones',
      title: 'Secciones del Proyecto',
      type: 'array',
      of: [
        // 1. OPCIÓN: SECCIÓN DE TEXTO (CON SUBSECCIONES)
        {
          type: 'object',
          name: 'seccion',
          title: 'Sección de Texto',
          fields: [
            {
              name: 'tituloSeccion',
              title: 'Título de la Sección',
              type: 'string',
              description: 'Ej: "Sobre el proyecto", "Experiencia Sonora", etc.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'subsecciones',
              title: 'Subsecciones',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'subseccion',
                  title: 'Subsección',
                  fields: [
                    {
                      name: 'titulo',
                      title: 'Título de la Subsección',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'contenido',
                      title: 'Contenido',
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
                    },
                  ],
                  preview: {
                    select: {
                      title: 'titulo',
                    },
                    prepare({ title }) {
                      return {
                        title: title || 'Sin título',
                        subtitle: 'Subsección',
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'tituloSeccion',
              subseccionesCount: 'subsecciones',
            },
            prepare({ title, subseccionesCount }) {
              const count = subseccionesCount?.length || 0;
              return {
                title: title || 'Sin título',
                subtitle: `${count} subsección${count !== 1 ? 'es' : ''}`,
                media: '📄' // Icono visual para diferenciar
              };
            },
          },
        },

        // 2. OPCIÓN: IMAGEN PRINCIPAL (SOLO IMAGEN, SIN CAPTION)
        {
          type: 'image',
          name: 'imagenPrincipal',
          title: 'Imagen Principal (Full Width)',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
              description: 'Descripción para accesibilidad',
              validation: (Rule) => Rule.required(),
            },
       
          ],
          preview: {
            select: {
              media: 'asset',
              title: 'alt'
            },
            prepare({ media, title }) {
              return {
                title: title || 'Imagen Principal',
                subtitle: 'Solo Imagen',
                media: media
              }
            }
          }
        },
      ],
    }),

    defineField({
      name: 'cuerpo',
      title: 'Cuerpo (Legado - usar Secciones)',
      type: 'array',
      hidden: true, 
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
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      author: 'autor',
      date: 'fecha',
      media: 'imagenDestacada',
    },
    prepare({ title, author, date, media }) {
      return {
        title: title || 'Sin título',
        subtitle: `${author} - ${new Date(date).toLocaleDateString()}`,
        media,
      };
    },
  },
});