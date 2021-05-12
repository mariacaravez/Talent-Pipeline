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

import logo from "../images/Milestone-Welcome.png";

const Mission = () => {
  return (
    <div>
      <Grid columns={2} style={{ padding: "5vh" }}>
        <Grid.Column width={5} verticalAlign="middle">
        <Image centered src={logo} size="large" />
        </Grid.Column>
        <Grid.Column width={10} verticalAlign="middle">
        <Header as="h2">Your Career Begins Here!</Header>
          <p style={{fontSize: "20px"}}>
            Our talent pipeline application "Milestone", is here to help aid your journey in your career.
            Our team has dedicated their efforts to provide an application that's stress free and easy to use.
            Whether you're a college student or employer, we're here to help assist in your journey with your next Milestone!

          </p>
        </Grid.Column>

      </Grid>
    </div>
  );
};
export default Mission;
