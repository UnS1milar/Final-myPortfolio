import Home from "./Home";
import Nav from "./Nav";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import { useAppContext } from "./AppContext";

function App() {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-r from-black via-gray-900 to-black"
          : "bg-gradient-to-r from-white via-blue-50 to-gray-50"
      }`}
    >
      <Nav />

      <section id="home">
        <Home />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
