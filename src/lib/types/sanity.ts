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