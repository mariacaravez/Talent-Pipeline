import React from "react";
import Axios from "axios";
import { useState } from "react";
import {
  Form,
  Input,
  Segment,
  Grid,
  Label,
  Dropdown,
  Button,
} from "semantic-ui-react";

import StudentDashboard from "../pages/StudentDashboard";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // TODO: SET UP APPROPRIATE ROUTE
  // "http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/search"
  // const submitLogin = () => {
  //   Axios.get("http://localhost:6480/login",
  //     {
  //       params: { username: username, password: password },
  //     }
  //   ).then((response) => {
  //     console.log(response.data);

  //     setIsLoggedIn(true);
  //   });
  // };

  const submitLogin = () => {

    Axios.get("http://localhost:6480/login",{body: {username: username, password: password}})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="responsive">
      <Grid padded="very">
        <Segment padded="very" className="responsive">
          <Label
            style={{ color: "white", backgroundColor: "#FBBE74" }}
            size="big"
            attached="top"
          >
            Login
          </Label>
          <Form onSubmit={submitLogin}>
            <Form.Input>
              <Input
                label={{ basic: true, content: "Email" }}
                type="email"
                labelPosition="left"
                placeholder="johndoe648@mail.sfsu.edu"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Input>
            <Form.Input>
              <Input
                label={{ basic: true, content: "Password" }}
                type="password"
                labelPosition="left"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Input>
            <Form.Field className="responsive">
              <Button
                style={{ color: "white", backgroundColor: "#FBBE74" }}
                type="submit"
                value={isLoggedIn}
              >
                Login
              </Button>
            </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
};

export default Login;
