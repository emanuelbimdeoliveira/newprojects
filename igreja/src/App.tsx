import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import "./index.css";
import Countdown from "./pages/countdown/Countdown";
import CountdownTime from "./pages/countdown/CountdownTime";
import { useState } from "react";
import Clock from "./pages/clock/Clock";
import Random from "./pages/random/Random";
import RandomNumbers from "./pages/random/RandomNumbers";
import About from "./pages/about/About";
import Info from "./pages/info/Info";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container
      fluid
      className="p-0"
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
    >
      <Navbar
        expand="md"
        className={`bg text-bg mb-5 ${showMenu ? "visible" : "invisible"}`
      }
      >
        <Container fluid className="d-flex justify-content-end">
        <Navbar.Toggle aria-controls="#navbar" data-bs-theme="dark" className="rounded-0 border-0"></Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="w-100 d-flex justify-content-end gap-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/countdown">Temporizador</Nav.Link>
              <Nav.Link href="/clock">Relógio</Nav.Link>
              <Nav.Link href="/random">Números</Nav.Link>
              <Nav.Link href="/info">Manual de uso</Nav.Link>
              <Nav.Link href="/about">Sobre</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/countdown_time/:id" element={<CountdownTime />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/random" element={<Random />} />
            <Route path="/random_numbers/:start/:finish" element={<RandomNumbers />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </main>
    </Container>
  );
};

export default App;
