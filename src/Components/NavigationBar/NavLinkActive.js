import React from "react";
import { Link } from "@reach/router";

const NavLinkActive = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#26b2e0" : "#9e9d9d",
        },
      };
    }}
  />
);

export default NavLinkActive;
