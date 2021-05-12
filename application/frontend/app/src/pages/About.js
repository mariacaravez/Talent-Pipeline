import React from "react";
import { Fragment } from "react";
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
    <Fragment>
      <Tab style={{padding: "10vh"}} menu={{ color: "#E0B09D", secondary: true}} panes={panes} />
    </Fragment>
  );
};

export default About;
