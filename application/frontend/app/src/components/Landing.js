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
} from "semantic-ui-react";
import Axios from "axios";
import "../App.css";

//TODO: IMPLEMENT THE JOB SEARCH

import Search from "../components/Search";
import StudentForm from "./StudentForm";

const createProfile = () => {
    <StudentForm/>
}

const Landing = () => {
  return (
    <div>
      <Grid padded="very" centered columns="equal">
        <Grid.Column stretched>
          <Segment className="responsive">
            I'm A Student
            <Button onClick={createProfile}>Create Profile</Button>
          </Segment>
        </Grid.Column>

        <Grid.Column className="responsive">
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Segment padded="very" className="responsive">
                  I'm An Employer
                  <Button>Create Job Post</Button>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment padded="very" className="responsive">
                  I'm A Professor
                  <Button>Endorse Student</Button>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Search />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Landing;
