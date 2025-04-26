import { useState } from 'react';

import { Botao, CampoTexto } from '../../components';
import { useAppContext } from '../../hooks';

import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
  const { adicionarTarefa } = useAppContext();

  const [nomeTarefa, setNomeTarefa] = useState('');

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const onSubmitFormCriarTarefa = (event) => {
    event.preventDefault();

    if(!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);

    setNomeTarefa('');
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={onSubmitFormCriarTarefa}>
      <CampoTexto 
        value={nomeTarefa} 
        onChange={onChangeNomeTarefa} 
      />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefa };
