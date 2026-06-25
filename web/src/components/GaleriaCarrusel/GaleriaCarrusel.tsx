"use client";

import { useState } from "react";
import Image from "next/image";
import { SanityImage } from "@/lib/types/sanity"; 

export default function GaleriaCarousel({ imagenes }: { imagenes: SanityImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!imagenes || imagenes.length === 0) return null;

  if (imagenes.length === 1) {
    return (
      <div className="relative w-full h-[400px] my-6">
        <Image 
          src={imagenes[0].asset.url} 
          alt={imagenes[0].alt || 'Imagen de la noticia'} 
          fill 
          className="object-cover rounded-lg"
        />
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] my-6 group">
      {/* Imagen actual */}
      <Image 
        key={imagenes[currentIndex].asset._id}
        src={imagenes[currentIndex].asset.url} 
        alt={imagenes[currentIndex].alt || `Imagen ${currentIndex + 1} de la galería`} 
        fill 
        className="object-cover rounded-lg transition-all duration-500"
      />

      {/* Botón Anterior */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Imagen anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botón Siguiente */}
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Siguiente imagen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicadores (Puntitos) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}