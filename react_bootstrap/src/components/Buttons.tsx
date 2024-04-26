import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  CloseButton,
} from "react-bootstrap";

const Buttons = () => {
  return (
    <div className="p-3">
      <h2 className="col-6 mx-auto bg-primary text-bg-primary text-center rounded-3">
        Botões
      </h2>
      <ButtonToolbar className="d-flex flex-column gap-3 col-md-6 mx-auto">
        <ButtonGroup className="d-flex justify-content-center gap-3">
          <Button variant="primary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="warning">3</Button>
          <Button variant="danger">4</Button>
        </ButtonGroup>

        <ButtonGroup className="d-flex justify-content-center gap-3">
          <Button variant="outline-secondary">1</Button>
          <Button variant="outline-primary">2</Button>
          <Button variant="outline-danger">3</Button>
          <Button variant="outline-warning">4</Button>
        </ButtonGroup>

        <ButtonGroup className="d-flex justify-content-center gap-3">
          <Button disabled variant="secondary">
            Inativo!
          </Button>
          <Button disabled variant="primary">
            Inativo!
          </Button>
          <Button disabled variant="danger">
            Inativo!
          </Button>
          <Button disabled variant="warning">
            Inativo!
          </Button>
        </ButtonGroup>

        <CloseButton
          variant="danger"
          aria-label="voltar ao início"
          className="bg-danger text-bg-danger d-block mx-auto"
          onClick={() => alert("Clicou!")}
        />
      </ButtonToolbar>
    </div>
  );
};

export default Buttons;
