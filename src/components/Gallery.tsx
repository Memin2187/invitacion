'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import foto1 from '../images/foto1.png';
import foto2 from '../images/foto2.png';
import foto3 from '../images/foto3.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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
    //setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setSelectedImageIndex((prevIndex) => (prevIndex === (images.length ?? 1) - 1 ? 0 : (prevIndex ?? -1) -1));
  };

  return (
    <>
       <div className="p-8 bg-[url('../images/fondito.jpg')]">
       <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <Image src={image} alt={`Image ${index + 1}`} width={300} height={200} />
        </div>
      ))}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image src={images[selectedImageIndex]} alt={`Selected Image ${selectedImageIndex + 1}`} width={400} height={600} />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-0 m-4  p-2 rounded-full"
              onClick={handlePrev}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-0 m-4  p-2 rounded-full"
              onClick={handleNext}
            >
            <AiOutlineArrowRight />
            </button>
            <button
              className="absolute top-0 right-0 m-4  p-2 rounded-full"
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
