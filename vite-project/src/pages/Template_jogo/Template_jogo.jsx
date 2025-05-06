import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Template_jogo = () => {
  const { CodJogo } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState('');

  useEffect(() => {
    const fetchTemplate_jogo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jogos/${CodJogo}`);
        setGame(response.data);
        
        // Se não houver imagens, usar placeholder
        if (!response.data.images || response.data.images.length === 0) {
          response.data.images = ['/assets/img/placeholder-game.png'];
        }
        
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar detalhes do jogo');
        setLoading(false);
      }
    };

    fetchTemplate_jogo();
  }, [CodJogo]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post('http://localhost:5000/carrinho', {
        CodJogo: CodJogo
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      Swal.fire({
        title: 'Sucesso!',
        text: 'Jogo adicionado ao carrinho',
        icon: 'success',
        confirmButtonColor: '#84cc16',
        background: '#1e293b',
        color: '#fff'
      });
    } catch (err) {
      Swal.fire({
        title: 'Erro!',
        text: err.response?.data?.message || 'Erro ao adicionar ao carrinho',
        icon: 'error',
        confirmButtonColor: '#84cc16',
        background: '#1e293b',
        color: '#fff'
      });
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post('http://localhost:5000/desejos', {
        CodJogo: CodJogo
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      Swal.fire({
        title: 'Sucesso!',
        text: 'Jogo adicionado à lista de desejos',
        icon: 'success',
        confirmButtonColor: '#84cc16',
        background: '#1e293b',
        color: '#fff'
      });
    } catch (err) {
      Swal.fire({
        title: 'Erro!',
        text: err.response?.data?.message || 'Erro ao adicionar à lista',
        icon: 'error',
        confirmButtonColor: '#84cc16',
        background: '#1e293b',
        color: '#fff'
      });
    }
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    setShowPaymentModal(true);
    fetchPaymentOptions();
  };

  const fetchPaymentOptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/pagamentos');
      setPaymentOptions(response.data);
      if (response.data.length > 0) {
        setSelectedPayment(response.data[0].CodMeioPagamento);
      }
    } catch (err) {
      console.error('Erro ao buscar opções de pagamento:', err);
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/compras', {
        CodJogo: CodJogo,
        CodMeioPagamento: selectedPayment
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setShowPaymentModal(false);
      navigate('/compra-finalizada', { state: { game } });
    } catch (err) {
      Swal.fire({
        title: 'Erro!',
        text: err.response?.data?.message || 'Erro ao processar pagamento',
        icon: 'error',
        confirmButtonColor: '#84cc16',
        background: '#1e293b',
        color: '#fff'
      });
    }
  };

  const changeImage = (direction) => {
    setCurrentImageIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % game.images.length;
      } else {
        return (prev - 1 + game.images.length) % game.images.length;
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-stone-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="flex justify-center items-center h-screen bg-stone-900">
        <p className="text-red-500 text-xl">{error || 'Jogo não encontrado'}</p>
      </div>
    );
  }

  return (
    <div className="bg-stone-900 text-white min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <button onClick={() => navigate('/')} className="inline-flex items-center text-sm font-medium text-lime-500 hover:text-lime-400">
                Home
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2">{game.Nome}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Game Images and Details */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-lime-500 mb-6">{game.Nome}</h1>
            
            {/* Image Carousel */}
            <div className="mb-8">
              <div className="relative">
                <img 
                  src={game.images[currentImageIndex]} 
                  alt={game.Nome} 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <button 
                  onClick={() => changeImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-stone-800 bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
                >
                  <svg className="w-6 h-6 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button 
                  onClick={() => changeImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-stone-800 bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
                >
                  <svg className="w-6 h-6 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              
              {/* Thumbnails */}
              <div className="flex justify-center mt-4 space-x-2">
                {game.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-12 object-cover rounded cursor-pointer ${currentImageIndex === index ? 'ring-2 ring-lime-500' : 'opacity-70'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-lime-400 mb-4">Descrição</h2>
              <p className="text-gray-300">{game.Descricao}</p>
            </div>
            
            {/* Synopsis */}
            <div className="bg-stone-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-lime-400 mb-4">Sinopse</h2>
              <p className="text-gray-300">{game.Sinopse}</p>
            </div>
            
            {/* Minimum Requirements */}
            {game.Requisitos && (
              <div className="bg-stone-800 p-6 rounded-lg hover:bg-stone-700 transition cursor-pointer mb-8">
                <h2 className="text-xl font-semibold text-lime-400 mb-4">Requisitos Mínimos</h2>
                <ul className="text-gray-300 space-y-2">
                  <li><strong>Sistema Operacional:</strong> {game.Requisitos.SOMin}</li>
                  <li><strong>Processador:</strong> {game.Requisitos.CPUMin}</li>
                  <li><strong>Memória:</strong> {game.Requisitos.RAMmin}</li>
                  <li><strong>Placa de vídeo:</strong> {game.Requisitos.GPUMin}</li>
                  <li><strong>Armazenamento:</strong> {game.Requisitos.Armazenamento}</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Right Column - Purchase Info */}
          <div className="lg:w-1/3">
            <div className="bg-stone-800 rounded-lg p-6 sticky top-24">
              <p className="text-gray-400 text-sm mb-2">Jogo Base</p>
              
              {/* Price */}
              <div className="mb-6">
                {game.Desconto > 0 ? (
                  <>
                    <span className="text-lime-500 font-bold text-xl">-{game.Desconto}%</span>
                    <div className="flex items-center">
                      <span className="text-4xl font-bold text-white">R$ {(game.Preco * (1 - game.Desconto/100)).toFixed(2)}</span>
                      <span className="ml-2 text-gray-400 line-through">R$ {game.Preco.toFixed(2)}</span>
                    </div>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-white">R$ {game.Preco.toFixed(2)}</span>
                )}
              </div>
              
              {/* Action Buttons */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-lime-700 hover:bg-lime-600 text-white font-bold py-3 rounded-lg mb-4 transition"
              >
                Comprar agora
              </button>
              
              <button
                onClick={handleAddToCart}
                className="w-full bg-stone-700 hover:bg-stone-600 text-white font-bold py-3 rounded-lg mb-4 transition"
              >
                Adicionar ao carrinho
              </button>
              
              <button
                onClick={handleAddToWishlist}
                className="w-full bg-stone-700 hover:bg-stone-600 text-white font-bold py-3 rounded-lg transition"
              >
                Lista de desejos
              </button>
              
              <p className="text-lime-400 text-center mt-4">Ganhe 5% de volta</p>
            </div>
            
            {/* Game Info */}
            <div className="bg-stone-800 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-lime-400 mb-4">Informações</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400">Avaliação:</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(game.Avaliacao) ? 'text-lime-500' : 'text-gray-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400">Gênero:</p>
                  <p className="text-white">{game.Generos?.join(', ')}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Categoria:</p>
                  <p className="text-white">{game.Categorias?.join(', ')}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Classificação:</p>
                  <p className="text-white">{game.Classificacao}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Lançamento:</p>
                  <p className="text-white">{new Date(game.DtLancamento).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            {/* Developer Info */}
            {game.Desenvolvedora && (
              <div className="bg-stone-800 rounded-lg p-6 mt-6 hover:bg-stone-700 transition cursor-pointer">
                <h3 className="text-xl font-semibold text-lime-400 mb-4">Desenvolvedora</h3>
                <p className="text-white">{game.Desenvolvedora.NomeDesenvolvedora}</p>
                <p className="text-gray-400 mt-2">CNPJ: {game.Desenvolvedora.CNPJ}</p>
                <p className="text-gray-400">Contato: {game.Desenvolvedora.Email_Contato}</p>
                <a 
                  href={game.Desenvolvedora.SiteOficial} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lime-500 hover:underline inline-block mt-2"
                >
                  Site oficial
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-stone-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-lime-500 mb-4">Forma de pagamento</h2>
            
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Selecione o método:</label>
                <select
                  value={selectedPayment}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-2 text-white"
                >
                  {paymentOptions.map(option => (
                    <option key={option.CodMeioPagamento} value={option.CodMeioPagamento}>
                      {option.OpcoesPagamento}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="px-4 py-2 bg-stone-700 hover:bg-stone-600 rounded-lg transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-lime-700 hover:bg-lime-600 rounded-lg transition"
                >
                  Finalizar compra
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Template_jogo;