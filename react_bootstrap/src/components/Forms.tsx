import { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Stack,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const Forms = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <main>
      <Container fluid="md" className="mt-3">
        <Form
          className="bg-silver p-3 col-md-10 m-auto border rounded-2 shadow"
          id="first_form"
        >
          <fieldset>
            <Form.Group className="d-flex flex-column gap-3">
              <h2 className="text-center">Dados do usuário</h2>
              <FloatingLabel label="Insira o seu nome:">
                <Form.Control
                  className="shadow"
                  type="text"
                  id="name"
                  placeholder="Insira o seu nome:"
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Insira o seu E-mail:">
                <Form.Control
                  className="shadow"
                  type="e-mail"
                  id="e-mail"
                  placeholder="Insira o seu E-mail:"
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Insira sua senha:">
                <Form.Control
                  className="shadow"
                  type="password"
                  id="password"
                  placeholder="Insira sua senha:"
                ></Form.Control>
              </FloatingLabel>
              <Form.Label htmlFor="select">Selecione uma opção:</Form.Label>
              <Form.Select
                className="bg-light w-75 text-bg-light p-2 shadow"
                id="select"
              >
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
                <option>Opção 4</option>
                <option>Opção 5</option>
              </Form.Select>
              <Form.Group>
                <Form.Label htmlFor="mode">Modo admin</Form.Label>
                <Form.Check type="switch" label="Ativar" id="mode"></Form.Check>
                <Form.Label htmlFor="sex">Sexo</Form.Label>
                {/* <InputGroup.Radio> */}
                {/* </InputGroup.Radio> */}
                <Form.Check
                  type="radio"
                  label="Masculino"
                  name="sex"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Feminino"
                  name="sex"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Aceito os termos de uso"
                ></Form.Check>
                <Form.Label htmlFor="range">Alcance</Form.Label>
                <Form.Range
                  className="w-25 m-2"
                  max={50}
                  min={10}
                  id="range"
                ></Form.Range>
              </Form.Group>

              <Stack direction="horizontal" gap={3} className="p-2">
                <Button variant="danger">Cancelar</Button>
                <Button variant="success">Enviar</Button>
              </Stack>
            </Form.Group>
            <Form.Group className="d-flex flex-column gap-3">
              <Form.Label htmlFor="file">Arquivo:</Form.Label>
              <Form.Control
                className="shadow"
                type="file"
                id="file"
                placeholder="Escolha o arquivo:"
              ></Form.Control>
              <Button
                variant="success"
                className="col-6 m-auto"
                onClick={() => setShowToast(true)}
              >
                Avançar
              </Button>
            </Form.Group>
          </fieldset>
        </Form>

        <ToastContainer position="bottom-center">
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            autohide
            delay={2000}
            bg="success"
            className="text-bg-success"
          >
            <Toast.Header closeButton={false}>
              Um mensagem importante:
            </Toast.Header>
            <Toast.Body>Dados salvos com sucesso!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </main>
  );
};

export default Forms;
