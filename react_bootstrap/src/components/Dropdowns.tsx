import { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  ListGroup,
  Offcanvas,
  Row,
  SplitButton,
  Stack,
} from "react-bootstrap";

const Dropdowns = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="p-3">
      <Row xs={4} className="p-3 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
        <DropdownButton as={Col} variant="primary" title="Escolhas as opções">
          <Dropdown.Item eventKey={1}>1 opção</Dropdown.Item>
          <Dropdown.Item eventKey={2}>2 opção</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey={3}>3 opção</Dropdown.Item>
          <Dropdown.Item eventKey={4}>4 opção</Dropdown.Item>
        </DropdownButton>

        <SplitButton
          as={Col}
          variant="primary"
          title="Botão dividido"
          align={"start"}
          autoClose={false}
        >
          <Dropdown.Item eventKey={1}>1 opção</Dropdown.Item>
          <Dropdown.Item eventKey={2}>2 opção</Dropdown.Item>
          <Dropdown.Item eventKey={3}>3 opção</Dropdown.Item>
          <Dropdown.Item eventKey={4}>4 opção</Dropdown.Item>
        </SplitButton>

        <SplitButton
          as={Col}
          variant="primary"
          title="Botão dividido"
          autoClose="outside"
          align={"end"}
        >
          <Dropdown.Item eventKey={1} onClick={handleShow}>
            1 opção
          </Dropdown.Item>
          <Dropdown.Item eventKey={2}>2 opção</Dropdown.Item>
          <Dropdown.Item eventKey={3}>3 opção</Dropdown.Item>
          <Dropdown.Item eventKey={4}>4 opção</Dropdown.Item>
        </SplitButton>
      </Row>

      <Offcanvas
        placement="end"
        show={show}
        scroll={true}
        backdrop={true}
        className="bg-primary text-bg-primary"
        onHide={handleClose}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack className="col-6 mx-auto d-flex flex-column gap-3">
            <Button
              variant="primary"
              className="text-bg-light"
              onClick={handleClose}
            >
              Opção 1
            </Button>
            <Button variant="primary" className="text-bg-light">
              Opção 2
            </Button>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>

      <ListGroup variant="flush" className="my-3 col-md-6 mx-auto">
        <ListGroup.Item action variant="primary">
          Primário
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Secundário
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Alerta
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Perigo
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Claro
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Dropdowns;
