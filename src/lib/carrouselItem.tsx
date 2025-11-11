'use client';

import { useState } from 'react';
import { faEnvelope, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MiembroEquipo } from "@/lib/sanityClasses";

interface EquipoListProps {
  equipo: MiembroEquipo[];
}

export default function CarrouselItem({ equipo }: EquipoListProps) {
  const [startIndex, setStartIndex] = useState(0);
  const membersPerPage = 5;

  const handleNext = () => {
    if (startIndex + membersPerPage < equipo.length) {
      setStartIndex(startIndex + membersPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - membersPerPage);
    }
  };

  return (
    <section className="px-4 sm:px-10 lg:px-20 py-16 min-h-screen lg:min-h-[70vh] flex flex-col justify-center items-center font-karla">
      <div className="sectionHeader w-full flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
        <h3 className="text-xl font-bold font-jetbrains">EQUIPO</h3>
        <div className="h-5 lg:h-10 w-20 gap-8 flex">
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            onClick={handlePrev} 
            className="text-black cursor-pointer"
          />
          <FontAwesomeIcon 
            icon={faArrowRight} 
            onClick={handleNext} 
            className="text-black cursor-pointer" 
          />
        </div>
      </div>
      <div className="w-full">
        <ul className="mt-10 px-3 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[120px] flex-wrap">
          {equipo.slice(startIndex, startIndex + membersPerPage).map((miembro) => (
            <Link href={`/equipo/${miembro.slug.current}`} key={miembro._id}>
              <li className="flex flex-col items-center justify-center font-karla gap-5">
                <span className="inline-block h-[130px] w-[130px] rounded-full bg-gray-300"></span>
                <div className="flex flex-col align-center justify-center text-center text-sm">
                  <p className="font-bold text-center cursor-pointer hover:text-blue-600 transition-colors">
                    {miembro.nombreCompleto}
                  </p>
                  <p>{miembro.rol}</p>
                  <p>{miembro.departamento}</p>
                  <p>{miembro.facultad}</p>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3"/>
                    <p>{miembro.mail}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}