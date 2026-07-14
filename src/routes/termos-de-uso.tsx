import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso ? CORA Soluç?es Digitais" },
      {
        name: "description",
        content:
          "Termos e condiç?es de uso do site e dos serviços oferecidos pela CORA Soluç?es Digitais.",
      },
    ],
  }),
  component: TermosDeUsoPage,
});

function TermosDeUsoPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="7 de julho de 2026">
      <LegalSection title="1. Aceitaç?o dos termos">
        <p>
          Ao acessar e utilizar o site da CORA Soluç?es Digitais (&quot;Site&quot;), voc? declara ter lido,
          compreendido e concordado com estes Termos de Uso. Caso n?o concorde com qualquer
          disposiç?o, recomendamos que n?o utilize o Site ou nossos serviços.
        </p>
      </LegalSection>

      <LegalSection title="2. Sobre a CORA Soluç?es Digitais">
        <p>
          A CORA Soluç?es Digitais atua no desenvolvimento de software sob medida, automaç?es, aplicativos
          e soluç?es digitais para empresas. O Site tem caráter informativo e comercial, destinado
          ? apresentaç?o de serviços e ao contato com potenciais clientes.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso permitido">
        <p>Voc? concorda em utilizar o Site de forma lícita e de boa-fé, abstendo-se de:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Violar leis aplicáveis ou direitos de terceiros;</li>
          <li>Tentar acessar áreas restritas, sistemas ou dados sem autorizaç?o;</li>
          <li>
            Introduzir vírus, malware ou qualquer código que possa comprometer a integridade do
            Site;
          </li>
          <li>Reproduzir, distribuir ou modificar conteúdos sem autorizaç?o prévia por escrito.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Todo o conteúdo do Site ? incluindo textos, layout, marcas, logotipos, imagens, código
          e demais materiais ? é de propriedade da CORA Soluç?es Digitais ou de seus licenciadores, salvo
          indicaç?o em contrário. Nenhuma licença ou direito de uso é concedido além do necessário
          para navegaç?o pessoal e informativa.
        </p>
      </LegalSection>

      <LegalSection title="5. Serviços e contrataç?o">
        <p>
          As informaç?es publicadas no Site n?o constituem proposta vinculante. Projetos, prazos,
          escopos e valores s?o definidos exclusivamente em propostas comerciais e contratos
          específicos firmados entre as partes. A CORA Soluç?es Digitais reserva-se o direito de recusar
          solicitaç?es que n?o estejam alinhadas ? sua capacidade operacional ou política comercial.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitaç?o de responsabilidade">
        <p>
          Empregamos esforços razoáveis para manter o Site disponível e atualizado, porém n?o
          garantimos aus?ncia de interrupç?es, erros ou imprecis?es. Na extens?o permitida pela lei,
          a CORA Soluç?es Digitais n?o se responsabiliza por danos indiretos, lucros cessantes ou perdas
          decorrentes do uso ou da impossibilidade de uso do Site.
        </p>
      </LegalSection>

      <LegalSection title="7. Links externos">
        <p>
          O Site pode conter links para sites de terceiros. N?o nos responsabilizamos pelo
          conteúdo, políticas ou práticas de sites externos. O acesso a esses links é por sua conta
          e risco.
        </p>
      </LegalSection>

      <LegalSection title="8. Privacidade">
        <p>
          O tratamento de dados pessoais realizado por meio do Site é regido por nossa{" "}
          <Link
            to="/politica-de-privacidade"
            className="text-sea underline-offset-4 hover:underline"
          >
            Política de Privacidade
          </Link>
          , que integra estes Termos de Uso.
        </p>
      </LegalSection>

      <LegalSection title="9. Alteraç?es">
        <p>
          Podemos modificar estes Termos de Uso a qualquer momento. As alteraç?es entram em vigor
          após a publicaç?o nesta página, com indicaç?o da data de atualizaç?o. O uso continuado do
          Site após as mudanças implica aceitaç?o dos novos termos.
        </p>
      </LegalSection>

      <LegalSection title="10. Legislaç?o aplicável">
        <p>
          Estes Termos de Uso s?o regidos pelas leis da República Federativa do Brasil. Fica eleito
          o foro da comarca de domicílio da CORA Soluç?es Digitais, salvo disposiç?o legal em contrário,
          para dirimir quaisquer controvérsias decorrentes destes termos.
        </p>
      </LegalSection>

      <LegalSection title="11. Contato">
        <p>
          Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
          <a
            href="mailto:tech.cora.dev@gmail.com"
            className="text-sea underline-offset-4 hover:underline"
          >
            tech.cora.dev@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
