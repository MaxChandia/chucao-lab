import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService";

const Publicaciones = async () => {

    // 1. Obtenemos solo los documentos marcados como 'publicacion'
    const documentos = await sanityService.getDocumentosPorCategoria('publicacion');

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
                    <h2 className="lg:text-5xl md:text-3xl font-bold text-black">
                        Publicaciones
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

             {/* LISTA DE PUBLICACIONES */}
             <section className="container mx-auto px-6 py-16">
                <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                    {documentos && documentos.length > 0 ? (
                        documentos.map((doc: any) => (
                            <div key={doc._id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                
                                {/* Portada (Opcional, si existe imagen) */}
                                {doc.imagenUrl && (
                                    <div className="w-full md:w-48 h-64 relative shrink-0">
                                         <Image 
                                            src={doc.imagenUrl} 
                                            alt={doc.titulo} 
                                            fill 
                                            className="object-cover rounded shadow-sm"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold font-jetbrains">
                                            {doc.anio}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase tracking-wide">Publicación</span>
                                    </div>

                                    <h3 className="text-2xl font-bold font-karla mb-2 text-black">
                                        {doc.titulo}
                                    </h3>
                                    
                                    <p className="text-sage-green font-semibold italic mb-4 text-sm">
                                        {doc.autor}
                                    </p>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {doc.descripcion}
                                    </p>

                                    {doc.pdfUrl ? (
                                        <a 
                                            href={`${doc.pdfUrl}?dl=`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="mt-auto self-start flex items-center gap-2 text-black hover:text-sage-green font-bold transition-colors underline decoration-2 underline-offset-4"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                            </svg>
                                            Leer Publicación Completa
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 text-sm italic">Recurso no disponible</span>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No hay publicaciones registradas.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Publicaciones;