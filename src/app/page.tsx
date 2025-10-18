import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="px-20 hero h-[90vh] w-full flex items-center font-karla ">
        <div className="imageHero"></div>
        <div className="flex flex-col gap-20 w-full">
          
          <div className="textHero">
            <h1 className="text-2xl font-bold"> 
              ChucaoLab es un laboratorio dedicado al estudio del Paisaje Sonoro
            </h1>
            <p className="text-2xl w-1/2">
              Nos enfocamos en la investigación, la enseñanza y la conexión activa con la comunidad
            </p>
          </div>
          <Link href="/quienes-somos"><button className="h-12 w-36 p-1 rounded-[30px] bg-black text-white font-jetbrains text-sm">
            QUIÉNES SOMOS
          </button></Link>

        </div>
      </section>
      <section className="ejes"></section>
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
