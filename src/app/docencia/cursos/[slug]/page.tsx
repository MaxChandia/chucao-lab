import { sanityService } from "@/lib/sanityService";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/lib/portableTextComponents";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero_sections.webp";
import ShareButtons from "@/components/share-buttons/shareButtons";
import { Curso } from "@/lib/sanityClasses";

export default async function CursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const curso: Curso = await sanityService.getCursoBySlug(slug);
  const otrosCursos = await sanityService.getAllCursos();

  if (!curso) {
    return <div className="p-10 text-center font-karla">Curso no encontrado</div>;
  }


  const cursosSugeridos = otrosCursos
    .filter((otro: Curso) => otro.slug.current !== curso.slug.current)
    .slice(0, 3);

  return (
    <div>
      {/* SECCIÓN 1: HERO */}
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
        <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-10 text-center">
          <h2 className="lg:text-6xl md:text-3xl font-bold text-black">{curso.titulo}</h2>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* CUERPO PRINCIPAL: 3 SECCIONES HACIA ABAJO */}
      <main className="max-w-7xl mx-auto my-10 px-4 font-karla">
        
        {/* --- PRIMERA SECCIÓN: Descripción (Izq) e Imagen (Der) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Izquierda: Texto */}
          <div className="text-justify">
            <div className="font-bold mb-6 text-lg">{curso.resumen}</div>
            <div className="portable-text-content">
              {curso.contenido && (
                <PortableText value={curso.contenido} components={PortableTextComponents} />
              )}
            </div>
          </div>

          {/* Derecha: Imagen Principal */}
          <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg border border-gray-100">
            {curso.imagenPrincipal?.asset?.url ? (
              <Image
                src={curso.imagenPrincipal.asset.url}
                alt={curso.imagenPrincipal.alt || curso.titulo}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Sin imagen
              </div>
            )}
          </div>
        </section>

        {/* --- SEGUNDA SECCIÓN: Compartir --- */}
        <section className="mb-16 border-t border-gray-200 pt-6">
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-4">Compartir este curso</h3>
          <div className="flex justify-start">
             <ShareButtons title={curso.titulo} />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-2xl mb-8 border-b-2 border-sage-green inline-block pb-2">
            Otros Cursos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosSugeridos.length > 0 ? (
              cursosSugeridos.map((otro: Curso) => (
                <Link
                  key={otro._id}
                  href={`/cursos/${otro.slug.current}`}
                  className="block group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Imagen Card */}
                  <div className="relative h-48 w-full">
                    {otro.imagenPrincipal?.asset?.url ? (
                      <Image
                        src={otro.imagenPrincipal.asset.url}
                        alt={otro.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        Sin imagen
                      </div>
                    )}
                  </div>
                  
                  {/* Texto Card */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-sage-green transition-colors line-clamp-2">
                        {otro.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">Leer más...</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-3 text-gray-500 italic">No hay otros cursos disponibles.</p>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}