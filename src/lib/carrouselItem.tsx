'use client';

import { useState } from 'react';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MiembroEquipo } from "@/lib/types/miembros";
import Image from "next/image";

export default function CarrouselEquipo({ equipo }: { equipo: MiembroEquipo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const total = equipo.length;
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

  return (
    <section className="px-4 sm:px-10 lg:px-20 py-20 w-full overflow-hidden font-karla">
      <div className="sectionHeader w-full flex justify-between items-center mb-10 border-b-2 border-dotted border-black pb-2">
        <h3 className="text-xl font-bold font-jetbrains uppercase">EQUIPO</h3>
        <div className="flex gap-8">
          <button onClick={prevSlide} className="hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-black" />
          </button>
          <button onClick={nextSlide} className="hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * (100 / itemsVisibles)}% - ${currentIndex * (gap / itemsVisibles)}px))`,
            gap: `${gap}px`
          }}
        >
          {equipo.map((miembro) => (
            <div 
              key={miembro._id} 
              className="flex-shrink-0" 
              style={{ width: `calc((100% - ${gap * (itemsVisibles - 1)}px) / ${itemsVisibles})` }}
            >
              <Link href={`/equipo/${miembro.slug.current}`} className="group">
                <li className="flex flex-col items-center font-karla gap-5 list-none">
                  {miembro.foto?.asset.url && (
                    <Image
                      src={miembro.foto.asset.url}
                      alt={miembro.nombreCompleto}
                      width={150}
                      height={150}
                      className="rounded-full object-cover border-2 border-gray-300 shadow-md  w-[150px] h-[150px]"
                    />
                  )}
                  <div className="h-40 w-full flex flex-col items-center justify-start text-center text-sm">
                    <p className="font-bold text-center group-hover:text-sage-green transition-colors uppercase font-jetbrains">
                      {miembro.nombreCompleto}
                    </p>
                    <p>{miembro.rol}</p>
                    {miembro.departamento && <p>{miembro.departamento}</p>}
                    {miembro.facultad && <p>{miembro.facultad}</p>}
                    <p>{miembro.universidad}</p>
                  </div>
                </li>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}