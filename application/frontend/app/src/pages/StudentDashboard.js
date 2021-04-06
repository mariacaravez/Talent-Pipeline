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
  List
} from "semantic-ui-react";

const StudentDashboard = () => {
  return (
    <div>
      <Grid padded="very">
        <div>
          {/* TODO: ADD EDITABLE PROFILE PICTURE */}
          {/* <Image src='../static/images/maria-cropped.jpg' circular size='medium'/> */}

          <Grid.Column stretched width={2}>
            <Card>
              <Image
                src=""
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>student.firstName, student.middleName, student.lastName</Card.Header>
                <Card.Meta>student.major</Card.Meta>
                <Card.Description>
                  student.graduationDate
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="graduation cap" />
                  student.academicStanding
                </a>
              </Card.Content>
            </Card>
            <Segment padded='very' >
              <Label style={{color: 'white', backgroundColor: '#FBBE74'}} size='large' attached='top'>Coursework</Label>
              <List>
                <List.Item>

                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </div>
        <Grid.Column className="responsive" stretched width={6}>
          <Segment>

          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default StudentDashboard;
