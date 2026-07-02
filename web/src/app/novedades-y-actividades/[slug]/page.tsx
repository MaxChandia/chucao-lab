import { sanityService } from "@/lib/sanityService";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/lib/portableTextComponents";
import Image from "next/image";
import heroImage from "@/assets/hero_sections.webp";
import ShareButtons from "@/components/share-buttons/shareButtons";
import { NovedadActividad } from "@/lib/types/contenido";
// Asegúrate de que esta ruta coincida con la ubicación real de tu componente
import GaleriaCarousel from "@/components/GaleriaCarousel/GaleriaCarousel";

export default async function NovedadActividadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const novedad: NovedadActividad = await sanityService.getNovedadActividadBySlug(slug);

  if (!novedad) {
    return <div className="p-10 text-center ">Contenido no encontrado</div>;
  } 

  return (
    <div>
      {/* Sección hero */}
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
        <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-10 text-center">
          <h2 className="lg:text-4xl text-3xl font-bold text-black">{novedad.titulo}</h2>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* Contenido principal - Centrado sin aside */}
      <main className="text-justify max-w-4xl mx-auto my-10 px-4">
        <article>
          <div className="font-bold my-10 text-lg">{novedad.bajada}</div>
          
          <div className="my-10">
            {novedad.cuerpo && <PortableText value={novedad.cuerpo} components={PortableTextComponents} />}
          </div>

          {/* Galería de imágenes (Componente Carrusel) */}
          {novedad.galeria && novedad.galeria.length > 0 && (
            <GaleriaCarousel imagenes={novedad.galeria} />
          )}

          <div className="mt-10">
            <ShareButtons title={novedad.titulo} />
          </div>
        </article>
      </main>
    </div>
  );
}