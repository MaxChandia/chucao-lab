import { notFound } from "next/navigation";
import { sanityService } from "@/lib/sanityService";
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from "@/lib/portableTextComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import  heroImage  from '@/assets/hero_sections.webp';
import Image from "next/image";
import { Noticia, AdditionalImage } from "@/lib/Noticia";
import Link from "next/link";

export default async function NoticiaPage({params}: {params: Promise<{slug: string}>}) {
    
    const { slug } = await params;

    const noticia = await sanityService.getNoticiaBySlug(slug);
    
    if (!noticia) {
        notFound();
    }

    const todasLasNoticias = await sanityService.getAllNoticias();
    const otrasNoticias = todasLasNoticias
        .filter((n: Noticia) => n.slug !== slug)
        .slice(0, 5); 

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
                        {noticia.title}
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>
          <main className="text-justify max-w-7xl mx-auto my-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2">
            <div className="max-w-4xl mx-auto my-10 px-4 font-bold">
              {noticia.upperBody && <PortableText value={noticia.upperBody} components={PortableTextComponents}/>}
            </div>
            <div className="max-w-4xl mx-auto my-10 px-4">
                {noticia.body && <PortableText value={noticia.body} components={PortableTextComponents}/>}
            </div>
            
            {noticia.additionalImages && noticia.additionalImages.length > 0 && (
              <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 px-4 my-10">
                {noticia.additionalImages.map((img: AdditionalImage, index: number) => {
                  // Ahora la URL viene directamente de Sanity
                  if (!img.url) return null;
                  
                  return (
                    <div key={index}>
                      <Image
                        src={img.url}
                        alt={img.alt || 'Imagen adicional'}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full"
                      />
                      {img.caption && (
                        <p className="text-sm text-gray-600 text-center mt-2 italic">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          
              <section className="max-w-4xl mx-auto my-10 px-4">
                <h2 className="font-bold text-xl mb-4">Comparte esta noticia</h2>
                <div className="flex gap-4 mt-2">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer hover:text-blue-600" />
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer hover:text-blue-400" />
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl cursor-pointer hover:text-blue-700" />
                </div>    
              </section>
            </article>
            <aside className="my-9 px-4">
              <h2 className="font-bold text-xl mb-4">Otras Noticias</h2>
              <div className="space-y-4">
                {otrasNoticias.map((otraNoticia: Noticia) => (
                  <Link 
                    key={otraNoticia.id} 
                    href={`/vinculacion/noticias/${otraNoticia.slug}`}
                    className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
                  >
                    {otraNoticia.mainImage && (
                      <Image
                        src={otraNoticia.mainImage}
                        alt={otraNoticia.title}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full h-40 mb-2"
                      />
                    )}
                    <h3 className="font-semibold text-base line-clamp-2">
                      {otraNoticia.title}
                    </h3>
                    {otraNoticia.publishedAt && (
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(otraNoticia.publishedAt).toLocaleDateString('es-ES', {
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