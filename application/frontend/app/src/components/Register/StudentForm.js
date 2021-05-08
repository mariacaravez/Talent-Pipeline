import React from "react";
import { useState, useEffect } from "react";
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
} from "semantic-ui-react";

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

const StudentForm = (props) => {
  const { dataCallBack } = props;

  // Student Info
  const [graduationDate, setGraduationDate] = useState("");
  const [major, setMajor] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [course, setCourse] = useState("");
  const [courseWork, setCourseWork] = useState("");

  // Demographics
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");

  // Veteran Status
  const [veteran, setVeteran] = useState("");
  const [militaryCode, setMilitaryCode] = useState("");

  // Handling Creatable Select for Courses
  const addCourse = (e) => {
    if (!course) return;

    switch (e.key) {
      case "Enter":
      case "Tab":
        setCourseWork([...courseWork, createOption(course)]);
        setCourse("");
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const createOption = (label) => ({
    label,
    value: label,
  });

    // Sending to Parent - Register
    useEffect(() => {
      dataCallBack(graduationDate, major, academicYear, courseWork, gender, age, race, ethnicity, veteran, militaryCode );
    }, [graduationDate, major, academicYear, courseWork, gender, age, race, ethnicity, veteran, militaryCode]);

  return (
    <div>
      <Divider />
      <Header>Academic Information</Header>
      <Form.Field>
        <Form.Group widths="equal">
          <Form.Input>
            <Input
              fluid
              label={{ basic: true, content: "Major" }}
              labelPosition="left"
              placeholder="Ethnic Studies, Psychology . . ."
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
        </Form.Group>
        <Form.Input>
          <Input
            fluid
            label={{ basic: true, content: "Graduation Date" }}
            labelPosition="left"
            type="date"
            value={graduationDate}
            onChange={(e) => {
              setGraduationDate(e.target.value);
            }}
          />
        </Form.Input>

        <Header as="h5">
          Courses
          <Header.Content>
            <Popup
              wide
              position="right center"
              content="Adding courses to you profile will allow you to request endorsements from Professors!"
              trigger={<Icon color="violet" name="info circle" />}
            />
          </Header.Content>
        </Header>

        <CreatableSelect
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
        />
        <Divider />
        <Header>
          Demographics
          <Header.Content>
            <Popup
              wide
              position="right center"
              content="Demographics can be beneficial to both you and employers. However, we understand if you refrain from disclosing this information."
              trigger={<Icon color="orange" size="small" name="info circle" />}
            />
          </Header.Content>
        </Header>

        <Form.Group widths="equal">
          <Form.Input>
            <Input
              fluid
              label={{ basic: true, content: "Ethnicity" }}
              type="text"
              labelPosition="left"
              placeholder="Salvadorian, Palestinian. . . "
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
        </Form.Group>
        <Form.Group widths="equal">
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
        </Form.Group>
        <Header as="h5">Veteran</Header>
        <Form.Group widths="equal">
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
        </Form.Group>
      </Form.Field>
    </div>
  );
};

export default StudentForm;
