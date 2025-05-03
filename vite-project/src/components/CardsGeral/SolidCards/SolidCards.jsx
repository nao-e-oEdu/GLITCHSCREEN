import React from "react";

const HorizontalGameCard = ({ hasDiscount }) => {
  return (
    <div className="flex p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-all">
      <div className="w-16 h-20 flex-shrink-0">
        <div className="w-full h-full bg-lime-600 rounded-l-lg flex items-center justify-center">
        </div>
      </div>
      
      <div className="flex flex-col justify-between ml-3 w-full">
        <p className="text-white font-bold text-sm truncate">Nome do Jogo</p>
        <div className="flex items-center mt-1">
          {hasDiscount ? (
            <>
              <span className="line-through text-gray-400 text-xs">R$ 00,00</span>
              <span className="text-lime-500 font-bold text-sm ml-2">R$ 00,00</span>
            </>
          ) : (
            <span className="text-lime-500 font-bold text-sm">R$ 00,00</span>
          )}
        </div>
      </div>
    </div>
  );
};

const SolidCards = () => {
  // Criando arrays com 5 itens cada
  const generateCards = (count, hasDiscount) => 
    Array.from({ length: count }, (_, i) => (
      <HorizontalGameCard key={i} hasDiscount={i % 2 === 0} />
    ));

  return (
    <div className="p-4 max-w-6xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Coluna 1 - Mais vendidos */}
        <div className="relative">
          <h4 className="text-lg font-bold mb-4 ">Mais vendidos</h4>
          <div className="space-y-3">
            {generateCards(5, true)}
          </div>
        </div>
        
        {/* Coluna 2 - Mais jogados */}
        <div className="relative">
          <h4 className="text-lg font-bold mb-4">Mais jogados</h4>
          <div className="space-y-3">
            {generateCards(5, false)}
          </div>
        </div>
        
        {/* Coluna 3 - Mais aguardados */}
        <div className="relative">
          <h4 className="text-lg font-bold mb-4">Títulos Mais Aguardados</h4>
          <div className="space-y-3">
            {generateCards(5, true)}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-b-2 border-lime-700 my-6"></div>
    </div>
  );
};

export { SolidCards };