import { Fade } from "react-awesome-reveal";
import "./About.css";

const About = () => {
  return (
    <>
      <Fade>
        <section className="about-me" id="about">
          <article className="bio">
            <h2>Olá, meu nome é</h2>
            <h1>Emanuel Bim</h1>
            <p>Eu sou programador Front-End e desenvolvo sites e aplicações web usando as melhores tecnologias do mercado atualmente</p>
          </article>
          <figure className="image">
            <img src="https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolio-img/profile-image.jpg?raw=true" alt="profile-image" />
          </figure>
        </section>
      </Fade>
    </>
  );
};

export default About;
