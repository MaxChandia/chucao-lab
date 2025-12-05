import Image from "next/image";
import { PortableText } from '@portabletext/react'; 
import { sanityService } from "@/lib/sanityService";
import heroImage from '@/assets/hero-landing.png';


export default async function EjeDetalle({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const eje = await sanityService.getEjeBySlug(slug);

{
  return (
    <div className="bg-white min-h-screen">
      {/* 1. SECCIÓN HERO (Título) */}
      <section className="hero h-[50vh] sm:h-[60vh] md:h-[70vh] w-full font-karla relative">
        <Image
                src={heroImage}
                alt="Hero Section"
                fill
                className="object-cover z-0"
            />
        
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white text-center uppercase tracking-wider drop-shadow-md">
            {eje.nombreEje || "Nombre del Eje"}
          </h2>
        </div>
        
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* 2. DIVISIÓN: DESCRIPCIÓN E IMAGEN */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Izquierda: Texto del Eje */}
          <div className="font-karla text-lg text-gray-800 leading-relaxed">
            <h3 className="text-2xl font-bold mb-6 text-black border-b-2 border-sage-green inline-block pb-2">
              Sobre este Eje
            </h3>
            <div className="prose prose-lg max-w-none">
                {/* Si 'texto' es PortableText de Sanity */}
                {eje.texto ? <PortableText value={eje.texto} /> : <p>Descripción no disponible.</p>}
            </div>
          </div>

          {/* Derecha: Imagen Principal (Estilo Polaroid o Marco) */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
             {eje.imagen.url ? (
                <Image 
                    src={eje.imagen.url}
                    alt={eje.nombreEje || "Imagen del eje"}
                    fill
                    className="object-cover rounded-lg shadow-xl border-4 border-white"
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
