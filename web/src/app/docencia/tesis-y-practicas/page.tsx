import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService";
import { Practicante } from "@/lib/types/miembros";
import { SeccionInformativa } from "@/lib/types/pages";
import CarrouselPracticantes from "@/components/carrouselPracticantes";
import { PortableText } from 'next-sanity'; 
import PortableTextComponents from "@/lib/portableTextComponents";
import { HERO_BLUR_DATA_URL } from "@/lib/imageOptimization";
import { Documento } from "../../../lib/types/contenido";

const TesisYPracticas = async () => {

    const practicantes: Practicante[] = await sanityService.getAllPracticantes();
    const tesisypracticas: SeccionInformativa = await sanityService.getContenido('tesisypracticantes');
    const tesis: Documento[] = await sanityService.getAllDocumentos();

    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                    priority
                    placeholder="blur"
                    blurDataURL={HERO_BLUR_DATA_URL}
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
            <section className="relative flex flex-col items-center justify-center w-full px-4 sm:px-10 lg:px-20 py-20 font-karla bg-gray-50">
                <div className="text-center mb-12 w-full">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        Tesis
                    </h2>
                    <div className="flex justify-center items-center gap-4">
                        <div className="w-16 h-1 bg-sage-green rounded-full"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-sage-green" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <div className="w-16 h-1 bg-sage-green rounded-full"></div>
                    </div>
                </div>

                <div className={`grid grid-cols-1 gap-8 w-full mx-auto ${
                    tesis.filter((t) => t.categoria === 'Tesis').length === 1 
                    ? 'max-w-3xl' 
                    : 'lg:grid-cols-2 max-w-7xl'
                }`}>
                    
                    {tesis.filter((t) => t.categoria === 'Tesis').map((t) => (
                        <article 
                            key={t._id} 
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-6 sm:p-8 flex flex-col justify-between"
                        >
                        
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                                    {t.titulo}
                                </h3>
                                <p className="text-sm font-semibold text-sage-green mb-4">
                                    {t.autor} • {t.anio}
                                </p>
                                <div className="prose prose-sm text-gray-600 mb-6">
                                    <PortableText value={t.descripcion} components={PortableTextComponents} />
                                </div>
                            </div>

                        
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full uppercase tracking-wide">
                                        {t.ejes}
                                    </span>
                                </div>
                                
                                <div className="flex flex-wrap gap-3">
                                    {t.pdfUrl && (
                                        <a 
                                            href={t.pdfUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="px-5 py-2 bg-sage-green text-white text-sm font-bold rounded hover:bg-black transition-colors"
                                        >
                                            Ver PDF
                                        </a>
                                    )}
                                    {t.citaUrl && (
                                        <a 
                                            href={t.citaUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="px-5 py-2 border-2 border-sage-green text-sage-green text-sm font-bold rounded hover:bg-sage-green hover:text-white transition-colors"
                                        >
                                            Ver Cita
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TesisYPracticas;

