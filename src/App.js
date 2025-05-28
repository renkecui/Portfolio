import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from './components/Skills';
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";
import ContactRestAPI from "./components/ContactRestAPI";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ProjectCards />
      {/* <Contact /> */}
      <ContactRestAPI />
      <Footer />
    </div>
  );
}

export default App;
