"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Noticia } from "@/lib/types/contenido";

// Creamos un tipo para manejar tanto noticias como la tarjeta de "Ver más"
type CarruselItem = 
  | { type: 'noticia'; data: Noticia }
  | { type: 'ver-mas'; _id: string };

export default function NewsSlider({ noticias }: { noticias: Noticia[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisibles, setItemsVisibles] = useState(3);
  const [isEnglish, setIsEnglish] = useState(false);

   useEffect(() => {
        setIsEnglish(document.cookie.includes('googtrans=/es/en')); // Verificar idioma actual al cargar
    }, []);

  // 1. Filtramos a max 5 noticias y agregamos la tarjeta extra
  const itemsCarrusel: CarruselItem[] = [
    ...noticias.slice(0, 5).map((n) => ({ type: 'noticia' as const, data: n })),
    { type: 'ver-mas' as const, _id: 'card-ver-mas' },
  ];

  const totalItems = itemsCarrusel.length;

  useEffect(() => {
    const handleResize = () => {
      // Mantenemos responsividad para que no se rompa en celulares
      if (window.innerWidth < 640) setItemsVisibles(1);
      else if (window.innerWidth < 1024) setItemsVisibles(2);
      else setItemsVisibles(3); // Siempre 3 en escritorio
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // <-- Se agregó el array vacío para evitar renders infinitos

  const nextSlide = () => {
    if (currentIndex >= totalItems - itemsVisibles) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(totalItems - itemsVisibles);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  console.log("Noticias para el slider:", noticias);

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

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        {/* Contenedor Flex con la transición matemática para el desplazamiento */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsVisibles)}%)` }}
        >
          {itemsCarrusel.map((item) => {
            
            // RENDER DE LA TARJETA "VER MÁS"
            if (item.type === 'ver-mas') {
              return (
                <div 
                  key={item._id} 
                  className="flex-shrink-0 px-4 flex flex-col justify-center"
                  style={{ width: `${100 / itemsVisibles}%` }}
                >
                  <Link href="/vinculacion/noticias" className="group flex flex-col items-center justify-center w-full h-full min-h-[300px] border-2 border-dashed border-gray-300 hover:border-black transition-colors rounded-xl hover:bg-gray-50 cursor-pointer">
                    <span className="text-lg font-jetbrains uppercase font-bold tracking-widest group-hover:text-gray-600 transition-colors">Ver todas</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-3xl mt-4 text-black group-hover:text-gray-600 transition-colors" />
                  </Link>
                </div>
              );
            }

            // RENDER DE LA TARJETA DE NOTICIA NORMAL
            const noticia = item.data;
            return (
              <div 
                key={noticia._id} 
                className="flex-shrink-0 px-4" 
                style={{ width: `${100 / itemsVisibles}%` }}
              >
                <Link href={`/vinculacion/noticias/${noticia.slug.current}`} className="group block h-full">
                  <div className="flex flex-col transition-all duration-300 transform hover:-translate-y-2 group-hover:text-gray-500">
                    
                    {/* IMAGEN */}
                    {noticia.imagenDestacadaUrl && (
                      <div className="relative w-full aspect-[16/10]">
                        <Image 
                          src={noticia.imagenDestacadaUrl}
                          alt={noticia.titulo} 
                          fill
                          className="rounded-md object-cover"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-white text-black shadow-sm uppercase font-jetbrains notranslate">
                            {isEnglish ? noticia.categoriaIngles : noticia.categoria}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CONTENIDO TEXTO */}
                    <div className="mt-6 flex flex-col group-hover:text-sage-green transition-colors">
                      <div className="flex gap-3 items-start mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="shrink-0 group-hover:text-sage-green transition-colors" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <h2 className="font-bold font-jetbrains text-sm leading-tight uppercase line-clamp-2 min-h-[2.5rem]">
                          {noticia.titulo}
                        </h2>
                      </div>
                      <p className="text-sm font-karla text-black leading-relaxed text-justify line-clamp-6">
                        {noticia.bajada} 
                      </p>
                    </div>

                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}