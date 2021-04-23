import React from "react";
import { useState } from "react";
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
} from "semantic-ui-react";
// import Axios from 'axios';
import "../App.css";

const StudentForm = () => {
  const [graduationDate, setGraduationDate] = useState("");
  const [major, setMajor] = useState("");

  const [course, setCourse] = useState("");
  const [courseWork, setCourseWork] = useState([]);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const [experience, setExperience] = useState("");
  const [workExperience, setWorkExperience] = useState([]);

  const [about, setAbout] = useState("");

  // TODO: UPDATE STUDENT ATTRIBUTES ACCORDINGLY
  const [student, setStudentAttributes] = useState([]);

  const addCourse = () => {
    courseWork.push(course);
    setCourse("");
  };
  const removeCourse = (course) => {
    courseWork.slice(course);
  };

  const addSkill = () => {
    skills.push(skill);
    setSkill("");
  };

  const removeSkill = (skill) => {
    skills.slice(skill);
  };

  const addExperience = () => {
    workExperience.push(experience);
    setExperience("");
  };

  const removeExperience = (experience) => {
    workExperience.slice(experience);
  };

  // const addCourse = () =>{
  //   {courseWork.map((val, key) => {
  //     return (
  //       <Label as='a'>
  //       {val}
  //       <Icon name='delete' />
  //     </Label>
  //     );
  //   })}

  // }
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
          <Form.Group widths="equal">
            <Form.Input>
              <Input
                type="text"
                placeholder="Physics I, Calculus II"
                value={course}
                onChange={(e) => {
                  if(e.target.value !== null){
                    setCourse(e.target.value);
                  }
                }}
                action
              >
                <input />
                <Button type="submit" onClick={addCourse} icon="add" />
              </Input>
            </Form.Input>
          </Form.Group>
          <Transition.Group>
            <Label.Group fluid padded>
              {courseWork.map((course) => {
                return (
                  <Label onClick={removeCourse(course)}>
                    {course.toUpperCase()}
                  </Label>
                );
              })}
            </Label.Group>
          </Transition.Group>
        </Segment>
        {/* Courses Ends */}
        <Segment padded="very">
          <Label basic size="large" attached="top">
            Work Experience
          </Label>
          <Form.Group className="responsive" widths="equal">
            <Form.Input>
              <Input
                type="text"
                placeholder="Problem solver, Design, Team player"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                action
              >
                <input />
                <Button type="submit" onClick={addExperience} icon="add" />
              </Input>
            </Form.Input>
          </Form.Group>
          <Label basic size="large" attached="top">
            WorkExperience
          </Label>
          <Transition.Group>
            <Label.Group fluid padded>
              {workExperience.map((experience) => {
                return (
                  <Label onClick={removeExperience(skill)}>
                    {experience.toUpperCase()}
                  </Label>
                );
              })}
            </Label.Group>
          </Transition.Group>
        </Segment>
        {/* Work Ends */}
        <Segment padded="very">
          <Label basic size="large" attached="top">
            Skills
          </Label>
          <Form.Group widths="equal">
            <Form.Input>
              <Input
                type="text"
                placeholder="Problem solver, Design, Team player"
                value={skill}
                onChange={(e) => {
                  setSkill(e.target.value);
                }}
                action
              >
                <input />
                <Button type="submit" onClick={addSkill} icon="add" />
              </Input>
            </Form.Input>
          </Form.Group>
          <Transition.Group>
            <Label.Group fluid padded>
              {skills.map((skill) => {
                return (
                  <Label onClick={removeSkill(skill)}>
                    {skill.toUpperCase()}
                  </Label>
                );
              })}
            </Label.Group>
          </Transition.Group>
        </Segment>
        {/* Skills Ends */}
        <Segment className="responsive" padded>
          <Label size="large" attached="top">
            About You
          </Label>
          <TextArea
            placeholder="Extra curricular activies, volunteer work, career goals . . ."
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
          <br></br>
          {/* Not sure if we can do both of these at the same time */}
        </Segment>
      </Form.Field>
    </div>
  );
};

export default StudentForm;
