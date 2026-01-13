import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService";
import { Practicante } from "@/lib/types/miembros";
import { SeccionInformativa } from "@/lib/types/pages";
import CarrouselPracticantes from "@/lib/carrouselPracticantes";
import { PortableText } from 'next-sanity'; 
import PortableTextComponents from "@/lib/portableTextComponents";

const TesisYPracticas = async () => {

    const practicantes: Practicante[] = await sanityService.getAllPracticantes();
    const tesisypracticas: SeccionInformativa = await sanityService.getContenido('tesisypracticantes');

    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-black">
                        Tesis y Practicantes
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>
            <section className="relative flex flex-col items-center justify-center w-full px-10 lg:px-[100px] py-20 font-karla gap-5">
                <div className="flex flex-col lg:flex-row justify-between prose prose-lg w-full text-gray-700 leading-relaxed">
                    <div className="textContainer flex flex-col justify-center lg:w-1/2 lg:pr-20">
                        <PortableText value={tesisypracticas.contenido} components={PortableTextComponents} />
                        <div className="flex justify-center lg:justify-start items-center gap-4 mb-8">
                            <div className="w-16 h-1 bg-sage-green"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-sage-green" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            <div className="w-16 h-1 bg-sage-green"></div>
                        </div>
                    </div>
                    <div className="ImageContainer flex lg:justify-end lg:w-1/2">
                        {tesisypracticas.imagenDestacada?.asset?.url && (
                            <Image
                                src={tesisypracticas.imagenDestacada.asset.url}
                                alt={tesisypracticas.imagenDestacada.alt || 'Imagen descriptiva'}
                                width={800}
                                height={400}
                                className="rounded-md"
                            />
                        )}
                    </div>
                </div>
            </section>
            <section className="h-60vh w-full font-karla relative mb-20">
                <CarrouselPracticantes miembros={practicantes} />
            </section>
        </div>
    );
};

export default TesisYPracticas;

