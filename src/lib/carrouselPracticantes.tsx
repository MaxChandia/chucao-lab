'use client';

import { useState } from 'react';
import { faArrowRight, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// Asegúrate de importar la interfaz correcta de tus clases de Sanity
import { Practicante } from "@/lib/sanityClasses";

interface PracticantesListProps {
  practicantes: Practicante[];
}

export default function CarruselPracticantes({ practicantes }: PracticantesListProps) {
  const [startIndex, setStartIndex] = useState(0);
  const membersPerPage = 5;

  const handleNext = () => {
    if (startIndex + membersPerPage < practicantes.length) {
      setStartIndex(startIndex + membersPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - membersPerPage);
    }
  };

  // Si no hay practicantes, no renderizamos la sección
  if (!practicantes || practicantes.length === 0) {
    return null;
  }

  return (
    <section className="px-4 sm:px-10 lg:px-20 py-16 min-h-[50vh] flex flex-col justify-center items-center font-karla bg-gray-50">
      
      {/* Header de la Sección */}
      <div className="sectionHeader w-full flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
        <h3 className="text-xl font-bold font-jetbrains uppercase">PRACTICANTES</h3>
        
        {/* Controles del Carrusel (solo se muestran si hay más de 5) */}
        {practicantes.length > membersPerPage && (
        <div className="h-5 lg:h-5 w-20 gap-8 flex">
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            onClick={handlePrev} 
            className={`text-black cursor-pointer transition-opacity ${startIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-blue-600'}`}
          />
          <FontAwesomeIcon 
            icon={faArrowRight} 
            onClick={handleNext} 
            className={`text-black cursor-pointer transition-opacity ${startIndex + membersPerPage >= practicantes.length ? 'opacity-30 cursor-not-allowed' : 'hover:text-blue-600'}`}
          />
        </div>
        )}
      </div>

      {/* Lista de Practicantes */}
      <div className="w-full">
        <ul className="mt-10 px-3 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-[80px] flex-wrap">
          {practicantes.slice(startIndex, startIndex + membersPerPage).map((practicante) => {
             
             // Extracción segura de la imagen
             const imageUrl = practicante.foto?.asset?.url;

             return (
            <li key={practicante._id} className="flex flex-col items-center font-karla gap-4 max-w-[180px]">
              
              {/* Foto o Placeholder */}
              {imageUrl ? (
                  <Image
                  src={imageUrl}
                  alt={practicante.nombreCompleto}
                  width={150}
                  height={150}
                  // Importante: forzar w y h en clase para mantener el círculo perfecto
                  className="rounded-full object-cover border-2 border-gray-300 shadow-md w-[150px] h-[150px]"
                  />
              ) : (
                  <div className="w-[150px] h-[150px] rounded-full bg-gray-200 border-2 border-gray-300 shadow-md flex items-center justify-center text-gray-400">
                       <FontAwesomeIcon icon={faUser} className="h-12 w-12" />
                  </div>
              )}

              {/* Info de Texto (Más simple que el de Equipo) */}
              <div className="w-full flex flex-col items-center justify-start text-center">
                <p className="font-bold text-lg leading-tight">
                  {practicante.nombreCompleto}
                </p>
                <p className="text-sm italic text-gray-600 mt-1">
                    {practicante.carrera}
                </p>
              </div>
            </li>
          )})}
        </ul>
      </div>
    </section>
  );
}