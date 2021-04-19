import React from "react";
import { useState } from "react";
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
} from "semantic-ui-react";
// import Axios from 'axios';
import "../App.css";

const EditProfile = () => {
  const [graduationDate, setGraduationDate] = useState("");
  const [major, setMajor] = useState("");

  const [course, setCourse] = useState("");
  const [courseWork, setCourseWork] = useState("");

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");

  const [experience, setExperience] = useState("");
  const [workExperience, setWorkExperience] = useState("");

  const [about, setAbout] = useState("");

  
  // TODO: UPDATE STUDENT ATTRIBUTES ACCORDINGLY
  const [student, setStudentAttributes] = useState([]);

  const handleChange = (field, value) => {
    switch(field) {
      case 'courses':
        setCourseWork(value);
        break;
      case "skills":
        setSkills(value);
        break;
      case "experience":
        setWorkExperience(value);
        break;
    }
  }

  const handleInputChange = (field, value) => {
    switch(field) {
      case 'courses':
        setCourse(value);
        break;
      case "skills":
        setSkill(value);
        break;
      case "experience":
        setExperience(value);
        break;
    }
  }

  const addCourse = (e) => {
    if(!course) return;

    switch(e.key){
      case 'Enter':
      case 'Tab':
        setCourseWork([...courseWork, createOption(course)])
        setCourse("");
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const addWork = (e) => {
    if(!experience) return;

    switch(e.key){
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
    if(!skill) return;

    switch(e.key){
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
  const createOption = label =>({
    label,
    value: label
  })

  const submitRegistration = () => {
    // Axios.post("http://localhost:6480/search", {params: {student}}).then((response) => {
    //   console.log(response.data);
    // });
    // Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/register", {params: {student}}).then((response) => {
    //   console.log(response.data);
    //   console.log();
    // });
  };

  // NOTE: FIGURE OUT HOW TO PREVENT USER FROM ACCIDENTALLY CLICKING OUTSIDE OF MODAL AND LOSING DATA

  return (
    <div>
    
      <Form.Field>
        <Form.Group widths="equal">
          <Form.Input>
            <Input
              label={{ basic: true, content: "Graduation Date" }}
              labelPosition="left"
              type="date"
              value={graduationDate}
              onChange={(e) => {
                setGraduationDate(e.target.value);
              }}
            />
          </Form.Input>
          {/* <Form.Input label='Resume Upload' type='file' name='resume' file outline/> */}
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input >
            <Input
              label={{ basic: true, content: "Major" }}
              labelPosition="left"
              placeholder='Ethnic Studies, Psychology . . .'
              type="text"
              value={major}
              onChange={(e) => {
                setMajor(e.target.value);
              }}
            />
          </Form.Input>
        </Form.Group>

        {/* COURSEWORK, SKILLS, & WORK EXPERIENCE */}
        {/* TODO: IMPLEMENT REMOVAL OF INPUTS FROM USER */}
        <Segment padded="very">
          <Label basic size="large" attached="top">
            Courses
          </Label>
          {/* <Form.Group widths="equal"> */}
              <CreatableSelect
              isClearable
              isMulti
              components={{DropdownIndicator: null}}
              inputValue={course}
              menuIsOpen={false}
              onChange={(value) => handleChange('courses', value)}
              placeholder="Physics II, Calculus I . . ."
              onKeyDown={addCourse}
              onInputChange={(value) => handleInputChange('courses', value)}
              value ={courseWork}

              />
        </Segment>
        {/* Courses Ends */}
        <Segment padded="very">
          <Label basic size="large" attached="top">
            Work Experience
          </Label>
          {/* <Form.Group widths="equal"> */}
              <CreatableSelect
              isClearable
              isMulti
              components={{DropdownIndicator: null}}
              inputValue={experience}
              menuIsOpen={false}
              onChange={(value) => handleChange('experience', value)}
              placeholder="Admin Clerk, Volunteer . . ."
              onKeyDown={addWork}
              onInputChange={(value) => handleInputChange('experience', value)}
              value ={workExperience}

              />
        </Segment>
        {/* Work Ends */}
        <Segment padded="very">
          <Label basic size="large" attached="top">
            Skills
          </Label>
          {/* <Form.Group widths="equal"> */}
              <CreatableSelect
              isClearable
              isMulti
              components={{DropdownIndicator: null}}
              inputValue={skill}
              menuIsOpen={false}
              onChange={(value) => handleChange('skills', value)}
              placeholder="Google Suite, Salesforce . . ."
              onKeyDown={addSkill}
              onInputChange={(value) => handleInputChange('skills', value)}
              value ={skills}

              />
        </Segment>
        {/* Skills Ends */}
        <Segment className="responsive" padded>
          <Label basic size="large" attached="top">
            About You
          </Label>
          <TextArea
            placeholder="Extra curricular activies, volunteer work, career goals . . ."
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
        </Segment>
      </Form.Field>
    </div>
  );
};

export default EditProfile;
