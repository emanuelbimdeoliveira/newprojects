import { Col, Row } from "react-bootstrap";

const History = () => {
  return (
    <section>
      <Row
        style={{ minHeight: "95vh" }}
        className="d-flex justify-content-center text-bg-contrast align-items-center py-5"
      >
        <Col xs={10} md={8}>
          <h2>Meus Estudos</h2>
          <p>
            Eu trabalho com desenvolvimento web usando o CMS WordPress. Com um
            percurso de estudo e prática de mais de um ano e meio, mergulhei no
            mundo da programação com o objetivo de criar experiências digitais
            agradáveis e funcionais.
          </p>

          <p>
            Além da minha experiência em WordPress, tenho também conhecimento
            abrangente em diversas tecnologias essenciais para o desenvolvimento
            web. Minhas habilidades incluem HTML, CSS, JavaScript, Bootstrap,
            React e TypeScript.
          </p>

          <p>
            Também tenho conhecimento sobre o serviço Firebase, permitindo-me
            integrar poderosas funcionalidades de back-end aos projetos web que
            desenvolvo. Essa ampla gama de habilidades me capacita a criar
            soluções completas e personalizadas para os desafios de cada
            projeto.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default History;
