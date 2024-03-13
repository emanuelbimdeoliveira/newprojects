import "./App.css";
import Contact from "./components/footer/Contact";

import NavBar from "./components/navbar/NavBar";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about-page/AboutPage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import SkillsPage from "./pages/skills-page/SkillsPage";
import ContactPage from "./pages/contact-page/ContactPage";

function App() {
  return (
    <>
        <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Skills />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/skills" element={<SkillsPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
      </main>
        </BrowserRouter>
      <footer>
        <Contact action="footer"/>
      </footer>
    </>
  );
}

export default App;
