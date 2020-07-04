import React, { memo, useState } from "react";
import { useSpring, a } from "react-spring";
import { Link } from "@reach/router";
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
          <Tree name="TechFy online Store">
            <Tree name="Firebase" style={{ color: "#37ceff" }} />
            <Tree name="ReactJS" style={{ color: "#37ceff" }} />
            <Tree name="PayPall DEV Button" style={{ color: "#37ceff" }} />
            <Link to="/projects">
              <Tree name="Go to Projects" />
            </Link>
          </Tree>
          <Tree name="Star Wars Heroes">
            <Tree name="Full Stack" style={{ color: "#37ceff" }} />
            <Tree name="MongoDB" style={{ color: "#37ceff" }} />
            <Tree name="Express" style={{ color: "#37ceff" }} />
            <Tree name="ReactJS" style={{ color: "#37ceff" }} />
            <Tree name="NodeJS" style={{ color: "#37ceff" }} />
            <Link to="/projects">
              <Tree name="Go to Projects" />
            </Link>
          </Tree>
          <Tree name="Hotel Reservation">
            <Tree name="Full Stack" style={{ color: "#37ceff" }} />
            <Tree name="Ruby" style={{ color: "#37ceff" }} />
            <Tree name="Rails" style={{ color: "#37ceff" }} />
            <Tree name="ReactJS" style={{ color: "#37ceff" }} />
            <Tree name="PostgreSQL" style={{ color: "#37ceff" }} />
            <Link to="/projects">
              <Tree name="Go to Projects" />
            </Link>
          </Tree>
        </Tree>
        <Tree name="Education">
          <Tree
            style={{ fontSize: "1.4rem" }}
            name="Software Engineering Immersive, General Assembly"
          />

          <Tree
            style={{ fontSize: "1.4rem" }}
            name="AAS-Electronic Business Development, Collin College"
          />
          <Tree
            style={{ fontSize: "1.4rem" }}
            name="BSBA & Marketing, FACIPE- Brazil"
          />
        </Tree>
        <Tree name="Work Experience">
          <Tree
            style={{ fontSize: "1.3rem" }}
            name="Software Engineering Instructor Associate, General Assembly"
          >
            <Tree style={{ fontSize: "1.3rem" }} name="Feb 2020 - Current" />
          </Tree>
          <Tree
            style={{ fontSize: "1.3rem" }}
            name="SharePoint and Office365 Administrator, Tetra Pak"
          >
            <Tree style={{ fontSize: "1.3rem" }} name="May 2017 - Current" />
          </Tree>
          <Tree
            style={{ fontSize: "1.3rem" }}
            name="Data Analyst Hotel Support, Expedia"
          >
            <Tree name="Feb 2016 - May 2017" />
          </Tree>
          <Tree
            style={{ fontSize: "1.3rem" }}
            name="Subject Matter Expert Hotel Partner Support, Expedia"
          >
            <Tree style={{ fontSize: "1.3rem" }} name="Feb 2014 - Feb 2016" />
          </Tree>
        </Tree>

        {/* End of the first Tree */}

        <Tree name="Getting Personal">
          <Tree
            style={{ fontSize: "1.4rem" }}
            name="I served 2 and half years as a full-time NGO volunteer"
          />
          <Tree
            style={{ fontSize: "1.4rem" }}
            name="I love coffee, my family, coding, and soccer"
          />
          <Tree
            style={{ fontSize: "1.4rem" }}
            name="I love to travel the world, and enjoy the little things"
          />
        </Tree>
      </Tree>
    </>
  );
};

export default TreeInfo;
