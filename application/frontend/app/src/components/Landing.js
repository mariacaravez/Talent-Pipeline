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


//TODO: IMPLEMENT THE JOB SEARCH

import Search from "../components/Search";
import Register from "../pages/Register";
import SearchJobs from "../components/SearchJobs";
import JobPosting from "./JobPostingForm";
import EndorsementForm from "./EndorsementForm";

import StudentForm from "../components/StudentForm";
import NewSearchStudent from "../components/NewSearchStudent";

const Landing = () => {

  const [openRegister, setOpenRegister] = useState(false);
  const [openCreateJob, setOpenCreateJob] = useState(false);
  const [openEndorse, setOpenEndorse] = useState(false);

  return (
    <div className="landing">
     
      <Container fluid>
      
        <Grid
          // verticalAlign="middle"
          padded
          // centered
          columns={3}
          // columns="equal"
          stackable
          // stretched
        >

          
          <Grid.Column width={6}>
            <Segment
              // padded="very"
              className="responsive"
              style={{ paddingTop: "18vh", paddingBottom: "20vh" }}
              
            >
              <Header size="huge">I'm A Student</Header>
              <Modal
                    basic
                    dimmer='inverted'
                    onClose={() => setOpenRegister(false)}
                    onOpen={() => setOpenRegister(true)}
                    open={openRegister}
                    trigger={<Button  style={{color: 'white', backgroundColor: '#A73349'}}>Create Profile</Button>}
                    size='tiny'
                    className='responsive'
                  >
                    
                  <Register />
                  <Modal.Actions className='responsive'>
                    <Button size='tiny' basic onClick={() => setOpenRegister(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
              <div style={{ paddingTop: "5vh" }}>
                <SearchJobs />
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column stretched width={10}>
            {/* verticalAlign="middle" */}
            <Grid stretched columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <Segment
                    className="responsive"
                    style={{ paddingTop: "12vh", paddingBottom: "12vh" }}
                  >
                    <Header centered size="huge">
                      I'm An Employer
                    </Header>
                    <Modal
                    basic
                    dimmer='inverted'
                    onClose={() => setOpenCreateJob(false)}
                    onOpen={() => setOpenCreateJob(true)}
                    open={openCreateJob}
                    trigger={<Button  style={{color: 'white', backgroundColor: '#87AFA6'}}>Create Job Post</Button>}
                    size='tiny'
                    className='responsive'
                  >
                    
                  <JobPosting />
                  <Modal.Actions className='responsive'>
                    <Button size='tiny' basic onClick={() => setOpenCreateJob(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
                  </Segment>
                </Grid.Column>
                <Grid.Column stretched>
                  <Segment
                    className="responsive"
                    style={{ paddingTop: "12vh", paddingBottom: "12vh" }}
                  >
                    <Header className="responsive" size="huge">
                      I'm A Professor
                    </Header>
                    <Modal
                    basic
                    dimmer='inverted'
                    onClose={() => setOpenEndorse(false)}
                    onOpen={() => setOpenEndorse(true)}
                    open={openEndorse}
                    trigger={<Button  style={{color: 'white', backgroundColor: '#16698A'}}>Endorse Student</Button>}
                    size='tiny'
                    className='responsive'
                  >
                    
                  <EndorsementForm />
                  <Modal.Actions className='responsive'>
                    <Button size='tiny' basic onClick={() => setOpenEndorse(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column stretched>
                  <NewSearchStudent />
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
