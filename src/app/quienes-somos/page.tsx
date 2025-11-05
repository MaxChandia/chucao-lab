"use client";

import { faEnvelope, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { sanityService } from "@/lib/sanityService";
import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import Link from "next/link";
import { MiembroEquipo } from "@/lib/sanityClasses";

const QuienesSomos = () => {

    const [equipo, setEquipo] = useState<MiembroEquipo[]>([]);

    useEffect(() => {
        const fetchEquipo = async () => {
            try{
                const data = await sanityService.getAllMiembros()
                setEquipo(data)
                console.log('equipo encontrado', data)
            } catch (error) {
                console.error('No existe data')
            }

        }
        fetchEquipo()
    }, [])

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
        <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
            <Image
                src={heroImage}
                alt="Hero Section"
                fill
                className="object-cover z-0"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className="lg:text-5xl text-3xl font-bold text-black">
                    Quiénes Somos
                </h2>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
        </section>
      <section className="px-10 py-16 lg:px-20 min-h-[70vh] w-full flex flex-col lg:flex-row items-center justify-center gap-6 font-karla">
        <div className="px-5 w-full lg:w-2/4 h-full flex flex-col  justify-center leading-relaxed text-justify lg:text-lef gap-4 lg:gap-0">
            <p className="lg:text-md text-base mt-4 line-height-5">En <b>ChucaoLab</b> exploramos el Paisaje Sonoro como una forma de entender y conectar con nuestro entorno. </p>
            <p> Somos un laboratorio dedicado a la investigación, enseñanza y difusión de los sonidos naturales en entornos urbanos, inspirados por el Chucao, un ave nativa de Chile que simboliza la riqueza acústica de la naturaleza. </p>
            <p>Nuestro trabajo busca fomentar el bienestar y la conciencia ambiental a través del sonido.</p>
            <p className="mt-10 italic">ChucaoLab es un laboratorio de Paisaje Sonoro situado en la Facultad de Artes, perteneciente al Departamento de Sonido de la Universidad de Chile. </p>
        </div>
        <div className="chucaoImg w-2/3 h-full flex items-center justify-center">
            <span className="w-[700px] h-[300px] rounded-[20px] bg-gray-300 inline-block"></span>
        </div>
      </section>
      {/* Equipo Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 min-h-screen lg:min-h-[70vh] flex flex-col justify-center items-center font-karla">
        <div className="sectionHeader w-full flex justify-between items-center gap-4 mb-10 border-b-2 border-dotted border-black pb-2">
          <h3 className="text-xl font-bold font-jetbrains">EQUIPO</h3>
          <div className="h-5 lg:h-10 w-20 gap-8 flex">
            <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} className="text-black cursor-pointer"/>
            <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} className="text-black cursor-pointer" />
            </div>
        </div>
        <div className="w-full">
            <ul className="mt-10 px-3 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[120px] flex-wrap">
                {equipo.slice(startIndex, startIndex + membersPerPage).map((miembro) => (
                    <Link href={`/equipo/${miembro.slug.current}`} key={miembro._id} >
                    <li className="flex flex-col items-center justify-center font-karla gap-5">
                        <span className="inline-block h-[130px] w-[130px] rounded-full bg-gray-300"></span>
                        <div className="flex flex-col align-center justify-center text-center text-sm">
                            
                                        <p 
                                            className="font-bold text-center cursor-pointer hover:text-blue-600 transition-colors"
                                        >
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
                    </li></Link>
                ))}
                   
            </ul>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;