import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Router } from "@reach/router";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faArrowUp,
  faArrowDown,
  faAdjust,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

export default function App() {
  // const pages = [
  //   ({ style }) => (
  //     <animated.div
  //       className={darkMode ? "dark-mode" : "light-mode"}
  //       style={{ ...style }}
  //     >
  //       <Router>
  //         <Home path="/" />
  //       </Router>
  //     </animated.div>
  //   ),
  //   ({ style }) => (
  //     <animated.div
  //       className={darkMode ? "dark-mode" : "light-mode"}
  //       style={{ ...style }}
  //     >
  //       <Router>
  //         <About path="about" />
  //       </Router>
  //     </animated.div>
  //   ),
  //   ({ style }) => (
  //     <animated.div
  //       className={darkMode ? "dark-mode" : "light-mode"}
  //       style={{ ...style }}
  //     >
  //       <Projects />
  //     </animated.div>
  //   ),
  //   ({ style }) => (
  //     <animated.div
  //       className={darkMode ? "dark-mode" : "light-mode"}
  //       style={{ ...style }}
  //     >
  //       <Contact />
  //     </animated.div>
  //   ),
  // ];

  // const [index, set] = useState(0);

  // const onClickRight = useCallback(() => set((state) => (state + 1) % 4), []);

  // const onClickLeft = useCallback(
  //   () => set((state) => (state <= 0 ? "" : state - 1) % 4),
  //   []
  // );

  // const transitions = useTransition(index, (p) => p, {
  //   from: { opacity: 0, transform: "translate3d(0,100%,0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // });

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <section className={darkMode ? "dark-mode" : "light-mode"}>
      {/* topright navigation  */}
      <nav className="navigation-bar">
        {/* <NavigationBar /> */}
        <NavigationBar />
        <p>
          <FontAwesomeIcon
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            icon={faAdjust}
            size="1x"
          ></FontAwesomeIcon>
        </p>
      </nav>

      {/* leftTop brunoName logo */}
      <div id={darkMode ? "dark-mode-left-logo" : "left-logo"}>
        <p>
          Bruno <br />
          <span>DaSilva</span>
        </p>
      </div>

      {/* Leftbottom icons  */}
      <div id={darkMode ? "dark-mode-left-icons" : "left-icons"}>
        <p>
          <a target="_blank" href="https://github.com/DaSilvaBrunoTexas">
            <FontAwesomeIcon icon={faGithubAlt} size="1x"></FontAwesomeIcon>
          </a>
        </p>
        <p>
          <a target="_blank" href="https://codepen.io/dasilvabrunotexas/">
            <FontAwesomeIcon icon={faCodepen} size="1x"></FontAwesomeIcon>
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.linkedin.com/in/bruno-dasilva/">
            <FontAwesomeIcon icon={faLinkedinIn} size="1x"></FontAwesomeIcon>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://profiles.generalassemb.ly/bruno-dasilva"
          >
            <FontAwesomeIcon icon={faCog} size="1x"></FontAwesomeIcon>
          </a>
        </p>
      </div>

      <main
        id="main-container"
        className={
          darkMode
            ? "simple-trans-main  dark-mode  "
            : "simple-trans-main light-mode"
        }
      >
        <Router>
          <Home path="/" />
          <About path="about" />
          <Projects path="projects" />
          <Contact path="contact" />
        </Router>
        <article
          className={
            darkMode ? "dark-mode-btn-holder-right" : "btn-holder-right"
          }
        >
          <button
            className={darkMode ? "dark-mode-btn-move-right" : "btn-move-right"}
          >
            <FontAwesomeIcon icon={faArrowDown} size="lg"></FontAwesomeIcon>
          </button>
        </article>

        <article
          className={darkMode ? "dark-mode-btn-holder-left" : "btn-holder-left"}
        >
          <button
            className={darkMode ? "dark-mode-btn-move-left" : "btn-move-left"}
          >
            <FontAwesomeIcon icon={faArrowUp} size="lg"></FontAwesomeIcon>
          </button>
        </article>
      </main>
    </section>
  );
}

render(<App />, document.getElementById("root"));
