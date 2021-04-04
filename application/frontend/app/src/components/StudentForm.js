import React from 'react';
import { useState } from 'react';
import { Form, Button, Input, Label, Segment, TextArea, Icon, } from 'semantic-ui-react';
// import Axios from 'axios';
import '../App.css'

const StudentForm = () => {
  const [graduationDate, setGraduationDate] = useState("");
  const [courseWork, setCourseWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [about, setAbout] = useState('');
  

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
      <Form.Field>
           <Form.Group widths='equal'>
              <Form.Input>
                <Input label={{basic: true, content: 'Graduation Date'}} labelPosition='left' type='date' value={graduationDate} onChange={(e) => {setGraduationDate(e.target.value);}}/>  
              </Form.Input>
              {/* <Form.Input label='Resume Upload' type='file' name='resume' file outline/> */}
            </Form.Group>

            {/* COURSEWORK, SKILLS, & WORK EXPERIENCE ARE BREAKING THE STUDENT FORM */}
            <Form.Group  widths='equal'>
              <Form.Input>
              <Input label={{basic: true, content: 'Coursework'}} icon={{ type:'submit', name:'add', circular: true, link:true}} value={courseWork} placeholder='Physics I, Calculus II . . .' onChange={(e) => {setCourseWork(e.target.value)}}/>
              </Form.Input>
            </Form.Group>
                <Segment>
                  {courseWork.map((val, key) => {
                        return (
                          <Label as='a'>
                          {val}
                          <Icon name='delete' />
                        </Label>
                        );
                      })}
                </Segment>
            <Form.Group widths='equal'>
              <Form.Input>
              <Input label={{basic: true, content: 'Skills'}} labelPosition='left' icon={{ type:'submit', name:'add', circular: true, link:true}} value={skills} placeholder='Excel, Google Suite . . .' onChange={(e) => {setSkills(e.target.value);}}/>
              </Form.Input>
            </Form.Group>
            <Segment>
                  {skills.map((val, key) => {
                        return (
                          <Label as='a'>
                          {val}
                          <Icon name='delete' />
                        </Label>
                        );
                      })}
                </Segment>
            <Form.Group className='responsive' widths='equal'>
              <Form.Input>
              <Input label={{basic: true, content: 'Work Experience'}} icon={{ type:'submit', name:'add', circular: true, link:true}} value={workExperience} placeholder='Uber Driver, Admin Clerk . . .' onChange={(e) => {setWorkExperience(e.target.value);}}/>
              </Form.Input>
            </Form.Group>
            <Segment>
                  {workExperience.map((val, key) => {
                        return (
                          <Label as='a'>
                          {val}
                          <Icon name='delete' />
                        </Label>
                        );
                      })}
                </Segment>
            <Segment className='responsive' padded>
              <Label size='large' attached='top'>About You</Label>
              <TextArea  placeholder='Extra curricular activies, volunteer work, career goals . . .' value={about} onChange={(e) => {setAbout(e.target.value);}}/>
              <br></br>
              {/* Not sure if we can do both of these at the same time */}
            </Segment>
            </Form.Field>
      </div>

  )
}

export default StudentForm;