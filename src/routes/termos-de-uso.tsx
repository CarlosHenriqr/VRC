import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/landing/LegalLayout";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — VRC Solutions" },
      {
        name: "description",
        content:
          "Termos e condições de uso do site e dos serviços oferecidos pela VRC Solutions.",
      },
    ],
  }),
  component: TermosDeUsoPage,
});

function TermosDeUsoPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="7 de julho de 2026">
      <LegalSection title="1. Aceitação dos termos">
        <p>
          Ao acessar e utilizar o site da VRC Solutions (&quot;Site&quot;), você declara ter lido,
          compreendido e concordado com estes Termos de Uso. Caso não concorde com qualquer
          disposição, recomendamos que não utilize o Site ou nossos serviços.
        </p>
      </LegalSection>

      <LegalSection title="2. Sobre a VRC Solutions">
        <p>
          A VRC Solutions atua no desenvolvimento de software sob medida, automações, aplicativos
          e soluções digitais para empresas. O Site tem caráter informativo e comercial, destinado
          à apresentação de serviços e ao contato com potenciais clientes.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso permitido">
        <p>Você concorda em utilizar o Site de forma lícita e de boa-fé, abstendo-se de:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Violar leis aplicáveis ou direitos de terceiros;</li>
          <li>Tentar acessar áreas restritas, sistemas ou dados sem autorização;</li>
          <li>
            Introduzir vírus, malware ou qualquer código que possa comprometer a integridade do
            Site;
          </li>
          <li>Reproduzir, distribuir ou modificar conteúdos sem autorização prévia por escrito.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Todo o conteúdo do Site — incluindo textos, layout, marcas, logotipos, imagens, código
          e demais materiais — é de propriedade da VRC Solutions ou de seus licenciadores, salvo
          indicação em contrário. Nenhuma licença ou direito de uso é concedido além do necessário
          para navegação pessoal e informativa.
        </p>
      </LegalSection>

      <LegalSection title="5. Serviços e contratação">
        <p>
          As informações publicadas no Site não constituem proposta vinculante. Projetos, prazos,
          escopos e valores são definidos exclusivamente em propostas comerciais e contratos
          específicos firmados entre as partes. A VRC Solutions reserva-se o direito de recusar
          solicitações que não estejam alinhadas à sua capacidade operacional ou política comercial.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitação de responsabilidade">
        <p>
          Empregamos esforços razoáveis para manter o Site disponível e atualizado, porém não
          garantimos ausência de interrupções, erros ou imprecisões. Na extensão permitida pela lei,
          a VRC Solutions não se responsabiliza por danos indiretos, lucros cessantes ou perdas
          decorrentes do uso ou da impossibilidade de uso do Site.
        </p>
      </LegalSection>

      <LegalSection title="7. Links externos">
        <p>
          O Site pode conter links para sites de terceiros. Não nos responsabilizamos pelo
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

      <LegalSection title="9. Alterações">
        <p>
          Podemos modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor
          após a publicação nesta página, com indicação da data de atualização. O uso continuado do
          Site após as mudanças implica aceitação dos novos termos.
        </p>
      </LegalSection>

      <LegalSection title="10. Legislação aplicável">
        <p>
          Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito
          o foro da comarca de domicílio da VRC Solutions, salvo disposição legal em contrário,
          para dirimir quaisquer controvérsias decorrentes destes termos.
        </p>
      </LegalSection>

      <LegalSection title="11. Contato">
        <p>
          Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
          <a
            href="mailto:contato@nexora.com.br"
            className="text-sea underline-offset-4 hover:underline"
          >
            contato@nexora.com.br
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
