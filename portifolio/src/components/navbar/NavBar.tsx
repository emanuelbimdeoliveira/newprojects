import { useState } from "react";
import { darkTheme, lightTheme, propertiesArray } from "../../mini_db/db";

import { useNavigate } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const [theme, setTheme] = useState<string>("light");

  const navigate = useNavigate();

  const changeTheme = () => {
    const root: any = document.querySelector(":root");

    if (theme == "light") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, darkTheme[index]);
      });
      setTheme("dark");
    } else {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, lightTheme[index]);
      });
      setTheme("light");
    }
  };

  return (
    <>
      <nav className="navbar-lg">
        <div className="brand">
          <a onClick={() => navigate("/")}>
            <i className="fa-solid fa-home"></i>
          </a>
          <button
            onClick={() => {
              changeTheme();
            }}
          >
            {theme == "light" ? (
              <>
                <i className="fa-solid fa-moon"></i>
                <span>Modo Escuro</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-sun"></i>
                <span>Modo Claro</span>
              </>
            )}
          </button>
        </div>
        <div className="links">
          <a onClick={() => navigate("/about")}>Sobre</a>
          <a onClick={() => navigate("/projects")}>Projetos</a>
          <a onClick={() => navigate("/skills")}>Habilidades</a>
          <a onClick={() => navigate("/contact")}>Contato</a>
        </div>
        <label htmlFor="sidebar">
          <i className="fa-solid fa-bars"></i>
        </label>
      </nav>

      <input type="checkbox" name="sidebar" id="sidebar" />
      <nav className="sidebar">
        <label htmlFor="sidebar">
          <i className="fa-solid fa-bars"></i>
        </label>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/about")}>Sobre</a>
        <a onClick={() => navigate("/projects")}>Projetos</a>
        <a onClick={() => navigate("/skills")}>Habilidades</a>
        <a onClick={() => navigate("/contact")}>Contato</a>
      </nav>
    </>
  );
};

export default NavBar;
