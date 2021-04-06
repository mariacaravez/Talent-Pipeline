import React from 'react';
import { useState } from 'react';
import { Form, Button, Grid, Input, Label, Segment, Dropdown, } from 'semantic-ui-react';
import Axios from 'axios';
import '../App.css'

import StudentForm from '../components/StudentForm';

// USER TYPES
const options = [
  { key: 'student', text: 'Student', value: 'student' },
  { key: 'headHunter', text: 'Headhunter', value: 'headHunter' },
  { key: 'endorser', text: 'Endorser', value: 'endorser' },
]

const Register = () => {

  const [optionsValue, setOptionsValue] = useState('');

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const student = {
    firstName,
    middleName, 
    lastName,
    email
  }

  // TODO: LOGIC FOR PASSWORD MATCHING
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSelect=(e, data)=>{
    setOptionsValue(data.value);
  }

  // TODO: SET UP APPROPRIATE ROUTE
  const submitRegistration = () => {
    Axios.post("http://localhost:6480/newstudent", student).then((response) => {
      console.log(response.data);
    });
    // Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/newStudent", {params: {student}}).then((response) => {
    //   console.log(response.data);
  console.log('REGISTRATION SUBMITTED');

    // });
  }

  return(
    <div>
      <div className='responsive'>

      <Grid padded='very'>
        <Segment  padded='very' raised>
        <Label style={{color: 'white', backgroundColor: '#E06F41'}} size='big' attached='top'>
                Register as {' '}
                <Dropdown pointing options = {options} defaultValue='student' onChange={handleSelect} />
          </Label>
          <Form onSubmit={submitRegistration}> 
            <Form.Group widths='equal'>
              <Form.Input required label='Email'>
                <Input label={{basic: true, color:'violet', content: '@mail.sfsu.edu*'}} labelPosition='right' placeholder='johndoe648@mail.sfsu.edu' value={email} onChange={(e) => {setEmail(e.target.value);}}/>  
              </Form.Input>
            </Form.Group>
            <Form.Group className='responsive' widths='equal'>
              <Form.Input required label='Full Name' placeholder='First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>  
              <Form.Input label='(Optional)' placeholder='Middle Name' value={middleName} onChange={(e) => {setMiddleName(e.target.value);}}/>
              <Form.Input required label=''placeholder='Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value);}}/>
            </Form.Group >
            <Form.Group  className='responsive' widths='equal'>
              <Form.Input required label='Password' placeholder='Password' type='password' value={password} onChange={(e) => {setPassword(e.target.value);}}/>
              <Form.Input required label='' placeholder='Confirm Password' type='password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}}/>
            </Form.Group>
          <Form.Field>
          {(optionsValue === 'student') && (
            <>
            <StudentForm />
            </>
          )}
          </Form.Field>
          <Form.Field className='responsive'>
          {(optionsValue === 'headHunter' || optionsValue === 'endorser') && (
          <>
          {/* CAN INCLUDE ANYTHING SPECIFIC FOR HEADHUNTER OR ENDORSER HERE! */}
          </>
          )}
          </Form.Field>
          <Form.Field className='responsive'>
              <Button style={{color: 'white', backgroundColor: '#E06F41'}} type='submit'>Register</Button>
            </Form.Field>
          </Form>
        </Segment>

      </Grid>
      </div>
    </div>
  )
}

export default Register;