import { Container, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container
      fluid
      style={{ minHeight: "80vh" }}
      className="d-flex flex-column justify-content-start align-items-center"
    >
      <h1 className="text-center text-contrast">Sobre esse projeto:</h1>
      <p className="text-center text-contrast col-8 mx-auto">
        Projeto desenvolvido por Emanuel Bim, usando a linguagem JavaScript com
        o superset TypeScript e o framework React com suas respectivas
        bibliotecas: React-Router-Dom e React-BootStrap.
      </p>
      <p className="text-center text-contrast col-8 mx-auto">
        Esse projeto tem por intuíto unir alguns programas utilizados
        separadamente em um único lugar tornado mais acessível e intuitivo.
      </p>
      <Image roundedCircle className="col-1 shadow my-5"
        src={
          "https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portifolio2/public/Programador.jpg?raw=true"
        }
      />
    </Container>
  );
};

export default About;
