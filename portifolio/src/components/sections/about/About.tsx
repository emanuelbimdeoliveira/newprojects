import { Fade } from "react-awesome-reveal";
import "./About.css";
import { useNavigate } from "react-router-dom";
import PreloadImg from "../../PreLoadImg";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Fade>
        <section className="about-me" id="about">
          <article className="bio">
            <h2>Olá, meu nome é</h2>
            <h1>Emanuel Bim</h1>
            <p>Eu sou programador Front-End e desenvolvedor Wordpress</p>
            <p className="ocultable">
              Meu compromisso é não apenas desenvolver websites, mas também
              capacitar meus clientes com ferramentas digitais que impulsionam
              suas empresas para o sucesso online.
            </p>
            <button
              className="success"
              onClick={() => {
                navigate("/about");
              }}
            >
              Mais informações
            </button>
          </article>
          <figure className="image">
            <PreloadImg src="https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/profile-image.jpg?raw=true" className="img" />
          </figure>
        </section>
      </Fade>
    </>
  );
};

export default About;
