import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { Noticia } from "@/lib/sanityClasses";
import { sanityService } from "@/lib/sanityService";
import Link from "next/link";

const DivulgacionCientifica = async () => {
    const noticias: Noticia[] = await sanityService.getAllNoticias();

    const formatearFecha = (fecha: string) => {
        const date = new Date(fecha);
        return date.toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

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
                    <h2 className="lg:text-5xl md:text-3xl font-bold text-black">
                        Divulgación Científica
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            <section className="min-h-screen p-20">
                     <div className="newsContainer flex flex-col lg:flex-row gap-20">
          {noticias.slice(0, 3).filter(noticia => noticia.categoria === "Divulgación").map((noticia) => (
            <Link 
              key={noticia._id} 
              href={`/vinculacion/noticias/${noticia.slug.current}`} 
              className="newsItem min-h-[480px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col w-full lg:w-1/3 cursor-pointer hover:scale-101 transition-transform duration-300"
            >
              <div className=" transition-all duration-300 transform hover:-translate-y-2 hover:text-gray-500 ">
              {noticia.imagenDestacadaUrl && (
                <div className="relative">
                <Image 
                  src={noticia.imagenDestacadaUrl}
                  alt={noticia.titulo} 
                  width={400} 
                  height={250} 
                  className="rounded-md"
                />
                <div className="absolute top-4 left-4">
                                                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black">
                                                    {noticia.categoria}
                                                </span>
                                            </div>
                </div>
              )}
              <div className="mt-3 flex flex-col flex-1 py-3">
                <div className="flex gap-2 min-h-[60px] lg:w-[400px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-soundwave shrink-0" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                  </svg>
                  <h2 className="font-bold font-jetbrains text-justify lg:text-left text-sm leading-tight">
                    {noticia.titulo}
                  </h2>
                </div>
                <div className="mt-1 text-justify lg:text-justify text-sm font-karla lg:w-[400px] flex-1">
                  {noticia.bajada} 
                </div>
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