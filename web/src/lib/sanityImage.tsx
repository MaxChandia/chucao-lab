import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from './types/sanity';
import { client } from '@/lib/sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}