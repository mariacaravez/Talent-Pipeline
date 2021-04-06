import React from 'react';
import { useState } from 'react';
import { Dropdown, Input, Button, Card, Container, Image, Segment} from 'semantic-ui-react';
import Axios from 'axios';
import '../App.css'

const options = [
  { key: 'site', text: 'Entire Site', value: 'site' },
  { key: 'major', text: 'Major', value: 'major' },
  { key: 'standing', text: 'Academic Standing', value: 'standing' },
  { key: 'gradDate', text: 'Graduation Date', value: 'gradDate' },
]

function Search() {

const [textValue, setTextValue] = useState("");
const [studentList, setStudentList] = useState([]);
const [optionsValue, setOptionsValue] = useState("*");

const getSearch = () => {
  Axios.get("http://localhost:6480/search", {params: {textValue: textValue, optionsValue: optionsValue}}).then((response) => {
    console.log(response.data);
    console.log(textValue);
    setStudentList(response.data);
  });
}
//   Axios.get("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/search", {params: {textValue: textValue, optionsValue: optionsValue}}).then((response) => {
//     console.log(response.data);
//     console.log(textValue);
//     setStudentList(response.data);
//   });
// }

const handleSelect=(e, data)=>{
  console.log(data.value);
  setOptionsValue(data.value);
  console.log(optionsValue);
}

return (
<div>


  <Segment padded='very' className='responsive' >

    <Input type= 'text' placeholder='Search Student...'
      value = {textValue}
      onChange={(e) => {
      setTextValue(e.target.value);
      }}
      action>
      <input />
      <Dropdown compact button basic floating options={options} defaultValue='site'
        onChange={handleSelect} />
      <Button type='submit' onClick={getSearch}>Search</Button>
    </Input>
  </Segment>
  {/* TODO: MOVE THIS TO A NEW PAGE */}
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
);
}
export default Search;
