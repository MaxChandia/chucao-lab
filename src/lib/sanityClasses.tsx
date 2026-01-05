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
    slug: {
        current: string;
    };
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

/*Equipo*/
export interface MiembroEquipo {
    _id: string;
    _type: 'miembro';
    _createdAt: string;
    _updatedAt: string;
    nombreCompleto: string;
    slug: Slug;
    rol: string;
    ocupacion: string;
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

/* NUEVO: Cursos */
export interface Curso {
  _id: string;
  titulo: string;
  slug: Slug;
  resumen: string;
  imagenPrincipal: SanityImage;
  contenido: Array<PortableTextBlock | SanityImage>;
}

export interface ProyectoPrincipal {
  _id: string;
  titulo: string;
  slug: Slug;
  resumen: string;
  extra?: string;
  imagenPrincipal: SanityImage;
}

export interface Practicante {
  _id: string;
  _type: 'practicante';
  nombreCompleto: string;
  carrera: string;
  foto: SanityImage;
}

export interface SeccionHero {
  _id: string;
  _type: 'seccionHero';
  tituloPrincipal: string;
  bajada: string;
}

export interface SeccionSobreNosotros {
  _id: string;
  _type: 'seccionSobreNosotros';
  contenido: Array<PortableTextBlock>; 
  imagenDestacada: SanityImage;
}

export interface Infraestructura {
  _id: string;
  _type: 'infraestructura';
  titulo: string;
  imagen: SanityImage;
  descripcion: Array<PortableTextBlock>;
}

export interface FooterLogo {
  _key: string;
  url: string;
  alt: string;
}

export interface FooterData {
  _id: string;
  _type: 'footer';
  logos: FooterLogo[];
}

export interface Colaborador {
  _id: string;
  _type: 'colaborador';
  nombreCompleto: string;
  campo: string;
  foto: SanityImage;
}

/* Secciones Únicas (Singletons) */
export interface SeccionInformativa {
  _id: string;
  _type: 'divulgacionCientifica' | 'tesisypracticantes' | 'caminataSonora' | 'quienesSomos';
  contenido: Array<PortableTextBlock>;
  imagenDestacada: SanityImage;
}