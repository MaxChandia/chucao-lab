import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService";
import { Documento } from "@/lib/sanityClasses";

const TesisYPracticas = async () => {

    const documentos: Documento[] = await sanityService.getDocumentosPorCategoria('tesis');

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
                        Tesis y Prácticas
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            {/* LISTA DE TESIS */}
            <section className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto flex flex-col gap-10">
                    {documentos && documentos.length > 0 ? (
                        documentos.map((doc: Documento) => (
                            <div key={doc._id} className="border-b border-gray-200 pb-8 last:border-0">
                                {/* Título */}
                                <h3 className="text-2xl font-bold font-karla text-black mb-2 text-justify">
                                    {doc.titulo}
                                </h3>

                                {/* Datos: Año y Autor */}
                                <div className="text-sm text-gray-600 font-jetbrains mb-4 flex gap-2 items-center">
                                    <span className="bg-gray-100 text-black px-2 py-0.5 rounded font-bold">
                                        {doc.anio}
                                    </span>
                                    <span className="text-gray-400">|</span>
                                    <span className="italic text-lg">{doc.autor}</span>
                                </div>

                                {/* Descripción */}
                                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                                    {doc.descripcion}
                                </p>

                                {/* Enlace de descarga simple */}
                                {doc.pdfUrl ? (
                                    <a 
                                        href={`${doc.pdfUrl}?dl=`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sage-green font-bold hover:underline hover:text-black transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                        </svg>
                                        Descargar PDF
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-sm italic">PDF no disponible</span>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 italic py-10">No hay tesis registradas por el momento.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TesisYPracticas;

