import React from "react";
import { Link } from "@reach/router";
import SideDrawerButton from "../SideDrawer/SideDrawerButton";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "#26b2e0" : "#9e9d9d",
        },
      };
    }}
  />
);

const Menu = (props) => {
  return (
    <nav className="navigation-bar ">
      <p className="navigation-bar__item">
        <NavLink to="/">Home</NavLink>
      </p>
      <p className="navigation-bar__item">
        <NavLink to="about">About</NavLink>
      </p>
      <p className="navigation-bar__item">
        <NavLink to="projects">Projects</NavLink>
      </p>
      <p className="navigation-bar__item">
        <NavLink to="contact">Contact</NavLink>
      </p>
      <p className="side-draw-button">
        <SideDrawerButton click={props.drawerClickHandler} />
      </p>
    </nav>
  );
};

export default Menu;
