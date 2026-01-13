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