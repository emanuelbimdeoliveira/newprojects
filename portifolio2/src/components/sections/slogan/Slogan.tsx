import { Container } from "react-bootstrap";

const Slogan = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" id="slogan">
      <h2 className="d-none d-md-block text-center text-bg-contrast">
        Transformando ideias em realidade digital, oferecendo soluções
        personalizadas de desenvolvimento web e programação, impulsionando o
        sucesso online de sua empresa.
      </h2>
      <h2 className="d-block d-md-none text-center text-bg-contrast">
        Transformando ideias em realidade digital.
      </h2>
    </Container>
  );
};

export default Slogan;
