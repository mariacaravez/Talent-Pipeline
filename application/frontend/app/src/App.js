import React from 'react';

import { useState } from 'react';
import { Dropdown, Input, Button, Card, Container} from 'semantic-ui-react';
import Axios from 'axios';

import './App.css'
// import CardExampleGroups from './search-results.js';


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

// const displayInfo = () => {
//   console.log(textValue);
// };



const getSearch = () => {
  Axios.get("http://localhost:6480/search", {params: {textValue: textValue, optionsValue: optionsValue}}).then((response) => {
    console.log(response.data);
    console.log(textValue);
    setStudentList(response.data);
    // Figure out how to get to next component
  });
}

/* WHAT WE EVENTUALLY WANT IT TO LOOK LIKE: */
/*
function getSearch() {
  let config = {
    method: 'get',
    // ROUTE IN BACKEND
    url: '/search/getByFilter',
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setListings(response.data);
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
  <Container fluid className='App' text-align='center' >
    <h1>CSC 648 Section 02</h1>
    <h2>Team 06</h2>

    <div className='search'>
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

    {studentList.map((val, key) => {
      return (
       <Card centered>
        <Card.Content header={val.name} />
        <Card.Content description={val.major} />
        <Card.Content extra>
        Graduation Date: {val.graduationDate} 
        <br></br>
        Academic Standing: {val.academicStanding}
        </Card.Content>
        </Card>
      );
    })}
  </Container>
);
}
export default App;
