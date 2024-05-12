import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import CardComponent from "../../components/cards-container/CardComponent";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const ProjectsPage = () => {
  const [limitOfLoad, setLimitOfLoad] = useState<number>(6);
  const [value, setValue] = useState<string>("all");

  const { fetchProjects, projects, loading } = useFetchData();

  useEffect(() => {
    fetchProjects(limitOfLoad, value);
  }, [limitOfLoad, value]);

  return (
    <section className="py-5">
      <h1 className="text-center">Meus Projetos</h1>
      <DropdownButton
        title="Filtrar opções"
        variant="transparent"
        data-bs-theme="dark"
        size="lg"
        className="col-8 col-md-4 d-block mx-auto my-3 text-center bg text-bg border-0 rounded-3"
        autoClose
      >
        <Dropdown.Item onClick={() => setValue("all")}>Todos</Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("wordpress")}>
          WordPress
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("html")}>HTML</Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("css")}>CSS</Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("javascript")}>
          JavaScript
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("BootStrap")}>
          BootStrap
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("react")}>React</Dropdown.Item>
        <Dropdown.Item onClick={() => setValue("typescript")}>
          TypeScript
        </Dropdown.Item>
      </DropdownButton>

      {loading && <p className="loading">Carregando...</p>}

      <CardComponent projects={projects} action={"page"} />

      <Button
        className="rounded-3 col-8 col-md-6 d-block mx-auto my-3 py-2 bg text-bg border-0"
        onClick={() => {
          setLimitOfLoad(limitOfLoad + 6);
        }}
      >
        {loading ? "Carregando..." : "Ver mais"}
      </Button>
    </section>
  );
};

export default ProjectsPage;
