import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects-container">
          <div className="card-one">
            <div className="projects-img-wrapper">
              <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1581091889/imgs_starwars/imgs/Zilnai-logo2_xazqwf.png" />
            </div>

            <div className="projects-details">
              <div className="details-wrapper">
                <div className="details-title">
                  <h1>Zilnai Hotel Reservation</h1>
                </div>
                <div className="details-desc">
                  <p>
                    A full-stack web application built with the React on Rails
                    stack. A CRUD application which provides users with a option
                    to reserve, delete, and update a room
                  </p>
                </div>
                <div className="details-featured">
                  <div className="featured-left">
                    <p>React</p>
                    <p>Ruby</p>
                  </div>
                  <div className="featured-center">
                    <p>Rails</p>
                    <p>JSX</p>
                  </div>
                  <div className="featured-right">
                    <p>PostgreSQL</p>
                    <p>React Router</p>
                  </div>
                </div>
                <div className="details-btn">
                  <div className="details-btn-github">
                    <button>
                      <a
                        target="_blank"
                        href="https://github.com/DaSilvaBrunoTexas"
                      >
                        GitHub
                      </a>
                    </button>
                  </div>
                  <div className="details-btn-demo">
                    <button>
                      <a
                        target="_blank"
                        href="https://github.com/DaSilvaBrunoTexas"
                      >
                        Demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-two">
            <h1>Project Two</h1>
          </div>
          <div className="card-three">
            <h1>Project Three</h1>
          </div>
          <div className="card-four">
            <h1>Project Four</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
