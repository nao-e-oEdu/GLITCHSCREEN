import { Outlet } from 'react-router-dom';
import { Cabecalho, Conteudo, Rodape } from '../../components';
import { useAppContext } from '../../hooks';

const LayoutPadrao = () => {
  const { nomeUsuario } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-lime-900 via-stone-900 to-stone-950 animate-fundo">
      <Cabecalho />
      <main className="flex-grow space-y-20">
        <Conteudo>
          <Outlet />
        </Conteudo>
      </main>
      <Rodape criador={nomeUsuario} />
    </div>
  );
};

export { LayoutPadrao };
