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
} from "semantic-ui-react";

const StudentDashboard = () => {
  return (
    <div>
      <Grid padded="very" centered >
        <div>
          {/* TODO: ADD EDITABLE PROFILE PICTURE */}
          {/* <Image src='../static/images/maria-cropped.jpg' circular size='medium'/> */}
          <Segment padded="very" size="massive" circular className="responsive">
            <Icon circular size="large" name="file image" />
          </Segment>
        </div>
        <Grid.Column stretched width={2}>
          <Card padded>
            <Card.Content textAlign="left">
              <Card.Header>Education</Card.Header>
              <Card.Meta>Major</Card.Meta>
              <Card.Description>
                Graduation Date:
                <br></br>
                Academic Standing:
              </Card.Description>
            </Card.Content>
          </Card>
          <Card padded>
            <Card.Content textAlign="left">
              <Card.Header>Coursework</Card.Header>
              <Card.Description>*** COURSES GO HERE ***</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column stretched width={7} >
          <Card padded>
            <Card.Content textAlign="left">
              <Card.Header>Skills</Card.Header>
              <Card.Description>*** LIST OF SKILLS HERE ***</Card.Description>
            </Card.Content>
          </Card>

          <Card padded="very">
            <Card.Content textAlign="left">
              <Card.Header>Work Experience</Card.Header>
              <Card.Description>
                *** WORK EXPERIENCE LIST HERE ***
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default StudentDashboard;
