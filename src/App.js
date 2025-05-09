import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// import React from "react";
// //import logo from "./logo.svg";
// import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./HomePage/Home";
// import AboutPage from "./AboutPage/About";
// import ProjectsPage from "./ProjectsPage/Project";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <section>
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Navigate to="/Home" />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/About" element={<AboutPage />} />
//           <Route path="/Projects" element={<ProjectsPage />} />
//         </Routes>
//       </HashRouter>
//     </section>
//   );
// }

// export default App;
