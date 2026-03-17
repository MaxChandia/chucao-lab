import type { SanityImage, Slug, PortableTextBlock, YouTubeEmbed } from './sanity';

export interface Subseccion {
  _key: string;
  _type: 'subseccion';
  titulo: string;
  contenido: Array<PortableTextBlock | SanityImage | YouTubeEmbed>;
}

export interface Seccion {
  _key: string;
  _type: 'seccion';
  tituloSeccion: string;
  subsecciones: Subseccion[];
}

export interface Proyecto {
  _id: string;
  _type: 'proyecto';
  _createdAt: string;
  _updatedAt: string;
  titulo: string;
  slug: Slug;
  autor: string;
  imagenDestacada: SanityImage; 
  fecha: string;
  secciones?: Seccion[]; 
  cuerpo?: Array<PortableTextBlock | SanityImage>;
}

export interface ProyectoPrincipal {
  _id: string;
  titulo: string;
  slug: Slug;
  resumen: string;
  extra?: string;
  imagenPrincipal: SanityImage;
}