"use client";

import { Noticia } from "@/lib/sanityClasses";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { sanityService } from "@/lib/sanityService";
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from "@/lib/portableTextComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import heroImage from '@/assets/hero_sections.webp';
import Image from "next/image";
import Link from "next/link";
import { faX } from "@fortawesome/free-solid-svg-icons";

const NoticiaPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [otrasNoticias, setOtrasNoticias] = useState<Noticia[]>([]);

    const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';

    useEffect(() => {   
        const fetchData = async () => {
            try {
                const data = await sanityService.getNoticiaBySlug(slug);
                const otrasNoticias = await sanityService.getAllNoticias();
                if (!data) {
                    return <div>Noticia no encontrada</div>;
                }
                setNoticia(data);
                setOtrasNoticias(otrasNoticias);
            } catch (error) {
                console.error("Error fetching noticia:", error);
            }
        };

        fetchData();
    }, [slug]);



    return (
        <div>
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 px-10 text-center">
                    <h2 className="lg:text-4xl md:text-3xl font-bold text-black">
                        {noticia?.titulo}
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>
            <main className="text-justify max-w-7xl mx-auto my-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <article className="lg:col-span-2">
                    <div className="max-w-4xl mx-auto my-10 px-4 font-bold">
                       {noticia?.bajada}
                    </div>
                    <div className="max-w-4xl mx-auto my-10 px-4">
                       {noticia?.cuerpo && (
                            <PortableText
                                value={noticia.cuerpo}
                                components={PortableTextComponents}
                            />
                       )}
                    </div>

                    <section className="max-w-4xl mx-auto my-10 px-4">
                        <h2 className="font-bold text-xl mb-4">Comparte esta noticia</h2>
                        <div className="flex gap-4 mt-2">
                            {/* Facebook */}
                            <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                            >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>

                            {/* LinkedIn */}
                            <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                            >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>

                            {/* WhatsApp */}
                            <a
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(noticia?.titulo || '')}%20${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800"
                            >
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>

                            {/* X (Twitter) */}
                            <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(noticia?.titulo || '')}&url=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600"
                            >
                            <FontAwesomeIcon icon={faX} size="2x" />
                            </a>

                            {/* Instagram no tiene opción de compartir URLs */}
                            <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-800"
                            >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                        </section>
                </article>
                <aside className="my-9 px-4">
                    <h2 className="font-bold text-xl mb-4">Otras Noticias</h2>
                    <div className="space-y-4">
                        {otrasNoticias.map((otraNoticia: Noticia) => (
                            <Link
                                key={otraNoticia._id}
                                href={`/vinculacion/noticias/${otraNoticia.slug.current}`}
                                className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
                            >
                                {otraNoticia.imagenDestacadaUrl && (
                                    <Image
                                        src={otraNoticia.imagenDestacadaUrl}
                                        alt={otraNoticia.titulo}
                                        width={300}
                                        height={200}
                                        className="rounded-lg object-cover w-full h-40 mb-2"
                                    />
                                )}
                                <h3 className="font-semibold text-base line-clamp-2">
                                    {otraNoticia.titulo}
                                </h3>
                                {otraNoticia.fecha && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Date(otraNoticia.fecha).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default NoticiaPage;