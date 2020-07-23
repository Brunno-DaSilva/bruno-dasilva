import React from "react";

import SideDrawerButton from "../SideDrawer/SideDrawerButton";

import NavLinkActive from "../NavLinkActive";
// const NavLink = (props) => (
//   <Link
//     {...props}
//     getProps={({ isCurrent }) => {
//       return {
//         style: {
//           color: isCurrent ? "#26b2e0" : "#9e9d9d",
//         },
//       };
//     }}
//   />
// );

const Menu = (props) => {
  return (
    <nav className="navigation-bar ">
      <p className="navigation-bar__item">
        <NavLinkActive to="/">Home</NavLinkActive>
      </p>
      <p className="navigation-bar__item">
        <NavLinkActive to="about">About</NavLinkActive>
      </p>
      <p className="navigation-bar__item">
        <NavLinkActive to="projects">Projects</NavLinkActive>
      </p>
      <p className="navigation-bar__item">
        <NavLinkActive to="contact">Contact</NavLinkActive>
      </p>
      <p className="side-draw-button">
        <SideDrawerButton click={props.drawerClickHandler} />
      </p>
    </nav>
  );
};

export default Menu;
