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
  Icon
} from "semantic-ui-react";

import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import JobPosting from "./JobPostingForm";

const options = [
  { key: "full-time", value: "full-time", text: "Full-time" },
  { key: "part-time", value: "part-time", text: "Part-time" },
  { key: "internship", value: "internship", text: "Internship" },
  { key: "temporary", value: "temporary", text: "Temporary" },
  { key: "contract", value: "contract", text: "Contract" },
];

const EditJobPost = () => {
  const [course, setCourse] = useState("");

  // TODO: FIGURE OUT IF TO USE "" OR {}
  const [coursework, setCoursework] = useState("");

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");

  // const dispatch = useDispatch(); // must be combined with an action
  const title = "Front End Programmer";
  const salary = "$0.00";
  const company = "Milestone";
  const description = "Someone who can help with redux, please!! :'(";
  const location = "CS Department at SFSU";

  // NOT WORKING
  const courses = [
    {course: "CSC 317"},
    {course: "CSC 667"},
    {course: "CSC 648"}
  ];
  // NOT WORKING
  const type = options["internship"]

  const gradStart = "2021-05-21";
  const gradEnd = "2021-12-16";

  // const title = useSelector(state => state.jobReducer.title);
  // const type = useSelector(state => state.jobPostReducer.type);
  // const salary = useSelector(state => state.jobPostReducer.salary);
  // const description = useSelector(state => state.jobPostReducer.description);
  // const location = useSelector(state => state.jobPostReducer.location);
  // const company = useSelector(state => state.jobPostReducer.company);
  // const coursework = useSelector(state => state.jobPostReducer.coursework);
  // const skills = useSelector(state => state.jobPostReducer.skills);
  // const gradStart = useSelector(state => state.jobPostReducer.gradStart);
  // const gradEnd = useSelector(state => state.jobPostReducer.gradEnd);

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
    // TODO: ADD ROUTE
  };

  return (
    <div className="responsive">
      <Grid padded="very">
        <Segment padded="very">
          <Label
            style={{ color: "white", backgroundColor: "#87AFA6" }}
            size="big"
            attached="top"
            icon="edit"
            content="Edit Job Posting"
            />
          <Form onSubmit={submitJobPost} classname="responsive">
            <Form.Field required>
              <label>Title</label>
              <input
                defaultValue={title}
                // onChange={e => dispatch(setTitle(e.target.value)
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Select
                required
                label="Type"
                placeholder="Full-time/Part-Time"
                default={type}
                options={options}
                selected
                value={type}
                multiple={true}
                // onChange={e => dispatch(setType(e.target.value)
              ></Form.Select>
              <Form.Input
                placeholder="$80,000"
                label="Salary"
                defaultValue={salary}
                // onChange={e => dispatch(setSalary(e.target.value)
              />
            </Form.Group>

            <Form.TextArea
              inline
              required
              label="Description"
              defaultValue={description}
              // onChange={e => dispatch(setDescription(e.target.value)
            ></Form.TextArea>
            <Form.Group widths="equal">
              <Form.Field required>
                <label>Company</label>
                <input
                  defaultValue={company}
                  placeholder="Google Inc."
                  type="text"
                  // onChange={e => dispatch(setCompany(e.target.value)
                />
              </Form.Field>
              <Form.Field required>
                <label>Location</label>
                <input
                  defaultValue={location}
                  placeholder="Mountain View, CA"
                  type="text"
                  // onChange={e => dispatch(setLocation(e.target.value)
                />
              </Form.Field>
            </Form.Group>
            <Segment padded="very">
              <Label basic size="large" attached="top">
                Coursework
              </Label>

              {/* TODO: FIGURE OUT HOW TO SHOW THE COURSES FOR CURRENT JOB POST AS DEFAULT VALUE */}
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
                // TODO: defaultValue={{label: cs}}
              />
            </Segment>

            {/* TODO: FIGURE OUT HOW TO SHOW THE SKILLS FOR CURRENT JOB POST AS DEFAULT VALUE */}
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
                  <input
                    type="date"
                    value={gradStart}
                    // onChange={e => dispatch(setGradStart(e.target.value)
                  />
                </Form.Field>
                <Form.Field inline>
                  <label>To</label>
                  <input
                    type="date"
                    value={gradEnd}
                    // onChange={e => dispatch(setGradEnd(e.target.value)
                  />
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

export default EditJobPost;
