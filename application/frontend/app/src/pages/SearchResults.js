import React from 'react';
import {useState } from 'react';
import { Card, Image } from 'semantic-ui-react';



const SearchResults = () => {
  const [studentList, setStudentList] = useState([]);
  return (
    <div>
       <Card.Group itemsPerRow={4}>
    {studentList.map((val, key) => {
      return (
       <Card >
         <Card.Content textAlign='left'>
          <Card.Header>{val.firstName + " " + val.lastName}</Card.Header>
          <Card.Meta>{val.major}</Card.Meta>
          <Card.Description>
          Graduation Date: {val.gradDate}
          <br></br>
          Academic Standing: {val.academicStanding}
          </Card.Description>
        </Card.Content>

        </Card>
      );
    })}
    </Card.Group>
    </div>
  )
}

export default SearchResults;