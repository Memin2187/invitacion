'use client'
import { useEffect, useRef } from 'react';
import style from './Fondo.module.css';

const Rola: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Reiniciar la reproducción desde el principio cuando el componente se monta
      audio.currentTime = 0;
      // Reproducir automáticamente
      audio.play().catch((error) => console.error('Error al reproducir audio:', error));
    }

    // Detener la reproducción cuando el componente se desmonta
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className={`${style.fondo_total} flex justify-center`}>
      <audio controls ref={audioRef}>
        <source src="/audio/taylor.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Rola;
