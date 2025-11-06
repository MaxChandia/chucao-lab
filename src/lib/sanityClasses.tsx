import { PortableTextBlock as PortableTextBlockType } from "@portabletext/react";

export interface SanityAsset {
  url: string;
  _id?: string;
  metadata?: {
    dimensions: {
      width: number;
      height: number;
    };
  };
}

export interface SanityImage {
  _type: 'image';
  asset: SanityAsset;
  alt?: string | null;
  caption?: string | null;
}

export interface Slug {
  current: string;
}

export interface PortableTextBlock {
  _key: string;
  _type: string;
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
    marks?: string[];
  }>;
  style?: string;
  listItem?: string;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
}

export interface YouTubeEmbed {
  _type: 'youtube';
  _key: string;
  url: string;
}

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

export interface Noticia {
    _id: string;
    _type: 'noticia';
    _createdAt: string;
    _updatedAt: string;
    titulo: string;
    slug: Slug;
    autor: string;
    categoria: 'investigacion' | 'eventos' | 'noticias' | 'publicaciones';
    fecha: string;
    bajada: string;
    imagenDestacadaUrl: string; 
    cuerpo: Array<PortableTextBlock | SanityImage | YouTubeEmbed>;
    galeria?: SanityImage[];
}

/*Equipo*/
export interface MiembroEquipo {
    _id: string;
    _type: 'miembro';
    _createdAt: string;
    _updatedAt: string;
    nombreCompleto: string;
    slug: Slug;
    rol: string;
    universidad: string;
    facultad: string;
    departamento: string;
    mail: string;
    foto: SanityImage;
    descripcion: Array<PortableTextBlock>;
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