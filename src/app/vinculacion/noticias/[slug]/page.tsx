import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { noticias } from "@/lib/noticias";
import heroImage from "@/assets/hero_sections.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
    
  return noticias.map((n) => ({
    slug: n.slug,
  }));
}

export default async function NoticiaDetalle({ params }: Props) {
  const { slug } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
    return notFound();
  }

  // 🔹 Últimas noticias (excluye la actual)
  const ultimasNoticias = noticias
    .filter((n) => n.slug !== noticia.slug)
    .slice(0, 3);

  // 🔹 URL actual para compartir
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://chucaolab.cl/vinculacion/noticias/${noticia.slug}`;

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
        <Image
          src={heroImage}
          alt="Hero Section"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/40">
          <h2 className="lg:text-5xl md:text-3xl font-bold text-black text-center px-6 drop-shadow-md">
            {noticia.title}
          </h2>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>

      {/* 🔹 Contenido + Sidebar */}
      <section className="w-full min-h-screen px-6 md:px-20 py-10 flex flex-col lg:flex-row gap-10 font-karla">
        {/* 🔹 Columna principal */}
        <div className="flex-1 flex flex-col gap-10">
          <p className="text-lg font-bold text-center lg:text-left">
            {noticia.bajada}
          </p>

          {/* 🔹 Contenido principal */}
          <article className="prose max-w-none leading-relaxed whitespace-pre-line text-justify">
            <div dangerouslySetInnerHTML={{ __html: noticia.content }} />
          </article>

          {/* 🔹 Video */}
          {noticia.youtubeEmbed && (
            <div className="w-full flex justify-center mt-10">
              <iframe
                width="560"
                height="315"
                src={noticia.youtubeEmbed.replace(
                  "youtu.be/",
                  "www.youtube.com/embed/"
                )}
                title="YouTube video"
                allowFullScreen
                className="rounded-xl w-full max-w-[800px] h-[450px]"
              />
            </div>
          )}

          {/* 🔹 Galería */}
          {noticia.gallery && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {noticia.gallery.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Imagen ${index + 1} de ${noticia.title}`}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          )}

          {/* 🔹 Compartir */}
          <div className="flex flex-col mt-10 border-t border-gray-300 pt-6">
            <h4 className="font-bold mb-3 text-lg">Compartir esta noticia:</h4>
            <div className="flex gap-5">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Sidebar de últimas noticias */}
        <aside className="w-full lg:w-[30%] flex flex-col gap-6">
          <h3 className="text-xl font-bold border-b-2 border-gray-300 pb-2">
            Últimas noticias
          </h3>

          {ultimasNoticias.map((n) => (
            <Link
              key={n.slug}
              href={`/vinculacion/noticias/${n.slug}`}
              className="flex gap-4 items-start group"
            >
              <Image
                src={n.newsImage}
                alt={n.title}
                width={100}
                height={70}
                className="rounded-md object-cover flex-shrink-0"
              />
              <div>
                <h4 className="font-semibold text-sm group-hover:text-sage-green transition-colors">
                  {n.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                  {n.bajada}
                </p>
              </div>
            </Link>
          ))}
        </aside>
      </section>
    </div>
  );
}
