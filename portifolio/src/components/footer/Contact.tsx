import { Fade } from "react-awesome-reveal";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h1>Links para Contato</h1>
      <section className="contact" id="contact">
        <Fade direction="up" cascade={false}>
          <li
            onClick={() => {
              window.open("mailto:emanueldossantosbim@gmail.com", "_blank");
            }}
          >
            <i className="fa-envelope fa-solid fa-bounce"></i>
            <p>E-mail</p>
          </li>
          <li
            onClick={() => {
              window.open("tel:+5542999818385", "_blank");
            }}
          >
            <i className="fa-phone fa-solid fa-bounce"></i>
            <p>Telefone</p>
          </li>
          <li
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/emanuel-bim-149484293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "_blank"
              );
            }}
          >
            <i className="fa-brands fa-linkedin fa-bounce"></i>
            <p>LinkedIn</p>
          </li>
          <li
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=5542999818385&text=Do%20que%20vo%C3%A7%C3%AA%20est%C3%A1%20precisando?",
                "_blank"
              );
            }}
          >
            <i className="fa-brands fa-whatsapp fa-bounce"></i>
            <p>WhatsApp</p>
          </li>
          <li
            onClick={() => {
              window.open(
                "https://www.instagram.com/emanuelbim2023?utm_source=qr&igsh=dWJtM3VnY2FpaWIx",
                "_blank"
              );
            }}
          >
            <i className="fa-brands fa-instagram fa-bounce"></i>
            <p>Instagram</p>
          </li>
          <li
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=100071225276330&mibextid=ZbWKwL",
                "_blank"
              );
            }}
          >
            <i className="fa-brands fa-facebook fa-bounce"></i>
            <p>Facebook</p>
          </li>
        </Fade>
      </section>
      <p>Entre em contato comigo através dos links para mais informações.</p>
      <p>Desenvolvido por Emanuel Bim, janeiro de 2024</p>
    </>
  );
};

export default Contact;
