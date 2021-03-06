import React, { useRef } from "react";
import MediaQuery from "react-responsive";
const Projects = () => {
  let app = useRef(null);

  return (
    <div>
      <div className="projects-container" ref={(el) => (app = el)}>
        <div className="card-one animated fadeInLeft">
          <div className="projects-img-wrapper animated delay-1s fadeInLeft">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1581091889/imgs_starwars/imgs/Zilnai-logo2_xazqwf.png"
              alt="Project Img"
            />
          </div>
          <div className="projects-details animated delay-1s fadeInLeft">
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

              <div className="details-btn">
                <div className="details-btn-github">
                  <button aria-label="Open Bruno's GitHub Page">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Brunno-DaSilva/ReactOnRails-Hotel-Reservation"
                    >
                      GitHub
                    </a>
                  </button>
                </div>
                <div className="details-btn-demo">
                  <button aria-label="Open Bruno's Demo Project">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Brunno-DaSilva/ReactOnRails-Hotel-Reservation"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-two animated fadeInRight">
          <div className="projects-img-wrapper animated delay-1s fadeInRight">
            <img
              id="img-lg"
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1593997580/imgs_starwars/EcommerceProject/Add_a_heading_ktzhqh.png"
              alt="Project Img"
            />
          </div>
          <MediaQuery query="(max-device-width: 750px)">
            <div className="projects-img-wrapper2 animated delay-1s fadeInRight">
              <img
                src="https://res.cloudinary.com/duprwuo4j/image/upload/v1593997213/imgs_starwars/EcommerceProject/logo_qs7zvz.png"
                alt="Project Img"
              />
            </div>
          </MediaQuery>

          <div className="projects-details animated delay-1s fadeInRight">
            <div className="details-wrapper">
              <div className="details-title">
                <h1>Techfy Online Store</h1>
              </div>

              <div className="details-desc">
                <p>
                  Fully functional and interactive, this app allows users to see
                  a detailed list of products, add them to a cart, increment the
                  number of items, and buy the products utilizing PayPal.
                </p>
              </div>

              <div className="details-btn">
                <div className="details-btn-github">
                  <button aria-label="Open Bruno's GitHub Page">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Brunno-DaSilva/react-online-store-techfy"
                    >
                      GitHub
                    </a>
                  </button>
                </div>
                <div className="details-btn-demo">
                  <button aria-label="Open Bruno's Demo Project">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://online-store-techfy.herokuapp.com/home"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-three animated fadeInLeft">
          <div className="projects-img-wrapper animated delay-1s fadeInLeft">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1578630368/imgs_starwars/imgs/homepage_keiigd_mvgav0.png"
              alt="Project Img"
            />
          </div>

          <div className="projects-details">
            <div className="details-wrapper animated delay-1s fadeInLeft">
              <div className="details-title">
                <h1>Star Wars Heroes App</h1>
              </div>
              <div className="details-desc">
                <p>
                  A full-stack web application. Users can view and edit
                  information about of the most iconic Star Wars heroes.
                  Additionally, users can create, edit, and delete their own
                  characters.
                </p>
              </div>
              <div className="details-btn">
                <div className="details-btn-github">
                  <button aria-label="Open Bruno's GitHub Page">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Brunno-DaSilva/starwars-heroes-app"
                    >
                      GitHub
                    </a>
                  </button>
                </div>
                <div className="details-btn-demo">
                  <button aria-label="Open Bruno's Demo Project">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://star-wars-heroes-app.herokuapp.com/"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-four animated fadeInRight">
          <div className="projects-img-wrapper animated delay-1s fadeInRight">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1593998725/Logo/mern_logo_ef0zsr.png"
              alt="Project Img"
            />
          </div>

          <div className="projects-details animated delay-1s fadeInRight">
            <div className="details-wrapper">
              <div className="details-title">
                <h1>MERN Step-By-Step</h1>
              </div>
              <div className="details-desc">
                <p>
                  Step-by-step guide on how to build a simple MERN stack
                  application. I have built this guide to assist my students to
                  practice some core concepts of the MERN stack.
                </p>
              </div>

              <div className="details-btn">
                <div className="details-btn-github">
                  <button aria-label="Open Bruno's GitHub Page">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Brunno-DaSilva/MERN-STEP-BY-STEP"
                    >
                      GitHub
                    </a>
                  </button>
                </div>
                <div className="details-btn-demo">
                  <button aria-label="Open Bruno's Demo Project">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://todo-app-with-mern-stack.herokuapp.com/"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
