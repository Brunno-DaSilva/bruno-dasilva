import React, { Component } from "react";
import { Link } from "@reach/router";
class NavigationBar extends Component {
  render() {
    return (
      <nav className="navigation-bar">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </nav>
    );
  }
}

export default NavigationBar;
