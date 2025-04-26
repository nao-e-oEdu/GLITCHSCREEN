import { Outlet } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from '../../components';
import { useAppContext } from '../../hooks';

import style from './LayoutPadrao.module.css';

const LayoutPadrao = () => {
  const { nomeUsuario } = useAppContext();

  return (
    <div className={style.LayoutPadrao}>
      <Cabecalho />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador={nomeUsuario} />
    </div>
  );
};

export { LayoutPadrao };
