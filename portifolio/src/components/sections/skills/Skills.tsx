import "./Skills.css";

import { useHandleShowSkill } from "../../../hooks/useShowSkill";
import { Fade } from "react-awesome-reveal";
import { useNavigateFunction } from "../../../hooks/useNavigateFunction";

const Skills = () => {
  const { handleShowSkill, skillDescription } = useHandleShowSkill();

  const { navigate } = useNavigateFunction();

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
        <Fade>
          <i className="fa-brands fa-npm"></i>
          <i className="fa-solid fa-terminal"></i>
          <i>
            <img
              src="https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/typeScript-icon.png?raw=true"
              alt="typeScript"
            />
          </i>
        </Fade>
        <Fade direction="up">
          <i className="fa-brands fa-wordpress"></i>
          <i className="fa-brands fa-elementor"></i>
          <i>
            <img
              src="
              ./icon-firebase.png
              "
              alt="firebase"
            />
          </i>
        </Fade>
      </article>
      <article className="description">
        <h2>{skillDescription!.title}</h2>
        <p>{skillDescription!.description}</p>
      </article>
      <button className="success" onClick={() => navigate("/skills")}>
        Ver mais detalhes
      </button>
    </section>
  );
};

export default Skills;
