import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'publicacion',
  title: 'Publicaciones y Tesis',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción / Resumen',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'autor',
      title: 'Autor/a o Autores',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'anio',
      title: 'Año',
      type: 'string',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Publicación', value: 'Publicación' },
          { title: 'Tesis', value: 'Tesis' },
          { title: 'Congreso', value: 'Congreso' },
          { title: 'Policy Brief', value: 'Policy Brief' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ejes',
      title: 'Eje temático',
      type:'string',
      options:{
        list:[
      { title: 'Diseño y Creación', value: 'Diseño y Creación' }, 
        { title: 'Ecosistemas Naturales', value: 'Ecosistemas Naturales' },
        { title: 'Bienestar Urbano', value: 'Bienestar Urbano' },
        ]

      }

    }),
    defineField({
      name: 'archivoPdf',
      title: 'Archivo PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Sube el documento PDF aquí',
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
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'categoria',
      media: 'imagenDestacada',
    },
    prepare(selection) {
        const { title, subtitle, media } = selection;
        const cat = subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : '';
        return {
            title: title,
            subtitle: cat,
            media: media
        }
    }
  },
});