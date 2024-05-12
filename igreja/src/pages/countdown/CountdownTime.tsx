import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useCountdown } from "../../hooks/useCountdown";

const CountdownTime = () => {
  const searchParams = useLocation().pathname.slice(16);

  const { countdownActived, countdownValue } = useCountdown(
    Number(searchParams)
  );

  useEffect(() => {
    setInterval(() => {
      countdownActived();
    }, 1000);
  }, []);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="text-center countdown-display text-contrast">{countdownValue}</h1>
    </Container>
  );
};

export default CountdownTime;
