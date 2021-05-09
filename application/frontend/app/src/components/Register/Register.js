import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Grid,
  Input,
  Label,
  Segment,
  Dropdown,
  Divider,
  Container,
  Header,
  Popup,
  Icon,
  Message,
} from "semantic-ui-react";
import Axios from "axios";
// import "../App.css";

import StudentForm from "./StudentForm";
import JobPostingForm from "./JobPostingForm";
import EndorsementForm from "./EndorsementForm";
import Resume from "./Resume";

const options = [
  { key: 1, text: "Student", value: "student" },
  { key: 2, text: "Employer", value: "headhunter" },
  { key: 3, text: "Professor", value: "endorser" },
];

const Register = () => {
  const [optionsValue, setOptionsValue] = useState("student");
  const [userTypeID, setUserTypeID] = useState();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [studentObj, setStudentObj] = useState([]);
  const [userID, setUserID] = useState(0);

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

  const profile = {
    userID: 169,
    major: studentObj.major,
    academicStanding: studentObj.academicStanding,
    graduationDate: studentObj.graduationDate,
    gender: studentObj.gender,
    age: studentObj.age,
    race: studentObj.race,
    veteran: studentObj.veteran,
    militaryCode: studentObj.militaryCode,
    ethnicity: studentObj.ethnicity,
    skills: studentObj.skills,
    courseWork: studentObj.courseWork,
    workexp: studentObj.workExperience,
    jobapps: 0,
    // resume: resume,
  };

  const handleStudentFormData = (student) => {
    setStudentObj(student);
    console.log(studentObj);
  };

  const handleStudentResumeData = (student) => {
    setStudentObj(student);
    console.log(studentObj);
  };

  const handleSelect = (e, data) => {
    setOptionsValue(data.value);
    setUserTypeID(data.key);
  };

  const submitRegistration = () => {
    // Axios.all([
    //   Axios.post("http://localhost:6480/newuser", { user }),
    //   // Axios.post("http://localhost:6480/newprofile", { profile })
    // ]).then(responseArr => {
    //   setUserID(responseArr[0].data.insertId);
    //   console.log("InsertId: ", responseArr[0].data.insertId)
    //   console.log("User ID: ", userID);
    //   // console.log("New Profile: ", responseArr[1].data)
    // })

    // const submitRegistration = useCallback(() => {
    //   Axios.post("http://localhost:6480/newuser", { user }).then((response) => {
    //     setUserID(response.data);
    //     console.log(response.data);
    //     console.log(userID);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }, [user, userID], console.log(userID));

    // useEffect(() => {
    //   submitRegistration()
    // }, [submitRegistration])

    Axios.post("http://localhost:6480/newuser", { user }).then((response) => {
      console.log("User Profile Object: ", profile)
      console.log("Insert ID should be: ", response.data.insertId);
      profile.userID = response.data.insertId;
      console.log("Profile.userID: ", profile.userID);
    });

    Axios.post("http://localhost:6480/newprofile", { profile }).then(
      (response) => {
        console.log("User Profile inside newprofile request: ", profile);
        console.log(response.data);
      });

    // Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newStudent", {params: {student}}).then((response) => {
    //   console.log(response.data);
    // });
  };

  return (
    <div className="responsive">
      <Segment padded="very" raised>
        <Label
          style={{ color: "white", backgroundColor: "#E06F41" }}
          size="huge"
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

        <Form stackable onSubmit={submitRegistration}>
          <Grid stackable divided padded columns={2}>
            <Grid.Column>
              <Container>
                <Header>Account Information</Header>
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
                          color: "##7A48AC",
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
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    required
                    label="Full Name"
                    placeholder="First"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />

                  <Form.Input
                    fluid
                    label="(Optional)"
                    placeholder="Middle"
                    value={middleName}
                    onChange={(e) => {
                      setMiddleName(e.target.value);
                    }}
                  />

                  <Form.Input
                    fluid
                    required
                    label=""
                    placeholder="Last"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
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
                    fluid
                    required
                    label=""
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </Form.Group>
                {confirmPassword != password && (
                  <Message negative>
                    <p>Passwords must match.</p>
                  </Message>
                )}

                {/* Forms depending on user type */}
                {optionsValue === "student" && (
                  <Form.Field>
                    <StudentForm dataCallBack={handleStudentFormData} />
                  </Form.Field>
                )}
              </Container>
            </Grid.Column>
            <Grid.Column stretched>
              <Form.Field>
                {optionsValue === "student" && (
                  <>
                    <Resume dataCallBack={handleStudentResumeData} />
                  </>
                )}
              </Form.Field>
              <Form.Field>
                {optionsValue === "headhunter" && (
                  <>
                    <JobPostingForm />
                  </>
                )}
              </Form.Field>
              <Form.Field>
                {optionsValue === "endorser" && (
                  <>
                    <EndorsementForm />
                  </>
                )}
              </Form.Field>
            </Grid.Column>
          </Grid>
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
    </div>
  );
};

export default Register;
