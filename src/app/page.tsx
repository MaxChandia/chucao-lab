import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import heroImage from '@/assets/hero-landing.png';
import { ejesChucao } from "@/lib/ejes";

export default function Home() {
  return (
    <div>
    <section className="hero h-[90vh] w-full flex flex-col items-center font-karla">
          <div className="relative h-full w-full">
            <Image
                src={heroImage}
                alt="Hero Section"
                fill
                className="object-cover"
            />
          </div>
          <div className="px-20 flex flex-col gap-20 w-full absolute top-[40%]">
              <div className="textHero flex flex-col">
                  <h1 className="text-2xl font-bold">
                      ChucaoLab es un laboratorio dedicado al estudio del Paisaje Sonoro
                  </h1>
                  <p className="text-2xl w-1/2">
                      Nos enfocamos en la investigación, la enseñanza y la conexión activa con la comunidad
                  </p>
              </div>
              <Link href="/quienes-somos">
                  <button className="h-12 w-36 p-1 rounded-[30px] bg-black text-white font-jetbrains text-sm hover:bg-gray-700 flex items-center justify-center gap-2">
                      QUIÉNES SOMOS
                  </button>
              </Link>
              
          </div>
          <span className="h-5 w-full bg-sage-green border-y-2 border-black inline-block"></span>
      </section>
      <section className="ejes h-[50vh] w-full flex flex-col mt-20 px-20">
        <div className="sectionHeader flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-sm font-jetbrains">EJES TEMÁTICOS</h3>
        </div>
        <div className="newsContainer flex justify-center gap-20">
          {ejesChucao.slice(0,3).map((ejes)=>(
            <div key={ejes.id} className="newsItem w-1/3 gap-5" >
              <span className="rounded-sm h-60 w-full bg-gray-300 inline-block"></span>
              <div className="flex gap-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-soundwave shrink-0" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                </svg>
                <h2 className="font-bold font-jetbrains text-left text-lg leading-tight">{ejes.titulo}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="news h-[70vh] w-full flex flex-col mt-20 px-20">
        <div className="sectionHeader flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-sm font-jetbrains">NOVEDADES</h3>
          <div className="h-12 w-20 gap-8 flex"><FontAwesomeIcon icon={faArrowLeft} className="text-black cursor-pointer"/><FontAwesomeIcon icon={faArrowRight} className="text-black cursor-pointer" /></div>
        </div>
        <div className="newsContainer flex gap-10">
          <div className="newsItem w-1/3 h-60 bg-gray-200"></div>
          <div className="newsItem w-1/3 h-60 bg-gray-200"></div>
          <div className="newsItem w-1/3 h-60 bg-gray-200"></div>
        </div>
      </section>
    </div>
  );
}
