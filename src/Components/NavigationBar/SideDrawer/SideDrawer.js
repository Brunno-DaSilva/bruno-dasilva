import React from "react";
import { Link } from "@reach/router";

const SideDrawer = (props) => {
  return (
    <nav className="side-drawer">
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

export default SideDrawer;
