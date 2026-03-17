import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Panel de Control Chucao Lab')
    .items([
      S.documentTypeListItem('noticia').title('Noticias'),
      S.documentTypeListItem('proyecto').title('Proyectos'),
      S.documentTypeListItem('publicacion').title('Publicaciones'),
      S.documentTypeListItem('miembro').title('Equipo'),
      S.documentTypeListItem('practicante').title('Practicantes (Lista)'),
      S.documentTypeListItem('curso').title('Cursos'),
      S.documentTypeListItem('infraestructura').title('Infraestructura y Equipamiento'),
      S.documentTypeListItem('eje').title('Ejes de Investigación'),
      S.documentTypeListItem('colaborador').title('Colaboradores'),
      S.documentTypeListItem('colaboradorAsociado').title('Colaboradores Asociados'),
      
      S.divider(),

      S.listItem()
        .title('Página de Inicio')
        .child(
          S.list()
            .title('Secciones de Inicio')
            .items([
              S.listItem()
                .title('Descripción Superior')
                .child(S.document().schemaType('descripcionInicio').documentId('descripcionInicio')),
              S.listItem()
                .title('Proyecto Principal Destacado')
                .child(S.document().schemaType('proyectoPrincipal').documentId('proyectoPrincipal')),
              
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Otras Secciones Únicas')
        .child(
          S.list()
            .title('Contenidos Fijos')
            .items([
              S.listItem()
                .title('Caminata Sonora (Descripción)' )
                .child(S.document().schemaType('caminataSonora').documentId('caminataSonora')),
              S.listItem()
                .title('Divulgación Científica (Descripción)')
                .child(S.document().schemaType('divulgacionCientifica').documentId('divulgacionCientifica')),
              S.listItem()
                .title('Tesis y Practicantes (Descripción)')
                .child(S.document().schemaType('tesisypracticantes').documentId('tesisypracticantes')),
              S.listItem()
                .title('Quiénes Somos (Descripción)')
                .child(S.document().schemaType('quienesSomos').documentId('quienesSomos')),
              S.listItem()
                .title('Footer (Logos')
                .child(S.document().schemaType('footer').documentId('footer')),
            ])
        ),
    ]);