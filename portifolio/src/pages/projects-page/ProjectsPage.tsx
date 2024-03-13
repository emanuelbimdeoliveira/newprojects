import { useEffect, useState } from "react";
import "./ProjectsPage.css";
import { useFetchData } from "../../hooks/useFetchData";

import Card from "../../components/cards-container/Card";

const ProjectsPage = () => {
  const [limitOfLoad, setLimitOfLoad] = useState<number>(6);
  const [value, setValue] = useState<string>("all");

  const { fetchProjects, projects, loading } = useFetchData();

  useEffect(() => {
    fetchProjects(limitOfLoad, value);
  }, [limitOfLoad, value]);

  return (
    <section className="projects-page">
      <h1>Meus Projetos</h1>
      <select
        name="filter"
        id="filter"
        onChange={(e) => {
          setValue(e.target.value);
          fetchProjects(limitOfLoad, value);
        }}
      >
        <option value="wordpress">WordPress</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="BootStrap">BootStrap</option>
        <option value="react">React</option>
        <option value="typescript">TypeScript</option>
      </select>
      {loading && <p className="loading">Carregando...</p>}
      <Card projects={projects} action={"projects-page"} />
      <button
        className="success"
        onClick={() => {
          setLimitOfLoad(limitOfLoad + 6);
        }}
      >
        {loading ? "Carregando..." : "Ver mais"}
      </button>
    </section>
  );
};

export default ProjectsPage;
