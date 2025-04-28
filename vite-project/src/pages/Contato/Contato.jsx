const Contato = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-20 mt-8 text-center"> 
        <h1 className="text-white text-3xl font-bold">Contato</h1>
        <div className="w-32 h-1 bg-lime-800 mx-auto mt-2"></div>
      </main>

      <div className="mx-auto max-w-6xl px-4 text-white text-center mt-8 animate-fadeIn">
        <p className="text-lg mb-4">
          Se você tiver dúvidas, comentários ou preocupações sobre esses Termos de Serviço, ou se precisar de assistência adicional, entre em contato conosco através dos seguintes canais:
        </p>

        <div className="text-lg mb-4 animate-fadeIn">
          <p>E-mail de Suporte: suporte@glitchscreen.com</p>
          <p>Central de Ajuda: <a href="#" className="text-lime-400">www.glitchscreen.com/help</a></p>
          <p>Telefone: (XXX) XXXX-XXXX (disponível de segunda a sexta-feira, das 9h às 18h, horário local)</p>
        </div>

        <div className="text-lg mb-4 animate-fadeIn">
          <p>Você também pode entrar em contato com a GlitchScreen através dos nossos perfis oficiais nas redes sociais:</p>
          <ul className="list-none mt-4">
            <li><a href="#" className="text-lime-400">Facebook: @GlitchScreen</a></li>
            <li><a href="#" className="text-lime-400">Twitter: @GlitchScreen</a></li>
            <li><a href="#" className="text-lime-400">Instagram: @glitchscreen</a></li>
          </ul>
        </div>

        <p className="text-lg mb-4 animate-fadeIn">
          Nossa equipe de suporte estará à disposição para responder às suas perguntas e ajudar com qualquer problema que você possa encontrar ao usar nossos Serviços.
        </p>
      </div>
    </div>
  );
};

export { Contato };