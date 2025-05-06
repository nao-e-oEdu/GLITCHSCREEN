import React from 'react';
import { Link } from 'react-router-dom';

const CardJogo = ({ jogo }) => {
    const precoOriginal = jogo.Preco.toFixed(2).replace('.', ',');
    const precoComDesconto = (jogo.Preco - (jogo.Desconto / 100) * jogo.Preco).toFixed(2).replace('.', ',');

    return (
<<<<<<< HEAD
        <Link to={`/jogo/${jogo.CodJogo}`} className="block">
            <div className="bg-stone-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105 w-40 md:w-44 mx-auto group">
                
                {/* Imagem */}
                <div className="relative w-full h-40 bg-lime-600 flex items-center justify-center overflow-hidden">
                    {jogo.ImageUrl ? (
                        <img 
                            src={jogo.ImageUrl} 
                            alt={jogo.Nome} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    ) : (
                        <span className="text-white text-sm">Sem imagem</span>
                    )}

                    {/* Badge de desconto */}
                    {jogo.Desconto > 0 && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md transform -rotate-2">
                            -{jogo.Desconto}%
                        </div>
                    )}
                </div>

                {/* Informações */}
                <div className="p-3 flex flex-col justify-between h-28">
                    <div>
                        <p className="text-gray-400 text-xs">Jogo Base</p>
                        <p 
                            className="text-gray-100 font-semibold text-sm truncate" 
                            title={jogo.Nome}
                        >
                            {jogo.Nome}
                        </p>
                    </div>
                    <div className="mt-2">
                        {jogo.Desconto > 0 ? (
                            <div className="flex items-center gap-1 mt-1">
                                <span className="line-through text-gray-400 text-xs">R$ {precoOriginal}</span>
                                <span className="text-lime-500 font-bold text-sm">R$ {precoComDesconto}</span>
                            </div>
                        ) : (
                            <span className="text-lime-500 font-bold text-sm">R$ {precoOriginal}</span>
                        )}
=======
        <div className="bg-stone-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl w-40 mx-auto">
            <div className="w-full h-32 bg-lime-600"></div>
            <div className="p-3">
                <p className="text-gray-300 text-xs">Jogo Base</p>
                <p className="text-gray-300 text-sm font-semibold">{jogo.Nome}</p>
                <div className="mt-1">
                    <span className="bg-rose-700 rounded-full px-2 py-0.5 text-white font-bold text-xs">-{jogo.Desconto}%</span>
                    <div className="flex items-center mt-1">
                        <span className="line-through text-gray-400 mr-1 text-xs">R$ {jogo.Preco}</span>
                        <span className="text-lime-600 font-bold text-xs">R$ {jogo.Preco - (jogo.Desconto / 100) * jogo.Preco}</span>
>>>>>>> b476a57 (FIX | Card Colors)
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardJogo;