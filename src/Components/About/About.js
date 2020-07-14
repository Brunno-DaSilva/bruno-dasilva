import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import TreeInfo from "./TreeInfo";

const aboutText = [
  {
    id: 0,
    text: (
      <>
        <p className="about-left-p">
          I'm a <span className="p-after-fe">Front-End Developer</span>
          with{" "}
          <span className="p-after-be">
            Full-Stack <span id="expo">exposure</span>
          </span>
          <span>and 6 years of experience in different IT-related fields.</span>
        </p>
      </>
    ),
  },
  {
    id: 1,
    text: (
      <p className="about-left-p-2">
        After graduating with an <br />
        <span className="p-after-fe-2">AAS in Web Development</span> I completed
        a 500 + hour full-stack Software Engineering coding boot camp at{" "}
        <span className="p-after-be-2">General Assembly </span>
      </p>
    ),
  },
  {
    id: 2,
    text: (
      <p className="about-left-p-3">
        Now, I'm working at General Assembly as <br />
        <span className="p-after-fe-3">Instructor Associate</span> for the
        Software Engineering Immersive (SEI) Courses. <br />
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
    () => void setInterval(() => set((state) => (state + 1) % 3), 7000),
    []
  );

  return (
    <div className="about-container">
      <div className="about-left animated delay-1s fadeInLeft">
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
        <div className="right-content">
          <TreeInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
