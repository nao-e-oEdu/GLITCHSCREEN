import React, { useState, useEffect } from 'react';
import CardJogo from '../Card/Card';
import axios from 'axios'; // Biblioteca para requisições HTTP

const CardCarousel = () => {
    const [jogos, setJogos] = useState([]); // Estado para armazenar os jogos
    const [startIndex, setStartIndex] = useState(0); // Controle do índice inicial

    // Buscar os dados do JSON no backend
    useEffect(() => {
        axios.get('http://localhost:5000/jogos') // Substitua pela URL do seu backend
            .then(response => {
                setJogos(response.data); // Armazena os dados no estado
            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
            });
    }, []);

    // Funções para navegar no carousel
    const anteCards = () => {
        setStartIndex(Math.max(startIndex - 3, 0));
    };

    const proxCards = () => {
        setStartIndex(Math.min(startIndex + 3, jogos.length - 3));
    };

    // Exibir apenas os jogos visíveis no carousel
    const mostrarCards = jogos.slice(startIndex, startIndex + 3);

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                {/* Botão Esquerda */}
                <button
                    onClick={anteCards}
                    disabled={startIndex === 0}
                    className="p-3 bg-stone-700 text-lime-500 rounded-full hover:bg-stone-600 transition-transform duration-200 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &lt;
                </button>

                {/* Container de cards */}
                <div className="flex overflow-hidden w-full">
                    {mostrarCards.map((jogo, index) => (
                        <div key={index} className="flex-shrink-0 w-1/3 px-2">
                            <CardJogo jogo={jogo} />
                        </div>
                    ))}
                </div>

                {/* Botão Direita */}
                <button
                    onClick={proxCards}
                    disabled={startIndex + 3 >= jogos.length}
                    className="p-3 bg-stone-700 text-lime-500 rounded-full hover:bg-stone-600 transition-transform duration-200 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export { CardCarousel };