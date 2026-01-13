import type { SanityImage, Slug, PortableTextBlock } from './sanity';

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
  campoCarrusel1: string;
  campoCarrusel2?: string;
  campoCarrusel3?: string;
  foto: SanityImage;
  descripcion: Array<PortableTextBlock>;
}

export interface Practicante {
  _id: string;
  _type: 'practicante';
  nombreCompleto: string;
  carrera?: string;
  foto: SanityImage;
}

export interface Colaborador {
  _id: string;
  _type: 'colaborador';
  nombreCompleto: string;
  campo: string;
  foto: SanityImage;
}