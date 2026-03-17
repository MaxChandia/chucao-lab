import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'miembro',
  title: 'Equipo',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreCompleto',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
       defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nombreCompleto', 
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rol',
      title: 'Rol',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ocupacion',
      title: 'Ocupación',
      type: 'string',
    }),
    defineField({
      name: 'universidad',
      title: 'Universidad',
      type: 'string',
    }),
    defineField({
      name: 'facultad',
      title: 'Facultad',
      type: 'string',
    }),
    defineField({
      name: 'departamento',
      title: 'Departamento',
      type: 'string',
    }),
    defineField({
      name: 'mail',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
        defineField({
      name: 'campoCarrusel1',
      title: 'Campo 1',
      type: 'string',
    }),
        defineField({
      name: 'campoCarrusel2',
      title: 'Campo 2',
      type: 'string',
    }),
        defineField({
      name: 'campoCarrusel3',
      title: 'Campo 3',
      type: 'string',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
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
                  {
                    name: 'label',
                    type: 'string',
                    title: 'Etiqueta',
                  },
                ],
              },
            ],
          },
        },
      ],
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
      subtitle: 'rol',
      media: 'foto',
    },
  },
});