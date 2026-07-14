import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — CORA Soluções Digitais" },
      {
        name: "description",
        content:
          "Saiba como a CORA Soluções Digitais coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.",
      },
    ],
  }),
  component: PoliticaDePrivacidadePage,
});

function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="7 de julho de 2026">
      <LegalSection title="1. Introdução">
        <p>
          A CORA Soluções Digitais (&quot;nós&quot;, &quot;nosso&quot; ou &quot;Empresa&quot;) respeita a sua privacidade e
          está comprometida com a proteção dos dados pessoais tratados no âmbito de nossos
          serviços de engenharia de software, automação e soluções digitais.
        </p>
        <p>
          Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e
          compartilhamos informações quando você visita nosso site, entra em contato conosco ou
          utiliza nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (Lei nº
          13.709/2018 — LGPD).
        </p>
      </LegalSection>

      <LegalSection title="2. Dados que coletamos">
        <p>Podemos coletar as seguintes categorias de dados pessoais:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Dados de identificação e contato:</strong> nome,
            e-mail, telefone, empresa e cargo, fornecidos voluntariamente em formulários ou
            comunicações.
          </li>
          <li>
            <strong className="text-foreground">Dados de navegação:</strong> endereço IP, tipo de
            navegador, páginas visitadas, tempo de permanência e cookies, quando aplicável.
          </li>
          <li>
            <strong className="text-foreground">Dados contratuais:</strong> informações
            necessárias para propostas comerciais, execução de projetos e faturamento.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidades do tratamento">
        <p>Utilizamos seus dados pessoais para:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Responder solicitações de contato, orçamento e suporte;</li>
          <li>Executar contratos e prestar nossos serviços de desenvolvimento de software;</li>
          <li>Melhorar a experiência de navegação e a segurança do site;</li>
          <li>Cumprir obrigações legais, regulatórias e exercer direitos em processos;</li>
          <li>Enviar comunicações comerciais, quando houver consentimento ou interesse legítimo.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Base legal">
        <p>
          O tratamento de dados pessoais é realizado com fundamento nas hipóteses previstas na
          LGPD, incluindo execução de contrato, cumprimento de obrigação legal, legítimo interesse
          e consentimento do titular, quando aplicável.
        </p>
      </LegalSection>

      <LegalSection title="5. Compartilhamento de dados">
        <p>
          Não vendemos seus dados pessoais. Podemos compartilhá-los com prestadores de serviços
          essenciais à operação (hospedagem, e-mail, ferramentas de gestão), sempre mediante
          contratos que garantam confidencialidade e segurança, ou quando exigido por lei ou
          autoridade competente.
        </p>
      </LegalSection>

      <LegalSection title="6. Retenção e segurança">
        <p>
          Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta
          política ou conforme exigido por lei. Adotamos medidas técnicas e administrativas
          razoáveis para proteger as informações contra acesso não autorizado, perda ou alteração.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookies">
        <p>
          Utilizamos cookies essenciais para garantir o funcionamento e a segurança do site. Cookies
          opcionais — como os de análise de desempenho — só são ativados após o seu consentimento,
          por meio do aviso exibido na primeira visita.
        </p>
        <p>
          Você pode alterar sua preferência a qualquer momento limpando os dados do navegador ou
          entrando em contato conosco. Também é possível gerenciar cookies nas configurações do seu
          navegador; algumas funcionalidades podem ser afetadas.
        </p>
      </LegalSection>

      <LegalSection title="8. Seus direitos">
        <p>
          Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção,
          anonimização, portabilidade, eliminação, informação sobre compartilhamentos e revogação
          de consentimento, quando cabível.
        </p>
        <p>
          Para exercer seus direitos, entre em contato pelo e-mail{" "}
          <a
            href="mailto:tech.cora.dev@gmail.com"
            className="text-sea underline-offset-4 hover:underline"
          >
            tech.cora.dev@gmail.com
          </a>
          . Responderemos dentro dos prazos legais aplicáveis.
        </p>
      </LegalSection>

      <LegalSection title="9. Alterações">
        <p>
          Esta política pode ser atualizada periodicamente. A data da última revisão será indicada
          no topo desta página. Recomendamos a consulta regular deste documento.
        </p>
      </LegalSection>

      <LegalSection title="10. Contato">
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus
          dados, entre em contato conosco. Consulte também nossos{" "}
          <Link to="/termos-de-uso" className="text-sea underline-offset-4 hover:underline">
            Termos de Uso
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
