import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Random = () => {
  const navigate = useNavigate();

  const [start, setStart] = useState<number>(0);
  const [finish, setFinish] = useState<number>(0);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    start: number,
    finish: number
  ) => {
    e.preventDefault();

    navigate(`/random_numbers/${start}/${finish}`);
  };

  return (
    <>
      <Container fluid>
        <h1 className="text-center text-contrast">Sorteador de Números</h1>
        <Form
          className="col-md-6 shadow bg text-bg p-3 my-4 mx-auto rounded-3"
          onSubmit={(e) => handleSubmit(e, start, finish)}
        >
          <Form.Label htmlFor="date-time">Escolha o menor número:</Form.Label>
          <Form.Control
            type="number"
            id="start"
            placeholder="00"
            required
            onChange={(e) => setStart(Number(e.target.value))}
          />
          <Form.Label htmlFor="interval" className="mt-3">Escolha o maior número:</Form.Label>
          <Form.Control
            type="number"
            id="finish"
            placeholder="100"
            required
            onChange={(e) => setFinish(Number(e.target.value))}
          />
          <Button type="submit" variant="light" className="d-block mt-3">
            Avançar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Random;
