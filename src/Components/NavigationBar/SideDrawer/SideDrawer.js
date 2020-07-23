import React from "react";
import NavLinkActive from "../NavLinkActive";

const SideDrawer = (props) => {
  return (
    <nav className="side-drawer animated fadeInRight">
      <p className="animated delay-1s fadeInRight">
        <NavLinkActive to="/">Home</NavLinkActive>
      </p>
      <p className="animated delay-1shalf fadeInRight">
        <NavLinkActive to="about">About</NavLinkActive>
      </p>
      <p className="animated delay-2s fadeInRight">
        <NavLinkActive to="projects">Projects</NavLinkActive>
      </p>
      <p className="animated delay-2shalf fadeInRight">
        <NavLinkActive to="contact">Contact</NavLinkActive>
      </p>
    </nav>
  );
};

export default SideDrawer;
