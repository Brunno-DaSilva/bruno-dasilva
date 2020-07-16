import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Menu from "./Components/NavigationBar/Menu/Menu";
import SideDrawer from "./Components/NavigationBar/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faAdjust } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);

  const darkModeHandler = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop backdropClick={backdropClickHandler} />;
  }
  return (
    <section className={darkMode ? "dark-mode " : "light-mode"}>
      {/* topright navigation  */}
      <div className="navigation-bar animated fadeInRight">
        {/* <NavigationBar /> */}

        <Menu drawerClickHandler={drawerToggleClickHandler} />
        {sideDrawer}
      </div>
      {backdrop}

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

        <article>
          <button
            // onClick={() => setDarkMode((prevMode) => !prevMode)}
            onClick={darkModeHandler}
            className={darkMode ? "dark-mode-btn-move-right" : "btn-move-right"}
          >
            <FontAwesomeIcon icon={faAdjust} size="lg"></FontAwesomeIcon>
          </button>
        </article>
      </main>
    </section>
  );
}
