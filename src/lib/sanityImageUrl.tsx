export function getSanityImageUrl(imageRef: string): string {
  // Validar que imageRef existe
  if (!imageRef) {
    console.warn('getSanityImageUrl: imageRef is empty');
    return '';
  }

  // Obtener variables con fallback
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  
  // Si no hay projectId, retornar vacío en lugar de construir URL inválida
  if (!projectId) {
    console.warn('getSanityImageUrl: NEXT_PUBLIC_SANITY_PROJECT_ID is not defined');
    return '';
  }

  try {
    const cleanRef = imageRef
      .replace('image-', '')
      .replace('-webp', '.webp')
      .replace('-jpg', '.jpg')
      .replace('-png', '.png');

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${cleanRef}`;
  } catch (error) {
    console.error('Error building Sanity image URL:', error);
    return '';
  }
}