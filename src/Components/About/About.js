import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const aboutText = [
  {
    id: 0,
    text: (
      <p className="about-left-p">
        I'm a <span className="p-after-fe">Front-End Developer</span>
        with{" "}
        <span className="p-after-be">
          Full-Stack <span id="expo">exposure</span>
        </span>
        <span>and 6 years of experience in different IT-related fields.</span>
      </p>
    ),
  },
  {
    id: 1,
    text: (
      <p className="about-left-p-2">
        After graduating with an <br />
        <span className="p-after-fe-2">AAS in Web Development</span> I completed
        a 500 + hour full-stack Software Engineering coding boot camp at <br />
        <span className="p-after-be-2">
          General Assembly{" "}
          <a
            target="_blank"
            href="https://profiles.generalassemb.ly/bruno-dasilva"
          >
            <FontAwesomeIcon icon={faCode} size="1x"></FontAwesomeIcon>
          </a>
        </span>
      </p>
    ),
  },
];

const About = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(aboutText[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: config.molasses,
  });

  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 2), 5000),
    []
  );

  return (
    <div className="about-container">
      <div className="about-left">
        <div className="left-content">
          <div className="aboutText">
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} class="bg" style={{ ...props }}>
                <div>{item.text}</div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="right-content"></div>
      </div>
    </div>
  );
};

export default About;
