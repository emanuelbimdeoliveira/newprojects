import { useLocation } from "react-router-dom";

import "./NavBar.css";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { useNavigateFunction } from "../../hooks/useNavigateFunction";
import { useLoading } from "../../hooks/useLoading";

const NavBar = () => {
  const { navigate } = useNavigateFunction();
  const location = useLocation();

  const { loading } = useLoading();

  const handleNavigate = (e?: string, linkTo?: string) => {
    const navigateTo = e || linkTo;

    if (navigateTo == "menu") return;

    if (location.pathname === "/") {
      document
        .querySelector(navigateTo!.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(navigateTo!);
    }
  };

  const { changeTheme } = useChangeTheme();

  return (
    <>
      {loading ? (
        <nav className="navbar-lg"></nav>
      ) : (
        <nav className="navbar-lg">
          <div className="brand">
            <i
              className="fa-solid fa-home"
              onClick={() => handleNavigate(undefined, "/#about")}
            ></i>
            <select
              name="themes"
              aria-label="Select theme"
              id="themes"
              className="dropdown"
              onChange={(e) => changeTheme(e.target.value)}
            >
              <option value="lightTheme">Temas</option>
              <option value="darkTheme">Escuro</option>
              <option value="lightTheme">Padrão</option>
              <option value="blueTheme">Azul</option>
              <option value="greenTheme">Verde</option>
              <option value="redTheme">Vermelho</option>
              <option value="yellowTheme">Azul com Amarelo</option>
              <option value="purpleTheme">Roxo com Amarelo</option>
            </select>
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
            aria-label="menu"
            id="menu"
            className="dropdown"
            onChange={(e) => handleNavigate(e.target.value)}
          >
            <option value="menu">Menu</option>
            <option value="/#about">Sobre</option>
            <option value="/#projects">Projetos</option>
            <option value="/#skills">Habilidades</option>
            <option value="/#contact">Contato</option>
          </select>
        </nav>
      )}
    </>
  );
};

export default NavBar;
