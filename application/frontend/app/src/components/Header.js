import React, { useState, Component } from 'react'
import { Input, Menu, Button, Modal} from 'semantic-ui-react'
import '../App.css'

import Register from '../pages/Register';
import Login from '../pages/Login';

const Header = () => {
  const [open, setOpen] = useState(false);

    return (
      <div>
        <Menu secondary >
        <Menu.Item >
          <h1 className='title'>Milestone</h1>
        </Menu.Item>
        <Menu.Menu  position='right'>
          <Menu.Item
            name='about'
          />
          <Menu.Item >
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button color='teal'>Login</Button>}
          size='mini'
        >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Login />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Login"
            onClick={() => setOpen(false)}
            color='teal'
          />
        </Modal.Actions>
      </Modal>
          </Menu.Item>
          <Menu.Item>
          <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button color='teal'>Register</Button>}
          size='small'
          
        >
            <Register />
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Register"
            onClick={() => setOpen(false)}
            color='teal'
          />
        </Modal.Actions>
      </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>


    )
}

export default Header;
