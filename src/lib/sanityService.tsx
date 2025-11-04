import {client} from './sanity'

export const sanityService = {

    async getAllNoticias() {
        try{
            const query = `*[_type == "noticia"] | order(publishedAt desc){
               _id,
                titulo,
                slug {
                    current
                },
                "imagenDestacadaUrl": imagenDestacada.asset->url,
                autor,
                fecha,
                categoria,
                bajada,
                cuerpo[] {
                    ...,
                    _type == "image" => {
                    asset->,
                    alt,
                    caption
                    },
                    _type == "youtube" => {
                    url
                    }
                },
                galeria[] {
                    asset->,
                    alt,
                    caption,
                    hotspot
                }
            }`
            const data = await client.fetch(query);
            console.log('Noticias obtenidas:', data);
            return data;
        }catch (error){
            console.error('Error no se encontraron las noticias', error);
            return [];
        }
        

    },

    async getNoticiaBySlug(slug: string) {
        try {
            const query = `*[_type == "noticia" && slug.current == $slug][0]{
               __id,
                titulo,
                slug {
                    current
                },
                imagenDestacada {
                    asset->,
                    alt,
                    caption,
                    hotspot
                },
                autor,
                fecha,
                categoria,
                bajada,
                cuerpo[] {
                    ...,
                    _type == "image" => {
                    asset->,
                    alt,
                    caption
                    },
                    _type == "youtube" => {
                    url
                    }
                },
                galeria[] {
                    asset->,
                    alt,
                    caption,
                    hotspot
                }
            }`

            const data = await client.fetch(query, { slug });

            console.log('📄 Resultado para slug', slug, ':', data);
            return data;
        } catch (error) {
            console.error('❌ Error en getNoticiaBySlug:', error);
            return null;
        }
    }
}