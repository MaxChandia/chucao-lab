'use client';

import { useState } from 'react';
import { faArrowRight, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Practicante } from "@/lib/sanityClasses";

export default function CarruselPracticantes({ practicantes }: { practicantes: Practicante[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const total = practicantes.length;
  const itemsVisibles = 5; 
  const gap = 80; 

  const nextSlide = () => {
    if (currentIndex >= total - itemsVisibles) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(total - itemsVisibles);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!practicantes || total === 0) return null;

  return (
    <section className="px-4 sm:px-10 lg:px-20 py-16 w-full overflow-hidden font-karla">
      <div className="sectionHeader w-full flex justify-between items-center mb-10 border-b-2 border-dotted border-black pb-2">
        <h3 className="text-xl font-bold font-jetbrains uppercase">PRACTICANTES</h3>
        {total > itemsVisibles && (
          <div className="flex gap-8">
            <button onClick={prevSlide} className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-black" />
            </button>
            <button onClick={nextSlide} className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
            </button>
          </div>
        )}
      </div>

      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * (100 / itemsVisibles)}% - ${currentIndex * (gap / itemsVisibles)}px))`,
            gap: `${gap}px`
          }}
        >
          {practicantes.map((practicante) => (
            <div 
              key={practicante._id} 
              className="flex-shrink-0" 
              style={{ width: `calc((100% - ${gap * (itemsVisibles - 1)}px) / ${itemsVisibles})` }}
            >
              <li className="flex flex-col items-center font-karla gap-4 list-none">
                {practicante.foto?.asset?.url ? (
                  <Image
                    src={practicante.foto.asset.url}
                    alt={practicante.nombreCompleto}
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-2 border-gray-300 shadow-md w-[150px] h-[150px]"
                  />
                ) : (
                  <div className="w-[150px] h-[150px] rounded-full bg-gray-200 border-2 border-gray-300 shadow-md flex items-center justify-center text-gray-400">
                    <FontAwesomeIcon icon={faUser} className="h-12 w-12" />
                  </div>
                )}
                <div className="w-full flex flex-col items-center justify-start text-center">
                  <p className="font-bold text-lg leading-tight font-jetbrains uppercase">
                    {practicante.nombreCompleto}
                  </p>
                  <p className="text-sm italic text-gray-600 mt-1">
                    {practicante.carrera}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}