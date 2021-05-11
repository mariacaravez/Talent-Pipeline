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
  Header,
  Modal,
} from "semantic-ui-react";
import Axios from "axios";
import "../App.css";

import StudentForm from "./Forms/StudentForm";
import SearchJobs from "../components/SearchJobs";
import JobPosting from "./Forms/JobPostingForm";
import EndorsementForm from "./Forms/EndorsementForm";
import LandingSearchStudent from "../components/LandingSearchStudent";

//Styling
const segment = {
  paddingTop: "20%",
  paddingBottom: "20%",
  borderRadius: "15px",
};

const Landing = () => {
  const [openCreateProfile, setOpenCreateProfile] = useState(false);
  const [openCreateJob, setOpenCreateJob] = useState(false);
  const [openEndorse, setOpenEndorse] = useState(false);

  const handleProfileCallback = (modal) => {
    setOpenCreateProfile(modal);
}

const handleJobCallback = (modal) => {
  setOpenCreateJob(modal);
}

const handleOpenCallback = (modal) => {
  setOpenEndorse(modal);
}
  return (
    <div
      className="landing"
      style={{ padding:"10%"}}
    >
      <Container fluid>
        <Grid
          padded
          columns={3}
          stackable
        >
          <Grid.Column width={6} stretched>
            <Segment stackable textAlign="center" style={segment}>
              <Header size="huge">I'm A Student</Header>
              <Modal
                basic
                dimmer="inverted"
                onClose={() => setOpenCreateProfile(false)}
                onOpen={() => setOpenCreateProfile(true)}
                open={openCreateProfile}
                trigger={
                  <Button
                    style={{ color: "white", backgroundColor: "#A73349" }}
                  >
                    Create Profile
                  </Button>
                }
                size="tiny"
                className="responsive"
              >
                <StudentForm dataCallback={handleProfileCallback}/>
                {/* <Modal.Actions className="responsive">
                  <Button
                    color="black"
                    size="tiny"
                    onClick={() => setOpenRegister(false)}
                  >
                    Cancel
                  </Button>
                </Modal.Actions> */}
              </Modal>
              <div style={{ paddingTop: "10vh" }}>
                <Header as="h4" textAlign="center" style={{ color: "#696969" }}>
                  Search For Jobs/Internships
                </Header>
                <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
                  <SearchJobs />
                </div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column stretched width={10}>
            {/* verticalAlign="middle" */}
            <Grid stretched columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <Segment className="responsive" style={segment}>
                    <Header centered size="huge">
                      I'm An Employer
                    </Header>
                    <Modal
                      basic
                      dimmer="inverted"
                      onClose={() => setOpenCreateJob(false)}
                      onOpen={() => setOpenCreateJob(true)}
                      open={openCreateJob}
                      trigger={
                        <Button
                          style={{ color: "white", backgroundColor: "#87AFA6" }}
                        >
                          Create Job Post
                        </Button>
                      }
                      size="tiny"
                      className="responsive"
                    >
                      <JobPosting dataCallback={handleJobCallback}/>
                      {/* <Modal.Actions className="responsive">
                        <Button
                          color="black"
                          size="tiny"
                          onClick={() => setOpenCreateJob(false)}
                        >
                          Cancel
                        </Button>
                      </Modal.Actions> */}
                    </Modal>
                  </Segment>
                </Grid.Column>
                <Grid.Column stretched>
                  <Segment className="responsive" style={segment}>
                    <Header className="responsive" size="huge">
                      I'm A Professor
                    </Header>
                    <Modal
                      basic
                      dimmer="inverted"
                      onClose={() => setOpenEndorse(false)}
                      onOpen={() => setOpenEndorse(true)}
                      open={openEndorse}
                      trigger={
                        <Button
                          style={{ color: "white", backgroundColor: "#16698A" }}
                        >
                          Endorse Student
                        </Button>
                      }
                      size="tiny"
                      className="responsive"
                    >
                      <EndorsementForm />
                      {/* <Modal.Actions className="responsive">
                        <Button
                          color="black"
                          size="tiny"
                          onClick={() => setOpenEndorse(false)}
                        >
                          Cancel
                        </Button>
                      </Modal.Actions> */}
                    </Modal>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column stretched>
                  <LandingSearchStudent />
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
