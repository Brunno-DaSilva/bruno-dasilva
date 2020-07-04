import React, { memo, useState } from "react";
import { useSpring, a } from "react-spring";

import { useMeasure, usePrevious } from "./Helpers";
import { Frame, Title, Content, toggle } from "./styles";
import * as Icons from "./Icons";

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

const TreeInfo = () => {
  return (
    <>
      <Tree name="About ME 🙈🙉🙊" style={{ fontSize: "3rem" }} defaultOpen>
        <Tree name="I'm a Developer Based in Dallas, Tx" />
        <Tree name="Skills">
          <Tree name="Software">
            <Tree name="JavaScript" style={{ color: "#37ceff" }} />
            <Tree name="HTML/CSS" style={{ color: "#37ceff" }} />
            <Tree name="C#" style={{ color: "#37ceff" }} />
            <Tree name="Ruby" style={{ color: "#37ceff" }} />
            <Tree name="PHP" style={{ color: "#37ceff" }} />
          </Tree>
          <Tree name="Frameworks">
            <Tree name="React" style={{ color: "#37ceff" }} />
            <Tree name="Express" style={{ color: "#37ceff" }} />
            <Tree name=".Net" style={{ color: "#37ceff" }} />
            <Tree name="ASP .NET" style={{ color: "#37ceff" }} />
          </Tree>
          <Tree name="Database">
            <Tree name="MongoDB" style={{ color: "#37ceff" }} />
            <Tree name="SQL" style={{ color: "#37ceff" }} />
            <Tree name="MySQL" style={{ color: "#37ceff" }} />
            <Tree name="PostgreSQL" style={{ color: "#37ceff" }} />
          </Tree>
          <Tree name="Others">
            <Tree name="NodeJS" style={{ color: "#37ceff" }} />
            <Tree name="EJS, JSX, jQuery" style={{ color: "#37ceff" }} />
            <Tree name="Bootstrap, Bulma, SASS" style={{ color: "#37ceff" }} />
            <Tree
              name="Google Analytics, FireBase"
              style={{ color: "#37ceff" }}
            />
            <Tree name="Git, GitHub" style={{ color: "#37ceff" }} />
          </Tree>
        </Tree>
        <Tree name="Development Experience">
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: "#37ceff" }} />
            <Tree name="child 2" style={{ color: "#37ceff" }} />
            <Tree name="child 3" style={{ color: "#37ceff" }} />
            <Tree name="custom content">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "black",
                    borderRadius: 5,
                  }}
                >
                  Bla Bla
                </div>
              </div>
            </Tree>
          </Tree>

          <Tree name="hello" />
        </Tree>
        <Tree name="Education">
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: "#37ceff" }} />
            <Tree name="child 2" style={{ color: "#37ceff" }} />
            <Tree name="child 3" style={{ color: "#37ceff" }} />
            <Tree name="custom content">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "black",
                    borderRadius: 5,
                  }}
                >
                  Bla Bla
                </div>
              </div>
            </Tree>
          </Tree>

          <Tree name="hello" />
        </Tree>
        <Tree name="Work Experience">
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: "#37ceff" }} />
            <Tree name="child 2" style={{ color: "#37ceff" }} />
            <Tree name="child 3" style={{ color: "#37ceff" }} />
            <Tree name="custom content">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "black",
                    borderRadius: 5,
                  }}
                >
                  Bla Bla
                </div>
              </div>
            </Tree>
          </Tree>

          <Tree name="hello" />
        </Tree>

        {/* End of the first Tree */}
        <Tree name={<span>🙀 something something</span>} />
      </Tree>
    </>
  );
};

export default TreeInfo;
