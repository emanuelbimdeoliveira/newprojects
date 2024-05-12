import { Container, Image, Row } from "react-bootstrap";

type Props = {
  action: string;
};

const Contact = ({ action }: Props) => {
  return (
    <Container fluid className="bg text-bg py-3" id="contact">
      <h2 className="text-center my-5">Links para Contato</h2>
      <Row className="d-flex justify-content-center gap-3 p-3">
        <div
          className="bg-light text-bg-light col-3 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-3 px-3 px-md-4 py-3 py-md-5 rounded shadow border-3"
          onClick={() => {
            window.open("mailto:emanueldossantosbim@gmail.com", "_blank");
          }}
        >
          <Image
            className={"col-6 hover"}
            rounded
            src="
              ./e-mail.png
              "
            alt="e-mail"
          />

          <p className="my-0 text-bg-contrast-button">E-mail</p>
        </div>
        <div
          className="bg-light text-bg-light col-3 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-3 px-3 px-md-4 py-3 py-md-5 rounded shadow border-3"
          onClick={() => {
            window.open("tel:+5542999818385", "_blank");
          }}
        >
          <Image
            className={"col-6 hover"}
            rounded
            src="
              ./telefone.png
              "
            alt="telefone"
          />

          <p className="my-0 text-bg-contrast-button">Telefone</p>
        </div>
        <div
          className="bg-light text-bg-light col-3 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-3 px-3 px-md-4 py-3 py-md-5 rounded shadow border-3"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/emanuel-bim-149484293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "_blank"
            );
          }}
        >
          <Image
            className={"col-6 hover"}
            rounded
            src="
              ./linkedin.png
              "
            alt="linkedin"
          />

          <p className="my-0 text-bg-contrast-button">LinkedIn</p>
        </div>
      </Row>
      <Row className="d-flex justify-content-center gap-3 p-3">
        <div
          className="bg-light text-bg-light col-3 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-3 px-3 px-md-4 py-3 py-md-5 rounded shadow border-3"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=5542999818385",
              "_blank"
            );
          }}
        >
          <Image
            className={"col-6 hover"}
            rounded
            src="
              ./whatsapp.png
              "
            alt="whatsapp"
          />

          <p className="my-0 text-bg-contrast-button">WhatsApp</p>
        </div>
        <div
          className="bg-light text-bg-light col-3 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-3 px-3 px-md-4 py-3 py-md-5 rounded shadow border-3"
          onClick={() => {
            window.open(
              "https://www.instagram.com/programadoremanuelbim?utm_source=qr&igsh=OXQ4a2d5djNiY29z",
              "_blank"
            );
          }}
        >
          <Image
            className={"col-6 hover"}
            rounded
            src="
              ./instagram.png
              "
            alt="instagram"
          />

          <p className="my-0 text-bg-contrast-button">Instagram</p>
        </div>
        <div
          className="bg-light text-bg-light col-3 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-3 px-3 px-md-4 py-3 py-md-5 rounded shadow border-3"
          onClick={() => {
            window.open(
              "https://www.facebook.com/profile.php?id=100071225276330&mibextid=ZbWKwL",
              "_blank"
            );
          }}
        >
          <Image
            className={"col-6 hover"}
            rounded
            src="
              ./facebook.png
              "
            alt="facebook"
          />

          <p className="my-0 text-bg-contrast-button">Facebook</p>
        </div>
      </Row>
      {action != "page" && (
        <div className="text-center">
          <p>
            Entre em contato comigo através dos links para mais informações.
          </p>
          <p>Desenvolvido por Emanuel Bim, Maio de 2024</p>
        </div>
      )}
    </Container>
  );
};

export default Contact;
