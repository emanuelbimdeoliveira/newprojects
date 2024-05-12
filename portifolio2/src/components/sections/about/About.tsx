import { useLoading } from "../../../hooks/useLoading";
import { Button, Col, Figure, Row } from "react-bootstrap";

const About = () => {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <section id="about">
          <p style={{fontFamily: "arial" }}>Carregando...</p>
        </section>
      ) : (
        <Row
          className="p-3 d-flex justify-content-center gap-5"
          id="about"
          style={{ minHeight: "95vh" }}
        >
          <Col
            md={5}
            className="text-bg-contrast text-center text-md-start d-flex flex-column justify-content-end justify-content-md-center"
          >
            <h2 style={{ fontStyle: "italic" }}>Olá, meu nome é</h2>
            <h1 style={{ fontSize: "5em", fontStyle: "italic" }}>
              Emanuel Bim
            </h1>
            <p>Eu sou programador Front-End e desenvolvedor Wordpress</p>
            <Button
              className="p-2 rounded-3 w-50 mx-auto mx-md-0 bg text-bg border-0"
              size={"sm"}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=5542999818385",
                  "_blank"
                );
              }}
            >
              Contato
            </Button>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-start align-items-md-center"
          >
            <Figure className="col-6 col-md-8">
              <Figure.Image
                src="./profile-img.webp"
                roundedCircle
                alt="emanuel"
              />
            </Figure>
          </Col>
        </Row>
      )}
    </>
  );
};

export default About;
