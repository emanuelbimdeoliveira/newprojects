import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Placeholder,
  ProgressBar,
  Spinner,
} from "react-bootstrap";

const Cards = () => {
  const [loading, setLoading] = useState(true);
  const [progressWidth, setProgressWidth] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setInterval(() => {
      if (progressWidth < 100) {
        setProgressWidth(progressWidth + 10);
      } else {
        setProgressWidth(0);
      }
    }, 500);
  });

  return (
    <div className="p-5">
      {loading ? (
        <>
          <Card
            bg="warning"
            text="dark"
            border="dark"
            className="mx-auto my-3 border-1 rounded-3 p-3 shadow"
            style={{ maxWidth: "500px" }}
          >
            <Card.Title className="d-flex align-items-center">
              <Spinner
                animation="border"
                as={"span"}
                variant="dark"
                size="sm"
                className="mx-3"
              >
                <span className="visually-hidden">carregando...</span>
              </Spinner>
              Carregando...
            </Card.Title>
            <Card.Body className="d-flex flex-column">
              <Placeholder animation="glow">
                <Placeholder as={Card.Text} xs={3} />
                <Placeholder as={Card.Text} xs={4} />
                <Placeholder as={Card.Text} xs={6} />
                <Placeholder as={Card.Text} xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
          <ProgressBar
            now={progressWidth}
            striped
            variant="primary"
            animated
            className="col-6 mx-auto"
          />
        </>
      ) : (
        <CardGroup className="d-flex flex-column flex-md-row justify-content-around gap-3">
          <Card
            bg="warning"
            text="dark"
            border="dark"
            className="mx-auto border-1 rounded-3 p-3 shadow"
            style={{ maxWidth: "500px" }}
          >
            <Card.Header as={"h3"}>Cards são muito úteis</Card.Header>
            <Card.Body>
              <Card.Img
                src="https://images.pexels.com/photos/842158/pexels-photo-842158.jpeg"
                alt="foto"
              />
              <Card.Title>Algum título</Card.Title>
              <Card.Text>Algum texto, mais algum texto de exemplo.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Avançar</Button>
            </Card.Footer>
          </Card>

          <Card
            bg="warning"
            text="dark"
            border="dark"
            className="mx-auto border-1 rounded-3 p-3 shadow"
            style={{ maxWidth: "500px" }}
          >
            <Card.Header as={"h3"}>Cards são muito úteis</Card.Header>
            <Card.Body>
              <Card.Img
                src="https://images.pexels.com/photos/842158/pexels-photo-842158.jpeg"
                alt="foto"
              />
              <Card.Title>Algum título</Card.Title>
              <Card.Text>Algum texto, mais algum texto de exemplo.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Avançar</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      )}
    </div>
  );
};

export default Cards;
