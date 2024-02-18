import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";

function HomePage() {
  const { pathname } = useLocation();

  // var OiaPic = document.getElementById("OiaImage");
  // OiaPic.src = "src/Pictures/Renke_at_Oia.jpg";

  return (
    <div className="home-page">
      <div className="div">
        <div className="overlap">
          <div className="picture">
            {/* <img id="OiaImage" src="picture of Renke at Oia JPG " alt="" /> */}
          </div>
          <div className="introduction">
            <p className="HELLO-welcome-to-my">
              HELLO!
              <br />
              <br />
              Welcome to my personal website, I’m an aspiring Full Stack
              developer and I’ll be showing my progress through this website
            </p>
          </div>
        </div>
        <header className="header">
          <div className="overlap-group">
            <div className="text-wrapper-2">Renke Cui</div>
            <div className="nav-bar">
              <div className="works-button">
                <Link
                  to="/Projects"
                  className={`button text-wrapper-3${
                    pathname.includes("Projects") ? "active" : ""
                  }`}
                >
                  Projects
                </Link>
              </div>
              <div className="about-me-button">
              <Link
                  to="/About"
                  className={`button text-wrapper-3${
                    pathname.includes("About") ? "active" : ""
                  }`}
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default HomePage;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
