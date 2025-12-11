import { sanityService } from "@/lib/sanityService";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/lib/portableTextComponents";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero_sections.webp";
import ShareButtons from "@/components/share-buttons/shareButtons";
import { Curso } from "@/lib/sanityClasses"; // Asumo que tienes o crearás esta interfaz en tus clases

export default async function CursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Obtener datos del curso y lista para el sidebar
  const curso = await sanityService.getCursoBySlug(slug);
  const otrosCursos = await sanityService.getAllCursos();

  if (!curso) {
    return <div className="p-10 text-center font-karla">Curso no encontrado</div>;
  }

  return (
    <div>
      {/* Sección hero (Misma estructura que Noticias) */}
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
        <Image 
          src={heroImage} 
          alt="Hero Section" 
          fill 
          className="object-cover z-0" 
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-10 text-center">
          <h2 className="lg:text-4xl md:text-3xl font-bold text-black bg-white/50 p-4 rounded-lg backdrop-blur-sm">
            {curso?.titulo}
          </h2>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* Contenido principal */}
      <main className="text-justify max-w-7xl mx-auto my-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 font-karla">
        
        {/* Columna Izquierda: Contenido del Curso */}
        <article className="lg:col-span-2">
          
          {/* Imagen Principal del Curso (Específica) */}
          {curso.imagenPrincipal?.asset?.url && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
               <Image 
                 src={curso.imagenPrincipal.asset.url} 
                 alt={curso.imagenPrincipal.alt || curso.titulo} 
                 fill 
                 className="object-cover"
               />
            </div>
          )}

          {/* Resumen (Bajada) */}
          <div className="max-w-4xl mx-auto my-10 px-4 font-bold text-lg text-gray-800 border-l-4 border-sage-green pl-4">
            {curso?.resumen}
          </div>

          {/* Cuerpo (Rich Text) */}
          <div className="max-w-4xl mx-auto my-10 px-4 portable-text-content">
            {curso?.contenido && (
              <PortableText 
                value={curso.contenido} 
                components={PortableTextComponents} 
              />
            )}
          </div>

          <div className="mt-8">
            <ShareButtons title={curso?.titulo} />
          </div>
        </article>

        {/* Columna Derecha: Otros Cursos */}
        <aside className="my-9 px-4">
          <h2 className="font-bold text-xl mb-6 border-b-2 border-sage-green pb-2 inline-block">
            Otros Cursos
          </h2>
          <div className="space-y-6">
            {otrosCursos
              .filter((otro: Curso) => otro.slug.current !== curso.slug.current)
              .map((otro: Curso) => (
                <Link
                  key={otro._id}
                  href={`/cursos/${otro.slug.current}`}
                  className="block group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Imagen del sidebar */}
                  <div className="relative h-40 w-full overflow-hidden">
                    {otro.imagenPrincipal?.asset?.url ? (
                      <Image
                        src={otro.imagenPrincipal.asset.url}
                        alt={otro.imagenPrincipal.alt || otro.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        Sin imagen
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-sage-green transition-colors">
                        {otro.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {otro.resumen}
                    </p>
                    <span className="text-xs font-bold underline decoration-sage-green">
                        Ver curso &rarr;
                    </span>
                  </div>
                </Link>
            ))}
            
            {otrosCursos.length <= 1 && (
                <p className="text-gray-500 italic text-sm">No hay otros cursos disponibles por el momento.</p>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}