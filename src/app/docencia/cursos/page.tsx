import Image from "next/image";
import Link from "next/link";
import heroImage from '@/assets/hero_sections.webp'; 
import { sanityService } from '@/lib/sanityService';
import { Curso } from "@/lib/sanityClasses";

export default async function CursosPage() {
    const cursos = await sanityService.getAllCursos();

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION (Se mantiene igual) */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 px-10 text-center">
                    <h2 className="lg:text-5xl md:text-3xl font-bold text-black bg-white/60 p-6 rounded-xl backdrop-blur-sm">
                        Nuestros Cursos
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            {/* LISTADO TIPO RECTÁNGULO */}
            <section className="max-w-5xl mx-auto px-4 py-20 font-karla">
                <div className="flex flex-col gap-8">
                    {cursos?.length > 0 ? (
                        cursos.map((curso: Curso) => (
                            <Link 
                                key={curso._id} 
                                href={`/docencia/cursos/${curso.slug.current}`}
                                className="group flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-auto md:h-72"
                            >
                                {/* LADO IZQUIERDO: TEXTO (Título y Resumen) */}
                                <div className="flex-1 p-8 flex flex-col justify-center items-start order-2 md:order-1">
                                    <h3 className="text-2xl lg:text-3xl font-bold font-jetbrains mb-4 group-hover:text-sage-green transition-colors">
                                        {curso.titulo}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed line-clamp-3 mb-6">
                                        {curso.resumen}
                                    </p>
                                    
                                    <span className="mt-auto inline-flex items-center text-sm font-bold font-jetbrains bg-black text-white px-6 py-2 rounded-full group-hover:bg-sage-green transition-colors">
                                        VER DETALLES
                                    </span>
                                </div>

                                {/* LADO DERECHO: IMAGEN */}
                                <div className="relative w-full md:w-2/5 lg:w-1/3 h-64 md:h-full order-1 md:order-2 overflow-hidden">
                                    {curso.imagenPrincipal?.asset?.url ? (
                                        <Image
                                            src={curso.imagenPrincipal.asset.url}
                                            alt={curso.imagenPrincipal.alt || curso.titulo}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400">Sin imagen</span>
                                        </div>
                                    )}
                                    {/* Overlay sutil al hacer hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">Próximamente publicaremos nuevos cursos.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};