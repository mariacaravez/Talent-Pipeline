import React from "react";
import { useState } from "react";
import {
  Form,
  Button,
  Grid,
  Input,
  Label,
  Segment,
  Dropdown,
  Radio,
} from "semantic-ui-react";
import Axios from "axios";
import "../App.css";

import StudentForm from "../components/StudentForm";
import JobPosting from "../components/JobPostingForm";
import EndorsementForm from "../components/EndorsementForm";

const options = [
  { key: 1, text: "Student", value: "student" },
  { key: 2, text: "Employer", value: "headhunter" },
  { key: 3, text: "Professor", value: "endorser" },
];

const Register = () => {
  const [optionsValue, setOptionsValue] = useState("student");
  const [userType, setUserType] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [userName, setUserName] = useState("");

  // TODO: LOGIC FOR PASSWORD MATCHING
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TODO: CHANGE THIS OBJECT TO BE USER
  const user = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    userTypeID: 1,
    username: email,
    password: password,
    email: email,
  };

  const handleSelect = (e, data) => {
    setOptionsValue(data.value);
  };

  const submitRegistration = () => {
    Axios.post("http://localhost:6480/newuser", { user }).then(
      (response) => {
        console.log(response.data);
      }
    );
    // Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newStudent", {params: {student}}).then((response) => {
    //   console.log(response.data);
    // });
  };

  return (
    <div>
      <div className="responsive">
        <Grid padded="very">
          <Segment padded="very" raised>
            <Label
              style={{ color: "white", backgroundColor: "#E06F41" }}
              size="big"
              attached="top"
            >
              Register as{" "}
              <Dropdown
                pointing
                options={options}
                defaultValue="student"
                onChange={handleSelect}
              />
            </Label>

            <Form onSubmit={submitRegistration}>
              <Form.Group widths="equal">
                {optionsValue === "student" && (

                  <>
                    <Form.Input required label="Email">
                      <Input
                        label={{
                          basic: true,
                          color: "violet",
                          content: "@mail.sfsu.edu*",
                        }}
                        labelPosition="right"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Input>
                  </>
                )}
                {optionsValue === "endorser" && (
                  <>
                    <Form.Input required label="Email">
                      <Input
                        label={{
                          basic: true,
                          color: "violet",
                          content: "@sfsu.edu*",
                        }}
                        labelPosition="right"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Input>
                  </>
                )}
                {optionsValue === "headhunter" && (
                  <>
                    <Form.Input required label="Email">
                      <Input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Input>
                  </>
                )}
              </Form.Group>
              <Form.Group className="responsive" widths="equal">
                <Form.Input
                  required
                  label="Full Name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <Form.Input
                  label="(Optional)"
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                  }}
                />
                <Form.Input
                  required
                  label=""
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="responsive" widths="equal">
                <Form.Input
                  required
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Form.Input
                  required
                  label=""
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <Form.Field>
                  {confirmPassword != password && (
                    <>
                      <Label size="medium" basic color="red" pointing="left">
                        Passwords do not match
                      </Label>
                    </>
                  )}
                </Form.Field>
              </Form.Group>

              <Form.Field>
                {optionsValue === "student" && (
                  <>
                    <StudentForm />
                  </>
                )}
              </Form.Field>
              <Form.Field>
                {optionsValue === "headhunter" && (
                  <>
                    {/* <JobPosting /> */}
                  </>
                )}
              </Form.Field>
              <Form.Field>
                {optionsValue === "endorser" && (
                  <>
                    {/* <EndorsementForm /> */}
                  </>
                )}
              </Form.Field>
              <Form.Field className="responsive">
                <Button
                  style={{ color: "white", backgroundColor: "#E06F41" }}
                  type="submit"
                >
                  Register
                </Button>
              </Form.Field>
            </Form>
          </Segment>
        </Grid>
      </div>
    </div>
  );
};

export default Register;
