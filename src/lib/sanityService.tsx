import {client} from './sanity'

export const sanityService = {

/* Servicios Noticias*/

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
               _id,
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
    },

    /*Servicios Equipo*/

    async getAllMiembros(){
        try{
            const query = `*[_type == "miembro" ] | order(_createdAt asc) {
                _id,
                nombreCompleto,
                slug,
                rol,
                ocupacion,
                universidad,
                departamento,
                facultad,
                mail,
                descripcion,
                "foto": foto.asset->url,
            }`
            const data = await client.fetch(query);
            console.log('Miembros del equipo obtenidos:', data);
            return data;
        } catch (error) {
            console.error('Error al obtener miembros del equipo:', error);
            return [];
        }
    },

    async getMiembroBySlug(slug: string) {
        try {
            const query = `*[_type == "miembro" && slug.current == $slug][0] {
                _id,
                nombreCompleto,
                "slug": slug.current,
                rol,
                ocupacion,
                universidad,
                departamento,
                facultad,
                mail,
                descripcion,
                "foto": foto.asset->url,
            }`
            const data = await client.fetch(query, { slug });
            console.log('Miembros del equipo obtenidos:', data);
            return data;
        } catch (error) {
            console.error('Error al obtener miembros del equipo:', error);
            return [];
        }
    },

    /*Servicios Proyectos*/

    async getAllProyectos(){
        try{
            const query = `*[_type == "proyecto"] {
                _id,
                _createdAt,
                titulo,
                autor,
                slug,
                fecha,
                imagenDestacada {
                    "url": asset->url,
                    alt,
                    caption
                },
                cuerpo[] {
                    ..., // Mantiene todos los campos del bloque o imagen
                    // Si el bloque es una imagen, extrae la URL
                    _type == "image" => {
                    "url": asset->url,
                    alt,
                    caption
                    }
                }
                }`
            const data = await client.fetch(query)
            console.log('Proyectos obtenido:', data);
            return data;
        } catch (error) {
            console.error('Error al obtener los proyecto:', error)
            return [];
        }

    },

    async getAllProyectosBySlug(slug: string){
        try{
            const query = `*[_type == "proyecto" && slug.current == $slug][0]{
                _id,
                _type,
                _createdAt,
                _updatedAt,
                titulo,
                slug,
                autor,
                imagenDestacada{
                _type,
                asset->{
                    url,
                    _id,
                    metadata {
                    dimensions {
                        width,
                        height
                    }
                    }
                },
                alt,
                caption
                },
                fecha,
                secciones[]{
                _key,
                _type,
                tituloSeccion,
                subsecciones[]{
                    _key,
                    _type,
                    titulo,
                    contenido[]{
                    ...,
                    _type == 'image' => {
                        _type,
                        _key,
                        asset->{
                        url,
                        _id,
                        metadata {
                            dimensions {
                            width,
                            height
                            }
                        }
                        },
                        alt,
                        caption
                    }
                    }
                }
                },
                cuerpo
            }`;
            const data = await client.fetch(query, { slug})
            console.log('Proyectos obtenido:', data);
            return data;
        } catch (error) {
            console.error('Error al obtener los proyecto:', error)
            return [];
        }

    },

    async getAllEjes() {
        try {
            const query = `*[_type == "eje"] | order(_createdAt asc) {
                _id,
                nombreEje,
                slug { current },
                "imagen": imagen.asset->{
                url,
                "width": metadata.dimensions.width,
                "height": metadata.dimensions.height}
            }`;
            const data = await client.fetch(query);
            console.log('Ejes obtenidos:', data);
            return data;
        } catch (error) {
            console.error('Error al obtener ejes:', error);
            return [];
        }
    },

    async getEjeBySlug(slug: string) {
        try {
            // Nota: Aquí expandimos 'investigaciones' (->) para obtener los datos de la publicación referenciada
            const query = `*[_type == "eje" && slug.current == $slug][0]{
                __id,
                nombreEje,
                slug { current },
                "imagen": imagen.asset->{
                url,
                "width": metadata.dimensions.width,
                "height": metadata.dimensions.height}
            }`;
            
            const data = await client.fetch(query, { slug });
            console.log('Eje obtenido:', data);
            return data;
        } catch (error) {
            console.error('Error al obtener el eje:', error);
            return null;
        }
    },
    async getDocumentosPorCategoria(categoria: 'publicacion' | 'tesis') {
        try {
            // Filtramos por el campo categoría y ordenamos por año descendente (más nuevo primero)
            const query = `*[_type == "publicacion" && categoria == $categoria] | order(anio desc) {
                _id,
                titulo,
                descripcion,
                autor,
                anio,
                categoria,
                "pdfUrl": archivoPdf.asset->url,
                "imagenUrl": imagenDestacada.asset->url
            }`;
            
            const data = await client.fetch(query, { categoria });
            console.log(`Documentos (${categoria}) obtenidos:`, data);
            return data;
        } catch (error) {
            console.error(`Error al obtener ${categoria}:`, error);
            return [];}
    },
        
}