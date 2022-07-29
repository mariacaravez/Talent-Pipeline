import React from "react";
import { useState, useEffect, Fragment } from "react";
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
  Dropdown,
} from "semantic-ui-react";
import "../App.css";

import RateRequest from "../components/RateRequest";

import bera from "../images/placeholderImage.png";

// Styles

const segment = {
  paddingTop: "5%",
  borderRadius: "10px",
};

const studentStyle = {
  color: "white",
  backgroundColor: "#87AFA6",
  // borderRadius: "10px 10px 0 0",
};

const container = {
  padding: "5%",
  backgroundColor: "#fafafa",
  borderRadius: "15px",
};


// Academic Standing
const year = [
  { key: 1, text: "Freshman", value: "freshman" },
  { key: 2, text: "Sophomore", value: "sophomore" },
  { key: 3, text: "Junior", value: "junior" },
  { key: 4, text: "Senior", value: "senior" },
];
// Veteran
const branches = [
  { key: 1, text: "Army", value: "army" },
  { key: 2, text: "Navy", value: "navy" },
  { key: 3, text: "Marine Corps", value: "marines" },
  { key: 4, text: "Air Force", value: "air-force" },
  { key: 5, text: "Coast Guard", value: "coast-guard" },
  { key: 6, text: "Space Force", value: "space" },
];
// Race
const races = [
  { key: 1, text: "White", value: "white" },
  { key: 2, text: "White Non-Hispanic", value: "w-non" },
  { key: 3, text: "Hispanic or Latinx", value: "latinx" },
  { key: 4, text: "Black or African American", value: "black" },
  { key: 5, text: "American Indian or Alaska Native", value: "native" },
  { key: 6, text: "Asian", value: "asian" },
  { key: 7, text: "Native Hawaiian or Pacific Islander", value: "nh-pi" },
  { key: 8, text: "Two or More Races", value: "multi" },
  { key: 9, text: "", value: "multi" },
];

const StudentDashboard = () => {
  let { id } = useParams();

  const [openAbout, setOpenAbout] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  const [openDemographics, setOpenDemographics] = useState(false);

  // Student Information
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("");
  const [gradDate, setGradDate] = useState("");
  const [major, setMajor] = useState("");
  const [academicStanding, setAcademicStanding] = useState("");
  // courseWork contains an array of all courseWork objects formatted as {corseworkRating, coursework, studentCwId, userID}
  const [courseWork, setCourseWork] = useState([]);
  const [aboutMe, setAboutMe] = useState(null);

  // Demographics
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");

  // Veteran Status
  const [veteran, setVeteran] = useState(null);
  const [militaryCode, setMilitaryCode] = useState(null);

  // Resume Information
  const [about, setAbout] = useState("");
  const [skill, setSkill] = useState("");
  // skills contains an array of all skill objects formatted as {studentSkillID, userID, userSkill, userSkillRating}
  const [skills, setSkills] = useState([]);
  // workExperience contains an array of all work experiences formatted as {workExpTitle, workExpDesc}
  const [workExperience, setWorkExperience] = useState([]);


  const createOption = (label) => ({
    label,
    value: label,
  });
  // const work = "Work 1";

  // const about = "This is the description of about me.";
  // const skillsObj = "Skill 1, Skill 2, Skill 3";

  useEffect(() => {
    // http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/student/profile
    // http://localhost:6480/student/profile
    Axios.get("http://localhost:6480/student/profile", {
      params: { userID: id },
    }).then((response) => {
      console.log("Server Responded With: ", response.data);
      // from user table: 
      setFirstName(response.data.user[0].firstName);
      setMiddleName(response.data.user[0].middleName);
      setLastName(response.data.user[0].lastName);
      // from userAttributes table: 
      setGradDate(response.data.userAttributes[0].gradDate);
      setAcademicStanding(response.data.userAttributes[0].academicStanding);
      setMajor(response.data.userAttributes[0].major);
      setAboutMe(response.data.userAttributes[0].aboutMe);
      // from studentCoursework table:
      setCourseWork(response.data.studentCoursework);
      // from studentSkills table:
      setSkills(response.data.studentSkills);
      // from studentDemo table:
      setGender(response.data.studentDemo[0].gender);
      setAge(response.data.studentDemo[0].age);
      setRace(response.data.studentDemo[0].race);
      setEthnicity(response.data.studentDemo[0].ethnicity);
      setVeteran(response.data.studentDemo[0].veteran);
      setMilitaryCode(response.data.studentDemo[0].militaryCode);
      // from studentWorkExp table:
      setWorkExperience(response.data.studentWorkExp);
    });
  }, []);

  // const submitSearch = () => {
  //   Axios.get("http://localhost:6480/student/profile", {
  //     params: { userID: id },
  //   }).then((response) => {
  //     console.log("Server Responded With: ", response);
  //   });
  // }

  const postMedia = () => {
    console.log("Media Posted");
  };
  // const handleChange = (field, value) => {
  //   switch (field) {
  //     case "skills":
  //       setSkills(value);
  //       break;
  //   };
  // };

  // const handleInputChange = (field, value) => {
  //   switch (field) {
  //     case "skills":
  //       setSkill(value);
  //       break;

  //   }
  // };

  // const addSkill = (e) => {
  //   if (!skill) return;

  //   switch (e.key) {
  //     case "Enter":
  //     case "Tab":
  //       setSkills([...skills, createOption(skill)]);
  //       setSkill("");
  //       e.preventDefault();
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const handleWork = (e) => {
    const values = [...workExperience];
    // values[index][e.target.name] = e.target.value;
    // setWorkExperience(values);
  };

  const removeWork = (index) => {
    const values = [...workExperience];
    values.splice(index, 1);
    setWorkExperience(values);
  };

  const addWork = () => {
    setWorkExperience([
      ...workExperience,
      { title: "", description: "" },
    ]);
  };

  return (
    <div className="dashboard">
      {/* <p>This is the id: {id}</p> */}
      <Container fluid className="responsive">
        <Grid centered columns={3} stackable>
          <Grid.Column stretched width={3} className="responsive">
            <Grid.Row>

            <Card centered>
              <Card.Content>
                <div style={{ padding: "2vh" }}>
                  <Image circular size="small" src={bera} />
                </div>
                <Card.Header>
                  {firstName} {middleName} {lastName}
                </Card.Header>
                <Card.Meta>{major}</Card.Meta>
                <Card.Description>{gradDate}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="graduation cap" />
                {academicStanding}
              </Card.Content>
            </Card>
            </Grid.Row>

            {/* <Grid.Row stretched> */}
              <Segment textAlign="center" style={segment}>
                {/* <Label
                  style={{ color: "white", backgroundColor: "#766495" }}
                  size="big"
                  attached="top"
                >
                  Coursework
                </Label> */}
                <Header as='h2' size="large" textAlign="center">
                  CourseWork
                  <Icon ></Icon>
                </Header>
                <List size="large" divided className="responsive">
                  {courseWork.map(item => (
                    <List.Item>
                      <a>
                        {item.coursework} <Rating defaultRating={item.corseworkRating} maxRating={5} disabled />
                      </a>
                    </List.Item>
                  ))}
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
            {/* </Grid.Row> */}
          </Grid.Column>

          <Grid.Column width={10}>
            <Grid columns={2}>
              <Grid.Column width={11} stretched>
                <Segment style={segment}>
                  {/* <Label attached="top" style={studentStyle} size="huge">
                    About Me
                  </Label> */}
                  <Header as='h2' size="large" textAlign="center">
                    About Me
                  </Header>
                  <p style={{paddingLeft: "5%", paddingRight: "5%"}}>{aboutMe}</p>
                  <Modal
                    basic
                    dimmer="inverted"
                    onClose={() => setOpenAbout(false)}
                    onOpen={() => setOpenAbout(true)}
                    open={openAbout}
                    trigger={
                      <Label as="a" corner="right" icon="edit"></Label>
                    }
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
              </Grid.Column>
              <Grid.Column width={5} stretched>
                
                <Segment style={segment} textAlign="center">
                  {/* <Label style={studentStyle} size="huge" attached="top">
                    Demographics
                  </Label> */}
                  <Header as='h2' size="large" textAlign="center">
                    Demographics
                  </Header>
                  {/* <Segment padded="very"> */}
                  {/* <Label as="a" corner="right" icon="edit"></Label> */}
                  <List divided vertical size="large">
                    {gender != "" && <List.Item>
                      <b>Gender: </b> {gender}
                    </List.Item>}
                    {age && <List.Item>
                      <b>Age: </b> {age}
                    </List.Item>}
                    {race != "" && <List.Item>
                      <b>Race: </b> {race}
                    </List.Item>}
                    {ethnicity != "" && <List.Item>
                      <b>Ethnicity: </b> {ethnicity}
                    </List.Item>}
                    {veteran != null && <List.Item>
                      <b>Veteran: </b> {veteran}
                    </List.Item>}
                    {militaryCode != null && <List.Item>
                      <b>Military Code: </b> {militaryCode}
                    </List.Item>}
                  </List>
                  <Modal
                    basic
                    dimmer="inverted"
                    onClose={() => setOpenDemographics(false)}
                    onOpen={() => setOpenDemographics(true)}
                    open={openDemographics}
                    trigger={
                      <Label as="a" corner="right" icon="edit"></Label>
                    }
                    size="tiny"
                    className="responsive"
                  >
                    <Segment>
                      <Form>
                        <Container style={container}>
                          <Form.Input>
                            <Input
                              fluid
                              label={{ basic: true, content: "Ethnicity" }}
                              type="text"
                              labelPosition="left"
                              placeholder="Salvadorian. . ."
                              value={ethnicity}
                              onChange={(e) => {
                                setEthnicity(e.target.value);
                              }}
                            />
                          </Form.Input>
                          <Form.Input>
                            <Dropdown
                              clearable
                              fluid
                              options={races}
                              selection
                              item
                              placeholder="Select Race "
                              value={race}
                              onChange={(e) => {
                                setRace(e.target.value);
                              }}
                            />
                          </Form.Input>
                          {/* </Form.Group> */}
                          {/* <Form.Group widths="equal"> */}
                          <Form.Input>
                            <Input
                              fluid
                              label={{ basic: true, content: "Age" }}
                              type="text"
                              labelPosition="left"
                              value={age}
                              onChange={(e) => {
                                setAge(e.target.value);
                              }}
                            />
                          </Form.Input>
                          <Form.Input>
                            <Input
                              fluid
                              label={{ basic: true, content: "Gender" }}
                              type="text"
                              labelPosition="left"
                              value={gender}
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                          </Form.Input>
                          {/* </Form.Group> */}
                          <Header as="h5">Veteran</Header>
                          {/* <Form.Group widths="equal"> */}
                          <Form.Input>
                            <Dropdown
                              clearable
                              fluid
                              options={branches}
                              selection
                              item
                              placeholder="Select Military Branch "
                              value={veteran}
                              onChange={(e) => {
                                setVeteran(e.target.value);
                              }}
                            />
                          </Form.Input>
                          <Form.Input>
                            <Input
                              fluid
                              label={{ basic: true, content: "Military Code" }}
                              labelPosition="left"
                              placeholder="Enter Code"
                              type="text"
                              value={militaryCode}
                              onChange={(e) => {
                                setMilitaryCode(e.target.value);
                              }}
                            />
                          </Form.Input>
                          {/* </Form.Group> */}
                        </Container>
                      </Form>
                    </Segment>
                  </Modal>
                  {/* </Segment> */}
                </Segment>
              </Grid.Column>

            </Grid>

            <Grid columns={2}stretched>
            <Grid.Column stretched width={5}>
                <Segment padded="very" style={segment} textAlign="center">
                  {/* <Label style={studentStyle} size="huge" attached="top">
                    Skills
                  </Label> */}
                  <Header as='h2' size="large" textAlign="center">
                    Skills
                  </Header>
                  <List divided vertical size="large">
                    {skills.map(item => (
                      <List.Item>
                        {item.userSkill} <Rating defaultRating={3} maxRating={5} disabled />
                      </List.Item>
                    ))}
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column stretched width={11}>
                <Segment padded="very" style={segment}>
                  {/* <Label style={studentStyle} size="huge" attached="top">
                    Work Experience
                  </Label> */}
                  <Header as='h2' size="large" textAlign="center">
                    Work Experience
                  </Header>
                  <Card.Group centered>
                    {workExperience.map(item => (
                      <Card header={item.workExpTitle} description={item.workExpDesc} />
                    ))}
                  </Card.Group>
                  <Label as="a" corner="right" icon="edit"></Label>
                  {workExperience.workExpTitle}
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
                    <div style={{ padding: "1vh" }}>
                      <Segment>
                        <Card.Group centered>
                          {workExperience.map((item, index) => (
                              <Card>
                                <Card.Header>
                                  <Header>{item.workExpTitle}</Header>
                                </Card.Header>
                                <Card.Description>
                                  {item.workExpDesc}
                                </Card.Description>
                                <Card.Content extra>
                                  <Button basic color="red" onClick={() => removeWork(index)}>
                                    Remove
                                  </Button>
                                </Card.Content>
                              </Card>
                          ))}
                        </Card.Group>
                        <Form.Input
                          fluid
                          name="workExpTitle"
                          label="Title"
                          value=""
                          placeholder="Administrative Clerk"
                          onChange={(e) => handleWork(e)}
                        ></Form.Input>
                        <Form.TextArea
                          fluid
                          name="workExpDesc"
                          label=" Description"
                          value=""
                          placeholder="Performed clerical duties, scheduled events. . ."
                          onChange={(e) => handleWork(e)}
                        ></Form.TextArea>
                        <div className="responsive">
                        </div>
                        <div className="responsive" style={{ padding: "2vh" }}>
                          <Label icon="add" as="a" onClick={addWork}>
                            Add Work
                      </Label>
                        </div>
                      </Segment>
                    </div>

                    {/* <Segment style={segment}>
                      <Form>
                        <CreatableSelect
                          isClearable
                          isMulti
                          components={{ DropdownIndicator: null }}
                          inputValue={workExperience}
                          menuIsOpen={false}
                          // onChange={(value) =>
                          //   handleChange("experience", value)
                          // }
                          placeholder="Physics II, Calculus I . . ."
                          onKeyDown={addWork}
                          // onInputChange={(value) =>
                          //   handleInputChange("experience", value)
                          // }
                          value={workExperience}
                        />
                      </Form>
                    </Segment> */}
                  </Modal>
                </Segment>
              </Grid.Column>
            </Grid>
            <Segment
              padded="very"
              style={{ textAlign: "center", borderRadius: "10px" }}
            >
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
            <Segment style={{padding: "10%", borderRadius:"10px"}}>
            <Header as='h2' size="large" textAlign="center">
                    Job Applications
                  </Header>
                  <Header.Content >Jobs you apply to will show here!</Header.Content>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default StudentDashboard;
