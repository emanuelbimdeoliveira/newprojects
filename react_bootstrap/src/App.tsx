import {
  Badge,
  Breadcrumb,
  Button,
  Container,
  FloatingLabel,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Columns from "./components/Columns";
import Forms from "./components/Forms";
import ValidateForms from "./components/ValidateForms";
import NotFound from "./components/NotFound";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import Alerts from "./components/Alerts";
import Dropdowns from "./components/Dropdowns";
import Overlays from "./components/Overlays";
import Modals from "./components/Modals";
import Accordions from "./components/Accordions";
import Transitions from "./components/Transitions";
import Transition2 from "./components/Transitions2";

function App() {
  return (
    <section style={{ padding: "0 0 5em" }}>
      <BrowserRouter>
        <Navbar
          expand="lg"
          bg="primary"
          data-bs-theme="dark"
          sticky="top"
          collapseOnSelect
        >
          <Container fluid="sm" className="d-flex justify-content-between">
            <Navbar.Toggle
              aria-controls="offcanvas-nav"
              className="border-0"
            ></Navbar.Toggle>

            <NavDropdown title="Mais opções" className="text-bg-primary">
              <NavDropdown.Item href="buttons">Botões</NavDropdown.Item>
              <NavDropdown.Item href="alerts">Alertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="dropdowns">
                Dropdowns e ListGroups
              </NavDropdown.Item>
              <NavDropdown.Item href="overlays">
                OverLays e Pagination
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="modals">Modals</NavDropdown.Item>
              <NavDropdown.Item href="accordions">Acordeon</NavDropdown.Item>
              <NavDropdown.Item href="transitions">Transições</NavDropdown.Item>
              <NavDropdown.Item href="transition2">
                Transições 2
              </NavDropdown.Item>
            </NavDropdown>

            <Navbar.Offcanvas
              id="offcanvas-nav"
              placement="start"
              className="bg-primary text-bg-primary"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Configurações</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-start gap-3">
                <Nav className="px-3" variant="underline">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="form">Formulários</Nav.Link>
                  <Nav.Link href="columns">Colunas e NavTabs</Nav.Link>
                  <Nav.Link href="validateForms">
                    Validação de Formulários
                  </Nav.Link>
                  <Nav.Link href="cards">Cards e Loadings</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Navbar.Brand href="https://www.emanuelbim.com.br/" target="_blank">Dev</Navbar.Brand>
            {/*  
            <Navbar.Toggle
              aria-controls="collapse-nav"
              className="bg-outline-light border-0"
            ></Navbar.Toggle>

            <Navbar.Collapse
              id="collapse-nav"
              className="p-3 justify-content-end"
            >
              <Nav navbarScroll style={{ maxHeight: "100px" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="form">Formulários</Nav.Link>
                <Nav.Link href="columns">Colunas e Grid</Nav.Link>
                <Nav.Link href="validateForms">
                  Validação de Formulários
                </Nav.Link>
                <Nav.Link href="comp3">Componentes 3</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            */}
          </Container>
        </Navbar>
        <Breadcrumb>
          <Breadcrumb.Item href="/" as={Badge} className="bg-light shadow m-1">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            href="info"
            as={Badge}
            className="bg-light shadow m-1"
          >
            Informações
          </Breadcrumb.Item>
          <Breadcrumb.Item
            href="contact"
            as={Badge}
            className="bg-light shadow m-1"
          >
            Contato
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-center bg-primary text-bg-primary p-3 my-3">
          React com BootStrap
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Forms />} />
          <Route path="columns" element={<Columns />} />
          <Route path="validateForms" element={<ValidateForms />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="dropdowns" element={<Dropdowns />} />
          <Route path="modals" element={<Modals />} />
          <Route path="accordions" element={<Accordions />} />
          <Route path="overlays" element={<Overlays />} />
          <Route path="transitions" element={<Transitions />} />
          <Route path="transition2" element={<Transition2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Navbar
          expand="md"
          fixed="bottom"
          bg="primary"
          data-bs-theme="dark"
          className="text-bg-primary"
        >
          <Container className="px-3 d-flex justify-content-center gap-3">
            <Form.Group className="d-flex align-items-center gap-3">
              <FloatingLabel label="O que deseja buscar?">
                <Form.Control type="text" placeholder="o que deseja buscar?" />
              </FloatingLabel>
              <Button variant="success">Avançar</Button>
            </Form.Group>
            <Navbar.Text>CopyRights 2024</Navbar.Text>
          </Container>
        </Navbar>
      </BrowserRouter>
    </section>
  );
}

export default App;
