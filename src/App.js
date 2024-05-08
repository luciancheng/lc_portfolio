import NavBar from "./navbar";
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <div className="webpage">
      <div className="App">
        <NavBar/>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
