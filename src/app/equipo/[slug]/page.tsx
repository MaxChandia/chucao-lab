

import { MiembroEquipo } from "@/lib/sanityClasses";
import { sanityService } from "@/lib/sanityService";
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from 'next/link';
import { PortableText } from "@portabletext/react";



export default async function MiembroPage({params}:{params: Promise<{slug: string}>}) {
    const { slug } = await params;

    const miembro: MiembroEquipo | null = await sanityService.getMiembroBySlug(slug);


    if (!miembro) {
        return <div className="p-10 text-center">Miembro no encontrado</div>;
    }
    

    return (
        <div className="min-h-screen pt-20 pb-16 px-5 sm:px-10 lg:px-20 font-karla bg-gray-50">
            <section className="mt-[100px]">
            <Link href="/quienes-somos" className="flex items-center text-black hover:text-blue-600 transition-colors mb-8 w-fit">
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-2"/>
                Volver al equipo
            </Link>

            <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-200">
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b pb-4">
                    {/* Placeholder para la imagen de perfil */}
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-sage-green shadow-md bg-gray-200 flex items-center justify-center">
                        {miembro.foto?.asset?.url ? (
                            <img
                                src={miembro.foto.asset.url}
                                alt={miembro.nombreCompleto}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                Sin Foto
                            </div>
                        )}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{miembro.nombreCompleto}</h1>
                        <p className="text-lg text-gray-600 mt-1">{miembro.rol}</p>
                        <div className="mt-3 text-sm text-gray-500 gap-1">
                            <p className="font-semibold">{miembro.ocupacion}</p>
                            <p >{miembro.facultad}</p>
                            <p>{miembro.departamento}</p>
                            <p>{miembro.universidad}</p>
                            <div className="mt-2 flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3"/>
                                <p>{miembro.mail}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-details">
                    <h2 className="text-xl font-semibold mb-4 border-l-4 border-gray-400 pl-3">Trayectoria y Rol</h2>
                <div className="text-gray-700 space-y-4">
                    {miembro.descripcion && <PortableText value={miembro.descripcion} />}
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}