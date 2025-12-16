import {client} from './sanity'

export const sanityService = {

  /* Servicios Noticias */

  async getAllNoticias() {
    try {
      const query = `*[_type == "noticia"] | order(publishedAt desc){
                _id,
                titulo,
                slug { current },
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
      return data;
    } catch (error) {
      console.error('Error no se encontraron las noticias', error);
      return [];
    }
  },

  async getNoticiaBySlug(slug: string) {
    try {
      const query = `*[_type == "noticia" && slug.current == $slug][0]{
                _id,
                titulo,
                slug { current },
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
      return data;
    } catch (error) {
      console.error('❌ Error en getNoticiaBySlug:', error);
      return null;
    }
  },

  /* Servicios Equipo */

  async getAllMiembros() {
    try {
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
                foto {
                    asset-> {
                        url
                    }
                }
            }`
      const data = await client.fetch(query);
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
      return data;
    } catch (error) {
      console.error('Error al obtener miembros del equipo:', error);
      return [];
    }
  },

  /* Servicios Proyectos */

  async getAllProyectos() {
    try {
      const query = `*[_type == "proyecto"] | order(fecha desc) {
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
                    ...,
                    _type == "image" => {
                        "url": asset->url,
                        alt,
                        caption
                    }
                }
            }`
      const data = await client.fetch(query)
      return data;
    } catch (error) {
      console.error('Error al obtener los proyecto:', error)
      return [];
    }
  },

  async getAllProyectosBySlug(slug: string) {
    try {
      // AQUÍ ESTÁ LA LÓGICA ACTUALIZADA PARA LAS SECCIONES MIXTAS
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
                        metadata { dimensions { width, height } }
                    },
                    alt,
                    caption
                },
                fecha,
                secciones[]{
                    _key,
                    _type,
                    // CASO 1: Si es una sección de texto
                    _type == 'seccion' => {
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
                                        metadata { dimensions { width, height } }
                                    },
                                    alt,
                                    caption
                                },
                                _type == "youtube" => { url }
                            }
                        }
                    },
                    // CASO 2: Si es una imagen principal sola (sin caption)
                    _type == 'imagenPrincipal' => {
                         alt,
                         asset->{
                            url,
                            _id,
                            metadata { dimensions { width, height } }
                        }
                    }
                },
                cuerpo
            }`;
      const data = await client.fetch(query, { slug })
      return data;
    } catch (error) {
      console.error('Error al obtener los proyecto:', error)
      return [];
    }
  },

  /* --- NUEVO: SERVICIOS PARA CURSOS --- */

  async getAllCursos() {
    try {
      const query = `*[_type == "curso"] | order(_createdAt desc) {
            _id,
            titulo,
            slug,
            resumen,
            imagenPrincipal {
               asset->{
                    url,
                    metadata { dimensions { width, height } }
               },
               alt
            }
        }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error obteniendo cursos:', error);
      return [];
    }
  },

  async getCursoBySlug(slug: string) {
    try {
      const query = `*[_type == "curso" && slug.current == $slug][0] {
            _id,
            titulo,
            slug,
            resumen,
            imagenPrincipal {
               asset->{
                    url,
                    metadata { dimensions { width, height } }
               },
               alt
            },
            contenido[]{
                ...,
                _type == "image" => {
                   asset->{url},
                   alt
                },
                 markDefs[]{
                    ...,
                    _type == "link" => {
                        href
                    }
                }
            }
        }`;
      const data = await client.fetch(query, { slug });
      return data;
    } catch (error) {
      console.error('Error obteniendo curso:', error);
      return null;
    }
  },

  /* --- NUEVO: SERVICIO PARA PROYECTO PRINCIPAL (Jardín Sonoro) --- */
  
  // Obtiene el último proyecto principal creado para mostrar en la home
  async getProyectoPrincipalDestacado() {
    try {
        const query = `*[_type == "proyectoPrincipal"] | order(_createdAt desc)[0] {
            _id,
            titulo,
            slug,
            resumen,
            extra,
            imagenPrincipal {
                asset->{
                    url,
                    metadata { dimensions { width, height } }
                },
                alt
            }
        }`;
        const data = await client.fetch(query);
        return data;
    } catch (error) {
        console.error('Error obteniendo proyecto principal:', error);
        return null;
    }
  },


  /* Servicios Ejes */

  async getAllEjes() {
    try {
      const query = `*[_type == "eje"] | order(_createdAt asc) {
                _id,
                nombreEje,
                slug { current },
                "imagen": imagen.asset->{
                    url,
                    "width": metadata.dimensions.width,
                    "height": metadata.dimensions.height
                }
            }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error al obtener ejes:', error);
      return [];
    }
  },

  async getEjeBySlug(slug: string) {
    try {
      const query = `*[_type == "eje" && slug.current == $slug][0]{
                _id,
                nombreEje,
                slug { current },
                texto,
                "imagen": imagen.asset->{
                    url,
                    "width": metadata.dimensions.width,
                    "height": metadata.dimensions.height
                },

            }`;

      const data = await client.fetch(query, { slug });
      return data;
    } catch (error) {
      console.error('Error al obtener el eje:', error);
      return null;
    }
  },

  async getDocumentosPorCategoria(categoria: 'publicacion' | 'tesis') {
    try {
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
      return data;
    } catch (error) {
      console.error(`Error al obtener ${categoria}:`, error);
      return [];
    }
  },

  async getSeccionHero() {
    try {
      const query = `*[_type == "seccionHero"][0] {
            _id,
            tituloPrincipal,
            bajada
        }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error obteniendo sección Hero:', error);
      return null;
    }
  },

  // Obtiene la sección "Quiénes Somos" (Texto + Imagen)
  async getSeccionSobreNosotros() {
    try {
      const query = `*[_type == "seccionSobreNosotros"][0] {
            _id,
            contenido,
            imagenDestacada {
               asset->{
                   url,
                   metadata { dimensions { width, height } }
               },
               alt
            }
        }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error obteniendo sección Sobre Nosotros:', error);
      return null;
    }
  },

  /* --- SERVICIOS PRACTICANTES --- */

  async getAllPracticantes() {
    try {
      const query = `*[_type == "practicante"] | order(_createdAt desc) {
            _id,
            nombreCompleto,
            carrera,
            foto {
               asset->{
                   url,
                   metadata { dimensions { width, height } }
               },
               alt
            }
        }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error obteniendo practicantes:', error);
      return [];
    }
  },
  async getAllInfraestructura() {
    try {
      const query = `*[_type == "infraestructura"] | order(_createdAt asc) {
            _id,
            titulo,
            descripcion,
            imagen {
               asset->{
                   url,
                   metadata { dimensions { width, height } }
               },
               alt
            }
        }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error obteniendo infraestructura:', error);
      return [];
    }
  },

}

