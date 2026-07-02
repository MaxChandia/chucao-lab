import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { Noticia } from "@/lib/types/contenido";
import { sanityService } from "@/lib/sanityService";
import Link from "next/link";
import { HERO_BLUR_DATA_URL } from "@/lib/imageOptimization";
import Paginador from "@/components/paginador/Paginador";

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Noticias({ searchParams }: PageProps) {
    const noticias: Noticia[] = (await sanityService.getAllNoticias()) || [];


    const resolvedSearchParams = await searchParams;
    const currentPage = Number(resolvedSearchParams?.page) || 1;
    const itemsPerPage = 9;
    const totalPages = Math.ceil(noticias.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNoticias = noticias.slice(startIndex, startIndex + itemsPerPage);



    return (
        <div className="bg-[#eefbfc] min-h-screen"> 
            {/* Hero Section */}
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
                    <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-black bg-white/80 px-6 py-2 rounded-md">
                        Noticias
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            {/* Main Content */}
            {/* Ajustamos los paddings y quitamos el max-w para que ocupe todo el ancho disponible */}
            <section className="py-20 px-8 md:px-16 lg:px-24 w-full">
                
                {noticias.length === 0 ? (
                    <div className="text-center text-gray-500 font-karla">
                        No hay noticias disponibles en este momento.
                    </div>
                ) : (
                    <>
                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-start">
                            {currentNoticias.map((noticia) => (
                                <Link
                                    key={noticia._id}
                                    href={`/vinculacion/noticias/${noticia.slug.current}`}
                                    className="group flex flex-col h-full cursor-pointer"
                                >
                                    <div className="flex flex-col h-full transition-all duration-300 transform group-hover:-translate-y-1">
                                        
                                        {noticia.imagenDestacadaUrl && (
                                            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-sm shrink-0">
                                                <Image
                                                    src={noticia.imagenDestacadaUrl}
                                                    alt={noticia.titulo}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        )}

                                        {/* Textos inferiores */}
                                        <div className="mt-5 flex flex-col flex-1">
                                            {/* Título con Icono */}
                                            <div className="flex gap-3 items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-soundwave shrink-0 text-sage-green" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                                <h3 className="font-bold font-jetbrains text-left text-[15px] leading-snug text-black group-hover:text-sage-green transition-colors">
                                                    {noticia.titulo}
                                                </h3>
                                            </div>
                                            
                                            {/* Bajada */}
                                            <div className="mt-3 text-justify text-[14px] font-karla flex-1 text-gray-600 leading-relaxed">
                                                {noticia.bajada}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Paginador Independiente */}
                        <Paginador currentPage={currentPage} totalPages={totalPages} />
                    </>
                )}
            </section>
        </div>
    );
}