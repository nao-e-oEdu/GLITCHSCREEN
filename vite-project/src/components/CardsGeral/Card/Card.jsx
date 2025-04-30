const CardExemplo = () => {
    return (
        <div className="bg-stone-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl w-40 mx-auto">
            {/* w-40: largura fixa menor (160px) */}
            
            <div className="w-full h-32 bg-lime-600"></div>
            {/* altura menor também para combinar */}
            
            <div className="p-3">
                <p className="text-gray-300 text-xs">Jogo Base</p>
                <p className="text-gray-300 text-sm font-semibold">Nome do Jogo</p>
                
                <div className="mt-1">
                    <span className="text-lime-600 font-bold text-xs">-%</span>
                    <div className="flex items-center mt-1">
                        <span className="line-through text-gray-400 mr-1 text-xs">R$ 0,00</span>
                        <span className="text-lime-600 font-bold text-xs">R$ 0,00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CardExemplo };
