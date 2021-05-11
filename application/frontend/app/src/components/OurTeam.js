import React from "react";
import {
  Grid,
  Image,
  Segment,
  List,
  Container,
  Menu,
  Header,
  Card,
  Label,
  Tab,
} from "semantic-ui-react";


import maria from "../images/maria.jpg";
import bera from "../images/bera.jpg";
// import peter from "../images/bera.jpg";
import jeffrey from "../images/jeffrey.jpg";
import jooyoung from "../images/jooyoung.jpg";

const OurTeam = () => {
  return (
    <div>
      <Container fluid style={{ padding: "5vh" }}>
        <Header as="h1" textAlign="center">
          Milestone Team
        </Header>
        <Card.Group stackable centered itemsPerRow={5}>
          <Card>
            <Card.Content>
              <div style={{ padding: "2vh" }}>
                <Image circular size="small" src={maria} />
              </div>
              <Card.Header as="h3">Maria Caravez</Card.Header>
              <Card.Meta>Team Lead</Card.Meta>
              <Card.Description>
 
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <div style={{ padding: "2vh" }}>
                <Image circular size="small" src={bera} />
              </div>
              <Card.Header as="h3">Bera Coskun</Card.Header>
              <Card.Meta>Front End Lead</Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <div style={{ padding: "2vh" }}>
                <Image circular size="small" src={jeffrey} />
              </div>
              <Card.Header as="h3">Jeffrey Ye</Card.Header>
              <Card.Meta>Database Manager</Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <div style={{ padding: "2vh" }}>
                <Image circular size="small" src={jooyoung} />
              </div>
              <Card.Header as="h3">Jooyoung Kim</Card.Header>
              <Card.Meta>GitHub Master</Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  );
};
export default OurTeam;
