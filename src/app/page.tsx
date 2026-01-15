import Link from "next/link";
import Image from "next/image";
import heroImage from '@/assets/hero-landing.png';
import {Eje, Noticia } from "@/lib/types/contenido";
import { ProyectoPrincipal } from "@/lib/types/proyecto";
import { SeccionHero } from "@/lib/types/pages";
import { sanityService } from "@/lib/sanityService";
import NewsSlider from "@/components/newsSlider";



export default async function Home() {


  const noticias: Noticia[] = await sanityService.getAllNoticias();
  const ejes: Eje[] = await sanityService.getAllEjes();
  const hero: SeccionHero = await sanityService.getSeccionHero();
  const proyectoDestacado: ProyectoPrincipal = await sanityService.getProyectoPrincipalDestacado();

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
          <div className="px-20 flex flex-col gap-10 w-full absolute inset-0 h-full justify-center items-start z-10">
              <div className="textHero flex flex-col gap-2 lg:gap-0">
                  <h1 className="text-lg lg:text-2xl font-bold">
                      {hero.tituloPrincipal}
                  </h1>
                  <p className="text-lg lg:text-2xl w-full lg:w-1/2">
                      {hero.bajada}
                  </p>
              </div>
              <Link href="/quienes-somos">
                  <button className="h-12 w-36 p-1 rounded-[30px] bg-black text-white font-jetbrains text-sm hover:bg-gray-700 flex items-center justify-center gap-2 transition-colors duration-300">
                      QUIÉNES SOMOS
                  </button>
              </Link>
              
          </div>
          <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
      </section>
      {/*Ejes temáticos */}
      <section className="ejes sm:h-[100vh] lg:h-[50vh] w-full flex flex-col mt-20 px-10 lg:px-20">
        <div className="sectionHeader flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-sm font-jetbrains">EJES TEMÁTICOS</h3>
        </div>
        <div className="axisContainer flex flex-col lg:flex-row justify-center gap-20 group-hover:scale-110 transition-transform duration-300">
          {ejes.map((eje)=>(
            <Link key={eje._id} href={`/ejes/${eje.slug.current}`} className="ejeItem group w-full lg:w-1/3 cursor-pointer hover:text-sage-green transition-colors duration-300">
              <div className="w-full relative rounded-xl overflow-hidden shadow-2xl">
                <Image src={eje.imagen.url} 
                  alt={eje.nombreEje} 
                  width={eje.imagen.width} 
                  height={eje.imagen.height} className="rounded-md group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="flex gap-2 mt-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-soundwave shrink-0" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                </svg>
                <h2 className="font-bold font-jetbrains text-justify lg:text-left text-md leading-tight ">{eje.nombreEje}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="jardinSonoro w-full mt-20 px-10 py-20 lg:px-20">
                <Link 
                    href={proyectoDestacado.slug?`/investigacion/proyectos/${proyectoDestacado.slug.current}` : '#'}
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 max-w-7xl mx-auto cursor-pointer group"
                >
                    <div className="w-full lg:w-1/2 relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                        <Image 
                            src={proyectoDestacado.imagenPrincipal.asset.url} 
                            alt={proyectoDestacado.imagenPrincipal.alt || proyectoDestacado.titulo} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 p-4 items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold font-jetbrains text-black transition-colors duration-300 group-hover:text-sage-green">
                            {proyectoDestacado.titulo}
                        </h2>
                        <p className="text-lg font-karla leading-relaxed text-justify lg:text-left">
                            {proyectoDestacado.resumen}
                        </p>
                        <p className="text-sm font-karla font-bold text-gray-700">
                            {proyectoDestacado.extra}
                        </p>
                        <button className="h-12 w-48 p-2 rounded-[30px] bg-black text-white font-jetbrains text-sm hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 mt-4">
                            VER PROYECTO COMPLETO

                        </button>
                    </div>
                </Link>
            </section>
      <NewsSlider noticias={noticias} />
      
    </div>
  );
}
