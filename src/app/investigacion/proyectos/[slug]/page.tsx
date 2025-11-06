import { sanityService } from "@/lib/sanityService";
import heroImage from '@/assets/hero_sections.webp';
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Proyecto } from "@/lib/sanityClasses";

export default async function ProyectoPage({params}:{params: Promise<{slug:string}>}) {
    const {slug} = await params;
    const proyecto: Proyecto  = await sanityService.getAllProyectosBySlug(slug);

    if (!proyecto) {
        return <div className="p-10 text-center">Proyecto no encontrado</div>;
    }

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
                <h2 className="lg:text-5xl text-3xl font-bold text-black">
                    {proyecto.titulo}
                </h2>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
        </section>
        <section className="flex font-karla w-full p-20">
            <div className="Menu hidden lg:block w-[350px] p-10 shadow-lg">
            {proyecto.secciones?.map((seccion) => 
                <div key={seccion._key} className="mb-6 gap-5">
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="items-center bi bi-soundwave shrink-0" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <h2 className="font-bold font-jetbrains text-lg mb-2">MENÚ</h2>
                    </div>
                    
                    <h3 className="font-bold text-gray-800 mb-2 border-b pb-1">
                        {seccion.tituloSeccion}
                    </h3>
                    <ul className="space-y-1 text-sm">
                        {seccion.subsecciones.map((subseccion) => (
                            <li key={subseccion._key} className="hover:text-blue-600 cursor-pointer flex gap-2">
                            <a 
                                            href={`#${seccion._key}-${subseccion._key}`} 
                                            className="hover:text-blue-600 flex gap-2 items-start transition duration-150"
                                        >
                                            <p className="font-bold shrink-0">↘</p> 
                                            {subseccion.titulo}
                                        </a>
                            </li>
                        ))}
                    </ul>
                </div>)}
            </div>
    
            <div className="Texto w-full lg:ml-50  lg:pt-10">
                <div className="flex justify-center"> 
                    <div className="max-w-3xl w-full ">
                        {proyecto.secciones?.map((seccion) => (
                            <div key={seccion._key}>
                                {seccion.subsecciones.map((subseccion) => (
                                    <section
                                        key={subseccion._key}
                                        id={`${seccion._key}-${subseccion._key}`}
                                        data-seccion-id={seccion._key}
                                        data-subseccion-id={subseccion._key}
                                        className="mb-12 scroll-mt-24 "
                                    >
                                        <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                                            {subseccion.titulo}
                                        </h2>
                                        <div className="prose max-w-none font-karla text-justify">
                                            <PortableText value={subseccion.contenido}/>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>

    );
};