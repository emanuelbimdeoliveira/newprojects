import {
  Carousel,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
  Col,
  Figure,
  Accordion,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar
          expand={"md"}
          fixed="top"
          className="bg text-bg py-3"
          data-bs-theme={"dark"}
        >
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#">
              <p className="d-block d-md-none">Home</p>
              <Image
                src="./e-mail.png"
                style={{
                  width: "45px",
                  height: "45px",
                }}
                className="border-0 m-0 d-none d-md-block"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="nav_collapse"
              className="border-0"
            ></Navbar.Toggle>
            <Navbar.Collapse id="nav_collapse" className="justify-content-end">
              <Nav className="w-75 justify-content-end gap-2 gap-md-5">
                <Nav.Link href="#about">Sobre Nós</Nav.Link>
                <Nav.Link href="#history">Nossa História</Nav.Link>
                <Nav.Link href="#products">Produtos</Nav.Link>
                <Nav.Link href="#contact">Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="main-bg">
        <Image
          src="./whatsapp.png"
          alt="whatsapp"
          className="border-0"
          style={{
            position: "fixed",
            width: "45px",
            height: "45px",
            bottom: "10px",
            right: "10px",
            zIndex: "10",
          }}
          onClick={() => window.open("https://wa.me/+5542999818385", "_blank")}
        />

        <Row id="home" className="p-0" style={{ marginTop: "70px" }}>
          <Container className="d-block d-md-none p-0" id="banner">
            <Image src="./banner.png" alt="banner" className="w-100"/>
          </Container>
          <Carousel
            indicators={false}
            controls={false}
            touch
            pause={false}
            className="bg p-0 d-none d-md-block"
            interval={5000}
          >
            <Carousel.Item>
              <Image
                src="./1.jpg"
                className="col-12 d-block"
                style={{ maxHeight: "100vh" }}
              />
              <Carousel.Caption className="bg p-3 rounded-3 shadow">
                <h2 className="d-none d-md-block">
                  Na Forward Tecidos tecemos qualidade, <br />
                  tradição e inovação em cada fio.
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="./2.jpg"
                className="col-12 d-block mx-auto"
                style={{ maxHeight: "100vh" }}
              />
              <Carousel.Caption className="bg p-3 rounded-3 shadow">
                <h2>
                  Descubra a excelência têxtil <br /> com a Forward Tecidos
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="./3.jpg"
                className="col-12 d-block mx-auto"
                style={{ maxHeight: "100vh" }}
              />
              <Carousel.Caption className="bg p-3 rounded-3 shadow">
                <h2 className="d-none d-md-block">
                  Forward Tecidos: liderando a indústria <br /> têxtil com
                  paixão, compromisso e criatividade.
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="./4.jpg"
                className="col-12 d-block mx-auto"
                style={{ maxHeight: "100vh" }}
              />
              <Carousel.Caption className="bg p-3 rounded-3 shadow">
                <h2 className="d-none d-md-block">
                  Na Forward Tecidos nossa missão é <br /> transformar ideias em
                  tecidos excepcionais.
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row
          className="text-bg-contrast px-md-3 flex-column flex-md-row gap-3 justify-content-center align-items-center"
          id="about"
        >
          <Col md={4} className="d-flex flex-column justify-content-center">
            <h2>Sobre Nós</h2>
            <p>
              Bem-vindo à nossa fábrica de tecidos Forward, onde a tradição e a
              inovação se unem para criar produtos de qualidade excepcional.
              Desde a nossa fundação, nos dedicamos a produzir tecidos de alta
              qualidade que atendam às necessidades e excedam as expectativas
              dos nossos clientes. Com uma equipe apaixonada e comprometida,
              estamos constantemente buscando novas formas de aprimorar nossos
              processos e oferecer soluções têxteis de ponta. Na nossa fábrica,
              cada fio conta uma história de excelência e dedicação.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Figure className="w-100">
              <Image src="./7.jpg" rounded className="shadow"/>
            </Figure>
          </Col>
        </Row>

        <Row
          className="text-bg-contrast px-md-3 flex-column flex-md-row-reverse gap-3 justify-content-center align-items-center"
          id="history"
        >
          <Col md={4} className="d-flex flex-column justify-content-center">
            <h2>Nossa História</h2>
            <p>
              Nossa história remonta a 1980, quando nossa fábrica foi
              estabelecida por John Due. Desde então, temos sido líderes na
              indústria têxtil, impulsionados pela nossa paixão pela qualidade e
              pela busca incessante pela inovação. Ao longo dos anos,
              enfrentamos desafios e celebramos conquistas, mas nosso
              compromisso com a excelência nunca vacilou. Hoje, olhamos para o
              futuro com otimismo, prontos para continuar nossa jornada de
              sucesso e superar as expectativas dos nossos clientes em cada
              tecido que produzimos.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Figure className="w-100">
              <Image src="./8.jpg" rounded className="shadow"/>
            </Figure>
          </Col>
        </Row>

        <Row
          className="d-flex d-md-none justify-content-around align-items-center flex-nowrap gap-3 p-3"
          style={{ overflowX: "scroll" }}
          id="products"
        >
          <Col
            xs={11}
            md={10}
            className="bg text-bg rounded-3 shadow p-3 p-md-5"
          >
            <h2>Nossos Produtos</h2>
            <p>
              Oferecemos uma ampla variedade de tecidos para atender a diversas necessidades e aplicações.
              Desde tecidos leves e respiráveis até tecidos robustos e duráveis,
              nossa linha de produtos abrange uma gama completa de opções para
              moda, decoração e muito mais.
            </p>
          </Col>

          <Col
            xs={11}
            md={10}
            className="bg text-bg rounded-3 shadow p-3 p-md-5"
          >
            <h2>Qualidade Garantida</h2>
            <p>
              Utilizando as mais recentes tecnologias e técnicas de produção,
              garantimos que cada metro de tecido que produzimos atenda aos mais
              altos padrões de qualidade e desempenho. Explore nossa coleção e
              descubra o que torna nossos tecidos tão especiais.
            </p>
          </Col>
        </Row>
        <Row className="d-none d-md-block">
          <Col
            xs={11}
            md={10}
            className="bg text-bg rounded-3 shadow p-3 p-md-5 mx-auto"
          >
            <h2>Nossos Produtos</h2>
            <p>
              Na nossa fábrica, oferecemos uma ampla variedade de tecidos de
              alta qualidade para atender a diversas necessidades e aplicações.
              Desde tecidos leves e respiráveis até tecidos robustos e duráveis,
              nossa linha de produtos abrange uma gama completa de opções para
              moda, decoração e muito mais. Utilizando as mais recentes
              tecnologias e técnicas de produção, garantimos que cada metro de
              tecido que produzimos atenda aos mais altos padrões de qualidade e
              desempenho. Explore nossa coleção e descubra o que torna nossos
              tecidos tão especiais.
            </p>
          </Col>
        </Row>
      </main>
      <footer className="bg text-bg pt-3 my-0">
        <Row
          className="px-3 flex-column flex-md-row gap-5 justify-content-center align-items-center"
          id="contact"
        >
          <Col md={4} className="d-flex flex-column justify-content-center">
            <h2>Dúvidas?</h2>
            <p>
              Estamos sempre disponíveis para responder suas perguntas, discutir
              suas necessidades e fornecer assistência personalizada. Se você
              tiver alguma dúvida sobre nossos produtos ou serviços, não hesite
              em nos contatar.
            </p>
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center">
            <h2>Fale conosco</h2>
            <p>
              Nossa equipe dedicada está pronta para ajudar e garantir uma
              experiência excepcional em cada interação. Você pode nos contatar
              por telefone, e-mail ou whatsApp. Estamos ansiosos para ouvir de
              você e iniciar uma parceria de sucesso.
            </p>
          </Col>
        </Row>
        <Accordion
          className="bg-light shadow rounded-3 col-10 col-md-8 col-lg-6 mx-auto p-3 mb-3"
          flush
        >
          <Accordion.Item
            eventKey="0"
            className="bg text-bg"
            style={{ color: "white" }}
          >
            <Accordion.Header>Telefone</Accordion.Header>
            <Accordion.Body>042 3286 4989</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className="bg text-bg"
            style={{ color: "white" }}
          >
            <Accordion.Header>E-mail</Accordion.Header>
            <Accordion.Body>contato@forwardtecidos.com</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className="bg text-bg"
            style={{ color: "white" }}
          >
            <Accordion.Header>WhatsApp</Accordion.Header>
            <Accordion.Body>+55 42 9 9999 9999</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="3"
            className="bg text-bg"
            style={{ color: "white" }}
          >
            <Accordion.Header>Facebook</Accordion.Header>
            <Accordion.Body>facebook.com/forwardtecidos</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <p
          className="text-center p-3 my-0"
          style={{ backgroundColor: "#08000f" }}
        >
          Todos os direitos reservados 2024, Desenvolvido por{" "}
          <strong>Emanuel Bim</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
