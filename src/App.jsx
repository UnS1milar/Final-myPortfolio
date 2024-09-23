import Home from "./Home";
import Nav from "./Nav";
import Experience from "./Experience";
import Skills from "./Skills";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
