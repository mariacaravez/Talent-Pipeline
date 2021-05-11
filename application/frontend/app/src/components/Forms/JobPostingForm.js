import React from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

import {
  Grid,
  Segment,
  Button,
  Form,
  Label,
  Dropdown,
  Header,
} from "semantic-ui-react";

import { useState } from "react";
const options = [
  { key: "full-time", value: "full-time", text: "Full-time" },
  { key: "part-time", value: "part-time", text: "Part-time" },
  { key: "internship", value: "internship", text: "Internship" },
  { key: "temporary", value: "temporary", text: "Temporary" },
  { key: "contract", value: "contract", text: "Contract" },
];

const JobPosting = (props) => {
  const { dataCallback } = props;
  const jobPosterID = useSelector((state) => state.auth.userID);

  const [location, setLocation] = useState("");
  const [jobPostTitle, setJobPostTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [workType, setWorkType] = useState("");
  const [gradRangeStart, setGradRangeStart] = useState("");
  const [gradRangeEnd, setGradRangeEnd] = useState("");

  const [coursework, setCoursework] = useState([]);
  const [courses, setCourses] = useState([
    { key: "math1", text: "MATH 227", value: "MATH 227" },
    { key: "physics1", text: "PHYS 220", value: "PHYS 220" },
    { key: "english1", text: "ENG 104/105", value: "ENG 104/105" },
    { key: "english2", text: "ENG 114", value: "ENG 114" },
  ]);

  // Resume Information
  const [userskill, setUserskill] = useState([]);
  const [skills, setSkills] = useState([
    { key: "excel", text: "Microsoft Excel", value: "Microsoft Excel" },
    { key: "g-suite", text: "Google Suite", value: "Google Suite" },
    { key: "s-force", text: "Salesforce", value: "Salesforce" },
  ]);

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
    coursework: coursework.toString(),
    skills: userskill.toString(),
  };

  const addCourse = (e, { value }) => {
    setCourses([...courses, { text: value, value }]);
  };

  const handleCourse = (e, { value }) => {
    setCoursework(value);
  };

  const addSkill = (e, { value }) => {
    setSkills([...skills, { text: value, value }]);
  };

  const handleSkill = (e, { value }) => {
    setUserskill(value);
  };

  const handleWorkType = (e, { value }) => {
    setWorkType(value);
  };

  const submitJobPost = () => {
    // http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newjobpost
    // http://localhost:6480/newjobpost
    Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newjobpost", { jobPost }).then(
      (response) => {
        console.log("FRONTEND FORM - Job Post to create: ", jobPost);
        console.log(response.data);
      }
    );
    dataCallback(false);
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
                onChange={handleWorkType}
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
            <Form.Field>
              <label>Courses</label>
              <Dropdown
                options={courses}
                placeholder="MATH 227, PHYS 220. . ."
                noResultsMessage="You can add your own courses."
                search
                clearable
                selection
                fluid
                multiple
                allowAdditions
                value={coursework}
                onAddItem={addCourse}
                onChange={handleCourse}
              />
            </Form.Field>
            <Form.Field>
              <Header.Subheader>
                <b>Skills</b>
              </Header.Subheader>
              <Form.Field>
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
                  onChange={handleSkill}
                />
              </Form.Field>
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
            </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
};

export default JobPosting;
