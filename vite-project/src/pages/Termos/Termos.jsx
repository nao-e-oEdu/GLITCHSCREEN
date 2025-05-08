const Termos = () => {
  return (
    <div className="min-h-screen mt-20 text-white bg-stone-900 border-lime-600 border-2 px-6 mb-15 lg:px-12">
      <main className="max-w-6xl mx-auto py-16">
        <h1 className="text-4xl font-bold text-center text-lime-500">Termos de Serviço</h1>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-3 rounded-full"></div>

        <div className="mt-16 space-y-10 animate-fadeIn slide-in">
          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">1. Aceitação dos Termos</h2>
            <p className="text-base leading-relaxed text-gray-200">
              Ao utilizar os serviços da GlitchScreen, você concorda com estes termos. Caso não esteja de acordo, não utilize os serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">2. Modificações</h2>
            <p className="text-base leading-relaxed text-gray-200">
              Podemos atualizar estes termos a qualquer momento. É sua responsabilidade verificar as mudanças periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">3. Conta de Usuário</h2>
            <p className="text-base leading-relaxed text-gray-200">
              Ao criar uma conta, você é responsável por manter a segurança e confidencialidade de suas credenciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">4. Propriedade Intelectual</h2>
            <p className="text-base leading-relaxed text-gray-200">
              Todo o conteúdo dos serviços pertence à GlitchScreen ou seus parceiros e está protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">5. Uso Aceitável</h2>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2">
              <li>Não publique conteúdo ofensivo ou ilegal.</li>
              <li>Não acesse sistemas de forma não autorizada.</li>
              <li>Não colete dados automaticamente sem permissão.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">6. Limitação de Responsabilidade</h2>
            <p className="text-base leading-relaxed text-gray-200">
              Não somos responsáveis por perdas ou danos indiretos causados pelo uso dos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">7. Encerramento</h2>
            <p className="text-base leading-relaxed text-gray-200">
              Podemos suspender ou encerrar sua conta se você violar estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-lime-400 mb-2">8. Disposições Gerais</h2>
            <ul className="list-decimal list-inside text-base text-gray-300 space-y-2">
              <li>Estes termos seguem as leis vigentes no país da GlitchScreen.</li>
              <li>Eventuais disputas serão resolvidas via arbitragem.</li>
              <li>Partes inválidas dos termos não afetam o restante.</li>
              <li>Este documento é o acordo completo entre as partes.</li>
            </ul>
          </section>

          <footer className="text-center text-sm text-gray-500 mt-16">
            Última atualização: Maio de 2025
          </footer>
        </div>
      </main>
    </div>
  );
};

export { Termos };
