import React from "react";
import { Link } from "@reach/router";

const SideDrawer = (props) => {
  return (
    <nav className="side-drawer animated fadeInRight">
      <p className="animated delay-1s fadeInRight">
        <Link to="/">Home</Link>
      </p>
      <p className="animated delay-1shalf fadeInRight">
        <Link to="about">About</Link>
      </p>
      <p className="animated delay-2s fadeInRight">
        <Link to="projects">Projects</Link>
      </p>
      <p className="animated delay-2shalf fadeInRight">
        <Link to="contact">Contact</Link>
      </p>
    </nav>
  );
};

export default SideDrawer;
