import type { SanityImage, PortableTextBlock } from './sanity';

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

export interface SeccionInformativa {
  _id: string;
  _type: 'divulgacionCientifica' | 'tesisypracticantes' | 'caminataSonora' | 'quienesSomos';
  contenido: Array<PortableTextBlock>;
  imagenDestacada: SanityImage;
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