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
  Icon,
  List,
  Divider,
  Item,
  Feed,
} from "semantic-ui-react";
import "../App.css";
import headhunterImage from "../images/jooyoung-cropped.jpg";
import JobPosting from "../components/JobPostingForm";
import EditJobPost from "../components/EditJobPost";
import studentImage from "../images/maria-cropped.jpg";

const HeadhunterDashboard = () => {
  const employer = {
    color: "white",
    backgroundColor: "#87AFA6",
  };

  // const [jobPostings, setJobPostings] = useState([]);

  const [openCreateJob, setOpenCreateJob] = useState(false);
  const [openJob, setOpenJob] = useState(false);

  const title = "Front End Programmer";
  const company = "Milestone Inc.";
  const type = "Internship";
  const matches = 3;

  const student = {
    name: "Maria Caravez",
    about: "I want to become a front end developer.",
    major: "Computer Science",
  };

  // const getJobPostings = () => {
  //   Axios.get("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/jobPostings", {
  //     params: { textValue: textValue, optionsValue: optionsValue },
  //   }).then((response) => {
  //     console.log(response.data);
  //     console.log(textValue);
  //     setJobPostings(response.data);
  //   });
  // };

  const goToProfile = () => {
    console.log("DISPLAY PROFILE");
  };

  const createMessage = () => {
    console.log("CREATING A MESSAGE");
  };
  return (
    <div className="dashboard">
      <Container fluid className="responsive">
        <Grid columns={2} stackable>
          <Grid.Column width={3} stretched>
            <Card centered>
              <Image src={headhunterImage} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Headhunter Name</Card.Header>
                <Card.Meta>{company}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment textAlign="center" padded="very">
              <Label attached="top" size="massive" style={employer}>
                Your Job Postings
              </Label>
              <Modal
                dimmer="inverted"
                onClose={() => setOpenJob(false)}
                onOpen={() => setOpenJob(true)}
                open={openJob}
                trigger={
                  // <Card.Group centered itemsPerRow={4}>
                  //  {jobPostings.map((val, key) => {
                  //   return (
                  //     <Card>
                  //       <Label corner="right" icon="edit" />
                  //       <Card.Content textAlign="left">
                  //         <Card.Header>
                  //           {jobPost.title}
                  //         </Card.Header>
                  //         <Card.Meta>{jobPost.type}</Card.Meta>
                  //       </Card.Content>
                  //     </Card>
                  //   );
                  // })}
                  // </Card.Group>
                  <Card overflow="hidden">
                    <Label corner="right">
                      <Icon name="edit" />
                    </Label>
                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                      <Card.Meta>{type}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon style={{ hover: "#A73349" }} name="users" />
                      <a>{matches} Students Matched</a>
                    </Card.Content>
                  </Card>
                }
                className="responsive"
                size="massive"
              >
                <Segment>
                  <Grid columns={2} widths="equal" stackable padded="very">
                    <Divider vertical></Divider>
                    <Grid.Row>
                      <Grid.Column>
                        <Segment>
                          <Label attached="top" size="large" style={employer}>
                            Edit Job Post
                          </Label>
                          <EditJobPost />
                        </Segment>
                      </Grid.Column>
                      <Grid.Column stretched centered>
                        <Segment padded="very">
                          <Label
                            style={employer}
                            attached="top"
                            size="large"
                            verticalAlign="middle"
                          >
                            <Label
                              horizontal
                              circular
                              style={{
                                color: "white",
                                backgroundColor: "#E06F41",
                              }}
                            >
                              {matches}
                            </Label>
                            Students Matched
                          </Label>
                          <Feed divided>
                            <Feed.Event>
                              <Feed.Label image={studentImage}/>
                              <Feed.Content >
                                <Feed.Summary>
                                  <a onClick={goToProfile}>{student.name}</a> - <u>{student.major}</u>
                                </Feed.Summary>
                              </Feed.Content>
                              <Button icon size="mini" onClick={createMessage}><Icon name="mail"/> </Button>
                            </Feed.Event>
                          </Feed>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                {/* <JobPosting/> */}
              </Modal>
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
