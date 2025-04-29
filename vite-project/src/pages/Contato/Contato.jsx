const Contato = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-20 mt-8 text-center">
        <h1 className="text-white text-3xl font-bold">Contato</h1>
        <div className="w-32 h-1 bg-lime-800 mx-auto mt-2"></div>
      </main>
      <div className="mx-auto max-w-6xl px-4 text-white text-justify animate-fadeIn mb-24">
        <p className="text-lg mb-14">
          Se você tiver dúvidas, comentários ou preocupações sobre esses Termos
          de Serviço, ou se precisar de assistência adicional, não hesite em
          entrar em contato conosco. Nossa equipe está aqui para ajudar a
          esclarecer qualquer questão que você possa ter sobre os serviços que
          oferecemos, garantir que sua experiência seja a melhor possível e
          auxiliá-lo em qualquer problema técnico ou administrativo.
        </p>

        <div className="text-lg mb-4 animate-fadeIn">
          <p>
            E-mail de Suporte:{" "}
            <a href="mailto:suporte@glitchscreen.com" className="text-lime-400">
              suporte@glitchscreen.com
            </a>
          </p>
          <p>
            Central de Ajuda:{" "}
            <a
              href="https://www.glitchscreen.com/help"
              target="_blank"
              className="text-lime-400"
            >
              www.glitchscreen.com/help
            </a>
          </p>
          <p>
            Telefone: (XXX) XXXX-XXXX (disponível de segunda a sexta-feira, das
            9h às 18h, horário local). Caso precise de suporte urgente fora
            desse horário, oferecemos a possibilidade de agendar uma chamada
            para um horário mais conveniente, basta enviar um e-mail para nossa
            equipe.
          </p>
          <p className="mt-2">
            Lembre-se que estamos comprometidos em fornecer um atendimento de
            alta qualidade e em resolver suas questões de forma ágil e eficaz.
            Nossos canais de comunicação estão sempre abertos para qualquer
            dúvida ou sugestão.
          </p>
        </div>

        <div className="text-lg mb-4 animate-fadeIn">
          <p className="py-10">
            Além do atendimento por e-mail e telefone, você também pode entrar
            em contato com a GlitchScreen através dos nossos perfis oficiais nas
            redes sociais. Nossos canais sociais são atualizados regularmente
            com novidades, dicas de jogos e outros conteúdos interessantes,
            então fique à vontade para interagir com a gente!
            <ul className="list-none">
            <li>
              <a
                href="https://facebook.com/GlitchScreen"
                target="_blank"
                className="text-lime-400"
              >
                Facebook: @GlitchScreen
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/GlitchScreen"
                target="_blank"
                className="text-lime-400"
              >
                Twitter: @GlitchScreen
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/glitchscreen"
                target="_blank"
                className="text-lime-400"
              >
                Instagram: @glitchscreen
              </a>
            </li>
          </ul>
          </p>
          
          <p className="mt-2">
            Nossos perfis nas redes sociais também são um ótimo lugar para
            acompanhar atualizações sobre novos lançamentos, promoções especiais
            e eventos exclusivos. Não perca a oportunidade de ficar por dentro
            de tudo o que está acontecendo na GlitchScreen!
          </p>
        </div>

        <p className="text-lg mb-4 animate-fadeIn">
          Nossa equipe de suporte estará sempre à disposição para responder às
          suas perguntas e ajudar com qualquer problema que você possa encontrar
          ao usar nossos serviços. Se você tiver algum feedback sobre a nossa
          plataforma ou sugestões para melhorarmos, também ficaremos felizes em
          ouvir você. Seu feedback é fundamental para continuarmos evoluindo e
          oferecendo a melhor experiência de jogo possível.
        </p>

        <p className="text-lg mb-4 animate-fadeIn">
          Agradecemos por escolher a GlitchScreen, e esperamos que sua
          experiência conosco seja inesquecível. Estamos aqui para garantir que
          você aproveite ao máximo a plataforma e seus jogos favoritos. Em caso
          de dúvidas, não hesite em entrar em contato conosco pelos canais
          mencionados acima.
        </p>
      </div>
    </div>
  );
};

export { Contato };
