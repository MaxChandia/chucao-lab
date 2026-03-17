import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { Noticia} from "@/lib/types/contenido";
import { SeccionInformativa } from "@/lib/types/pages";
import { sanityService } from "@/lib/sanityService";
import Link from "next/link";
import { PortableText } from 'next-sanity';
import { PortableTextComponents } from "@/lib/portableTextComponents";

const DivulgacionCientifica = async () => {
    const noticias: Noticia[] = await sanityService.getAllNoticias();
    const divulgacionDescripcion: SeccionInformativa = await sanityService.getContenido('divulgacionCientifica');

    return (
        <div>
            {/* --- HERO SECTION --- */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-black">
                        Divulgación Científica
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

           <section className="relative flex flex-col items-center justify-center w-full px-10 lg:px-[100px] py-20 font-karla gap-5">
                <div className="flex flex-col lg:flex-row-reverse justify-between prose prose-lg w-full text-gray-700 leading-relaxed">
                    <div className="textContainer flex flex-col justify-center lg:w-1/2 lg:pl-20">
                        <PortableText value={divulgacionDescripcion.contenido} components={PortableTextComponents} />
                        <div className="flex justify-center lg:justify-end items-center gap-4 mb-8">
                            <div className="w-16 h-1 bg-sage-green"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-sage-green" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            <div className="w-16 h-1 bg-sage-green"></div>
                        </div>
                    </div>
                    <div className="ImageContainer flex lg:justify-start lg:w-1/2">
                        {divulgacionDescripcion.imagenDestacada?.asset?.url && (
                            <Image
                                src={divulgacionDescripcion.imagenDestacada.asset.url}
                                alt={divulgacionDescripcion.imagenDestacada.alt || 'Imagen descriptiva'}
                                width={800}
                                height={400}
                                className="rounded-md"
                            />
                        )}
                    </div>
                </div>
            </section>
           

                {/* --- SECCIÓN CARDS  --- */}
            <section className="px-[100px] mb-20">
                <h2 className="lg:text-3xl text-xl font-bold font-karla mb-10 text-center">Últimas Noticias de Divulgación Científica</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {noticias
                        .filter(noticia => noticia.categoria === "Divulgación")
                        .slice(0, 3)
                        .map((noticia) => (
                            <Link 
                                key={noticia._id} 
                                href={`/vinculacion/noticias/${noticia.slug.current}`} 
                                className="group flex flex-col cursor-pointer"
                            >
                                <div className="transition-all duration-300 group-hover:-translate-y-2">
                                    {noticia.imagenDestacadaUrl && (
                                        <div className="relative mb-4">
                                            <Image 
                                                src={noticia.imagenDestacadaUrl}
                                                alt={noticia.titulo} 
                                                width={400} 
                                                height={250} 
                                                className="rounded-lg w-full h-auto shadow-md group-hover:shadow-xl transition-shadow duration-300"
                                            />
                                            
                                        </div>
                                    )}
                                    
                                    <div className="flex flex-col">
                                        <div className="flex gap-2 items-start mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="shrink-0 text-sage-green" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                            <h2 className="font-bold font-jetbrains text-md leading-tight group-hover:text-sage-green transition-colors">
                                                {noticia.titulo}
                                            </h2>
                                        </div>
                                        
                                        <p className="text-sm text-gray-600 font-karla leading-relaxed">
                                            {noticia.bajada}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default DivulgacionCientifica;