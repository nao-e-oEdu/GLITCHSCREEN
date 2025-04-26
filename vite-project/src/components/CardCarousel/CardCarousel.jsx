import React, { useState } from "react";
import { CardExemplo } from "../../components";

const CardCarousel = () => {
  const totalCards = 20; // Total de cards
  const cards = Array.from({ length: totalCards }, (_, index) => (
    <CardExemplo key={index} />
  ));

  const [startIndex, setStartIndex] = useState(0);

  const mostrarCards = cards.slice(startIndex, startIndex + 5); // 5 cards visíveis por vez

  const anteCards = () => {
    setStartIndex((prev) => Math.max(prev - 5, 0)); // Move para o grupo anterior
  };

  const proxCards = () => {
    setStartIndex((prev) =>
      prev + 5 >= totalCards ? prev : prev + 5 // Move para o próximo grupo
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Botão Esquerda */}
        <button
          onClick={anteCards}
          className="p-3 bg-stone-700 text-lime-500 rounded-full mt-12 hover:bg-stone-600 transition-transform duration-200 transform hover:scale-110"
        >
       <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="10" height="10" fill="#44403c" rx="25" />
    <path d="M30 10L15 25L30 40" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
        </button>

        {/* Container de cards visíveis */}
        <div className="flex overflow-hidden w-full">
          {mostrarCards.map((card, index) => (
            <div
              key={index}
              className="items-center flex-shrink-0 w-1/5 md:w-1/5 sm:w-1/4"
            >
              {card}
            </div>
          ))}
        </div>

        {/* Botão Direita */}
        <button
          onClick={proxCards}
          className="p-3 bg-stone-700 text-lime-500 rounded-full hover:bg-stone-600 transition-transform duration-200 transform hover:scale-110"
        >
         <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="10" height="10" fill="#44403c" rx="25" />
         <path d="M20 10L35 25L20 40" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
        </button>
      </div>
    </div>
  );
};

export { CardCarousel };
