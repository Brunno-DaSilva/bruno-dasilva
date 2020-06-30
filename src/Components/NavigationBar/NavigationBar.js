import React, { Component } from "react";
import { Link } from "@reach/router";
class NavigationBar extends Component {
  render() {
    return (
      <nav className="navigation-bar">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <p>Projects</p>
        <p>Contact</p>
      </nav>
    );
  }
}

export default NavigationBar;
