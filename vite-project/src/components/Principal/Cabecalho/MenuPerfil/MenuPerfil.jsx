import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MenuPerfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  const logout = () => {
    localStorage.removeItem('usuario');
    setUsuario(null);
    setAberto(false);
    navigate('/');
  };

  // Se não estiver logado, mostra apenas o botão "Entrar"
  if (!usuario) {
    return (
      <Link 
        to="/login"
        className="px-4 py-2 text-lime-600 font-bold rounded-md hover:text-lime-500 transition text-l"
      >
        Entrar
      </Link>
    );
  }

  // Se estiver logado, mostra o ícone de perfil com menu dropdown
  return (
    <div className="relative">
      {/* Ícone do usuário (apenas quando logado) */}
      <button 
        onClick={toggleMenu}
        className="p-1.5 border-2 border-lime-600 rounded-full text-lime-600 hover:bg-lime-600 hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.8 5.879 2.121M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* Menu dropdown (apenas quando logado) */}
      {aberto && (
        <div className="absolute right-0 mt-2 w-48 bg-stone-800 rounded-md shadow-lg border border-stone-600 z-50">
          <div className="px-4 py-2 border-b border-stone-600">
            <p className="text-sm text-lime-500 font-semibold">{usuario.nickname || usuario.username}</p>
            <p className="text-xs text-gray-400 truncate">{usuario.email}</p>
          </div>
          
          <Link
            to="/perfil"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-stone-700"
            onClick={() => setAberto(false)}
          >
            Editar perfil
          </Link>
          
          <Link
            to="/termos"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-stone-700"
            onClick={() => setAberto(false)}
          >
            Termos de uso
          </Link>
          
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-stone-700"
          >
            Deslogar
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPerfil;