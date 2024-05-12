import { Button, Col, Figure, Row } from "react-bootstrap";
import { useNavigateFunction } from "../../hooks/useNavigateFunction";
import { descriptionArray } from "../../mini_db/db";

const SkillsPage = () => {
  const { navigate } = useNavigateFunction();

  return (
    <section className="py-5 text-bg-contrast">
      <h1 className="text-center">Sobre as tecnologias aprendidas</h1>
      {descriptionArray.map(
        (item, index) =>
          item.title != "Descrição" && (
            <Row
              key={index}
              className="d-flex justify-content-center flex-column flex-md-row align-items-center gap-4 my-5 py-5"
            >
              <Col xs={10} md={4}>
                <h2 className="text-center text-md-start">{item.title}</h2>
                <p className="text-center text-md-start">{item.description}</p>
              </Col>
              <Col xs={10} md={4}>
                <Figure className="col-8 d-block mx-auto bg-light p-4 p-md-5 rounded-3 shadow">
                  <Figure.Image
                    src={item.img}
                    alt={item.title}
                    className="w-100 d-block mx-auto"
                  />
                  <Figure.Caption className="text-center text-bg-contrast-button">
                    {item.title}
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          )
      )}

      <article className="py-5 px-3 col-12 col-md-8 col-lg-6 mx-auto">
        <h2 className="text-center">Meu progresso</h2>
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

      <Button
        className="rounded-3 col-8 col-md-6 d-block mx-auto my-3 bg text-bg border-0"
        onClick={() => navigate("/about")}
      >
        Mais informações
      </Button>
    </section>
  );
};

export default SkillsPage;
