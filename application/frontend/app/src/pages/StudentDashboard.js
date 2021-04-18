import React from "react";
import { useState } from "react";
import {
  Grid,
  Image,
  Segment,
  Label,
  Icon,
  Card,
  List,
  Container,
  Rating,
  Form,
  Modal,
  Input,
} from "semantic-ui-react";
import "../App.css";

import bera from "../images/bera.jpg";

const StudentDashboard = () => {
  const studentStyle = {
    color: "white",
    backgroundColor: "#9c88b3",
  };

  const [openAbout, setOpenAbout] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openWork, setOpenWork] = useState(false);

  const about = "This is the description of about me.";
  const skills = "Skill 1, Skill 2, Skill 3";
  const work = "Work 1, Work 2, Work 3";
  const student = {
    firstName: "Bera",
    middleName: "Hasan",
    lastName: "Coskun",
    major: "Computer Science",
    academicStanding: "Junior"
  }

  return (
    <div className="dashboard">
      <Container fluid className="responsive">
        <Grid centered columns={3} stackable>
          <Grid.Column stretched width={3} className="responsive">
            <Card centered>
              <Image src={bera} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {student.firstName} {student.middleName} {student.lastName}
                </Card.Header>
                <Card.Meta>{student.major}</Card.Meta>
                <Card.Description>{student.graduationDate}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="graduation cap" />
                {student.academicStanding}
              </Card.Content>
            </Card>

            <Grid.Row>
              <Segment size="big" padded="very">
                <Label style={studentStyle} size="huge" attached="top">
                  Coursework
                </Label>
                <List size="large" divided className="responsive">
                  <List.Item>
                    <a>
                      Course 1 <Rating default={0} maxRating={5} disabled />
                    </a>
                  </List.Item>
                  <List.Item>
                    <a>
                      Course 2 <Rating default={0} maxRating={5} disabled />
                    </a>
                  </List.Item>
                  <List.Item>
                    <a>
                      Course 3 <Rating default={0} maxRating={5} disabled />
                    </a>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment padded="very">
              <Label attached="top" style={studentStyle} size="huge">
                About Me
              </Label>
              <Segment padded="very">
                {about}
                <Modal
                  basic
                  dimmer="inverted"
                  onClose={() => setOpenAbout(false)}
                  onOpen={() => setOpenAbout(true)}
                  open={openAbout}
                  trigger={<Label as="a" corner="right" icon="edit"></Label>}
                  size="tiny"
                  className="responsive"
                >
                  <Segment>
                    <Form>
                      <Form.TextArea defaultValue={about}></Form.TextArea>
                    </Form>
                  </Segment>
                </Modal>
              </Segment>
            </Segment>

            <Grid columns={2} widths="equal" stretched>
              <Grid.Column stretched>
                <Segment padded="very">
                  <Label style={studentStyle} size="huge" attached="top">
                    Skills
                  </Label>
                  <Segment padded="very">
                    <Label as="a" corner="right" icon="edit"></Label>
                    {skills}
                    <Modal
                      basic
                      dimmer="inverted"
                      onClose={() => setOpenSkills(false)}
                      onOpen={() => setOpenSkills(true)}
                      open={openSkills}
                      trigger={
                        <Label as="a" corner="right" icon="edit"></Label>
                      }
                      size="tiny"
                      className="responsive"
                    >
                      <Segment>
                        <Form>
                          <Form.TextArea defaultValue={skills}></Form.TextArea>
                        </Form>
                      </Segment>
                    </Modal>
                  </Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column stretched>
                <Segment padded="very">
                  <Label style={studentStyle} size="huge" attached="top">
                    Work Experience
                  </Label>
                  <Segment padded="very">
                    <Label as="a" corner="right" icon="edit"></Label>
                    {work}
                    <Modal
                      basic
                      dimmer="inverted"
                      onClose={() => setOpenWork(false)}
                      onOpen={() => setOpenWork(true)}
                      open={openWork}
                      trigger={
                        <Label as="a" corner="right" icon="edit"></Label>
                      }
                      size="tiny"
                      className="responsive"
                    >
                      <Segment>
                        <Form>
                          <Form.TextArea defaultValue={work}></Form.TextArea>
                        </Form>
                      </Segment>
                    </Modal>
                  </Segment>
                </Segment>
              </Grid.Column>
            </Grid>
            <Segment padded="very">
              <Label attached="top" style={studentStyle} size="huge">
                Videos
              </Label>
              <input type="file" />
            </Segment>
          </Grid.Column>
          <Grid.Column width={2} stretched>
            <Segment padded="very">
              <Label style={studentStyle} size="huge" attached="top">
                Job Applications
              </Label>
              <List size="massive" divided className="responsive">
                <List.Item>
                  <a>Job 1</a>
                </List.Item>
                <List.Item>
                  <a>Job 2</a>
                </List.Item>
                <List.Item>
                  <a>Job 3</a>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default StudentDashboard;
