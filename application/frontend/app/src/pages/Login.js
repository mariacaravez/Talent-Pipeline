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

  // TODO: SET UP APPROPRIATE ROUTE
  const submitLogin = () =>{
    Axios.get("http://localhost:6480/login", { username: email, password: password }).then(
      (response) => {
        console.log(response.data);
        console.log(response.data.userAccID);
        if(response.data.userAccID){
          dispatch(authActions.login());
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
