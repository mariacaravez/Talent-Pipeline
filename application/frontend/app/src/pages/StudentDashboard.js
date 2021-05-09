import React from "react";
import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { useParams } from "react-router-dom";
import Axios from "axios";

import {
  Grid,
  Image,
  Segment,
  Label,
  Icon,
  Card,
  List,
  Container,
  Rating,
  Form,
  Modal,
  Input,
  Header,
  Button,
} from "semantic-ui-react";
import "../App.css";

import RateRequest from "../components/RateRequest";

import bera from "../images/bera.jpg";

const StudentDashboard = () => {
  let { id } = useParams()

  const studentStyle = {
    color: "white",
    backgroundColor: "#9c88b3",
  };

  const [openAbout, setOpenAbout] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  const [course, setCourse] = useState("");
  const [courseWork, setCourseWork] = useState("");

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");

  const [experience, setExperience] = useState("");
  const [workExperience, setWorkExperience] = useState("");

  const createOption = label => ({
    label,
    value: label
  })
  const work = "Work 1";

  const about = "This is the description of about me.";
  const skillsObj = "Skill 1, Skill 2, Skill 3";

  const student = {
    firstName: "Bera",
    middleName: "Hasan",
    lastName: "Coskun",
    major: "Computer Science",
    academicStanding: "Junior",
  };

  useEffect(() => {
    // http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/student/profile
    Axios.get("http://localhost:6480/student/profile", {
      params: { userID: id }
    }).then((response) => {
      console.log("Server Responded With: " + response.data);
      //console.log(response.body.user.firstName);
    })
    
  }, []);

  const postMedia = () => {
    console.log("Media Posted");
  };
  const handleChange = (field, value) => {
    switch (field) {
      case "skills":
        setSkills(value);
        break;
      case "experience":
        setWorkExperience(value);
        break;
    }
  }

  const handleInputChange = (field, value) => {
    switch (field) {
      case "skills":
        setSkill(value);
        break;
      case "experience":
        setExperience(value);
        break;
    }
  }
  const addWork = (e) => {
    if (!experience) return;

    switch (e.key) {
      case 'Enter':
      case 'Tab':
        setWorkExperience([...workExperience, createOption(experience)])
        setExperience("");
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const addSkill = (e) => {
    if (!skill) return;

    switch (e.key) {
      case 'Enter':
      case 'Tab':
        setSkills([...skills, createOption(skill)])
        setSkill("");
        e.preventDefault();
        break;
      default:
        break;
    }
  };


  return (
    <div className="dashboard">
      <p>This is the id: {id}</p>
      <Container fluid className="responsive">
        <Grid centered columns={3} stackable>
          <Grid.Column stretched width={3} className="responsive">
            <Card centered>
              <Image src={bera} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {student.firstName} {student.middleName} {student.lastName}
                </Card.Header>
                <Card.Meta>{student.major}</Card.Meta>
                <Card.Description>{student.graduationDate}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="graduation cap" />
                {student.academicStanding}
              </Card.Content>
            </Card>

            <Grid.Row>
              <Segment size="big" padded="very" textAlign="center">
                <Label style={studentStyle} size="huge" attached="top">
                  Coursework
                </Label>
                <List size="large" divided className="responsive">
                  <List.Item>
                    <a>
                      Course 1 <Rating default={0} maxRating={5} disabled />
                    </a>
                  </List.Item>
                  <List.Item>
                    <a>
                      Course 2 <Rating default={0} maxRating={5} disabled />
                    </a>
                  </List.Item>
                  <List.Item>
                    <a>
                      Course 3 <Rating default={0} maxRating={5} disabled />
                    </a>
                  </List.Item>
                </List>
                <Modal
                  basic
                  dimmer="inverted"
                  onClose={() => setOpenRequest(false)}
                  onOpen={() => setOpenRequest(true)}
                  open={openRequest}
                  trigger={
                    <Button style={{ backgroundColor: "#FBBE74" }}>
                      Request Rating
                    </Button>
                  }
                  className="responsive"
                  size="mini"
                >
                  <RateRequest />
                  <Modal.Actions className="responsive">
                    <Button
                      size="tiny"
                      basic
                      onClick={() => setOpenRequest(false)}
                    >
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Segment>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment padded="very">
              <Label attached="top" style={studentStyle} size="huge">
                About Me
              </Label>
              <Segment padded="very">
                {about}
                <Modal
                  basic
                  dimmer="inverted"
                  onClose={() => setOpenAbout(false)}
                  onOpen={() => setOpenAbout(true)}
                  open={openAbout}
                  trigger={<Label as="a" corner="right" icon="edit"></Label>}
                  size="tiny"
                  className="responsive"
                >
                  <Segment>
                    <Form>
                      <Form.TextArea defaultValue={about}></Form.TextArea>
                    </Form>
                  </Segment>
                </Modal>
              </Segment>
            </Segment>

            <Grid columns={2} widths="equal" stretched>
              <Grid.Column stretched>
                <Segment padded="very">
                  <Label style={studentStyle} size="huge" attached="top">
                    skillsObj
                  </Label>
                  <Segment padded="very">
                    <Label as="a" corner="right" icon="edit"></Label>
                    {skillsObj}
                    <Modal
                      basic
                      dimmer="inverted"
                      onClose={() => setOpenSkills(false)}
                      onOpen={() => setOpenSkills(true)}
                      open={openSkills}
                      trigger={
                        <Label as="a" corner="right" icon="edit"></Label>
                      }
                      size="tiny"
                      className="responsive"
                    >
                      <Segment>
                        <Form>
                          <Form.TextArea defaultValue={skillsObj}></Form.TextArea>
                        </Form>
                      </Segment>
                    </Modal>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column stretched>
                <Segment padded="very">
                  <Label style={studentStyle} size="huge" attached="top">
                    Work Experience
                  </Label>
                  <Segment padded="very">
                    <Label as="a" corner="right" icon="edit"></Label>
                    {work}
                    <Modal
                      basic
                      dimmer="inverted"
                      onClose={() => setOpenWork(false)}
                      onOpen={() => setOpenWork(true)}
                      open={openWork}
                      trigger={
                        <Label as="a" corner="right" icon="edit"></Label>
                      }
                      size="tiny"
                      className="responsive"
                    >
                      <Segment>
                        <Form>
                          <CreatableSelect
                            isClearable
                            isMulti
                            components={{ DropdownIndicator: null }}
                            inputValue={workExperience}
                            menuIsOpen={false}
                            onChange={(value) => handleChange("experience", value)}
                            placeholder="Physics II, Calculus I . . ."
                            onKeyDown={addWork}
                            onInputChange={(value) =>
                              handleInputChange("experience", value)
                            }
                            value={workExperience}
                          />
                        </Form>
                      </Segment>
                    </Modal>
                  </Segment>
                </Segment>
              </Grid.Column>
            </Grid>
            <Segment padded="very" style={{ textAlign: "center" }}>
              <Modal
                basic
                dimmer="inverted"
                onClose={() => setOpenMedia(false)}
                onOpen={() => setOpenMedia(true)}
                open={openMedia}
                trigger={
                  <Button style={{ backgroundColor: "#FBBE74" }}>Upload</Button>
                }
                size="tiny"
                className="responsive"
              >
                <Segment padded="very">
                  <Header textAlign="center" as="h1">
                    Upload Media
                  </Header>
                  <Form onSubmit={postMedia}>
                    <Form.Input required label="Title" />
                    <Form.Group verticalAlign="middle" inline widths="equal">
                      <label className="custom-file-upload">
                        Choose File
                        <Input type="file" accept="video/* pdf" />
                      </label>
                      <Header.Content>
                        upload videos, portfolios, pdfs
                      </Header.Content>
                    </Form.Group>
                    <Form.Field className="responsive">
                      <Button
                        style={{ backgroundColor: "#FBBE74" }}
                        type="submit"
                      >
                        Post
                      </Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Modal>

              <Header>Upload media to have it display here!</Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2} stretched>
            <Segment padded="very">
              <Label style={studentStyle} size="huge" attached="top">
                Job Applications
              </Label>
              <List size="massive" divided className="responsive">
                <List.Item>
                  <a>Job 1</a>
                </List.Item>
                <List.Item>
                  <a>Job 2</a>
                </List.Item>
                <List.Item>
                  <a>Job 3</a>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default StudentDashboard;
