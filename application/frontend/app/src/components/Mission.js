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
        <Header as="h3">Your Career Begins Here!</Header>
          <p>
            Our talent pipeline application Milestone, is designed for both the
            passive and active users. We understand the complexities of the
            college student and are eager to provide a platform that is
            proactively matching students to employers. Our application’s design
            is simple, which allows quick access and easy flow of navigation. We
            understand that equal opportunity is important in the workforce,
            which is why we have allowed users to share their demographic
            information to satisfy diversity in all industries. We’re committed
            to establishing a product that will encourage users to showcase
            their various and unique skills.
          </p>
        </Grid.Column>

      </Grid>
    </div>
  );
};
export default Mission;
