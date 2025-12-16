"use client";

import { useEffect, useRef } from "react";

const ChucaoSound = () => {
  // Usamos useRef para mantener la instancia del audio sin recargarla
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    // 1. Cargar el audio (Asegúrate que la ruta sea correcta en /public)
    audioRef.current = new Audio("/sounds/chucao.mp3"); // Cambia el nombre si es distinto
    audioRef.current.volume = 0.5; // Ajusta el volumen si suena muy fuerte

    const playSound = () => {
      // Si ya sonó, no hacemos nada
      if (hasPlayed.current || !audioRef.current) return;

      // Intentamos reproducir
      audioRef.current.play()
        .then(() => {
          hasPlayed.current = true;
          // Una vez que suena, limpiamos los eventos para que no suene más
          cleanupListeners();
        })
        .catch((err) => {
          console.log("Esperando interacción para reproducir sonido...", err);
        });
    };

    // 2. Función para limpiar los "escuchadores"
    const cleanupListeners = () => {
      window.removeEventListener('click', playSound);
      window.removeEventListener('keydown', playSound);
      window.removeEventListener('touchstart', playSound);
    };

    // 3. INTENTO AUTOMÁTICO (Por si el navegador lo permite)
    playSound();

    // 4. PLAN B: Si falló arriba, sonará al primer clic, tecla o toque del usuario
    window.addEventListener('click', playSound);
    window.addEventListener('keydown', playSound);
    window.addEventListener('touchstart', playSound);

    // Limpieza al desmontar el componente
    return () => {
      cleanupListeners();
    };
  }, []);

  // Este componente no renderiza nada visual
  return null; 
};

export default ChucaoSound;