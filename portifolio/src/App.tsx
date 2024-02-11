import "./App.css";
import Contact from "./components/footer/Contact";

import NavBar from "./components/navbar/NavBar";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
