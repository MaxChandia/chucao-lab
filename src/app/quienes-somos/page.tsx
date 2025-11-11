import { sanityService } from "@/lib/sanityService";
import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import CarrouselItem from "@/lib/carrouselItem";

export default async function QuienesSomos() {
  const equipo = await sanityService.getAllMiembros();

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
      
      <section className="px-10 py-16 lg:px-20 min-h-[70vh] w-full flex flex-col lg:flex-row items-center justify-center gap-6 font-karla">
        <div className="px-5 w-full lg:w-2/4 h-full flex flex-col justify-center leading-relaxed text-justify lg:text-lef gap-4 lg:gap-0">
          <p className="lg:text-md text-base mt-4 line-height-5">
            En <b>ChucaoLab</b> exploramos el Paisaje Sonoro como una forma de entender y conectar con nuestro entorno.
          </p>
          <p>
            Somos un laboratorio dedicado a la investigación, enseñanza y difusión de los sonidos naturales en entornos urbanos, inspirados por el Chucao, un ave nativa de Chile que simboliza la riqueza acústica de la naturaleza.
          </p>
          <p>Nuestro trabajo busca fomentar el bienestar y la conciencia ambiental a través del sonido.</p>
          <p className="mt-10 italic">
            ChucaoLab es un laboratorio de Paisaje Sonoro situado en la Facultad de Artes, perteneciente al Departamento de Sonido de la Universidad de Chile.
          </p>
        </div>
        <div className="chucaoImg w-2/3 h-full flex items-center justify-center">
          <span className="w-[700px] h-[300px] rounded-[20px] bg-gray-300 inline-block"></span>
        </div>
      </section>

      {/* Componente cliente con la paginación */}
      <CarrouselItem equipo={equipo} />
    </div>
  );
}