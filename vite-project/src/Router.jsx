import { Routes, Route } from 'react-router-dom';

import { LayoutPadrao } from './layouts';
import { Erro404, Inicial, SobreNos, Termos, Contato, Login, Cadastro, Perfil } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="*" element={<Erro404 />}/>
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Termos" element={<Termos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
};

export { Router };
