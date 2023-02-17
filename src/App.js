import "./App.css"
import Nav from "./components/Nav";
import Home from "./sections/Home";
import Introduce from "./sections/Introduce";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Introduce />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
