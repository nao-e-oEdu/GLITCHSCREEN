import { Link } from 'react-router-dom';
import { Menu } from './menu';
import GlitchScreen from '../../assets/GlitchScreen.png';

const Cabecalho = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 border-b-4 border-lime-600 bg-stone-900 shadow-md">
      
      <div className="flex items-center space-x-10">
        <Menu />
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-lime-600 font-extrabold text-xl font-roboto">GlitchScreen</span>
          <img src={GlitchScreen} alt="GlitchScreen" className="w-7 h-7" />
        </Link>
      </div>
      
      <div className="flex items-center space-x-3">
        {/* Barra de busca */}
        <div className="flex">
          <input
            type="text"
            placeholder="Pesquisar jogo"
            className="px-2.5 py-1.5 rounded-l-md bg-stone-700 text-white placeholder-gray-300 focus:outline-none text-sm"
          />
          <button className="px-3 py-1.5 bg-lime-600 text-white font-semibold rounded-r-md hover:bg-lime-500 transition text-sm mr-1.5">
            Buscar
          </button>
        </div>

        {/* Ícone de usuário */}
        <Link to="/perfil">
          <div className="p-1.5 border-2 border-lime-600 rounded-full text-lime-600 hover:bg-lime-600 mr-2 hover:text-white transition">
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
          </div>
        </Link>
      </div>
    </header>
  );
};

export { Cabecalho };
