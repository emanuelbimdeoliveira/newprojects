import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

const ValidateForms = () => {
    const [validated, setValidated] = useState(false);

    // function to work with forms validation and submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
  
        setValidated(true);
      } else {
        // this is only a test, in a real job our aplication will continue after this
        event.preventDefault();
        event.stopPropagation();
  
        setValidated(false);
      }
    };  

  return (
    <Container>
      <Form
        noValidate
        validated={validated}
        className="bg-dark text-bg-dark col-sm-10 mx-auto my-3 border rounded-2 shadow"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-center text-light my-3">
          Formulário com validação
        </h2>
        <fieldset>
          <Row className="p-3">
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label htmlFor="e-mail-2">E-mail:</Form.Label>
              <Form.Control
                type="e-mail"
                required
                id="e-mail-2"
                placeholder="Inserir dado"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                E-mail inválido!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                E-mail aceito!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label htmlFor="password-2">Senha:</Form.Label>
              <Form.Control
                type="password"
                minLength={5}
                required
                id="password-2"
                placeholder="Inserir dado"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Mínimo 5 caracteres!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Senha válida!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </fieldset>
        <fieldset>
          <Row className="p-3">
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label htmlFor="address">Endereço:</Form.Label>
              <Form.Control
                type="text"
                required
                id="address"
                placeholder="inserir endereço"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Endereço inválido!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label htmlFor="phone">Número de telefone:</Form.Label>
              <Form.Control
                type="number"
                required
                id="phone"
                placeholder="inserir número"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Telefone inválido!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </fieldset>

        <fieldset>
          <Row className="p-3">
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label htmlFor="city">Cidade:</Form.Label>
              <Form.Control
                type="text"
                required
                id="city"
                placeholder="inserir cidade"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Inserir cidade!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label htmlFor="state">Estado:</Form.Label>
              <Form.Control
                type="text"
                required
                id="state"
                placeholder="inserir estado"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Inserir estado!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Check
            label={"Aceito os termos de uso"}
            feedback={"Obrigatório"}
            feedbackType="invalid"
            required
            className="m-3"
          ></Form.Check>
          <Row className="p-3">
            <Form.Group as={Col} sm={10}>
              <Form.Select>
                <option value="1">Opção 1</option>
                <option value="2">Opção 2</option>
                <option value="3">Opção 3</option>
                <option value="4">Opção 4</option>
              </Form.Select>
              <Button variant="danger" type="reset" className="mt-3 me-3">
                Cancelar
              </Button>

              <Button variant="success" type="submit" className="mt-3">
                Acessar
              </Button>
            </Form.Group>
          </Row>
        </fieldset>
      </Form>
    </Container>
  );
};

export default ValidateForms;
