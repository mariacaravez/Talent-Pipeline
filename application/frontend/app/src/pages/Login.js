import React from 'react';
import { useState } from 'react';
import { Form, Input, Segment, Grid, Label, Dropdown, Button} from 'semantic-ui-react';

import StudentDashboard from '../pages/StudentDashboard';

const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: SET UP APPROPRIATE ROUTE
  const submitLogin = () =>{
    console.log('USER IS LOGGED IN');
    setIsLoggedIn(true);
  }

  return(
    <div className='responsive' >
        <Grid padded='very'>
        <Segment padded='very' className='responsive'>
        <Label style={{color: 'white', backgroundColor: '#FBBE74'}} size='big' attached='top'>
                Login
          </Label>
          <Form>
            <Form.Input>
                <Input label={{basic: true, content: 'Email'}} type='email' labelPosition='left' placeholder='johndoe648@mail.sfsu.edu' value={email} onChange={(e) => {setEmail(e.target.value);}}/>  
              </Form.Input>
            <Form.Input >
                <Input label={{basic: true, content: 'Password'}} type='password' labelPosition='left' value={password} onChange={(e) => {setPassword(e.target.value);}}/>  
              </Form.Input>
              <Form.Field className='responsive'>
                <Button style={{color: 'white', backgroundColor: '#FBBE74'}} type='submit' value={isLoggedIn} onClick={submitLogin}>Login</Button>
              </Form.Field>

          </Form>
          </Segment>
          </Grid>
    </div>
  )
}

export default Login;