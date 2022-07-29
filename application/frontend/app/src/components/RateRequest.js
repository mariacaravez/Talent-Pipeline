import React from "react";
import { useState } from "react";
import {
  Form,
  Input,
  Segment,
  Grid,
  Label,
  Dropdown,
  Button,
  Divider,
  Header
} from "semantic-ui-react";

const RateRequest = () => {
  const courses = [
    { key: "CSC 317", text: "CSC 317", value: "CSC 317" },
    { key: "CSC 413", text: "CSC 413", value: "CSC 413" },
  ];
  const [optionsValue, setOptionsValue] = useState("");


  const handleSelect = (e, data) => {
    setOptionsValue(data.value);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: SET UP APPROPRIATE ROUTE
  const submitRequest = () => {
    console.log("USER IS LOGGED IN");
    setIsLoggedIn(true);
  };

  return (
    <div className="responsive">
      <Grid padded="very">
        <Segment padded="very">
          <Label
            style={{ color: "white", backgroundColor: "#FBBE74" }}
            size="big"
            attached="top"
          >
            Request Rating for{" "}
            <Dropdown
              pointing
              options={courses}
              defaultValue={courses[0]}
              onChange={handleSelect}
            />
          </Label>
          <Form>
            <Form.Group>
            <Form.Input>
              <Input
                label={{ basic: true, content: "Professor", color: "violet" }}
                type="text"
                labelPosition="left"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Input>
            <Form.Input>
              <Input
                label={{ basic: true, content: "Email", color: "violet" }}
                type="text"
                labelPosition="left"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Input>
            </Form.Group>
            {/* <Form.Input>
              <Input
                label={{ basic: true, content: "Professor", color: "violet" }}
                type="text"
                labelPosition="left"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Input> */}
            <Form.TextArea label="Message"></Form.TextArea>
            <Form.Field className="responsive">
              <Button
                style={{ backgroundColor: "#FBBE74" }}
                type="submit"
                value={isLoggedIn}
                onClick={submitRequest}
              >
                Send Request
              </Button>
            </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
};

export default RateRequest;
