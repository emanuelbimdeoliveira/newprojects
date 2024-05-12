import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const RandomNumbers = () => {
  const { start, finish } = useParams();
  const [numbers, setNumbers] = useState<string>("00");

  const randomNumber = (e: string) => {
    if (e === "0") setNumbers("00");
    if (e != "Enter") return;
    const arrayNumbers: number[] = [];

    const max = Number(start);
    const min = Number(finish);

    for (let i = 0; i < 30; i++) {
      arrayNumbers.push(Math.floor(Math.random() * (max - min) + min));
    }

    let index = 0;

    const interval = setInterval(() => {
      const num = `${arrayNumbers[index].toString().padStart(2, "0")}`;
      setNumbers(num);

      if (index == arrayNumbers.length - 1) {
        clearInterval(interval);
      }

      index++;
    }, 80);
  };

  useEffect(() => {
    document.querySelector("body")!.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        randomNumber("Enter");
      } else if (e.key === "0") {
        randomNumber("0");
      }
    });
  }, []);

  return (
    <Container
      fluid
      onClick={() => randomNumber("Enter")}
      style={{ minHeight: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <h1 className="text-center text-contrast countdown-display" style={{ fontSize: "10em" }}>
        {numbers}
      </h1>
    </Container>
  );
};

export default RandomNumbers;
