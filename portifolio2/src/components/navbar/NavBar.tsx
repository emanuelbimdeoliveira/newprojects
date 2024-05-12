import { useLocation } from "react-router-dom";

import { useNavigateFunction } from "../../hooks/useNavigateFunction";
import { useLoading } from "../../hooks/useLoading";
import {
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  SplitButton,
} from "react-bootstrap";
import { useChangeTheme } from "../../hooks/useChangeTheme";

const NavBar = () => {
  const { navigate } = useNavigateFunction();
  const location = useLocation();

  const { loading } = useLoading();

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

  const { changeTheme } = useChangeTheme();

  return (
    <>
      {loading ? (
        <nav className="navbar-lg"></nav>
      ) : (
        <Navbar
          expand={"lg"}
          fixed="top"
          data-bs-theme={"dark"}
          className="p-3 bg text-bg"
        >
          <Container fluid="lg" className="d-flex justify-content-around gap-3">
            <Navbar.Brand>
              <Image
                width={"40px"}
                rounded
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=5542999818385",
                    "_blank"
                  );
                }}
                src="
              ./whatsapp.png
              "
                alt="whatsapp"
              />
            </Navbar.Brand>

            <SplitButton
              title="Temas"
              id="themes"
              variant="transparent"
              className="mx-auto text-bg"
            >
              <Dropdown.Item onClick={() => changeTheme("originalTheme")}>
                Original
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("patternTheme")}>
                Padrão
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("darkTheme")}>
                Escuro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("blueTheme")}>
                Azul
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("greenTheme")}>
                Verde
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("yellowTheme")}>
                Amarelo
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("redTheme")}>
                Vermelho
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("purpleTheme")}>
                Roxo
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeTheme("silverTheme")}>
                Prata
              </Dropdown.Item>
            </SplitButton>

            <Navbar.Toggle
              className="border-0 outline-0 rounded-0"
              aria-controls="nav_bar"
            ></Navbar.Toggle>

            <Navbar.Offcanvas
              id="nav_bar"
              style={{
                width: "55%",
                color: "var(--font-color)",
                fontSize: "1.3em",
              }}
            >
              <Offcanvas.Header closeButton>Menu</Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="gap-3 w-100 d-flex justify-content-end gap-5">
                  <Nav.Item
                    onClick={() => handleNavigate(undefined, "/#about")}
                    className="hover-link"
                  >
                    Sobre
                  </Nav.Item>
                  <Nav.Item
                    onClick={() => handleNavigate(undefined, "/#projects")}
                    className="hover-link"
                  >
                    Projetos
                  </Nav.Item>
                  <Nav.Item
                    onClick={() => handleNavigate(undefined, "/#skills")}
                    className="hover-link"
                  >
                    Tecnologias
                  </Nav.Item>
                  <Nav.Item
                    onClick={() => handleNavigate(undefined, "/#contact")}
                    className="hover-link"
                  >
                    Contato
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavBar;
