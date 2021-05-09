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

import StudentForm from "../components/Register/StudentForm";
import SearchJobs from "../components/SearchJobs";
import JobPosting from "../components/Register/JobPostingForm";
import EndorsementForm from "../components/Register/EndorsementForm";
import LandingSearchStudent from "../components/LandingSearchStudent";

//Styling

const segment = { paddingTop: "12vh", paddingBottom: "12vh", borderRadius: "15px" };

const Landing = () => {

  const [openRegister, setOpenRegister] = useState(false);
  const [openCreateJob, setOpenCreateJob] = useState(false);
  const [openEndorse, setOpenEndorse] = useState(false);

  return (
    <div className="landing">
     
      <Container fluid >
      
        <Grid
          // verticalAlign="middle"
          padded
          // centered
          columns={3}
          // columns="equal"
          stackable
          // stretched
        >

          
          <Grid.Column width={6} stretched>
            <Segment
               padded="very"
              className="responsive"
              style={segment}
              
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
                    
                  <StudentForm />
                  <Modal.Actions className='responsive'>
                    <Button size='tiny' onClick={() => setOpenRegister(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
              <div style={{ paddingTop: "10vh" }}>
                <Header as="h4" textAlign="center" style={{color: "#696969"}}>Search For Jobs/Internships</Header>
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
                    style={segment}
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
                    style={segment}
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
