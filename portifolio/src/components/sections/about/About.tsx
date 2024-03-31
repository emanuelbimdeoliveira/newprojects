import "./About.css";
import { useLoading } from "../../../hooks/useLoading";

const About = () => {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <section className="about-me" id="about">
          <p style={{ margin: "auto", fontFamily: "arial" }}>Carregando...</p>
        </section>
      ) : (
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
                window.open(
                  "https://api.whatsapp.com/send?phone=5542999818385",
                  "_blank"
                );
              }}
            >
              Contato <i className="fa-brands fa-whatsapp"></i>
            </button>
          </article>
          <figure className="image">
            <img src="./profile-img.webp" alt="emanuel" className="img" />
          </figure>
        </section>
      )}
    </>
  );
};

export default About;
