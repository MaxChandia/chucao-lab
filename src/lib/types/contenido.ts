import type { SanityImage, Slug, PortableTextBlock, YouTubeEmbed } from './sanity';

export interface Noticia {
  _id: string;
  _type: 'noticia';
  _createdAt: string;
  _updatedAt: string;
  titulo: string;
  slug: Slug;
  autor: string;
  categoria: 'Divulgación' | 'Eventos' | 'Caminatas Sonoras' | 'publicaciones';
  fecha: string;
  bajada: string;
  imagenDestacadaUrl: string; 
  cuerpo: Array<PortableTextBlock | SanityImage | YouTubeEmbed>;
  galeria?: SanityImage[];
}

export interface Eje {
  _id: string;
  nombreEje: string;
  slug: Slug;
  imagen: {
    url: string;
    width: number;
    height: number;
    alt?: string;
  }; 
  texto: Array<PortableTextBlock>;
}

export interface Documento {
  _id: string;
  titulo: string;
  descripcion: string;
  autor: string;
  anio: number;
  categoria: 'publicacion' | 'tesis';
  pdfUrl?: string;    
  imagenUrl?: string; 
}

export interface Infraestructura {
  _id: string;
  _type: 'infraestructura';
  titulo: string;
  imagen: SanityImage;
  descripcion: Array<PortableTextBlock>;
}

export interface Curso {
  _id: string;
  titulo: string;
  slug: Slug;
  resumen: string;
  imagenPrincipal: SanityImage;
  contenido: Array<PortableTextBlock | SanityImage>;
}