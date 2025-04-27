import { Outlet } from 'react-router-dom';
import { Cabecalho, Conteudo, Rodape } from '../../components';
import { useAppContext } from '../../hooks';

const LayoutPadrao = () => {
  const { nomeUsuario } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-stone-950 via-stone-950 to-lime-950 animate-fundo">
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
