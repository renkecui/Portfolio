import React from "react";
//import logo from "./logo.svg";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./HomePage/Home";
import AboutPage from "./AboutPage/About";
import ProjectsPage from "./ProjectsPage/Project";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
