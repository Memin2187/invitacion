'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import foto1 from '../images/dafne5.jpeg';
import foto2 from '../images/dafne3.jpeg';
import foto3 from '../images/dafne4.jpeg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import style from './Fondo.module.css'



const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images: StaticImageData[] = [
    foto1,
    foto2,
    foto3,
    // Añade más imágenes importadas según sea necesario
  ];

  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
    
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === (images.length ?? 1) - 1 ? 0 : (prevIndex ?? -1) + 1));
  };

  const handlePrev = () => {
    
    setSelectedImageIndex((prevIndex) => (prevIndex === (images.length ?? 1) - 1 ? 0 : (prevIndex ?? -1) +1));
   
   
  };
 
  return (
    <>
       <div className={`${style.fondo_total} p-8`}>
       <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <Image src={image} alt={`Image ${index + 1}`} width={300} height={200} />
        </div>
      ))}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image src={images[selectedImageIndex ]} alt={`Selected Image ${selectedImageIndex + 1}`} width={300} height={600} />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-0 m-4  p-2 rounded-full"
              onClick={handlePrev}
            >
              <AiOutlineArrowLeft className='bg-white' />
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-0 m-4  p-2 rounded-full"
              onClick={handleNext}
            >
            <AiOutlineArrowRight  className='bg-white'/>
            </button>
            <button
              className="absolute top-0 right-0 m-4  p-2 rounded-full bg-white"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
   
   
  );
};

export default Gallery;
