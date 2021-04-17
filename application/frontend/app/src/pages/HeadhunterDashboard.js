import React from "react";
import { useState } from "react";
import { Card, Grid, Container, Segment, Label, Button, Modal } from "semantic-ui-react";
import "../App.css";

import JobPosting from "../components/JobPostingForm";


const HeadhunterDashboard = () => {
  const [openCreateJob, setOpenCreateJob] = useState(false);

  return (
    <div className="dashboard">
      <Container fluid className="responsive">
        <Grid columns={2} stackable stretched>
          <Grid.Column width={2} className="responsive">
            <Card centered>
              <Card.Content>
                <Card.Header>Headhunter Name</Card.Header>
                <Card.Meta>Headhunter.Company</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={10} stretched>
<Card.Group centered>
<Card as="a">
<Label as="a" corner="right" icon={{name: "edit"}}></Label>
  <Card.Content>
    <Card.Header>Job Posting 1</Card.Header>
    <Card.Meta>Job Type</Card.Meta>
  </Card.Content>
</Card>
<Card as="a">
<Label as="a" corner="right" icon={{name: "edit"}}></Label>
  <Card.Content>
    <Card.Header>Job Posting 2</Card.Header>
    <Card.Meta>Job Type</Card.Meta>
  </Card.Content>
</Card>
<Card as="a">
<Label as="a" corner="right" icon={{name: "edit"}}></Label>
  <Card.Content>
    <Card.Header>Job Posting 3</Card.Header>
    <Card.Meta>Job Type</Card.Meta>
  </Card.Content>
</Card>
<Card as="a">
<Label as="a" corner="right" icon={{name: "edit"}}></Label>
  <Card.Content>
    <Card.Header>Job Posting 4</Card.Header>
    <Card.Meta>Job Type</Card.Meta>
  </Card.Content>
</Card>
</Card.Group>
            <Segment placeholder padded="very" className="responsive">
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
                </Modal>            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default HeadhunterDashboard;
