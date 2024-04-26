import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

const Columns = () => {
  return (
    <>
      <Container
        fluid="md"
        className="bg-light col-md-8 d-flex flex-column justify-content-around gap-3"
      >
        <Row className="bg-primary">
          <Col variant="primary" className="border text-center" xs="4" md="2">
            column
          </Col>
          <Col variant="primary" className="border text-center" xs="5" md="8">
            column
          </Col>
          <Col variant="primary" className="border text-center" xs="3" md="2">
            column
          </Col>
        </Row>
        <Row className="bg-success">
          <Col variant="primary" className="border text-center" xs="8">
            column
          </Col>
          <Col
            variant="primary"
            className="border text-center"
            xs={{ order: "last" }}
          >
            column 2
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
        </Row>
        <Row className="bg-warning" xs="3" md="6">
          <Col variant="primary" className="border text-center">
            column
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
        </Row>
        <Row className="bg-danger">
          <Col variant="primary" className="border text-center">
            column
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
          <Col variant="primary" className="border text-center" xs="8">
            column
          </Col>
        </Row>
        <Row className="bg-info">
          <Col variant="primary" className="border text-center">
            column
          </Col>
          <Col variant="primary" className="border text-center" xs="8">
            column
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
        </Row>
        <Row className="bg-dark text-bg-dark">
          <Col variant="primary" className="border text-center" xs="8">
            column
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
          <Col variant="primary" className="border text-center">
            column
          </Col>
        </Row>
      </Container>
      <Tab.Container>
        <Container className="col-md-8 d-flex flex-column justify-content-center align-items-center p-3 my-3 gap-3">
          <Nav variant="pills">
              <Nav.Link eventKey={1}>1</Nav.Link>
              <Nav.Link eventKey={2}>2</Nav.Link>
              <Nav.Link eventKey={3}>3</Nav.Link>
              <Nav.Link eventKey={4}>4</Nav.Link>
              <Nav.Link eventKey={5}>5</Nav.Link>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={1}>Texto de exemplo número 1</Tab.Pane>
            <Tab.Pane eventKey={2}>Texto de exemplo número 2</Tab.Pane>
            <Tab.Pane eventKey={3}>Texto de exemplo número 3</Tab.Pane>
            <Tab.Pane eventKey={4}>Texto de exemplo número 4</Tab.Pane>
            <Tab.Pane eventKey={5}>Texto de exemplo número 5</Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </>
  );
};

export default Columns;
