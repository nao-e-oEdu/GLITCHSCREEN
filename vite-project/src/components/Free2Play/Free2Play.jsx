import React, { useState } from "react";

const Free2Play = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 3; // Número fixo de 3 cards

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 bg-gradient-to-br from-stone-900 via-lime-950 rounded-xl p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        {/* Botão Anterior */}
        <button
          onClick={prevCard}
          className="p-3 bg-stone-700 text-lime-500 rounded-full hover:bg-stone-600 transition-transform hover:scale-110"
        >
          <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10L15 25L30 40" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Container dos Cards */}
        <div className="flex overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Card 1 */}
            <div className="flex-shrink-0 w-full px-4">
              <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-stone-700"></div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm">Jogo Gratuito</p>
                  <h3 className="text-lg font-bold text-white">Nome do Jogo 1</h3>
                  <span className="text-green-400 font-bold">Gratuito</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-shrink-0 w-full px-4">
              <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-stone-700"></div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm">Jogo Gratuito</p>
                  <h3 className="text-lg font-bold text-white">Nome do Jogo 2</h3>
                  <span className="text-green-400 font-bold">Gratuito</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-shrink-0 w-full px-4">
              <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-stone-700"></div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm">Jogo Pago</p>
                  <h3 className="text-lg font-bold text-white">Nome do Jogo 3</h3>
                  <div className="mt-2">
                    <span className="text-purple-500 font-bold">-30%</span>
                    <div className="flex items-center mt-1">
                      <span className="line-through text-gray-400 mr-2">R$ 50,00</span>
                      <span className="text-green-400 font-bold">R$ 35,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={nextCard}
          className="p-3 bg-stone-700 text-lime-500 rounded-full hover:bg-stone-600 transition-transform hover:scale-110"
        >
          <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10L35 25L20 40" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Free2Play };