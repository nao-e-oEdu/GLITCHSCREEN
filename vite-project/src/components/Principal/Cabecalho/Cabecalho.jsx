import { Link } from 'react-router-dom';
import { Menu } from './menu';
import { BarraPesquisa } from './Pesquisa/BarraPesquisa';
import GlitchScreen from '../../../assets/GlitchScreen.png';
import { useState } from 'react';
import { MenuPerfil } from './MenuPerfil'; // Importe o novo componente

const Cabecalho = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [jogosBuscados, setJogosBuscados] = useState([]);

  const buscarJogos = async () => {
    try {      
      const response = (await fetch(`http://localhost:5000/jogos`));
      const data = await response.json();
      const filtrados = [];

      data.forEach(element => {
        if (element.Nome.toLowerCase().includes(pesquisa.toLowerCase())) {
          filtrados.push(element);
        }
      });

      setJogosBuscados(filtrados);

      console.log(filtrados);
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    }
  };
  

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
        <BarraPesquisa 
          placeholder="Pesquisar Jogo" 
          type="text"
          name="pesquisa"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          onClick={buscarJogos}
        />

        <MenuPerfil />
      </div>
    </header>
  );
};

export { Cabecalho };