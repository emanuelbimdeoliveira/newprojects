import { IProjects } from "../../interfaces/IProjects";
import PreloadImg from "../PreLoadImg";

import "./Card.css";

type Props = {
  projects: IProjects[];
  action?: string;
};

const Card = ({ projects, action }: Props) => {
  console.log(projects);
  return (
    <article className="cards-container">
      {projects &&
        projects.map((item, index) => (
          <div
            className={action == "projects-page" ? "card-lg" : "card"}
            key={index}
          >
            <PreloadImg
              src={item.urlImage}
              className="img"
              alt={item.projectName}
            />
            <h2>{item.projectName}</h2>
            {action && (
              <>
                <p>{item.description}</p>
                <p>{`Desenvolvido em: ${String(item.createdAt).substring(
                  6
                )}/${String(item.createdAt).substring(4, 6)}/${String(
                  item.createdAt
                ).substring(0, 4)}`}</p>
              </>
            )}
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
