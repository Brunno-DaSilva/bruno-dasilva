import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Router, Link } from "@reach/router";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
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
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <section className={darkMode ? "dark-mode " : "light-mode"}>
      {/* topright navigation  */}
      <nav className="navigation-bar animated fadeInRight">
        {/* <NavigationBar /> */}
        <NavigationBar />
        <p className="dark-mode-icon">
          <FontAwesomeIcon
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            icon={faAdjust}
            size="1x"
          ></FontAwesomeIcon>
        </p>
      </nav>

      {/* leftTop brunoName logo */}

      <div
        className="animated fadeInLeft"
        id={darkMode ? "dark-mode-left-logo" : "left-logo"}
      >
        <Link to="about">
          <p>
            Bruno <br />
            <span>DaSilva</span>
          </p>
        </Link>
      </div>

      {/* Leftbottom icons  */}
      <div
        id={darkMode ? "dark-mode-left-icons" : "left-icons"}
        className="animated fadeInLeft"
      >
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
            <FontAwesomeIcon icon={faCode} size="1x"></FontAwesomeIcon>
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
