import React from "react";
import { useState } from "react";
import {
  Dropdown,
  Input,
  Button,
  Card,
  Container,
  Image,
  Grid,
  Segment,
  Label,
  Header
} from "semantic-ui-react";
import Axios from "axios";
import "../App.css";

//TODO: IMPLEMENT THE JOB SEARCH

import Search from "../components/Search";

const Landing = () => {
  return (
    <div className="landing">
    <Container>
      <Grid verticalAlign='middle' padded='very' centered columns='equal' stackable stretched>
        <Grid.Column stretched width={6}>
          <Segment padded="very" className="responsive" style={{paddingTop: '18vh', paddingBottom: '20vh'}}>
          <Header size='huge'>
            I'm A Student
          </Header>
            <Button>Create Profile</Button>
          </Segment>
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Grid verticalAlign='middle' padded='very' centered columns='equal'>
          <Grid.Row stretched>
            <Grid.Column>
            <Segment padded="very" className="responsive" style={{paddingTop: '12vh', paddingBottom: '12vh'}}>
              <Header size='huge'>
                I'm An Employer
              </Header>
                <Button>Create Job Post</Button>
              </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment padded="very" className="responsive" style={{paddingTop: '12vh', paddingBottom: '12vh'}}>
              <Header size='huge'>
                I'm A Professor
              </Header>
                <Button>Endorse Student</Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column>
                 <Search />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
    </div>
  );
};

export default Landing;
