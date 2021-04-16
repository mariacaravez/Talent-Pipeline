import React from "react";
import {
  Grid,
  Image,
  Segment,
  Label,
  Icon,
  Divider,
  Header,
  Search,
  Button,
  Card,
  List,
  Container,
  Rating,
} from "semantic-ui-react";

import bera from "../images/bera.jpg";


const StudentDashboard = () => {

  return (
    <div className="student-form">
      <Container fluid className="responsive">
        <Grid columns={3} stackable stretched>
          {/* TODO: ADD EDITABLE PROFILE PICTURE */}
          {/* <Image src='../static/images/maria-cropped.jpg' circular size='medium'/> */}

          <Grid.Column width={2} className="responsive">
            <Card centered >
              <Image src={bera} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  student.firstName, student.middleName, student.lastName
                </Card.Header>
                <Card.Meta>student.major</Card.Meta>
                <Card.Description>student.graduationDate</Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <Icon name="graduation cap" />
                  student.academicStanding
              </Card.Content>
            </Card>
            <Grid.Row>
              <Segment padded="very">
                <Label
                  // style={{ color: "white", backgroundColor: "" }}
                  size="huge"
                  attached="top"
                >
                  Coursework
                  <Label as="a" corner="right" icon={{name: "edit"}}></Label>
                </Label>
                <List className="responsive">
                  <List.Item>
                    Course 1 <Rating default={0} maxRating={5} disabled />
                  </List.Item>
                  <List.Item>
                    Course 2 <Rating default={0} maxRating={5} disabled />
                  </List.Item>
                  <List.Item>
                    Course 3 <Rating default={0} maxRating={5} disabled />
                  </List.Item>
                </List>
              </Segment>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment padded="very">
              <Label
                // style={{ color: "white", backgroundColor: "" }}
                size="huge"
                attached="top"
              >
                About
                <Label as="a" corner="right" icon="edit"></Label>
              </Label>
              <div>student.about</div>
            </Segment>
            <Grid.Row stretched>
              <Grid columns={2} widths="equal" stretched>
                <Grid.Column stretched>
                  <Segment padded="very">
                    <Label
                      // style={{ color: "white", backgroundColor: "" }}
                      size="huge"
                      attached="top"
                    >
                      Skills
                      <Label as="a" corner="right" icon="edit"></Label>
                    </Label>
                  </Segment>
                </Grid.Column>
                <Grid.Column stretched>
                  <Segment padded="very">
                    <Label
                      // style={{ color: "white", backgroundColor: "" }}
                      size="huge"
                      attached="top"
                    >
                      Work Experience
                      <Label as="a" corner="right" icon="edit"></Label>
                    </Label>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Segment padded="very">
                <Label
                  // style={{ color: "white", backgroundColor: "" }}

                  size="huge"
                  attached="top"
                >
                  Upload
                  <Label as="a" corner="right" icon="edit"></Label>
                </Label>
              </Segment>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment padded="very">
              <Label
                // style={{ color: "white", backgroundColor: "" }}
                size="huge"
                attached="top"
              >
                Job Applications
              </Label>
              <List size="huge">
                <List.Item>Job 1</List.Item>
                <List.Item>Job 2</List.Item>
                <List.Item>Job 3</List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default StudentDashboard;
