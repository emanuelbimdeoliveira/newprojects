import { useNavigateFunction } from "../../hooks/useNavigateFunction";
import { descriptionArray } from "../../mini_db/db";

import "./SkillsPage.css";

const SkillsPage = () => {
  const { navigate } = useNavigateFunction();

  return (
    <section className="skills-page">
      <h1>Habilidades</h1>
      {descriptionArray.map(
        (item, index) =>
          item.title != "Descrição" && (
            <article key={index}>
              <h2>{item.title}</h2>
              <div className="first-section">
                <div className="text-div">
                  <p>{item.description}</p>
                </div>
                <div className="icon-div">
                  <i className={item.iconCode}></i>
                  {!item.iconCode && <img src={item.img} alt={item.title} />}
                </div>
              </div>
            </article>
          )
      )}

      <article className="progress-text">
        <h2>Meu progresso</h2>
        <p>
          Dei o meu primeiro passo em direção à programação em julho de 2022.
          Começando com HTML, CSS e JavaScript. Essas linguagens foram os
          alicerces sobre os quais construí meu conhecimento inicial.
        </p>
        <p>
          Eu sabia que o Inglês era essencial para o meu progresso na
          programação e assim, em paralelo com meus estudos técnicos,
          empenhei-me em desenvolver também minhas habilidades linguísticas,
          reconhecendo o inglês como uma ferramenta indispensável no mundo da
          tecnologia.
        </p>
        <p>
          O ano de 2023 marcou uma fase de avanço significativo em minha
          jornada. Em julho daquele ano, dei início aos estudos sobre Bootstrap,
          percebendo como essa estrutura facilitava a criação de layouts
          responsivos e estilizados de forma eficiente. Essa nova habilidade
          impulsionou meu progresso, permitindo-me desenvolver projetos mais
          sofisticados e visualmente atraentes.
        </p>

        <p>
          Nos meses seguintes, estudei sobre o controle de versão com Git e nos
          terminais PowerShell e Command Prompt. Porque sabia da importância
          dessas ferramentas na gestão e execução eficaz de projetos de
          desenvolvimento de software.
        </p>

        <p>
          Em setembro de 2023 dei inicio nos estudos do desenvolvimento com
          React. A familiarização com essa biblioteca JavaScript de código
          aberto expandiu minhas capacidades de criação de interfaces de usuário
          dinâmicas e interativas.
        </p>

        <p>
          À medida que avançava, vi a nessecidade de aprender também sobre os
          conceitos do TypeScript e do Firebase, aprimorando minhas habilidades
          de desenvolvimento web.
        </p>

        <p>
          No início de 2024 iniciei no estudo do WordPress. Reconhecendo seu
          poder como plataforma de gerenciamento de conteúdo e seu potencial
          para o desenvolvimento de websites dinâmicos e funcionais.
        </p>

        <p>
          Futuramente pretendo estudar sobre Node.js e bancos de dados com o
          objetivo de tornar-me um desenvolvedor full-stack, capacitado a criar
          soluções robustas e inovadoras em todos os aspectos do desenvolvimento
          web.
        </p>
      </article>
      <button className="success" onClick={() => navigate("/about")}>
        Mais informações
      </button>
    </section>
  );
};

export default SkillsPage;
