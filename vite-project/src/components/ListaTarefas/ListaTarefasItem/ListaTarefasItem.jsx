import { Botao, TIPO_BOTAO } from '../../../components';
import { useAppContext } from '../../../hooks';

import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefa } = useAppContext();

  return (
    <li className={style.ListaTarefasItem}>
      <strong>{nome}</strong>
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
