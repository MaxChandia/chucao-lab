"use client";

import { faEnvelope, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
import heroImage from '@/assets/hero-sections.png';
import { equipo } from "@/lib/equipo";

const QuienesSomos = () => {

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
    <div>
      <section className="hero h-[80vh] w-full font-karla">
        <div className="relative h-full w-full">
             <Image
                src={heroImage}
                alt="Hero Section"
                fill
                className="object-cover"
            />
        </div>
           
        <div className="absolute flex items-center justify-center top-[40%] left-[40%] ">
            <h2 className="text-5xl font-bold text-black font-karla"><b>Quiénes Somos</b></h2>
        </div>
        <span className="h-5 w-full bg-sage-green border-y-2 border-black inline-block"></span>

        </section>
      <section className="px-20 h-[70vh] w-full flex items-center justify-center gap-6 font-karla">
        <div className="px-5 w-2/4 h-full flex flex-col  justify-center leading-relaxed">
            <p className="mt-4 line-height-5">En <b>ChucaoLab</b> exploramos el Paisaje Sonoro como una forma de entender y conectar con nuestro entorno. </p>
            <p> Somos un laboratorio dedicado a la investigación, enseñanza y difusión de los sonidos naturales en entornos urbanos, inspirados por el Chucao, un ave nativa de Chile que simboliza la riqueza acústica de la naturaleza. </p>
            <p>Nuestro trabajo busca fomentar el bienestar y la conciencia ambiental a través del sonido.</p>
            <p className="mt-10 italic">ChucaoLab es un laboratorio de Paisaje Sonoro situado en la Facultad de Artes, perteneciente al Departamento de Sonido de la Universidad de Chile. </p>
        </div>
        <div className="chucaoImg w-2/3 h-full flex items-center justify-center">
            <span className="w-[700px] h-[300px] rounded-[20px] bg-gray-300 inline-block"></span>
        </div>
      </section>
      <section className="px-20 h-[70vh] flex flex-col justify-center items-center font-karla">
        <div className="sectionHeader w-full flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-xl font-bold font-jetbrains">EQUIPO</h3>
          <div className="h-12 w-20 gap-8 flex">
            <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} className="text-black cursor-pointer"/>
            <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} className="text-black cursor-pointer" />
            </div>
        </div>
        <div className="h-[600px] w-full">
            <ul className="mt-10 px-5 flex items-center justify-center gap-[120px] flex-wrap">
                {equipo.slice(startIndex, startIndex + membersPerPage).map((miembro) => (
                    <li key={miembro.id} className="flex flex-col items-center justify-center font-karla gap-5">
                        <span className="inline-block h-[150px] w-[150px] rounded-full bg-gray-300"></span>
                        <div className="flex flex-col align-center justify-center text-sm">
                            <p className="font-bold">{miembro.nombre}</p>
                            <p>{miembro.rol}</p>
                            <p>{miembro.departamento}</p>
                            <p>{miembro.facultad}</p>
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3"/>
                                <p>{miembro.email}</p>
                            </div>
                        </div>
                    </li>
                ))}
                   
            </ul>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;