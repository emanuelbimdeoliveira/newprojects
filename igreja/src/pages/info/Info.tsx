import { Container } from "react-bootstrap";

const Info = () => {
  return (
    <Container
      fluid
      style={{ minHeight: "80vh" }}
      className="d-flex flex-column justify-content-start align-items-center"
    >
      <h1 className="text-center text-contrast">
        Instruções de uso com o teclado
      </h1>
      <h2 className="text-center text-contrast">Temporizador:</h2>
      <p className="text-center text-contrast col-8 mx-auto">
        Para a execução do temporizador é necessário escolher ou um horário de
        término ou um intervalo de tempo até o fim da contagem, preencher os
        campos do formulário com os valores desejados e clicar em "avançar". Os
        audios vão tocar automáticamente em 5 minutos e em 1 minuto. Para tocar
        manualmente os audios basta acionar as teclas 5 ou 1 para seus
        respectivos audios.
      </p>
      <h2 className="text-center text-contrast">Relógio:</h2>
      <p className="text-center text-contrast col-8 mx-auto">
        Esse projeto tem por intuíto unir alguns programas utilizados
        separadamente em um único lugar tornado mais acessível e intuitivo.
      </p>
    </Container>
  );
};

export default Info;
