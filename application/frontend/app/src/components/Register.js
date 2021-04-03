import React from 'react';
import { useState } from 'react';
import { Form, Button, Grid, Input, Label, Segment, TextArea, Icon} from 'semantic-ui-react';
// import Axios from 'axios';
import '../App.css'


const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [courseWork, setCourseWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const [student, setStudentAttributes] = useState([]);

  // const addCourse = () =>{    
  //   {courseWork.map((val, key) => {
  //     return (
  //       <Label as='a'>
  //       {val}
  //       <Icon name='delete' />
  //     </Label>
  //     );
  //   })}

  // }
  const submitRegistration = () => {
    // Axios.post("http://localhost:6480/search", {params: {student}}).then((response) => {
    //   console.log(response.data);
    // });
    // Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/register", {params: {student}}).then((response) => {
    //   console.log(response.data);
    //   console.log();

    // });
  }

  return(
    <div>
      <div className='responsive'>

      <Grid>
        {/* <Grid.Column centered> */}
        <Segment raised>
        <Label as='a' color='orange' ribbon size='huge'>Register As Student</Label>
        <Grid.Row style={{maxWidth: 2000, marginTop: 20}}>
          <Form> 
            <Segment className='responsive'>
              Upload Profile Picture  
              <Button size='massive' circular icon='file image outline' type='file'></Button>      
              </Segment>

            <Form.Input width={16}>
              <Input label={{basic: true, color: 'red', content: '@mail.sfsu.edu'}} labelPosition='right' placeholder='johndoe648@mail.sfsu.edu' value={email} onChange={(e) => {setEmail(e.target.value);}}/>  
            </Form.Input>
            <Form.Group className='responsive' >
                <Label basic color='red' pointing='right'>Full Name</Label>
                <Form.Input placeholder='First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value);}}/>
                <Form.Input placeholder='Middle Name' value={middleName} onChange={(e) => {setMiddleName(e.target.value);}}/>
                <Form.Input placeholder='Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value);}}/>

            </Form.Group >
            <Form.Group  className='responsive' widths='equal'>
            <Label basic color='red' pointing='right'>Password</Label>
              <Form.Input placeholder='Password' type='password' value={password} onChange={(e) => {setPassword(e.target.value);}}/>
              <Form.Input placeholder='Confirm Password' type='password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}}/>
            </Form.Group>
            <Form.Group className='responsive' widths='equal'>
              <Form.Input>
                <Input label={{basic: true, content: 'Graduation Date'}} labelPosition='left' type='date' value={graduationDate} onChange={(e) => {setGraduationDate(e.target.value);}}/>  
              </Form.Input>
              {/* <Form.Input label='Resume Upload' type='file' name='resume' file outline/> */}
            </Form.Group>
            <Form.Group  className='responsive' widths='equal'>
              <Form.Input>
              <Input label={{basic: true, content: 'Coursework'}} icon={{ type:'submit', name:'add', circular: true, link:true}} value={courseWork} placeholder='Physics I, Calculus II . . .' onChange={(e) => {setCourseWork(e.target.value);}}/>
              </Form.Input>
            {/* {courseWork.map((val, key) => {
                  return (
                    <Label as='a'>
                    {val}
                    <Icon name='delete' />
                  </Label>
                  );
                })} */}
            </Form.Group>
            <Form.Group className='responsive' widths='equal'>
              <Form.Input>
              <Input label={{basic: true, content: 'Skills'}} labelPosition='left' icon={{ type:'submit', name:'add', circular: true, link:true}} value={skills} placeholder='Excel, Google Suite . . .' onChange={(e) => {setSkills(e.target.value);}}/>
              </Form.Input>
            </Form.Group>
            <Form.Group className='responsive' widths='equal'>
              <Form.Input>
              <Input label={{basic: true, content: 'Work Experience'}} icon={{ type:'submit', name:'add', circular: true, link:true}} value={workExperience} placeholder='Uber Driver, Admin Clerk . . .' onChange={(e) => {setWorkExperience(e.target.value);}}/>
              </Form.Input>
            </Form.Group>
            <Segment className='responsive' padded>
              <Label attached='top'>About You</Label>
              <TextArea  placeholder='Extra curricular activies, volunteer work, career goals . . .' />
              <br></br>
              {/* Not sure if we can do both of these at the same time */}
              <Button color='teal' type='submit' onClick={setStudentAttributes, submitRegistration}>Register</Button>
            </Segment>
        
          </Form>
        </Grid.Row>
        </Segment>
        {/* </Grid.Column> */}

      </Grid>
      </div>
    </div>
  )
}

export default Register;