import { Fade } from "react-awesome-reveal";

import { useEffect } from "react";

import "./Projects.css";
import { useFetchData } from "../../../hooks/useFetchData";

const Projects = () => {
  const { fetchProjects, projects } = useFetchData();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <Fade cascade={true}>
        <h1>Projetos</h1>
        <article className="cards-container">
          {projects &&
            projects.map((item, index) => (
              <div className="card" key={index}>
                <img
                  src={item.urlImage}
                  alt={item.projectName}
                  onClick={() => window.open(`${item.linkToProject}`, "_blank")}
                />
                <p>{item.projectName}</p>
                <div className="buttons">
                  <a
                    href={item.linkToProject}
                    target="_blank"
                    className={"success"}
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={item.linkToGitHub}
                    target="_blank"
                    className={"success"}
                  >
                    Ver Repositório
                  </a>
                </div>
              </div>
            ))}
          <button
            className="success"
            onClick={() =>
              window.open(
                "https://emanuelbimdeoliveira.github.io/html-css-javascript/allprojects/",
                "_target"
              )
            }
          >
            Ver todos os meus Projetos
          </button>
        </article>
      </Fade>
    </section>
  );
};

export default Projects;
