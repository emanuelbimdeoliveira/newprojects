import { IProjects } from "../../interfaces/IProjects";
import PreloadImg from "../PreLoadImg";

import "./Card.css";

type Props = {
  projects: IProjects[];
  action?: string;
};

const Card = ({ projects, action }: Props) => {

  return (
    <article className="cards-container">
      {projects &&
        projects.map((item, index) => (
          <div
            className={action == "projects-page" ? "card-lg" : "card"}
            key={index}
          >
             <PreloadImg src={item.urlImage} className="img" alt={item.projectName}/>
            <h2>{item.projectName}</h2>
            {action && <p>{item.description}</p>}
            <div className="buttons">
              <a
                href={item.linkToProject}
                target="_blank"
                className={"success"}
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
    </article>
  );
};

export default Card;
