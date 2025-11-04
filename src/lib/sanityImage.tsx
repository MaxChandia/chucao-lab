import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from './sanityClasses';
import { client } from '@/lib/sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}