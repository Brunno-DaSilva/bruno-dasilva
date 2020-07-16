import React from "react";
import { Link } from "@reach/router";
import SideDrawerButton from "../SideDrawer/SideDrawerButton";

const Menu = (props) => {
  return (
    <nav className="navigation-bar ">
      <p className="navigation-bar__item">
        <Link to="/">Home</Link>
      </p>
      <p className="navigation-bar__item">
        <Link to="about">About</Link>
      </p>
      <p className="navigation-bar__item">
        <Link to="projects">Projects</Link>
      </p>
      <p className="navigation-bar__item">
        <Link to="contact">Contact</Link>
      </p>
      <p className="side-draw-button">
        <SideDrawerButton click={props.drawerClickHandler} />
      </p>
    </nav>
  );
};

export default Menu;
