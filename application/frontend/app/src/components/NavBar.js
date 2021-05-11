import React, { useState, Component } from 'react'
import { Input, Menu, Button, Modal, Container, Image, Divider} from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom';


import '../App.css'

import Register from './Register';
import Login from '../pages/Login';
import About from "../pages/About"

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';

import logo from "../images/Milestone-Logo.png";

const NavBar = () => {

  //TODO: LOGIC FOR LOGGED IN TO ONLY SHOW LOGOUT BUTTON
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  // using global state to check if user logged in
  const isLoggedIn = useSelector(state => state.auth.isLogged);
  // so we can use dispatch
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

    return (
      // import React from 'react'
// import { Dropdown, Icon } from 'semantic-ui-react'

// const trigger = (
//   <span>
//     <Icon name='user' /> Hello, Bob
//   </span>
// )

// const options = [
//   {
//     key: 'user',
//     text: (
//       <span>
//         Signed in as <strong>Bob Smith</strong>
//       </span>
//     ),
//     disabled: true,
//   },
//   { key: 'profile', text: 'Your Profile' },
//   { key: 'stars', text: 'Your Stars' },
//   { key: 'explore', text: 'Explore' },
//   { key: 'integrations', text: 'Integrations' },
//   { key: 'help', text: 'Help' },
//   { key: 'settings', text: 'Settings' },
//   { key: 'sign-out', text: 'Sign Out' },
// ]

// const DropdownTriggerExample = () => (
//   <Dropdown trigger={trigger} options={options} />
// )

// export default DropdownTriggerExample
        <Menu fixed='top' secondary style={{color: 'white', backgroundColor: 'black'}}>
          <Menu.Item as={Link} to="/"><img src={logo}/></Menu.Item>
        <Menu.Item as={Link} to="/">
          <h1 className='title'style={{color: 'white'}}>Milestone</h1>
        </Menu.Item>
        {!isLoggedIn && (
                  <Menu.Menu  position='right'>
                  <Menu.Item
                    style={{color: 'white'}}
                    name='about'
                    as={Link} 
                    to="/about"                          
                  />
                  <Menu.Item >
                    <Modal
                     basic
                      dimmer='inverted'
                      onClose={() => setOpenLogin(false)}
                      onOpen={() => setOpenLogin(true)}
                      open={openLogin}
                      trigger={<Button style={{ backgroundColor: '#FBBE74'}}>Login</Button>}
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
            <Menu.Item
                    name='about'
                  />
            <Button  onClick = {logoutHandler} style={{color: 'white', backgroundColor: '#E06F41'}}>Logout</Button>
          </Menu.Item>
        )}
      </Menu>



    )
}

export default NavBar;
