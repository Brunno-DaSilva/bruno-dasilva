import React from "react";
import { Link } from "@reach/router";

const Menu = () => {
  return (
    <nav className="navigation-bar ">
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
};

export default Menu;
