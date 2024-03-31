import { Fade } from "react-awesome-reveal";

import { useEffect } from "react";
import { useFetchData } from "../../../hooks/useFetchData";

import Card from "../../cards-container/Card";

import "./Projects.css";
import { useNavigateFunction } from "../../../hooks/useNavigateFunction";

const Projects = () => {
  const { navigate } = useNavigateFunction();

  const { fetchProjects, projects, loading } = useFetchData();

  useEffect(() => {
    fetchProjects(6);
  }, []);

  return (
    <section className="projects" id="projects">
      <Fade cascade={true} duration={300}>
        <h1>Projetos</h1>
        {loading && <p className="loading">Carregando...</p>}
        <Card projects={projects} />
        <button className="success" onClick={() => navigate("/projects")}>
          Ver todos os meus Projetos
        </button>
      </Fade>
    </section>
  );
};

export default Projects;
