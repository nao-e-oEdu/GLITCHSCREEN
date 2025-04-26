import style from './CampoTexto.module.css';

const CampoTexto = (props) => {
  return (
    <input className={style.CampoTexto} type="text" {...props} />
  );
};

export { CampoTexto };
