import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: "site", text: "Entire Site", value: "site" },
  { key: "major", text: "Major", value: "major" },
  { key: "standing", text: "Academic Standing", value: "standing" },
  { key: "gradDate", text: "Graduation Date", value: "gradDate" },
];

const StudentCard = (props) => {

  const { student } = props;

  return (
    
    <Card>
      <Card.Content textAlign="left" as={Link} to={{pathname: "/student-page/" + student.userID}}>
        <Card.Header>
          {student.firstName + " " + student.lastName}
        </Card.Header>
        <Card.Meta>{student.major}</Card.Meta>
        <Card.Description>
          Graduation Date: {student.gradDate}
          <br></br>
          Academic Standing: {student.academicStanding}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
export default StudentCard;
