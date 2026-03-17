import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { PortableText } from "next-sanity";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService";
import PortableTextComponents from "@/lib/portableTextComponents";

const CarrouselItem = dynamic(() => import("@/components/carrouselEquipo"), { ssr: true });
const CarrouselPracticantes = dynamic(() => import("@/components/carrouselPracticantes"), { ssr: true });
const CarrouselColaboradoresAsociados = dynamic(() => import("@/components/carrouselColaboradoresAsociados"), { ssr: true });

export async function generateMetadata(): Promise<Metadata> {
  const contenido = await sanityService.getContenido('quienesSomos');
  return {
    title: "Quiénes Somos",
    description: contenido.resumen,
    openGraph: {
      images: [heroImage.src],
    },
  };
}

export default async function QuienesSomos() {
  const [equipo, quienesSomos, colaboradores, colaboradoresAsociados] = await Promise.all([
    sanityService.getAllMiembros(),
    sanityService.getContenido('quienesSomos'),
    sanityService.getAllColaboradores(),
    sanityService.getAllColaboradoresAsociados(),
  ]);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full relative">
        <Image
          src={heroImage}
          alt="Equipo de trabajo"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="lg:text-5xl text-3xl font-bold text-black bg-white/20 backdrop-blur-sm px-4 py-2 font-karla">
            Quiénes Somos
          </h1>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>
      
      {/* Contenido Principal */}
      <section className="relative w-full px-10 lg:px-[100px] py-20 font-karla">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
          <article className="textContainer lg:w-1/2 lg:pr-20 prose prose-lg">
            <PortableText value={quienesSomos.contenido} components={PortableTextComponents} />
            
            <div className="flex justify-center lg:justify-start items-center gap-4 my-8">
              <div className="w-16 h-1 bg-sage-green"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-sage-green" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
              </svg>
              <div className="w-16 h-1 bg-sage-green"></div>
            </div>
          </article>

          <aside className="ImageContainer flex lg:justify-end lg:w-1/2">
            {quienesSomos.imagenDestacada?.asset?.url && (
              <Image
                src={quienesSomos.imagenDestacada.asset.url}
                alt={quienesSomos.imagenDestacada.alt || 'Imagen descriptiva'}
                width={800}
                height={450}
                className="rounded-md shadow-xl object-cover"
              />
            )}
          </aside>
        </div>
      </section>

      {/* Carruseles */}
      <section className="carrousels-section gap-3 pb-20">
        <CarrouselItem equipo={equipo} />
        <CarrouselPracticantes miembros={colaboradores} />
        <CarrouselColaboradoresAsociados miembros={colaboradoresAsociados} />
      </section>
    </main>
  );
}