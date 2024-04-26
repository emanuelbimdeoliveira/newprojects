import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Modals = () => {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow1}
        className="col-md-3 d-block mx-auto my-3"
      >
        Ativar Modal
      </Button>

      <Button
        variant="primary"
        onClick={handleShow2}
        className="col-md-3 d-block mx-auto"
      >
        Ativar Modal 2
      </Button>

      <Modal
        show={show1}
        onHide={handleClose1}
        centered
        backdrop="static"
        className="shadow"
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Título do Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nome@exemplo.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Escreva um texto:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose1}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      <Modal
        show={show2}
        scrollable
        backdrop={"static"}
        className="rounded-3"
        centered
        onHide={handleClose2}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Mais um exemplo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>Número 1</Col>
                <Col>Número 2</Col>
                <Col>Número 3</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose2}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default Modals;
