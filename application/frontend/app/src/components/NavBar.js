import React, { useState, Component } from 'react'
import { Input, Menu, Button, Modal, Container} from 'semantic-ui-react'

import '../App.css'

import Register from '../pages/Register';
import Login from '../pages/Login';
import About from "../pages/About"

const NavBar = () => {

  //TODO: LOGIC FOR LOGGED IN TO ONLY SHOW LOGOUT BUTTON
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

    return (

        <Menu fixed='top' inverted>
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
                      trigger={<Button style={{color: 'white', backgroundColor: '#FBBE74'}}>Login</Button>}
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
                    trigger={<Button  style={{color: 'white', backgroundColor: '#E06F41'}}>Register</Button>}
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
            <Button  style={{color: 'white', backgroundColor: '#E06F41'}}>Logout</Button>
          </Menu.Item>
        )}
      </Menu>



    )
}

export default NavBar;
