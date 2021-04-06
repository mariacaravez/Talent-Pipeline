import React, { useState, Component } from 'react'
import { Input, Menu, Button, Modal} from 'semantic-ui-react'
import '../App.css'

import Register from '../pages/Register';
import Login from '../pages/Login';

const NavBar = () => {

  //TODO: LOGIC FOR LOGGED IN TO ONLY SHOW LOGOUT BUTTON
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

    return (
      <div>
        <Menu secondary >
        <Menu.Item >
          <h1 className='title'>Milestone</h1>
        </Menu.Item>
        
        {!isLoggedIn && (
                  <Menu.Menu  position='right'>
                  <Menu.Item
                    name='about'
                  />
                  <Menu.Item >
                    <Modal
                     basic
                      dimmer='inverted'
                      onClose={() => setOpenLogin(false)}
                      onOpen={() => setOpenLogin(true)}
                      open={openLogin}
                      trigger={<Button color='yellow'>Login</Button>}
                      className='responsive'
                      size='mini'
                    >
                    <Login />
                    <Modal.Actions className='responsive'>
                      <Button size='tiny' basic onClick={() => setOpenLogin(false)}>
                        Cancel
                      </Button>
        
                    </Modal.Actions>
                  </Modal>
                  </Menu.Item>
                  <Menu.Item>
                  <Modal
                    basic
                    dimmer='inverted'
                    onClose={() => setOpenRegister(false)}
                    onOpen={() => setOpenRegister(true)}
                    open={openRegister}
                    trigger={<Button color='orange'>Register</Button>}
                    size='tiny'
                    className='responsive'
                  >
                  <Register />
                  <Modal.Actions className='responsive'>
                    <Button size='tiny' basic onClick={() => setOpenRegister(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
                  </Menu.Item>
                </Menu.Menu>
        )}
        {isLoggedIn && (
          <Menu.Item position='right'>
            {/* TODO: FIX LOGIC FOR THIS BUTTON : onClick={setLoggedIn(false)} */}
            <Button color='orange'>Logout</Button>
          </Menu.Item>
        )}


      </Menu>
      </div>


    )
}

export default NavBar;
