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
  Dropdown,
  Header,
  Divider,
  Popup,
} from "semantic-ui-react";

const Resume = (props) => {

  const { dataCallBack } = props;

  // Resume Information
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");

  const [workExperience, setWorkExperience] = useState([
    { workExpTitle: "", workExpDesc: "" },
  ]);
  const [about, setAbout] = useState("");

  const handleChange = (field, value) => {
    switch (field) {
      case "skills":
        setSkills(value);
        break;
    }
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case "skills":
        setSkill(value);
        break;
    }
  };

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
    setWorkExperience([
      ...workExperience,
      { workExpTitle: "", workExpDesc: "" },
    ]);
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

  // Sending to Parent - Register
  useEffect(() => {
    dataCallBack(skills, workExperience, about);
  }, [skills, workExperience, about]);

  return (
    <div>
      <Form.Field>
        <Header>Resume</Header>
        <Header as="h5">About</Header>
        <TextArea
          placeholder="Extra curricular activies, volunteer work, career goals . . ."
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
        <Header as="h5">Skills</Header>
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
        <Header>Work Experience</Header>
        {workExperience.map((inputField, index) => (
          <div style={{ padding: "1vh" }}>
            <Segment>
              <Form.Input
                fluid
                name="workExpTitle"
                label="Title"
                value={workExperience.workExpTitle}
                placeholder="Administrative Clerk"
                onChange={(e) => handleWork(index, e)}
              ></Form.Input>
              <Form.TextArea
                fluid
                name="workExpDesc"
                label=" Description"
                value={workExperience.workExpDesc}
                placeholder="Performed clerical duties, scheduled events. . ."
                onChange={(e) => handleWork(index, e)}
              ></Form.TextArea>
              <div className="responsive">
                <Label color="red" as="a" onClick={() => removeWork(index)}>
                  Remove
                </Label>
              </div>
            </Segment>
          </div>
        ))}
        <div className="responsive" style={{ padding: "2vh" }}>
          <Label icon="add" as="a" color="green" onClick={addWork}>
            Add Work
          </Label>
        </div>

        {/* <Form.Input label='Resume Upload' type='file' name='resume' file outline/> */}
      </Form.Field>
    </div>
  );
};

export default Resume;
