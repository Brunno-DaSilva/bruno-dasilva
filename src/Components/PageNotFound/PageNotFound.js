import React from "react";
import { Link } from "@reach/router";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const PageNotFound = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="container-404"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card1-404"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class="card2-404"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        class="card3-404"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
    </div>
  );
};

export default PageNotFound;
