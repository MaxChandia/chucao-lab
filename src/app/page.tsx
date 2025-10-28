import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import heroImage from '@/assets/hero-landing.png';
import { ejesChucao } from "@/lib/ejes";
import { noticias } from "@/lib/noticias";

export default function Home() {
  return (
    <div>
      {/*Hero section*/}
    <section className="hero min-h-screen relative lg:min-h-[90vh] w-full flex flex-col items-center font-karla">
            <Image
                src={heroImage}
                alt="Hero Section"
                fill
                className="object-cover z-0"
            />
          <div className="px-20 flex flex-col gap-20 w-full absolute inset-0 h-full justify-center items-start z-10">
              <div className="textHero flex flex-col gap-2 -lg:gap-0">
                  <h1 className="text-lg lg:text-2xl font-bold">
                      ChucaoLab es un laboratorio interdisciplinario de gestión, diseño y creación del paisaje sonoro ambiental
                  </h1>
                  <p className="text-lg lg:text-2xl w-full lg:w-1/2">
                      Nos enfocamos en la investigación, la enseñanza y la conexión activa con la comunidad
                  </p>
              </div>
              <Link href="/quienes-somos">
                  <button className="h-12 w-36 p-1 rounded-[30px] bg-black text-white font-jetbrains text-sm hover:bg-gray-700 flex items-center justify-center gap-2">
                      QUIÉNES SOMOS
                  </button>
              </Link>
              
          </div>
          <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>
      {/*Ejes temáticos */}
      <section className="ejes min-h-screen lg:min-h-[50vh] w-full flex flex-col mt-20 px-10 lg:px-20">
        <div className="sectionHeader flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-sm font-jetbrains">EJES TEMÁTICOS</h3>
        </div>
        <div className="axisContainer flex flex-col lg:flex-row justify-center gap-20">
          {ejesChucao.slice(0,3).map((ejes)=>(
            <Link key={ejes.id} href={ejes.url} className="ejeItem w-full lg:w-1/3 cursor-pointer hover:scale-101 transition-transform duration-300">
              <Image src={ejes.image_url} alt={ejes.titulo} className="rounded-md "/>
              <div className="flex gap-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-soundwave shrink-0" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                </svg>
                <h2 className="font-bold font-jetbrains text-justify lg:text-left text-md leading-tight">{ejes.titulo}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="news min-h-screen lg:min-h-[70vh] w-full flex flex-col mt-20 px-10 py-10 lg:px-20">
        <div className="sectionHeader flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-sm font-jetbrains">NOVEDADES</h3>
          <div className="h-10 w-20 gap-8 flex"><FontAwesomeIcon icon={faArrowLeft} className="text-black cursor-pointer"/><FontAwesomeIcon icon={faArrowRight} className="text-black cursor-pointer" /></div>
        </div>
        <div className="newsContainer flex flex-col lg:flex-row gap-20">
          {noticias.slice(0,3).map((moticias) => (
            <Link key={moticias.id} href={`/vinculacion/noticias/${moticias.slug}`} className="newsItem  min-h-[480px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col w-full lg:w-1/3 cursor-pointer hover:scale-101 transition-transform duration-300">
              <Image src={moticias.newsImage} alt={moticias.title} width={400} height={250} className="rounded-md"/>
              <div className="mt-3 flex flex-col flex-1 p-3">
                <div className="flex gap-2 min-h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-soundwave shrink-0" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                  </svg>
                  <h2 className="font-bold font-jetbrains text-justify lg:text-left text-sm leading-tight">{moticias.title}</h2>
                </div>
                <p className="mt-5 text-justify lg:text-left text-sm font-karla">{moticias.bajada}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
