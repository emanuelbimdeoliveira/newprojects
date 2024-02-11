import "./Skills.css";

import { useHandleShowSkill } from "../../../hooks/useShowSkill";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const { handleShowSkill, skillDescription } = useHandleShowSkill();

  setTimeout(() => {
    handleShowSkill();
  }, 500);

  return (
    <section className="skills" id="skills">
      <h1>Habilidades</h1>
      <article className="icons">
        <Fade direction="down">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
        </Fade>
        <Fade>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-git"></i>
          <i className="fa-brands fa-react"></i>
        </Fade>
        <Fade direction="up">

          <i className="fa-brands fa-npm"></i>
          <i className="fa-solid fa-terminal"></i>
          <i>
            <img src="./typeScript-icon.png" alt="typeScript" />
          </i>
        </Fade>
      </article>
      <article className="description">
        <h1>{skillDescription!.title}</h1>
        <p>{skillDescription!.description}</p>
      </article>
    </section>
  );
};

export default Skills;
