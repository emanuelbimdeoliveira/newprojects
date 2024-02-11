import { useState } from "react";
import { darkTheme, lightTheme, propertiesArray } from "../../mini_db/db";

import "./NavBar.css";

const NavBar = () => {
  const [theme, setTheme] = useState<string>("light");

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
        <div className="branch">
          <a href="#">
            <img src="./branch-orange.png" alt="branch" />
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
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contato</a>
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
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </nav>
    </>
  );
};

export default NavBar;
