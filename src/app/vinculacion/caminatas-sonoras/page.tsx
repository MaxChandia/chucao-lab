import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { Noticia, SeccionInformativa } from "@/lib/sanityClasses";
import { sanityService } from "@/lib/sanityService";
import Link from "next/link";
import { PortableText } from "next-sanity";

const CaminataSonoras = async () => {
    const noticias: Noticia[] = await sanityService.getAllNoticias();
    const caminatasDescripcion: SeccionInformativa = await sanityService.getContenido('caminataSonora');

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
                    <h2 className="lg:text-5xl md:text-3xl font-bold text-black">
                        Caminatas Sonoras
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

           
            <section className="relative flex flex-col items-center justify-center w-full px-[200px] py-20 font-karla gap-5">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <PortableText value={caminatasDescripcion.contenido} />
                </div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-1 bg-sage-green"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-sage-green" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    <div className="w-16 h-1 bg-sage-green"></div>
                </div>
            </section>

                {/* --- SECCIÓN CARDS (3 Cards) --- */}
            <section className="px-[200px] mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {noticias
                        .filter(noticia => noticia.categoria === "Caminatas Sonoras")
                        .slice(0, 3)
                        .map((noticia) => (
                            <Link 
                                key={noticia._id} 
                                href={`/vinculacion/noticias/${noticia.slug.current}`} 
                                className="group flex flex-col cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                                    {noticia.imagenDestacadaUrl && (
                                        <div className="aspect-video relative">
                                            <Image 
                                                src={noticia.imagenDestacadaUrl}
                                                alt={noticia.titulo} 
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    
                                    <div className="p-5 bg-white flex items-center gap-3 min-h-[100px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-soundwave shrink-0 mt-1 group-hover:text-sage-green transition-colors" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                                        </svg>
                                        <h2 className="font-bold font-jetbrains text-left text-sm leading-tight group-hover:text-sage-green transition-colors">
                                            {noticia.titulo}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
            </div>
    );
};

export default CaminataSonoras;