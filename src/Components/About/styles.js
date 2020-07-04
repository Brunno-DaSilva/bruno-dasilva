import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

const Frame = styled("div")`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: white;
  fill: white;
`;

const Title = styled("span")`
  vertical-align: middle;
`;

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;

const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle",
};

export { Frame, Content, toggle, Title };
