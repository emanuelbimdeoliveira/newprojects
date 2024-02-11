import { Fade } from "react-awesome-reveal";

import { useEffect, useState } from "react";

import { IProjects } from "../../../interfaces/IProjects";
import { collection, DocumentData, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from "../../../firebase-config/firebaseConfig";


import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const projectsSnapshot = await query(projectsCollection, where("stack", "==", "react"), orderBy("createdAt", "desc"));

        const snapShot = await getDocs(projectsSnapshot);

        const projectsData = snapShot.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data(),
        })) as IProjects[];

        setProjects(projectsData);
        console.log(projects)
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

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
                  src={item.linkToProject}
                  alt={item.projectName}
                  onClick={() => window.open(`${item.linkToProject}`, "_blank")}
                />
                <p>{item.projectName}</p>
                <div className="buttons">
                  <a href={item.linkToProject} target="_blank" className={"success"}>
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
