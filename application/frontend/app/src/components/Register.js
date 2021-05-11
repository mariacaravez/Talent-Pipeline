import { useState } from "react";
import {
  Form,
  Button,
  Grid,
  Input,
  Label,
  Segment,
  Dropdown,
  Message,
} from "semantic-ui-react";
import Axios from "axios";

const options = [
  { key: 1, text: "Student", value: "student" },
  { key: 2, text: "Employer", value: "headhunter" },
  { key: 3, text: "Professor", value: "endorser" },
];

const Register = () => {
  const [optionsValue, setOptionsValue] = useState("student");
  const [userTypeID, setUserTypeID] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userID, setUserID] = useState(0);

  const user = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    userTypeID: userTypeID,
    username: email,
    password: password,
    email: email,
  };

  const handleSelect = (e, data) => {
    setOptionsValue(data.value);
    switch (data.value) {
      case "student":
        setUserTypeID(1);
        break;
      case "headhunter":
        setUserTypeID(3);
        break;
      case "endorser":
        setUserTypeID(2);
        break;
      default:
        break;
    }
  };

  const submitRegistration = () => {
    // http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newuser
    // http://localhost:6480/newuser
    Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newuser", { user }).then((response) => {
      console.log("Insert ID should be: ", response.data.insertId);
      setUserID(response.data.insertId);
    });
  };

  return (
    <div className="responsive">
      <Grid padded="very">
        <Segment padded raised size="massive">
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
            <Form.Group widths="equal">
              <Form.Input
                required
                label="Full Name"
                placeholder="First"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />

              <Form.Input
                label="(Optional)"
                placeholder="Middle"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />

              <Form.Input
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
  );
};

export default Register;
