import React from 'react'; 
import { useState } from 'react';
import { Dropdown, Input, Button} from 'semantic-ui-react';
import Axios from 'axios';
// import CardExampleGroups from './search-results.js';


const options = [
  { key: 'site', text: 'Entire Site', value: 'site' },
  { key: 'major', text: 'Major', value: 'major' },
  { key: 'studentYear', text: 'Student Year', value: 'studentYear' },
  { key: 'gender', text: 'Gender', value: 'gender' },
]

function App() {

const [textValue, setTextValue] = useState("");
const [studentList, setStudentList] = useState([]);

// const displayInfo = () => {
//   console.log(textValue);
// };

const getSearch = () => {
  Axios.get("http://localhost:6480/search").then((response) => {
    console.log(response);
    setStudentList(response.data);
    // Figure out how to get to next component
  });
}

return (
  <div className='App' textalign ='center'>
    <h1>CSC 648 Section 02</h1>
    <h2>Team 06</h2>
  
    <div className='search'>
      <Input type= 'text' placeholder='Search...'
        value = {textValue}
        onChange={(e) => {
        setTextValue(e.target.value);
        }} 
        action>
        <input />
        <Dropdown compact button basic floating options={options} defaultValue='site' />
        {/* <Link to="/search-results" className="btn btn-primary">Sign up</Link> */}
        <Button type='submit' onClick={getSearch}>Search</Button>
      </Input>
    </div>
    
    {studentList.map((val, key) => {
      return (
        <div>
          <h1>{val.name}</h1>
        <p>{val.major}</p>
        </div>
      );
    })}
  </div>
);
}
export default App;
