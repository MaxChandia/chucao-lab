import { sanityService } from "@/lib/sanityService";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/lib/portableTextComponents";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero_sections.webp";
import { Noticia } from "@/lib/sanityClasses";
import ShareButtons from "@/components/share-buttons/shareButtons";

export default async function NoticiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const noticia = await sanityService.getNoticiaBySlug(slug);
  const otrasNoticias = await sanityService.getAllNoticias();

  if (!noticia) {
    return <div className="p-10 text-center">Noticia no encontrada</div>;
  }
  return (
    <div>
      {/* Sección hero */}
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
        <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-10 text-center">
          <h2 className="lg:text-4xl md:text-3xl font-bold text-black">{noticia?.titulo}</h2>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* Contenido principal */}
      <main className="text-justify max-w-7xl mx-auto my-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="max-w-4xl mx-auto my-10 px-4 font-bold">{noticia?.bajada}</div>
          <div className="max-w-4xl mx-auto my-10 px-4">
            {noticia?.cuerpo && <PortableText value={noticia.cuerpo} components={PortableTextComponents} />}
          </div>
          <ShareButtons title={noticia?.titulo} />
        </article>

        

        {/* Otras noticias */}
        <aside className="my-9 px-4">
          <h2 className="font-bold text-xl mb-4">Otras Noticias</h2>
          <div className="space-y-4">
            {otrasNoticias.map((otra: Noticia) => (
              <Link
                key={otra._id}
                href={`/vinculacion/noticias/${otra.slug.current}`}
                className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
              >
                {otra.imagenDestacadaUrl && (
                  <Image
                    src={otra.imagenDestacadaUrl}
                    alt={otra.titulo}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-40 mb-2"
                  />
                )}
                <h3 className="font-semibold text-base line-clamp-2">{otra.titulo}</h3>
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
