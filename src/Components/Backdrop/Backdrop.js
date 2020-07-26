import React from "react";

const Backdrop = (props) => {
  return (
    <div
      aria-label="Close Main Menu Button"
      className="backdrop"
      onClick={props.backdropClick}
    />
  );
};

export default Backdrop;
