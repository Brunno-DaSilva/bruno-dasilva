import styled from "styled-components";
import { animated } from "react-spring";

const Frame = styled("div")`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #545454;
  fill: #fca311 !important;
`;

const Title = styled("span")`
  vertical-align: middle;
  font-size: 1.7rem;
  letter-spacing: 0.3rem;
  text-transform: capitalize;
`;

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed #9e9d9d;
  overflow: hidden;
`;

const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 9,

  cursor: "pointer",
  verticalAlign: "middle",
  fill: "#fca311",
};

export { Frame, Content, toggle, Title };
