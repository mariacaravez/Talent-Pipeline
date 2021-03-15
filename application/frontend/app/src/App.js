import React from 'react'; 
import { Dropdown, Input} from 'semantic-ui-react';
// import CardExampleGroups from './search-results.js';


const options = [
  { key: 'site', text: 'Entire Site', value: 'site' },
  { key: 'major', text: 'Major', value: 'major' },
  { key: 'studentYear', text: 'Student Year', value: 'studentYear' },
  { key: 'gender', text: 'Gender', value: 'gender' },
]
const App = () => {

const [textValue, setTextValue] = React.useState();

  return (
    <div className="App" textAlign ='center'>
      <h1>CSC 648 Section 02</h1>
      <h2>Team 06</h2>
    
      <div className="search">
        <Input type= 'text' placeholder='Search...'
          value = {textValue}
          onChange={(e) => {
          setTextValue(e.targetvalue);
          }} 
          action>
          <input />
          <Dropdown compact button basic floating options={options} defaultValue='site' />
          {/* <Link to="/search-results" className="btn btn-primary">Sign up</Link> */}
          {/* <Button onClick ={<CardExampleGroups/>}>Search</Button> */}
        </Input>
      </div>
    </div>
  )

};
export default App;
