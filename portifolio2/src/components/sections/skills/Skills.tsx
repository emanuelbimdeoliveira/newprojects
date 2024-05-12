import { Fade } from "react-awesome-reveal";
import { useNavigateFunction } from "../../../hooks/useNavigateFunction";
import { Button, Container, Image, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { descriptionArray } from "../../../mini_db/db";

type Skill = {
  title: string;
  description: string;
  iconCode: string;
};

const Skills = () => {
  const { navigate } = useNavigateFunction();

  const [skill, setSkill] = useState<Skill | undefined>(undefined);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (index: number) => {
    setSkill(descriptionArray[index]);
    setShow(true);
  };

  return (
    <section className="bg text-bg py-5" id="skills">
      <h2 className="text-center my-5">Tecnologias Aprendidas</h2>
      <Fade direction="down">
        <Row xs={3} className="d-flex justify-content-center gap-5 my-5">
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./html-5.png
              "
            alt="html"
            onClick={() => handleShow(0)}
          />
          <Image
            className="col-2 shadow p-3 p-md-5 hover bg-light"
            rounded
            src="
                ./css-3.png
              "
            alt="css"
            onClick={() => handleShow(1)}
          />
          <Image
            className="col-2 shadow p-3 p-md-5 hover bg-light"
            rounded
            src="
              ./js.png
              "
            alt="js"
            onClick={() => handleShow(2)}
          />
        </Row>
      </Fade>
      <Fade>
        <Row xs={3} className="d-flex justify-content-center gap-5 my-5">
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./bootstrap.png
              "
            alt="bootstrap"
            onClick={() => handleShow(3)}
          />
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./github.png
              "
            alt="github"
            onClick={() => handleShow(4)}
          />
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./biblioteca.png
              "
            alt="react"
            onClick={() => handleShow(5)}
          />
        </Row>
      </Fade>
      <Fade>
        <Row xs={3} className="d-flex justify-content-center gap-5 my-5">
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./programacao.png
              "
            alt="npm"
            onClick={() => handleShow(6)}
          />
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./terminal-de-codigo.png
              "
            alt="powershell"
            onClick={() => handleShow(7)}
          />
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/typeScript-icon.png?raw=true"
            alt="typeScript"
            onClick={() => handleShow(8)}
          />
        </Row>
      </Fade>
      <Fade direction="up">
        <Row xs={3} className="d-flex justify-content-center gap-5 my-5">
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./wordpress.png
              "
            alt="wordpress"
            onClick={() => handleShow(9)}
          />
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./elementor.png
              "
            alt="elementor"
            onClick={() => handleShow(10)}
          />
          <Image
            className={"col-2 shadow p-3 p-md-5 hover bg-light"}
            rounded
            src="
              ./firebase.png
              "
            alt="firebase"
            onClick={() => handleShow(11)}
          />
        </Row>
      </Fade>

      <Modal
        show={show}
        scrollable
        className="rounded-3 col-10 col-md-6 mx-auto"
        centered
        onHide={handleClose}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title className="text-bg-contrast">
              {skill?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg text-bg">
            <Container>
              <p>{skill?.description}</p>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg text-bg" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      <Button
        className="p-2 rounded-3 w-50 d-block mx-auto my-5 bg-light text-bg-contrast-button border-0"
        onClick={() => navigate("/skills")}
      >
        Ver mais detalhes
      </Button>
    </section>
  );
};

export default Skills;
