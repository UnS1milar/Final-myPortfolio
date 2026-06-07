import Home from "./Home";
import Nav from "./Nav";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Skills2 from "./SkillsToolsToggle";
import { useAppContext } from "./AppContext";

function App() {
  const { darkMode } = useAppContext();

  const backgroundClass = darkMode
    ? "bg-gradient-to-r from-black via-gray-900 to-black"
    : "bg-gradient-to-r from-white via-blue-50 to-gray-50";

  return (
    <div className={`${backgroundClass} min-h-screen`}>
      <Nav />

      <main>
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills2 />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="contacts" className="scroll-mt-24">
          <Contacts />
        </section>
      </main>
    </div>
  );
}

export default App;
