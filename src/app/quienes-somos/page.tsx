import { sanityService } from "@/lib/sanityService";
import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp'
import { Colaborador, SeccionInformativa, SeccionSobreNosotros } from "@/lib/sanityClasses";
import CarrouselItem from "@/lib/carrouselItem";
import { PortableText } from "next-sanity";
import PortableTextComponents from "@/lib/portableTextComponents";

export default async function QuienesSomos() {
  const equipo = await sanityService.getAllMiembros();
  const quienesSomos: SeccionInformativa = await sanityService.getContenido('quienesSomos');
  const colaboradores: Colaborador[] = await sanityService.getAllColaboradores();

  return (
    <div>
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
        <Image
          src={heroImage}
          alt="Hero Section"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="lg:text-5xl text-3xl font-bold text-black">
            Quiénes Somos
          </h2>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>
      
      <section className="px-10 py-2 lg:px-20 min-h-[70vh] w-full flex flex-col lg:flex-row items-center justify-center gap-6 font-karla">
        <div className="px-5 w-full lg:w-2/4 h-full flex flex-col justify-center leading-relaxed text-justify lg:text-lef gap-4 lg:gap-0">
          <PortableText value={quienesSomos.contenido} components={PortableTextComponents} />
        </div>
        <div className="chucaoImg w-2/3 h-full flex items-center justify-center">
         <Image
            src={quienesSomos.imagenDestacada?.asset.url || ''}
            alt={quienesSomos.imagenDestacada?.alt || 'Imagen'}
            width={500}
            height={250}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <CarrouselItem equipo={equipo} />

      <section className="Colaboradores">
        <div className="container mx-auto px-6 py-10"></div>
          <h2 className="text-3xl font-bold mb-6 text-center font-karla">Colaboradores</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {colaboradores.map((colaborador) => (
              <div key={colaborador._id} className="flex flex-col items-center">
                <Image
                  src={colaborador.foto?.asset.url || ''}
                  alt={colaborador.nombreCompleto || 'Colaborador'}
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-48 h-48"
                />
                <p className="mt-4 text-center font-karla">{colaborador.nombreCompleto}</p>
                <p className="mt-4 text-center font-karla">{colaborador.campo}</p>
              </div>
            ))}
          </div>
      </section>

    </div>
  );
}