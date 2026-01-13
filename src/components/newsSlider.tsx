"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Noticia } from "@/lib/types/contenido";

export default function NewsSlider({ noticias }: { noticias: Noticia[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisibles, setItemsVisibles] = useState(3);

  const totalNoticias = noticias.length;
  const gap = 100; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsVisibles(1);
      else if (window.innerWidth < 1024) setItemsVisibles(2);
      else setItemsVisibles(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);


  })

  const nextSlide = () => {

    if (currentIndex >= totalNoticias - itemsVisibles) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(totalNoticias - itemsVisibles);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="news w-full flex flex-col my-20 px-10 lg:px-20 overflow-hidden font-karla">
      {/* HEADER */}
      <div className="sectionHeader flex justify-between items-center mb-10 border-b-2 border-dotted border-black pb-2">
        <h3 className="text-md font-jetbrains uppercase tracking-widest font-bold">Novedades</h3>
        <div className="flex gap-8">
          <button onClick={prevSlide} className="hover:scale-110 transition-transform cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-black" />
          </button>
          <button onClick={nextSlide} className="hover:scale-110 transition-transform cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
          </button>
        </div>
      </div>

      {/* VIEWPORT DEL SLIDER */}
      <div className="relative w-full overflow-hidden ">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
        
            transform: `translateX(calc(-${currentIndex * (100 / itemsVisibles)}% - ${currentIndex * (gap / itemsVisibles)}px))`,
            gap: `${gap}px`
          }}
        >
          {noticias.map((noticia) => (
            <div 
              key={noticia._id} 
              className="flex-shrink-0 " 
              style={{ 
     
                width: `calc((100% - ${gap * (itemsVisibles - 1)}px) / ${itemsVisibles})` 
              }}
            >
              <Link href={`/vinculacion/noticias/${noticia.slug.current}`} className="group block h-full">
                <div className="flex flex-col h-full">
                  
    
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-gray-100 ">
                    {noticia.imagenDestacadaUrl && (
                      <Image 
                        src={noticia.imagenDestacadaUrl}
                        alt={noticia.titulo} 
                        fill
                        className=""
                      />
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-white text-black shadow-sm uppercase font-jetbrains">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>

                  {/* CONTENIDO TEXTO */}
                  <div className="mt-6 flex flex-col group-hover:text-sage-green transition-colors">
                    <div className="flex gap-3 items-start mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="shrink-0 group-hover:text-sage-green transition-colors" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                      </svg>
                      <h2 className="font-bold font-jetbrains text-md leading-tight uppercase line-clamp-2 min-h-[2.5rem]">
                        {noticia.titulo}
                      </h2>
                    </div>

                    <p className="text-[15px] font-karla text-gray-700 leading-relaxed text-justify line-clamp-3">
                      {noticia.bajada} 
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}