import React, { useEffect, useRef, useState } from "react";

// Lista dos membros
const equipe = [
  { nome: "HickSouldrow", github: "https://github.com/HickSouldrow" },
  { nome: "Ioogo", github: "https://github.com/Ioogo" },
  { nome: "EnzoSouto01", github: "https://github.com/EnzoSouto01" },
  { nome: "nao-e-oEdu", github: "https://github.com/nao-e-oEdu" },
  { nome: "RODRIGOMEL", github: "https://github.com/RODRIGOMEL" },
  { nome: "EduardoSousaCavalcante", github: "https://github.com/EduardoSousaCavalcante" },
  { nome: "LuanLancioni", github: "https://github.com/LuanLancioni" },
];

// Dividindo a equipe em dois grupos
const grupoPrincipal = equipe.slice(0, 3);
const colaboradores = equipe.slice(3);

// Componente de card com animação ao entrar na tela
const MembroCard = ({ nome, github, index }) => {
  const ref = useRef();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisivel(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visivel
          ? `opacity-100 translate-y-0 delay-[${index * 100}ms]`
          : "opacity-0 translate-y-10"
      }`}
    >
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center text-center p-4 rounded-xl bg-stone-800 hover:bg-stone-700 transition duration-300 shadow-lg shadow-lime-900/20 hover:scale-105"
      >
        <img
          src={`https://github.com/${nome}.png`}
          alt={nome}
          className="w-24 h-24 rounded-full border-2 border-lime-600 group-hover:scale-110 transition duration-300"
        />
        <span className="mt-2 text-white font-medium text-sm group-hover:text-lime-400">
          {nome}
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-300">GitHub</span>
      </a>
    </div>
  );
};

// Página principal "Sobre Nós"
const SobreNos = () => {
  return (
    <div className="min-h-screen  text-white px-4 py-20">
      <main className="max-w-6xl mx-auto text-center">
        {/* Cabeçalho */}
        <h1 className="text-4xl font-bold text-lime-500">Sobre Nós</h1>
        <div className="w-32 h-1 bg-lime-600 mx-auto mt-2 rounded-full" />

        {/* Descrição */}
        <div className="mt-12 space-y-6 text-justify text-gray-200 text-base leading-relaxed">
          <p>
            Bem-vindo à <strong>GlitchScreen</strong>, sua plataforma de jogos indie! Somos apaixonados por inovação e diversidade no mundo dos games...
          </p>
          <p>
            Nosso catálogo é recheado de títulos originais, desafiadores e surpreendentes...
          </p>
          <p>
            A GlitchScreen é também uma comunidade. Evoluímos constantemente com feedbacks, ideias e colaborações...
          </p>
        </div>
        <div>
        <div />

        <h1 className="text-4xl font-bold text-lime-500 mt-20" >Conheça a Nossa Equipe</h1>
        <div className="w-32 h-1 bg-lime-600 mx-auto mt-2 rounded-full mb-12" />          <p className="text-gray-200 text-sm mb-4">
            Nossa equipe é composta por desenvolvedores, designers e criadores apaixonados por jogos indie.
          </p>
          <p className="text-gray-200 text-sm mb-4">
            Cada membro traz uma perspectiva única, contribuindo para a diversidade e inovação da GlitchScreen.
          </p>
          <p className="text-gray-200 text-sm mb-4">
            Estamos sempre em busca de novos talentos e ideias. Se você é um desenvolvedor indie, designer ou criador, entre em contato!
          </p>  
        </div>
        {/* Grupo Principal */}
        <section className="mt-16 mb-10">

          <h2 className="text-2xl font-semibold text-lime-500 mb-6">Grupo Principal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {grupoPrincipal.map((membro, i) => (
              <MembroCard key={membro.nome} nome={membro.nome} github={membro.github} index={i} />
            ))}
          </div>
        </section>

        {/* Colaboradores */}
        <section className="mt-16 mb-20">
          <h2 className="text-xl font-semibold text-lime-500 mb-4">Colaboradores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {colaboradores.map((membro, i) => (
              <MembroCard
                key={membro.nome}
                nome={membro.nome}
                github={membro.github}
                index={i + grupoPrincipal.length} // Ajusta o delay
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export { SobreNos };
