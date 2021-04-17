import React from "react";
import { useState } from "react";
import {
  Card,
  Grid,
  Container,
  Segment,
  Label,
  Button,
  Modal,
  Image,
  Header,
} from "semantic-ui-react";
import "../App.css";
import jooyoung from "../images/jooyoung-cropped.jpg";
import JobPosting from "../components/JobPostingForm";
import EditJobPost from "../components/EditJobPost";

const HeadhunterDashboard = () => {
  const [openCreateJob, setOpenCreateJob] = useState(false);
  const [openJob, setOpenJob] = useState(false);

  const title="Front End Programmer";
  const company ="Milestone"
  const type = "Internship"

  return (
    <div className="dashboard">
      <Container fluid className="responsive">
        <Grid columns={2} stackable stretched>
          <Grid.Column width={2} className="responsive">
            <Card centered>
              <Image src={jooyoung} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Headhunter Name</Card.Header>
                <Card.Meta>{company}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={10} stretched>
            <Segment textAlign="center" padded="very">
              <Label
                attached="top"
                size="massive"
                style={{ color: "white", backgroundColor: "#87AFA6" }}
              >
                Your Job Postings
              </Label>
              <Modal
                dimmer="inverted"
                onClose={() => setOpenJob(false)}
                onOpen={() => setOpenJob(true)}
                open={openJob}
                trigger={
                  <Card>
                    <Label
                      corner="right"
                      icon="edit"
                      />
                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                      <Card.Meta>{type}</Card.Meta>
                    </Card.Content>
                  </Card>
                }
                className="responsive"
                size="mini"
              >
                <EditJobPost />
                {/* <JobPosting/> */}
              </Modal>
              <Card.Group centered itemsPerRow={4}>
   
              </Card.Group>
            </Segment>

            <Segment placeholder padded="very" className="responsive">
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
                <JobPosting />
                <Modal.Actions className="responsive">
                  <Button
                    size="tiny"
                    basic
                    onClick={() => setOpenCreateJob(false)}
                  >
                    Cancel
                  </Button>
                </Modal.Actions>
              </Modal>{" "}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default HeadhunterDashboard;
