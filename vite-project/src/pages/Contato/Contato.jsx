import { Mail, Phone, Instagram, Facebook, Twitter, LifeBuoy } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-stone-900 border-lime-600 border-2 text-white px-4 py-20 mb-15">
      <main className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-lime-500">Contato</h1>
        <div className="w-32 h-1 bg-lime-600 mx-auto mt-2 rounded-full" />
      </main>

      <section className="max-w-4xl mx-auto mt-16 space-y-12 text-gray-200 text-base leading-relaxed animate-fadeIn">
        <p>
          Se você tiver dúvidas, comentários ou preocupações, não hesite em entrar em contato com a equipe da <strong>GlitchScreen</strong>. Estamos sempre prontos para ajudar e ouvir você.
        </p>

        {/* Bloco de informações principais */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-stone-800 rounded-xl p-6 shadow-md shadow-lime-900/20 hover:shadow-lime-700/30 transition">
            <h3 className="text-lg font-semibold mb-4 text-lime-400 flex items-center gap-2">
              <Mail className="w-5 h-5" /> E-mail
            </h3>
            <a href="mailto:suporte@glitchscreen.com" className="text-lime-300 hover:underline">
              suporte@glitchscreen.com
            </a>
          </div>

          <div className="bg-stone-800 rounded-xl p-6 shadow-md shadow-lime-900/20 hover:shadow-lime-700/30 transition">
            <h3 className="text-lg font-semibold mb-4 text-lime-400 flex items-center gap-2">
              <Phone className="w-5 h-5" /> Telefone
            </h3>
            <p>(11) 98491-2520</p>
            <p className="text-sm text-gray-400 mt-1">
              Atendimento de segunda a sexta, das 9h às 18h.
            </p>
          </div>

          <div className="bg-stone-800 rounded-xl p-6 shadow-md shadow-lime-900/20 hover:shadow-lime-700/30 transition col-span-full">
            <h3 className="text-lg font-semibold mb-4 text-lime-400 flex items-center gap-2">
              <LifeBuoy className="w-5 h-5" /> Central de Ajuda
            </h3>
            <a
              href="https://www.glitchscreen.com/help"
              target="_blank"
              className="text-lime-300 hover:underline"
            >
              www.glitchscreen.com/help
            </a>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-lime-400 mb-4">Redes Sociais</h2>
          <p className="mb-6">
            Siga a GlitchScreen e fique por dentro de novidades, lançamentos e promoções.
          </p>
          <div className="flex justify-center gap-8 text-lime-300 text-sm">
            <a href="https://facebook.com/GlitchScreen" target="_blank" className="group hover:text-lime-500 transition">
              <Facebook className="mx-auto mb-1 group-hover:scale-110 transition" />
              Facebook
            </a>
            <a href="https://twitter.com/GlitchScreen" target="_blank" className="group hover:text-lime-500 transition">
              <Twitter className="mx-auto mb-1 group-hover:scale-110 transition" />
              Twitter
            </a>
            <a href="https://instagram.com/glitchscreen" target="_blank" className="group hover:text-lime-500 transition">
              <Instagram className="mx-auto mb-1 group-hover:scale-110 transition" />
              Instagram
            </a>
          </div>
        </div>

        <p>
          Seu feedback é fundamental para continuarmos evoluindo e oferecendo a melhor experiência de jogo possível. Estamos aqui para garantir que você aproveite ao máximo a plataforma.
        </p>
      </section>
    </div>
  );
};

export { Contato };
