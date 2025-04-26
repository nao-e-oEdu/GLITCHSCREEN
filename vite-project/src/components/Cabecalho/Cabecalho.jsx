import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Ative se tiver logo

const Cabecalho = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b-4 border-lime-700 bg-stone-800 shadow-md">
      <Link to="/" className="flex items-center space-x-4">
        {/* Logo */}
        {/* <img src={logo} alt="Logo" className="w-10 h-10" /> */}
        {/* Nome da Loja */}
        <span className="text-lime-600 font-extrabold text-2xl">GlitchScreen</span>
      </Link>

      <div className="flex items-center space-x-4">
        {/* Barra de busca */}
        <div className="flex">
          <input
            type="text"
            placeholder="Pesquisar jogo"
            className="px-3 py-2 rounded-l-md bg-stone-700 text-white placeholder-gray-300 focus:outline-none"
          />
          <button className="px-4 py-2 bg-lime-700 text-white font-semibold rounded-r-md hover:bg-lime-600 transition">
            Buscar
          </button>
        </div>

        {/* Ícone de usuário */}
        <Link to="/perfil">
          <div className="p-2 border-2 border-lime-700 rounded-full hover:bg-lime-700 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
