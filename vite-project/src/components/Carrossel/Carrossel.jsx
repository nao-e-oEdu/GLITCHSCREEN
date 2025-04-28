import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
  "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000006442/691ba3e0801180a9864cc8a7694b6f98097f9d9799bc7e3dc6db92f086759252",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const progressBarRef = useRef(null);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const startProgressBar = () => {
    if (progressBarRef.current) {
      // Reset barra
      progressBarRef.current.style.transition = 'none';
      progressBarRef.current.style.width = '0%';
      
      // Forçar reflow
      progressBarRef.current.offsetHeight;
      
      // Iniciar animação
      progressBarRef.current.style.transition = 'width 5s linear';
      progressBarRef.current.style.width = '100%';
    }
  };

  const showSlide = (index) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    startProgressBar();
    
    // Reiniciar intervalo
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
    
    setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => {
    showSlide((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    showSlide((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Iniciar o carrossel
    showSlide(0);
    
      //Criação do observador mudanças na barra de progresso
      const observer = new MutationObserver(() => {
        if (progressBarRef.current) {
          progressBarRef.current.addEventListener('transitionend', () => {
            if (progressBarRef.current.style.width === '100%') {
              nextSlide(); 
            }
          });
        }
      });
      
      //Ativa o observador na barra de progresso
      observer.observe(progressBarRef.current, { 
        attributes: true 
      });
      
      //Limpeza
      return () => {
        clearInterval(intervalRef.current); //Cancela o timer
        observer.disconnect(); 
      };
    }, []); //Roda apenas uma vez (mount)

  return (
    <div className="text-white p-6 rounded-lg overflow-hidden mt-10 flex z-40">
      <div className="w-3/4 relative overflow-hidden" ref={carouselRef}>
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className={`carousel-item w-full flex-shrink-0 ${currentIndex === index && isAnimating ? 'animate-pulse' : ''}`}
            >
              <a href="#">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Barra de Progresso - Versão simplificada e funcional */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-700">
          <div 
            ref={progressBarRef}
            className="h-1 bg-lime-600"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      <div className="w-1/4 flex flex-col space-y-2 ml-4">
        {images.map((thumbnail, index) => (
          <button 
            key={index}
            onClick={() => showSlide(index)}
            className={`flex items-center bg-stone-950 text-white p-3 rounded-md text-left hover:bg-stone-800 transition ${
              currentIndex === index ? 'ring-2 ring-lime-600' : ''
            }`}
          >
            <img 
              src={thumbnail} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-10 h-10 mr-3 rounded-md object-cover"
            />
            <span className="hover:text-lime-600 flex-1 text-sm">
              Slide {index + 1}
            </span>
            <span className="ml-auto text-stone-700 group-hover:text-lime-600">→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { Carousel };