import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import "./home-CSS/home-style.css";
import "../../index.css";
import logo from "./images/blogo-gray.png";

function Home() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <>
      <section className="section-container ">
        <animated.div
          id="divID"
          {...bind()}
          style={{
            transform: xy.interpolate(
              (x, y) => `translate3d(${x}px, ${y}px, 0)`
            ),
          }}
        >
          <img
            src={logo}
            alt="Bruno DaSilva"
            className=" animated delay-1s fadeInUp"
          />
          <p
            aria-label="On Hover draggable element"
            className="home-logo-p animated delay-2s fadeInUp"
            title="Animation Drag it around the app"
          >
            Front-end Development
          </p>
        </animated.div>
      </section>
    </>
  );
}

export default Home;
