import React from 'react';
import { Form, Input, Segment, Grid,Label, Dropdown,} from 'semantic-ui-react';

const Login = () => {
  return(
    <div className='responsive' >
      <Grid padded>
          <Form>
            <Form.Field required>
              <label>Email</label>
              <Input type='email' placeholder='johndoe@mail.sfsu.edu' />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <Input type='password' placeholder='johndoe@mail.sfsu.edu' />
            </Form.Field>
          </Form>
      </Grid>

    </div>
  )
}

export default Login;