import Image from "next/image";
import { PortableText } from '@portabletext/react'; 
import { sanityService } from "@/lib/sanityService";
import heroImage from '@/assets/hero-landing.png';
import { Eje } from "@/lib/sanityClasses";


export default async function EjeDetalle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const eje: Eje = await sanityService.getEjeBySlug(slug);

{
  return (
    <div className="bg-white min-h-screen">
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full relative">
              <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" priority />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="lg:text-5xl md:text-3xl font-karla font-bold text-black">{eje.nombreEje.toLocaleLowerCase().charAt(0).toUpperCase() + eje.nombreEje.toLocaleLowerCase().slice(1)}</h2>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* 2. DIVISIÓN: DESCRIPCIÓN E IMAGEN */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Izquierda: Texto del Eje */}
          <div className="font-karla text-lg text-gray-800 leading-relaxed px-20 text-justify">
            <h3 className="text-2xl font-bold mb-6 text-black border-b-2 border-sage-green inline-block pb-2">
              Sobre este Eje
            </h3>
            <div className="prose prose-lg max-w-none">
                {eje.texto && <PortableText value={eje.texto} />}
            </div>
          </div>

          {/* Derecha: Imagen Principal (Estilo Polaroid o Marco) */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
             {eje.imagen.url ? (
                <Image 
                    src={eje.imagen.url}
                    alt={eje.nombreEje || "Imagen del eje"}
                    fill
                    className="object-cover px-20"
                />
             ) : (
                 <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                     Sin Imagen
                 </div>
             )}
          </div>
        </div>
      </section>

      {/* 3. LISTA DE INVESTIGACIONES RELACIONADAS */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 font-karla">
                Investigaciones Relacionadas
            </h3>

        </div>
      </section>
    </div>
  );
};
};
