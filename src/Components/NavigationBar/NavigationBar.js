import React, { Component } from "react";
import { Link } from "@reach/router";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navigation-bar">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="about">About</Link>
        </p>
        <p>
          <Link to="projects">Projects</Link>
        </p>
        <p>
          <Link to="contact">Contact</Link>
        </p>
      </nav>
    );
  }
}

export default NavigationBar;
