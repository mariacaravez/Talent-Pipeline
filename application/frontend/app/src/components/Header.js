import React, { Component } from 'react'
import { Input, Menu, Button,} from 'semantic-ui-react'
import '../App.css'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary >
        <Menu.Item >
          <h1 className='title'>Milestone</h1>
        </Menu.Item>
        <Menu.Menu  position='right'>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item >
              <Button color='yellow' >Login</Button>
          </Menu.Item>
          <Menu.Item>
            <Button color='yellow'>Register</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
