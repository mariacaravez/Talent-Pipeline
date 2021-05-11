import React from "react";
import {
  Grid,
  Image,
  Segment,
  List,
  Container,
  Menu,
  Header,
  Card,
  Label,
  Tab,
} from "semantic-ui-react";

import Mission from "../components/Mission";
import OurTeam from "../components/OurTeam";

const panes = [
  {
    menuItem: "Mission",
    render: () => (
      <Tab.Pane attached={false} style={{ backgroundColor: "#FBD9B0"}}>
        <Mission />
      </Tab.Pane>

    ),
  },
  {
    menuItem: "Our Team",
    render: () => (
      <Tab.Pane attached={false} >
        <OurTeam />
      </Tab.Pane>
    ),
  },
];

const About = () => {
  return (
    <div style={{ padding: "8vh" }}>
      <Tab menu={{ color: "#E0B09D", secondary: true}} panes={panes} />
    </div>
  );
};

export default About;
