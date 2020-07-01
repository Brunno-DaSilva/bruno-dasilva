import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-left">
          <div className="left-content">
            <div>
              <p className="about-left-p">
                I'm a <span className="p-after">Front-End Developer</span> with
                Full-Stack exposure and <br />
                <span>
                  6 years of experience in different IT-related fields.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="right-content">
            <div>
              <p>
                I am particularly passionate about my family, well designed,
                clean coded-front-to-back- web applications, to serve poor
                communities in my spare time and to drink coffee.{" "}
              </p>

              <p>
                A perfectly accomplished day for me is when I spend some time
                with my son and wife, I learn something new, and when I
                debug/develop something awesome, all of this accompanied with a
                nice warm cup of coffee.{" "}
              </p>
              <p>
                My previous experiences as a full-time missionary and 6+ years
                in IT application support, not only reflects my passions for
                technology and care for people but taught me how to approach
                every situation and individual as unique and how to develop a
                well-organized strategy to problem solve.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
