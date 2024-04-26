import { useState } from "react";
import { Badge, Button, Carousel, Container, Ratio, Table } from "react-bootstrap";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((n) => {
      return n + 1;
    });
  };

  return (
    <main>
      <p className="text-center bg-primary text-bg-primary m-3 p-3">
        Projeto de protótipo de componentes usando React com BootStrap
      </p>
      <Button
        variant="primary"
        onClick={() => handleCounter()}
        className="d-block col-3 mx-auto text-center"
      >
        Contador{" "}
        <Badge bg="warning" pill text="dark">
          {counter}
        </Badge>
      </Button>
      <Container className="d-none d-md-block">
        <Carousel
          data-bs-theme="dark"
          className="col-10 mx-auto my-3"
          touch
          indicators={false}
        >
          <Carousel.Item>
            <Ratio aspectRatio={"16x9"} className="d-block mx-auto w-75">
              <img
                src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="1"
              />
            </Ratio>
            <Carousel.Caption className="bg-dark text-bg-dark p-2">
              Imagem 1
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Ratio aspectRatio={"16x9"} className="d-block mx-auto w-75">
              <img
                src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="2"
              />
            </Ratio>
            <Carousel.Caption className="bg-dark text-bg-dark p-2">
              Imagem 2
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Ratio aspectRatio={"16x9"} className="d-block mx-auto w-75">
              <img
                src="https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="3"
              />
            </Ratio>
            <Carousel.Caption className="bg-dark text-bg-dark p-2">
              Imagem 3
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Ratio aspectRatio={"16x9"} className="d-block mx-auto w-75">
              <img
                src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="4"
              />
            </Ratio>
            <Carousel.Caption className="bg-dark text-bg-dark p-2">
              Imagem 4
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Ratio aspectRatio={"16x9"} className="d-block mx-auto w-75">
              <img
                src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="5"
              />
            </Ratio>
            <Carousel.Caption className="bg-dark text-bg-dark p-2">
              Imagem 5
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Table
        striped
        bordered
        hover
        variant="primary"
        responsive={"md"}
        className="mx-auto my-3"
        style={{ maxWidth: "950px" }}
      >
        <thead>
          <tr>
            <td colSpan={3} className="text-center">
              Exemplo de Tabela
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exemplo</td>
            <td>Exemplo</td>
            <td>Exemplo</td>
          </tr>
          <tr>
            <td>Exemplo</td>
            <td>Exemplo</td>
            <td>Exemplo</td>
          </tr>
          <tr>
            <td>Exemplo</td>
            <td>Exemplo</td>
            <td>Exemplo</td>
          </tr>
          <tr>
            <td>Exemplo</td>
            <td>Exemplo</td>
            <td>Exemplo</td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
};

export default Home;
