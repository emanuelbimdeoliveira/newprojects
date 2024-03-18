import { useState } from "react";
import { darkTheme, lightTheme, propertiesArray } from "../../mini_db/db";

import { useLocation, useNavigate } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const [theme, setTheme] = useState<string>("light");

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (e?: string, linkTo?: string) => {
    const navigateTo = e || linkTo;

    if (location.pathname === "/") {
      document
        .querySelector(navigateTo!.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(navigateTo!);
    }
  };

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
          {/* <a onClick={() => navigate("/")}> */}
          {/* <img src="./Programador.jpg" alt="logo" /> */}
          {/* </a> */}
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
          <button onClick={() => handleNavigate(undefined, "/#about")}>
            Sobre
          </button>
          <button onClick={() => handleNavigate(undefined, "/#projects")}>
            Projetos
          </button>
          <button onClick={() => handleNavigate(undefined, "/#skills")}>
            Habilidades
          </button>
          <button onClick={() => handleNavigate(undefined, "/#contact")}>
            Contato
          </button>
        </div>
        <select
          name="menu"
          id="menu"
          onChange={(e) => handleNavigate(e.target.value)}
        >
          <option value="#" aria-disabled>
            Menu
          </option>
          <option value="/#about">Sobre</option>
          <option value="/#projects">Projetos</option>
          <option value="/#skills">Habilidades</option>
          <option value="/#contact">Contato</option>
        </select>
      </nav>
    </>
  );
};

export default NavBar;
