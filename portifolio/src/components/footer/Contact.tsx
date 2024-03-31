import "./Contact.css";

type Props = {
  action: string;
};

const Contact = ({ action }: Props) => {
  return (
    <>
      <h1>Links para Contato</h1>
      <section className="contact" id="contact">
        <div
          onClick={() => {
            window.open("mailto:emanueldossantosbim@gmail.com", "_blank");
          }}
        >
          <i className="fa-envelope fa-solid fa-bounce"></i>
          <p>E-mail</p>
        </div>
        <div
          onClick={() => {
            window.open("tel:+5542999818385", "_blank");
          }}
        >
          <i className="fa-phone fa-solid fa-bounce"></i>
          <p>Telefone</p>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/emanuel-bim-149484293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "_blank"
            );
          }}
        >
          <i className="fa-brands fa-linkedin fa-bounce"></i>
          <p>LinkedIn</p>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=5542999818385",
              "_blank"
            );
          }}
        >
          <i className="fa-brands fa-whatsapp fa-bounce"></i>
          <p>WhatsApp</p>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.instagram.com/programadoremanuelbim?utm_source=qr&igsh=OXQ4a2d5djNiY29z",
              "_blank"
            );
          }}
        >
          <i className="fa-brands fa-instagram fa-bounce"></i>
          <p>Instagram</p>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.facebook.com/profile.php?id=100071225276330&mibextid=ZbWKwL",
              "_blank"
            );
          }}
        >
          <i className="fa-brands fa-facebook fa-bounce"></i>
          <p>Facebook</p>
        </div>
      </section>
      {action != "page" && (
        <div className="footer-below">
          <p>
            Entre em contato comigo através dos links para mais informações.
          </p>
          <p>Desenvolvido por Emanuel Bim, janeiro de 2024</p>
        </div>
      )}
    </>
  );
};

export default Contact;
