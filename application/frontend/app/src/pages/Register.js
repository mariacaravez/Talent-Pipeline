import React from 'react';
import { useState } from 'react';
import { Form, Modal, Button, Message} from 'semantic-ui-react';
// import Axios from 'axios';
import '../App.css'


const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [open, setOpen] = React.useState(false);

  /* Currently not working */
  // handleSubmit = () => {
  //   /* Will redirect to Login */
  // }

  return(
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Register</Button>}
      useFlex
    >
      {/* CAND DO <Form onSubmit={this.handleSubmit}>*/}
    <Form>
    <Form.Group className='App' centered>
      <Form.Input label='First name' placeholder='First Name' width={4} value={firstName} onChange={(e) => {setFirstName(e.target.value);}}/>
      <Form.Input label='Middle Name' placeholder='Middle Name' width={4} value={middleName} onChange={(e) => {setMiddleName(e.target.value);}}/>
      <Form.Input label='Last Name' placeholder='Last Name' width={4} value={lastName} onChange={(e) => {setLastName(e.target.value);}}/>
    </Form.Group>
    <Form.Group>
      <Form.Input label='@mail.sfsu.edu' placeholder='Email' width={4} value={email} onChange={(e) => {setEmail(e.target.value);}} />
      <Form.Input placeholder='Password' width={4} value={password} onChange={(e) => {setPassword(e.target.value);}}/>
      <Form.Input placeholder='Confirm Password' width={4} value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}}/>
    </Form.Group>
  </Form>
  <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          onClick={() => setOpen(false)}
          positive
        >
        Submit
        </Button>

      </Modal.Actions>
  </Modal>
  )
}

export default Register;