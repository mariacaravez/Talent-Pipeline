import React from 'react';
import { useState } from 'react';
import { Dropdown, Input, Button, Card, Container, Image} from 'semantic-ui-react';
import Axios from 'axios';
import './App.css'

const options = [
  { key: 'site', text: 'Entire Site', value: 'site' },
  { key: 'major', text: 'Major', value: 'major' },
  { key: 'standing', text: 'Academic Standing', value: 'standing' },
  { key: 'gradDate', text: 'Graduation Date', value: 'gradDate' },
]

function App() {

const [textValue, setTextValue] = useState("");
const [studentList, setStudentList] = useState([]);
const [optionsValue, setOptionsValue] = useState("*");

const getSearch = () => {
  Axios.get("ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/search", {params: {textValue: textValue, optionsValue: optionsValue}}).then((response) => {
    console.log(response.data);
    console.log(textValue);
    setStudentList(response.data);
  });
}

/* WHAT WE EVENTUALLY WANT IT TO LOOK LIKE: */
/*
function getSearch() {
  let config = {
    method: 'get',
    url: '/search/getByFilter',
    params: {textValue}, {optionsValue}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setStudentList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
*/


const handleSelect=(e, data)=>{
  console.log(data.value);
  setOptionsValue(data.value);
  console.log(optionsValue);
}

return (
  <Container  className='App' >
    <h1>CSC 648 Section 02</h1>
    <h2>Team 06</h2>

    <div className='search' text-align='center'>
      <Input type= 'text' placeholder='Search Student...'
        value = {textValue}
        onChange={(e) => {
        setTextValue(e.target.value);
        }}
        action>
        <input />
        <Dropdown compact button basic floating options={options} defaultValue='site'
          onChange={handleSelect} />
        {/* <Link to="/search-results" className="btn btn-primary">Sign up</Link> */}
        <Button type='submit' onClick={getSearch}>Search</Button>
      </Input>
    </div>
 <Card.Group itemsPerRow={4}>
    {studentList.map((val, key) => {
      return (
       <Card >
         <Card.Content textAlign='left'>
          <Card.Header>{val.firstName}</Card.Header>
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
  </Container>
);
}
export default App;
