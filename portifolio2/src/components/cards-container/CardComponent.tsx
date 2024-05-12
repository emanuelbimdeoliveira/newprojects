import { Button, Card, Container } from "react-bootstrap";
import { IProjects } from "../../interfaces/IProjects";
import PreloadImg from "../PreLoadImg";

type Props = {
  projects: IProjects[];
  action?: string;
};

const CardComponent = ({ projects, action }: Props) => {
  return (
    <Container
      className={`p-3 p-md-5 pt-0 d-flex ${
        action == "page"
          ? "flex-wrap justify-content-center"
          : "flex-nowrap flex-md-wrap justify-content-start justify-content-md-center"
      } gap-3 gap-md-5`}
      style={{ maxWidth: "100vw", overflowX: "scroll" }}
      id="cards_container"
    >
      {projects &&
        projects.map((item, index) => (
          <Card
            className={`text-bg-contrast-button text-center pb-3 pb-md-5 shadow border-2 rounded-3 overflow-hidden ${
              action == "page" ? "col-11 col-md-6 col-lg-3" : "col-8 col-lg-4"
            }  my-3 pb-3 d-flex flex-column gap-3 justify-content-between`}
            key={index}
          >
            <PreloadImg
              src={item.urlImage}
              className="w-100"
              alt={item.projectName}
            />
            <Card.Title>{item.projectName}</Card.Title>
            {action && (
              <>
                <Card.Text className="px-3">{item.description}</Card.Text>
                <Card.Text>{`Desenvolvido em: ${String(
                  item.createdAt
                ).substring(6)}/${String(item.createdAt).substring(
                  4,
                  6
                )}/${String(item.createdAt).substring(0, 4)}`}</Card.Text>
              </>
            )}
            <Button
              className="rounded-3 w-75 mx-auto bg text-bg border-0 py-2"
              onClick={() => {
                window.open(item.linkToProject, "_blank");
              }}
            >
              Ver Projeto
            </Button>
          </Card>
        ))}
    </Container>
  );
};

export default CardComponent;
