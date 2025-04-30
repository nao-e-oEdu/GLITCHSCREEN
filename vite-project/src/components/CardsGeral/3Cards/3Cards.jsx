import React from "react";

const CardExemplo = ({ titulo, gratuito, preco }) => {
  return (
    <div className="flex flex-col w-90 bg-stone-800 rounded-lg shadow-lg overflow-hidden h-full">
      <div className="h-60 bg-lime-600 flex items-center justify-center">      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2">{titulo}</h3>
        {gratuito ? (
          <span className="text-lime-600 font-bold">Gratuito</span>
        ) : (
          <span className="text-lime-600 font-bold">R$ {preco}</span>
        )}
      </div>
    </div>
  );
};

const ThreeCards = () => {
  // Dados mockados
  const cardData = [
    { titulo: "Jogo Gratuito 1", gratuito: true },
    { titulo: "Jogo Pago", preco: "59,90", gratuito: false },
    { titulo: "Jogo Gratuito 2", gratuito: true }
  ];

  return (
    <div className="p-6 rounded-xl">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="flex">
            <CardExemplo {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ThreeCards };