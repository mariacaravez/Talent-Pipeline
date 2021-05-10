import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import { Link, Route } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

import {
  Form,
  Button,
  Input,
  Label,
  Segment,
  TextArea,
  Icon,
  List,
  Transition,
  Dropdown,
  Header,
  Select,
  Menu,
  Divider,
  Popup,
  Container,
  Message,
  Grid,
  Rating,
} from "semantic-ui-react";

//Styles
const container = {
  padding: "5%",
  backgroundColor: "#fafafa",
  borderRadius: "15px",
};

/*Options For Dropdown Menus */

// Academic Standing
const year = [
  { key: 1, text: "Freshman", value: "freshman" },
  { key: 2, text: "Sophomore", value: "sophomore" },
  { key: 3, text: "Junior", value: "junior" },
  { key: 4, text: "Senior", value: "senior" },
];
// Veteran
const branches = [
  { key: 5, text: "Army", value: "army" },
  { key: 6, text: "Navy", value: "navy" },
  { key: 7, text: "Marine Corps", value: "marines" },
  { key: 8, text: "Air Force", value: "air-force" },
  { key: 9, text: "Coast Guard", value: "coast-guard" },
  { key: 10, text: "Space Force", value: "space" },
];
// Race
const races = [
  { key: 11, text: "White", value: "white" },
  { key: 12, text: "White Non-Hispanic", value: "w-non" },
  { key: 13, text: "Hispanic or Latinx", value: "latinx" },
  { key: 14, text: "Black or African American", value: "black" },
  { key: 15, text: "American Indian or Alaska Native", value: "native" },
  { key: 16, text: "Asian", value: "asian" },
  { key: 17, text: "Native Hawaiian or Pacific Islander", value: "nh-pi" },
  { key: 18, text: "Two or More Races", value: "multi" },
  { key: 19, text: "", value: "multi" },
];

const StudentForm = () => {
  const userID = useSelector((state) => state.auth.userID);

  // Student Info
  const [graduationDate, setGraduationDate] = useState("");
  const [major, setMajor] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  // const [course, setCourse] = useState("");
  const {courseWork, setCourseWork}= useState({});
  const [courses, setCourses] = useState([
    { key: "math1", text: "MATH 227", value: "MATH 227" },
    { key: "physics1", text: "PHYS 220", value: "PHYS 220" },
    { key: "english1", text: "ENG 104/105", value: "ENG 104/105" },
    { key: "english2", text: "ENG 114", value: "ENG 114" },
  ]);

  const [genders, setGenders] = useState([
    { key: 1, text: "Female", value: "Female" },
    { key: 1, text: "Male", value: "Male" },
    { key: 1, text: "Cisgender", value: "Cisgender" },
    { key: 1, text: "Androgyne", value: "androgyne" },
    { key: 1, text: "Gender Nonconforming", value: "Gender Nonconforming" },
    { key: 1, text: "Nonbinary", value: "Nonbinary" },
    { key: 1, text: "Transgender", value: "Transgender" },
  ]);

  // Demographics
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");

  // Veteran Status
  const [veteran, setVeteran] = useState("");
  const [militaryCode, setMilitaryCode] = useState("");

  // Resume Information
  // const [skill, setSkill] = useState("");
  const [userskill, setUserskill] = useState([]);
  const [skills, setSkills] = useState([
    { key: "excel", text: "Microsoft Excel", value: "Microsoft Excel" },
    { key: "g-suite", text: "Google Suite", value: "Google Suite" },
    { key: "s-force", text: "Salesforce", value: "Salesforce" },
  ]);

  const [workExperience, setWorkExperience] = useState([
    { title: " ", description: " " },
  ]);
  const [about, setAbout] = useState("");

  const profile = {
    userID: userID,
    major: major,
    academicStanding: academicYear,
    graduationDate: graduationDate,
    gender: gender,
    age: age,
    race: race,
    veteran: veteran,
    militaryCode: militaryCode,
    ethnicity: ethnicity,
    userskill: userskill,
    skillRating: 0,
    courseWork: courseWork,
    courseWorkRating: 0,
    workTitle: workExperience[0].title,
    workDescription: workExperience.description,
    jobapps: 0,
    // resume: resume,
  };

  // Handling Creatable Select
  // const addCourse = (e) => {
  //   if (!course) return;

  //   switch (e.key) {
  //     case "Enter":
  //     case "Tab":
  //       setCourseWork([...courseWork, createOption(course)]);
  //       setCourse("");
  //       e.preventDefault();
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const addCourse = (e, { value }) => {
    setCourses([...courses, { text: value, value }]);
    setCourses([...courseWork])
  };

  const addGender = (e, { value }) => {
    setGenders([...genders, { text: value, value }]);
  };

  const addSkill = (e, { value }) => {
    setSkills([...skills, { text: value, value }]);
  };

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
  // const handleChange = (field, value) => {
  //   switch (field) {
  //     case "skills":
  //       setSkills(value);
  //       break;
  //   }
  // };
  // const handleInputChange = (field, value) => {
  //   switch (field) {
  //     case "skills":
  //       setSkill(value);
  //       break;
  //   }
  // };

  // const createOption = (label) => ({
  //   label,
  //   value: label,
  // });

  const handleWork = (index, e) => {
    const values = [...workExperience];
    values[index][e.target.name] = e.target.value;
    setWorkExperience(values);
  };

  const removeWork = (index) => {
    const values = [...workExperience];
    values.splice(index, 1);
    setWorkExperience(values);
  };

  const addWork = () => {
    setWorkExperience([...workExperience, { title: "", description: "" }]);
  };

  const createProfile = () => {
    Axios.post("http://localhost:6480/newprofile", { profile }).then(
      (response) => {
        console.log(courseWork);
        console.log(userskill);
        console.log(gender);
        // console.log(response.data);
      }
    );
  };

  return (
    <div>
      <Segment padded="very">
        <Label
          style={{ color: "white", backgroundColor: "#A73349" }}
          size="big"
          attached="top"
        >
          Create Student Profile
        </Label>
        <Form onSubmit={createProfile}>
          {/* <Grid divided> */}
          {/* <Form> */}
          {/* <Grid.Column stretched > */}
          <Header>Academic Information</Header>
          <Form.Field>
            {/* <Form.Group widths="equal"> */}
            <Container style={container}>
              <Form.Input fluid>
                <Input
                  fluid
                  label={{ basic: true, content: "Major" }}
                  labelPosition="left"
                  placeholder="Psychology . . ."
                  type="text"
                  value={major}
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                />
              </Form.Input>
              <Form.Input>
                <Dropdown
                  clearable
                  placeholder="Academic Year"
                  fluid
                  selection
                  options={year}
                  item
                  value={academicYear}
                  onChange={(e) => {
                    setAcademicYear(e.target.value);
                  }}
                />
              </Form.Input>
              {/* </Form.Group> */}
              <Form.Input label="Graduation Date">
                <Input
                  fluid
                  type="date"
                  value={graduationDate}
                  onChange={(e) => {
                    setGraduationDate(e.target.value);
                  }}
                />
              </Form.Input>
              <Form.Field>
                <Header as="h5">
                  Courses
                  <Header.Content>
                    <Popup
                      wide
                      position="right center"
                      trigger={<Icon color="violet" name="info circle" />}
                      icon="star"
                    >
                      <Rating defaultRating={5} maxRating={5} disabled />
                      <p>
                        Adding courses to your profile will allow you to request
                        endorsements from professors!
                      </p>
                    </Popup>
                  </Header.Content>
                </Header>
                {/* <CreatableSelect
                isClearable
                isMulti
                components={{ DropdownIndicator: null }}
                inputValue={course}
                menuIsOpen={false}
                onChange={(e) => setCourseWork(e)}
                placeholder="Physics II, Calculus I . . ."
                onKeyDown={addCourse}
                onInputChange={(e) => setCourse(e)}
                value={courseWork}
              /> */}
                <Dropdown
                  options={courses}
                  placeholder="MATH 227, PHYS 220. . ."
                  search
                  clearable
                  selection
                  fluid
                  multiple
                  allowAdditions
                  value={courseWork}
                  onAddItem={addCourse}
                  onChange={(e) => {
                    setCourseWork(e.target.value);
                  }}
                />
              </Form.Field>
            </Container>
            <Divider />
            <Header>
              Demographics
              <Header.Content>
                <Popup
                  wide
                  position="right center"
                  content="Demographics can be beneficial to both you and employers. However, we understand if you refrain from disclosing this information."
                  trigger={
                    <Icon
                      style={{ color: "#1DA083" }}
                      size="small"
                      name="info circle"
                    />
                  }
                />
              </Header.Content>
            </Header>

            {/* <Form.Group widths="equal"> */}
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
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Age</label>
                  <Input
                    fluid
                    type="number"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  {/* <Input
                  fluid
                  label={{ basic: true, content: "Gender" }}
                  type="text"
                  labelPosition="left"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                /> */}
                  <label>Gender</label>
                  <Dropdown
                    options={genders}
                    placeholder="Select or Add Gender"
                    search
                    clearable
                    selection
                    fluid
                    allowAdditions
                    value={gender}
                    onAddItem={addGender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Veteran</label>
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
                </Form.Field>
                <Form.Field>
                  <label>Military Code</label>
                  <Input
                    fluid
                    placeholder="Enter Code"
                    type="text"
                    value={militaryCode}
                    onChange={(e) => {
                      setMilitaryCode(e.target.value);
                    }}
                  />
                </Form.Field>
              </Form.Group>
            </Container>
          </Form.Field>
          {/* </Grid.Column> */}
          {/* <Divider horizontal/> */}
          {/* <Grid.Column stretched > */}
          <Divider />
          <Header>Resume</Header>
          <Container style={container}>
            <Form.TextArea
              placeholder="Extra curricular activies, volunteer work, career goals . . ."
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              label="About"
            />

            <Header.Subheader>
              <b>Skills</b>
            </Header.Subheader>
            {/* <Header as="h5">Skills</Header> */}

            <Form.Field>
              {/* <CreatableSelect
                isClearable
                isMulti
                components={{ DropdownIndicator: null }}
                inputValue={skill}
                menuIsOpen={false}
                onChange={(value) => handleChange("skills", value)}
                placeholder="Google Suite, Salesforce . . ."
                onKeyDown={addSkill}
                onInputChange={(value) => handleInputChange("skills", value)}
                value={skills}
              /> */}
              <Dropdown
                options={skills}
                placeholder="Select or Add Skill"
                noResultsMessage="You can add your own skills."
                search
                clearable
                selection
                fluid
                multiple
                allowAdditions
                value={userskill}
                onAddItem={addSkill}
                onChange={(e) => {
                  setUserskill(e.target.value);
                }}
              />
            </Form.Field>
          </Container>
          <Divider hidden />
          <Container style={container}>
            <Header as="h5">Work Experience</Header>
            {workExperience.map((inputField, index) => (
              <div style={{ padding: "1vh" }}>
                <Segment>
                  <Form.Input
                    fluid
                    name="workExpTitle"
                    label="Title"
                    value={workExperience.title}
                    placeholder="Administrative Clerk"
                    onChange={(e) => handleWork(index, e)}
                  ></Form.Input>
                  <Form.TextArea
                    fluid
                    name="workExpDesc"
                    label=" Description"
                    value={workExperience.description}
                    placeholder="Performed clerical duties, scheduled events. . ."
                    onChange={(e) => handleWork(index, e)}
                  ></Form.TextArea>
                  <div className="responsive">
                    <Label
                      as="a"
                      size="mini"
                      icon="remove"
                      corner="right"
                      onClick={() => removeWork(index)}
                    />
                  </div>
                </Segment>
              </div>
            ))}
            <div className="responsive" style={{ padding: "2vh" }}>
              <Label icon="add" as="a" onClick={addWork}>
                Add Work
              </Label>
            </div>
          </Container>
          {/* <Form.Input label='Resume Upload' type='file' name='resume' file outline/> */}
          {/* </Grid.Column> */}
          {/* </Form> */}
          {/* </Grid> */}
          <Form.Field className="responsive" style={{ paddingTop: "5%" }}>
            <Button
              style={{ color: "white", backgroundColor: "#A73349" }}
              type="submit"
              // as={Link}
              // to= "/"
              // onClick={setOpenRegister(false)}
            >
              Submit Profile
            </Button>
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
};

export default StudentForm;
