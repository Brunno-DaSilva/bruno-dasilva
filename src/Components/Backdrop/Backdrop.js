import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.backdropClick} />;
};

export default Backdrop;
