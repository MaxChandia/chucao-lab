import {client} from './sanity'



export const sanityService = {

    /* Método para obtener noticias desde Sanity */
    async getAllNoticias(){
        return await client.fetch(
            `*[_type == "noticias"] | order(publishedAt desc){ 
                _id,
                title,
                "slug": slug.current,
                author,
                "mainImage": mainImage.asset->url,
                categories,
                publishedAt,
                upperBody,
                body,
            }`
        )

    },

    async getNoticiaBySlug(slug: string) {
  try {

    const allPosts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
    console.log('Todos los posts disponibles:', allPosts);


    const query = `
      *[_type == "noticias" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        author,
        "mainImage": mainImage.asset->url,
        categories,
        publishedAt,
        aditionalImages,
        upperBody,
        body,
      }
    `;

    const data = await client.fetch(query, { slug });

    console.log('📄 Resultado para slug', slug, ':', data);
    return data;
  } catch (error) {
    console.error('❌ Error en getNoticiaBySlug:', error);
    return null;
  }
}
}