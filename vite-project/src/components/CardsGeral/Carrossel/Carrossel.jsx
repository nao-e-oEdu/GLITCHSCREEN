import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51',
  'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000006442/691ba3e0801180a9864cc8a7694b6f98097f9d9799bc7e3dc6db92f086759252',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/383870/header.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/481510/header.jpg'
];

const titles = [
  'Explore o mundo vasto de Hollow Knight',
  'Tenha uma aventura incrível desbravando os horizontes de Celeste',
  'Descubra segredos e paisagens em Firewatch',
  'Jogue Ori, uma obra prima em formato de Indie!',
  'Viva histórias profundas em Night in the Woods'
];

const CodJogo = [1, 7, 28, 17, 29];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressBarRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const SLIDE_DURATION = 5000;
  const TRANSITION_DURATION = 1000;

  const startProgressBar = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = 'none';
      progressBarRef.current.style.width = '0%';
      progressBarRef.current.offsetHeight;
      progressBarRef.current.style.transition = `width ${SLIDE_DURATION}ms linear`;
      progressBarRef.current.style.width = '100%';
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    startProgressBar();
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, SLIDE_DURATION);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    navigate(`/jogo/${CodJogo[index]}`);
  };

  return (
    <div className="text-white p-6 overflow-hidden mt-10 animate-fade-in flex z-40">
      <div className="w-3/4 relative overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: `transform ${TRANSITION_DURATION}ms ease-in-out`
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />

            </div>
          ))}
        </div>

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
            onClick={() => goToSlide(index)}
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
              {titles[index]}
            </span>
            <span className="ml-auto text-stone-700 group-hover:text-lime-600">→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
