import React, { useState } from "react";

// imagens do carrossel
const images = [
  "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
  "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000006442/691ba3e0801180a9864cc8a7694b6f98097f9d9799bc7e3dc6db92f086759252",
];

// componentes SVG das setas
const ArrowLeft = () => (
  <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="#44403c" rx="25" />
    <path d="M30 10L15 25L30 40" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="#44403c" rx="25" />
    <path d="M20 10L35 25L20 40" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const anteSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const proxSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[currentIndex]}
          alt="slide"
          className="w-full h-64 object-cover" // <<< diminui altura
        />
      </div>

      {/* Botões de navegação */}
      <button
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-transparent p-2"
        onClick={anteSlide}
      >
        <ArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-transparent p-2"
        onClick={proxSlide}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export { Carousel };
