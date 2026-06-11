import type { StructureResolver } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'


export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Panel de Control Chucao Lab')
    .items([
      S.documentTypeListItem('noticia').title('Noticias'),
      S.documentTypeListItem('novedadActividad').title('Novedades y Actividades'),
      S.documentTypeListItem('proyecto').title('Proyectos'),
      S.documentTypeListItem('publicacion').title('Publicaciones'),
      
      orderableDocumentListDeskItem({
        type: 'miembro',
        title: 'Equipo',
        S,
        context,
      }),
      
      
      orderableDocumentListDeskItem({
        type: 'practicante',
        title: 'Practicantes',
        S,
        context,
      }),
      
      S.documentTypeListItem('curso').title('Cursos'),
      S.documentTypeListItem('infraestructura').title('Infraestructura y Equipamiento'),
      S.documentTypeListItem('eje').title('Ejes de Investigación'),
      
      orderableDocumentListDeskItem({
        type: 'colaborador',
        title: 'Colaboradores',
        S,
        context,
      }),
      
      
      orderableDocumentListDeskItem({
        type: 'colaboradorAsociado',
        title: 'Colaboradores Asociados',
        S,
        context,
      }),
      
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
                .title('Caminata Sonora (Descripción)')
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
                .title('Footer (Logos)')
                .child(S.document().schemaType('footer').documentId('footer')),
            ])
        ),
    ]);