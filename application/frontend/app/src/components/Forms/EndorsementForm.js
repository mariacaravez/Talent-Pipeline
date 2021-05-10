import React from "react";
import { useState } from "react";
import {
  Grid,
  Segment,
  Button,
  Form,
  Label,
  Rating,
  Header,
} from "semantic-ui-react";

const EndorsementForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="responsive">
      {/* <Grid padded="very"> */}
        <Segment padded="very"  size="massive">
          <div className="responsive">
            <Label
              style={{ color: "white", backgroundColor: "#16698A" }}
              size="big"
              attached="top"
            >
              Endorse Student
            </Label>
            {isLoggedIn && (
              <Header as="h3">Endorse [Course Name] for [Student Name]</Header>
            )}

            {isLoggedIn && (
              <div>
                <Button
                  style={{ color: "white", backgroundColor: "#FBBE74" }}
                  content="Message"
                  icon="envelope"
                />
                <Button
                  style={{ color: "white", backgroundColor: "#FBBE74" }}
                  content="Profile"
                  icon="user"
                />
              </div>
            )}
          </div>

          <Form>
            {!isLoggedIn && (
              <Form.Group widths="equal" style={{ paddingTop: "2vh" }}>
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
            )}
            <Form.Group inline widths="equal" style={{ paddingTop: "2vh" }}>
              {!isLoggedIn && (
                <Form.Field required>
                  <label>Course</label>
                  <input type="text" />
                </Form.Field>
              )}

              <Form.Field>
                <label>Rating</label>
                <Rating
                  maxRating={5}
                  defaultRating={0}
                  icon="star"
                  clearable
                  size="huge"
                />
              </Form.Field>
            </Form.Group>
            <Form.TextArea required label="Description" />
            <Form.Field className="responsive">
              <Button
                style={{ color: "white", backgroundColor: "#16698A" }}
                type="submit"
              >
                Post
              </Button>
            </Form.Field>
          </Form>
        </Segment>
      {/* </Grid> */}
    </div>
  );
};

export default EndorsementForm;
