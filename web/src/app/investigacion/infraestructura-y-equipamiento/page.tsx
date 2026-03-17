import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService"; 
import { PortableText } from '@portabletext/react';
import { Infraestructura } from "@/lib/types/contenido"; 

export default async function InfraestructuraYEquipamiento() {
    
 
    const items: Infraestructura[] = await sanityService.getAllInfraestructura();

    return (
        <div className="bg-white min-h-screen font-karla">
            
            {/* --- HERO SECTION --- */}
        <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">

                <Image

                    src={heroImage}

                    alt="Hero Section"

                    fill

                    className="object-cover z-0"

                />

                <div className="absolute inset-0 flex items-center justify-center z-10">

                    <h2 className="lg:text-5xl text-3xl font-bold text-black text-center">

                        Infraestructura y Equipamiento

                    </h2>

                </div>

                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>

            </section>

            {/* --- LISTADO VERTICAL --- */}
            <section className="container mx-auto px-4 sm:px-10 lg:px-20 py-20">
                <div className="flex flex-col gap-20">
                    
                    {items.length > 0 ? (
                        items.map((item) => (
                            <article 
                                key={item._id} 
                                className="flex flex-col gap-8 border-b border-gray-200 pb-16 last:border-0"
                            >
                                {/* Título del Item */}
                                <h3 className="text-3xl lg:text-4xl font-bold text-black border-l-4 border-sage-green pl-4">
                                    {item.titulo}
                                </h3>

                                <div className="flex flex-col lg:flex-row gap-10">
                                    {/* Imagen Grande */}
                                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative rounded-xl overflow-hidden shadow-lg">
                                        {item.imagen?.asset?.url ? (
                                            <Image
                                                src={item.imagen.asset.url}
                                                alt={item.imagen.alt || item.titulo}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                                Sin Imagen
                                            </div>
                                        )}
                                    </div>

                                    {/* Descripción */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="prose prose-lg text-gray-700 leading-relaxed">
                                            {item.descripcion && <PortableText value={item.descripcion} />}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No hay infraestructura registrada aún.</p>
                    )}

                </div>
            </section>
        </div>
    );
};
