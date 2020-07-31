import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Menu from "./Components/NavigationBar/Menu/Menu";
import SideDrawer from "./Components/NavigationBar/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faUserAlt } from "@fortawesome/free-solid-svg-icons";
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
      <div className="navigation-bar animated fadeInRight">
        <Menu drawerClickHandler={drawerToggleClickHandler} />
        {sideDrawer}
      </div>
      {backdrop}

      <div
        className="animated fadeInLeft"
        id={darkMode ? "dark-mode-left-logo" : "left-logo"}
      >
        <Link aria-label="Open About Me Button" to="about">
          <p>
            Bruno <br />
            <span>DaSilva</span>
          </p>
        </Link>
      </div>

      <div
        id={darkMode ? "dark-mode-left-icons" : "left-icons"}
        className="animated fadeInLeft"
      >
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Brunno-DaSilva"
            aria-label="Open Bruno's Profile on GitHub"
          >
            <FontAwesomeIcon icon={faGithubAlt} size="1x"></FontAwesomeIcon>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/bruno-dasilva"
            aria-label="Open Bruno's Profile on CodePen"
          >
            <FontAwesomeIcon icon={faCodepen} size="1x"></FontAwesomeIcon>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bruno-dasilva/"
            aria-label="Open Bruno's Profile on Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="1x"></FontAwesomeIcon>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://generalassemb.ly/instructors/bruno-leandro-da-silva/23311"
            aria-label="Open Bruno's Profile on General Assembly"
          >
            <FontAwesomeIcon icon={faUserAlt} size="1x"></FontAwesomeIcon>
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
          <PageNotFound default />
        </Router>

        <article>
          <button
            onClick={darkModeHandler}
            className={darkMode ? "dark-mode-btn-move-right" : "btn-move-right"}
            aria-label={
              darkMode
                ? "Change Theme to light Mode"
                : "Change Theme to Dark mode"
            }
          >
            <FontAwesomeIcon icon={faAdjust} size="lg"></FontAwesomeIcon>
          </button>
        </article>
      </main>
    </section>
  );
}
