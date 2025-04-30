import { Link } from 'react-router-dom';

const Erro404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center border-2 border-lime-500 p-10 rounded-2xl shadow-[0_0_30px_#84cc16] animate-fade-in max-w-md">
        <h1 className="text-6xl font-extrabold text-lime-400 mb-4">404</h1>
        <h2 className="text-2xl text-white mb-2">Página não encontrada</h2>
        <p className="text-gray-300 mb-6">
          A página que você está tentando acessar não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-lime-500 text-stone-900 font-bold px-6 py-2 rounded-lg hover:bg-lime-400 transition duration-300"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export { Erro404 };
