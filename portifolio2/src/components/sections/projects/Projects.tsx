import { Fade } from "react-awesome-reveal";

import { useEffect } from "react";
import { useFetchData } from "../../../hooks/useFetchData";

import { useNavigateFunction } from "../../../hooks/useNavigateFunction";
import { Button, Container } from "react-bootstrap";
import CardComponent from "../../cards-container/CardComponent";

const Projects = () => {
  const { navigate } = useNavigateFunction();

  const { fetchProjects, projects, projects2, loading } = useFetchData();

  console.log(projects2)

  useEffect(() => {
    fetchProjects(6);
  }, []);

  return (
    <section
      id="projects"
      className="text-bg-contrast py-3 d-flex flex-column justify-content-center align-items-center"
    >
      <Fade cascade={true} duration={300}>
        {loading && <p className="loading">Carregando...</p>}
        <Container fluid className="bg text-bg p-3 pb-5 text-center">
          <h2 className="text-center p-3">Projetos desenvolvidos</h2>

          <h3 className="mt-3 mb-0">WordPress</h3>
          <CardComponent projects={projects} />

          <h3 className="mt-3 mb-0">Programação</h3>
          <CardComponent projects={projects2} />

          <Button
            className="col-6 rounded-3 p-2 bg-light text-bg-contrast-button border-0"
            onClick={() => navigate("/projects")}
          >
            Ver mais projetos
          </Button>
        </Container>
      </Fade>
    </section>
  );
};

export default Projects;
