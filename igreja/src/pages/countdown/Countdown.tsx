import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState<string>("");
  const [interval, setInterval] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();

    let time;

    if (value.length <= 2) {
      time = new Date().getTime() + Number(value) * 60000;
    } else {
      time = new Date(value).getTime();
    }
    navigate(`/countdown_time/${time}`);
  };

  return (
    <>
      <Container fluid>
        <h1 className="text-center text-contrast">Temporizador</h1>
        <p className="text-center text-contrast">
          Você pode escolher o horário de término da contagem ou também
          estipular o intervalo de tempo para o fim da contagem.
        </p>
        <Form
          className="col-md-6 shadow bg text-bg p-3 my-4 mx-auto rounded-3"
          onSubmit={(e) => handleSubmit(e, countdown)}
        >
          <Form.Label htmlFor="date-time">Escolha o horário final:</Form.Label>
          <Form.Control
            type="datetime-local"
            id="date-time"
            required
            onChange={(e) => setCountdown(e.target.value)}
          />
          <Button type="submit" variant="light" className="d-block mt-3">
            Avançar
          </Button>
        </Form>
        <Form
          className="col-md-6 shadow bg text-bg p-3 my-4 mx-auto rounded-3"
          onSubmit={(e) => handleSubmit(e, interval)}
        >
          <Form.Label htmlFor="interval">
            Ou escolha o intervalo de tempo em minutos:
          </Form.Label>
          <Form.Control
            type="number"
            id="interval"
            placeholder="45"
            min="1"
            max="60"
            required
            onChange={(e) => setInterval(e.target.value)}
          />
          <Button type="submit" variant="light" className="d-block mt-3">
            Avançar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Countdown;
