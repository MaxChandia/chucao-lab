export function getSanityImageUrl(imageRef: string): string {
 const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  
  
  if (!projectId) {
    console.error('NEXT_PUBLIC_SANITY_PROJECT_ID is not defined');
    return '';
  }

  const cleanRef = imageRef
    .replace('image-', '')
    .replace('-webp', '.webp')
    .replace('-jpg', '.jpg')
    .replace('-png', '.png');

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${cleanRef}`;
}