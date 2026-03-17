'use client';

import { useState, useEffect} from 'react';
import { faArrowRight, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import type { ColaboradorAsociado } from "@/lib/types/miembros";

export default function CarruselColaboradoresAsociados({ miembros }: { miembros: ColaboradorAsociado[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisibles, setItemsVisibles] = useState(5);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const total = miembros.length;
  const gap = 20; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsVisibles(1);
      else if (window.innerWidth < 1024) setItemsVisibles(3);
      else setItemsVisibles(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= total - itemsVisibles ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? total - itemsVisibles : prev - 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  if (!miembros || total === 0) return null;

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 w-full overflow-hidden font-karla ">
      <div className="sectionHeader w-full flex justify-between items-center mb-10 border-b-2 border-dotted border-black pb-4">
        <h3 className="text-lg sm:text-xl font-bold font-jetbrains uppercase tracking-tighter">
          COLABORADORES ASOCIADOS
        </h3>
        
        <div className="flex gap-4 sm:gap-8">
          <button onClick={prevSlide} className="hover:scale-110 transition-all active:opacity-50">
            <FontAwesomeIcon icon={faArrowLeft} className="text-lg sm:text-xl text-black" />
          </button>
          <button onClick={nextSlide} className="hover:scale-110 transition-all active:opacity-50">
            <FontAwesomeIcon icon={faArrowRight} className="text-lg sm:text-xl text-black" />
          </button>
        </div>
      </div>

      <div 
        className="relative w-full touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out "
          style={{ 
            transform: `translateX(calc(-${currentIndex * (100 / itemsVisibles)}% - ${currentIndex * (gap / itemsVisibles)}px))`,
            gap: `${gap}px`
          }}
        >
          {miembros.map((miembro) => (
            <div 
              key={miembro._id} 
              className="flex-shrink-0" 
              style={{ width: `calc((100% - ${gap * (itemsVisibles - 1)}px) / ${itemsVisibles})` }}
            >
              <div className="flex flex-col items-center text-center gap-4 hover:text-sage-green transition-colors duration-300">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                  {miembro.foto?.asset?.url ? (
                    <Image
                      src={miembro.foto.asset.url}
                      alt={miembro.nombreCompleto}
                      fill
                      sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 160px"
                      className="object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                      <FontAwesomeIcon icon={faUser} className="text-3xl" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1 ">
                  <span className="font-bold text-sm sm:text-base font-jetbrains uppercase leading-none">
                    {miembro.nombreCompleto}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8 sm:hidden">
        {Array.from({ length: total }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-6 bg-black' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
