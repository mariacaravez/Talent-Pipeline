import React from "react";
import Axios from "axios";
import {
  Grid,
  Segment,
  Button,
  Form,
  Label,
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
  const [location, setLocation] = useState("");
  const [jobPostTitle, setJobPostTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [jobPosterID, setJobPosterID] = useState("");
  const [workType, setWorkType] = useState("");
  const [gradRangeStart, setGradRangeStart] = useState("");
  const [gradRangeEnd, setGradRangeEnd] = useState("");

  const [course, setCourse] = useState("");
  const [coursework, setCoursework] = useState("");

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");

  // Object to send in request body
  const jobPost = {
    location: location,
    jobPostTitle: jobPostTitle,
    salary: salary,
    company: company,
    description: description,
    jobPosterID: jobPosterID,
    workType: workType,
    gradRangeStart: gradRangeStart,
    gradRangeEnd: gradRangeEnd,
    coursework: coursework,
    skills: skills,
  };

  const handleChange = (field, value) => {
    switch (field) {
      case "courses":
        setCoursework(value);
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
        setCoursework([...coursework, createOption(course)]);
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
    Axios.post("http://localhost:6480/newjobpost", { jobPost }).then(
      (response) => {
        console.log("FRONTEND FORM - Job Post to create: ", jobPost);
        console.log(response.data);
      }
    );
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
            <Form.Field
              required
              value={jobPostTitle}
              onChange={(e) => {
                setJobPostTitle(e.target.value);
              }}
            >
              <label>Title</label>
              <input />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Select
                value={workType}
                required
                label="Type"
                placeholder="Full-time/Part-Time"
                default={options[0]}
                options={options}
                onChange={(e) => {
                  setWorkType(e.target.value);
                }}
              ></Form.Select>
              <Form.Input
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                placeholder="$80,000"
                label="Salary"
              />
            </Form.Group>

            <Form.TextArea inline required label="Description"></Form.TextArea>
            <Form.Group widths="equal">
              <Form.Field
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              >
                <label>Company</label>
                <input
                  placeholder="Google Inc."
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field
                required
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
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
                value={coursework}
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
                <Form.Field
                  inline
                  value={gradRangeStart}
                  onChange={(e) => {
                    setGradRangeStart(e.target.value);
                  }}
                >
                  <label>From</label>
                  <input type="date" />
                </Form.Field>
                <Form.Field
                  inline
                  value={gradRangeEnd}
                  onChange={(e) => {
                    setGradRangeEnd(e.target.value);
                  }}
                >
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
