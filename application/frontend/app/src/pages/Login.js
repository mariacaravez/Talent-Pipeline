import React from 'react';
import { useState } from 'react';
import { Form, Input, Segment, Grid, Label, Button} from 'semantic-ui-react';
import Axios from 'axios';

import { authActions } from '../components/store/auth-slice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  
  if(currentUser){
    return <div>{currentUser} is logged in</div>
  }

  const user = {
    username: email,
    password: password
  }

  const submitLogin = () =>{
    // http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/login
    // http://localhost:6480/login
    Axios.post("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/login", { user }).then(
      (response) => {
        console.log(response);
        console.log(response.data.userID);
        if(response.data.userID){
          dispatch(authActions.login({userID: response.data.userID}));
        }
      }
    );
  }

  return(
    <div className='responsive' >
        <Grid padded='very'>
        <Segment padded='very' className='responsive'>
        <Label style={{color: 'white', backgroundColor: '#FBBE74'}} size='big' attached='top'>
                Login
          </Label>
          <Form onSubmit={submitLogin}>
            <Form.Input>
                <Input label={{basic: true, content: 'Email'}} type='email' labelPosition='left' placeholder='johndoe648@mail.sfsu.edu' value={email} onChange={(e) => {setEmail(e.target.value);}}/>  
              </Form.Input>
            <Form.Input >
                <Input label={{basic: true, content: 'Password'}} type='password' labelPosition='left' value={password} onChange={(e) => {setPassword(e.target.value);}}/>  
              </Form.Input>
              <Form.Field className='responsive'>
                <Button style={{color: 'white', backgroundColor: '#FBBE74'}} type='submit'>Login</Button>
              </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
};

export default Login;
