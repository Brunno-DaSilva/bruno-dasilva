import React, { Component } from "react";
import "./home-CSS/home-style.css";
import "../../index.css";
import logo from "./images/blogo-gray.png";

class Home extends Component {
  render() {
    return (
      <section className="section-container">
        <img src={logo} />
        <p>Front-end Development</p>
      </section>
    );
  }
}

export default Home;
