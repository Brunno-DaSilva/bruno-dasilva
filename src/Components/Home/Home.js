import React from "react";

import "./home-CSS/home-style.css";
import "../../index.css";
import logo from "./images/blogo-gray.png";

const Home = () => {
  return (
    <section className="section-container">
      <img src={logo} />
      <p className="home-logo-p">Front-end Development</p>
    </section>
  );
};

export default Home;
