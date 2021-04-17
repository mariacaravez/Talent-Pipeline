import React from "react";
import {
  Grid,
  Image,
  Segment,
  List,
  Container,
  Button,
  Form,
  Label,
  Header,
} from "semantic-ui-react";

import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const options = [
  { key: "full-time", value: "full-time", text: "Full-time" },
  { key: "part-time", value: "part-time", text: "Part-time" },
  { key: "internship", value: "internship", text: "Internship" },
  { key: "temporary", value: "temporary", text: "Temporary" },
  { key: "contract", value: "contract", text: "Contract" },
];

const JobPosting = () => {
  const [course, setCourse] = useState("");
  const [courseWork, setCourseWork] = useState("");

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");

  const handleChange = (field, value) => {
    switch (field) {
      case "courses":
        setCourseWork(value);
        break;
      case "skills":
        setSkills(value);
        break;
    }
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case "courses":
        setCourse(value);
        break;
      case "skills":
        setSkill(value);
        break;
    }
  };

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
  const addSkill = (e) => {
    if (!skill) return;

    switch (e.key) {
      case "Enter":
      case "Tab":
        setSkills([...skills, createOption(skill)]);
        setSkill("");
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
  const submitJobPost = () => {
    //TODO
  };
  return (
    <div className="responsive">
      <Grid padded="very">
        <Segment padded="very">
          <Label
            style={{ color: "white", backgroundColor: "#87AFA6" }}
            size="big"
            attached="top"
          >
            Create Job Post
          </Label>
          <Form onSubmit={submitJobPost} classname="responsive">
            <Form.Field required>
              <label>Title</label>
              <input />
            </Form.Field>
            <Form.Group  widths="equal">
              <Form.Select
                required
                label="Type"
                placeholder="Full-time/Part-Time"
                default={options[0]}
                options={options}
              ></Form.Select>
              <Form.Input
                 placeholder="$80,000"
                label="Salary"
              />
            </Form.Group>

            <Form.TextArea inline required label="Description"></Form.TextArea>
            <Form.Group widths="equal">
              <Form.Field required>
                <label>Company</label>
                <input placeholder="Google Inc." type="text" />
              </Form.Field>
              <Form.Field required>
                <label>Location</label>
                <input placeholder="Mountain View, CA" type="text" />
              </Form.Field>
            </Form.Group>
            <Segment padded="very">
              <Label basic size="large" attached="top">
                Coursework
              </Label>
              <CreatableSelect
                isClearable
                isMulti
                components={{ DropdownIndicator: null }}
                inputValue={course}
                menuIsOpen={false}
                onChange={(value) => handleChange("courses", value)}
                placeholder="Physics II, Calculus I . . ."
                onKeyDown={addCourse}
                onInputChange={(value) => handleInputChange("courses", value)}
                value={courseWork}
              />
            </Segment>
            <Segment padded="very">
              <Label basic size="large" attached="top">
                Skills
              </Label>
              <CreatableSelect
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
              />
            </Segment>
            <Segment className="responsive" padded="very">
              <Label basic size="large" attached="top">
                Graduation Date Range
              </Label>
              <Form.Group inline widths="equal">
                <Form.Field inline>
                  <label>From</label>
                  <input type="date" />
                </Form.Field>
                <Form.Field inline>
                  <label>To</label>
                  <input type="date" />
                </Form.Field>
              </Form.Group>
            </Segment>

            <Form.Field className="responsive">
              <Button
                style={{ color: "white", backgroundColor: "#87AFA6" }}
                type="submit"
              >
                Post Job
              </Button>
            </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
};

export default JobPosting;
